param(
    [ValidateRange(0,65535)][int]$Port = 0,
    [switch]$NoBrowser,
    [string]$ReadyFile = ''
)
$ErrorActionPreference = 'Stop'
$WebsiteRoot = [IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$RootPrefix = $WebsiteRoot.TrimEnd('\') + '\'
$Mime = @{
    '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8';
    '.js'='text/javascript; charset=utf-8'; '.mjs'='text/javascript; charset=utf-8';
    '.json'='application/json; charset=utf-8'; '.md'='text/plain; charset=utf-8';
    '.txt'='text/plain; charset=utf-8'; '.svg'='image/svg+xml'; '.png'='image/png';
    '.webp'='image/webp'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.gif'='image/gif';
    '.ico'='image/x-icon'; '.woff'='font/woff'; '.woff2'='font/woff2'; '.pdf'='application/pdf'
}
function Send-Response($Stream,[int]$Status,[string]$Type,[byte[]]$Bytes,[bool]$HeadOnly=$false) {
    $Reason = switch($Status) {200 {'OK'} 400 {'Bad Request'} 404 {'Not Found'} 405 {'Method Not Allowed'} default {'Error'}}
    $Header = "HTTP/1.1 $Status $Reason`r`nContent-Type: $Type`r`nContent-Length: $($Bytes.Length)`r`nCache-Control: no-store`r`nX-Content-Type-Options: nosniff`r`nConnection: close`r`n`r`n"
    $HeaderBytes = [Text.Encoding]::ASCII.GetBytes($Header)
    $Stream.Write($HeaderBytes,0,$HeaderBytes.Length)
    if(!$HeadOnly -and $Bytes.Length) { $Stream.Write($Bytes,0,$Bytes.Length) }
}
function Send-Text($Stream,[int]$Status,[string]$Message,[bool]$HeadOnly=$false) {
    Send-Response $Stream $Status 'text/plain; charset=utf-8' ([Text.Encoding]::UTF8.GetBytes($Message)) $HeadOnly
}
$Listener = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback,$Port)
try {
    $Listener.Start()
    $ActualPort = ([Net.IPEndPoint]$Listener.LocalEndpoint).Port
    $Url = "http://127.0.0.1:$ActualPort/"
    Write-Host ''
    Write-Host 'SYSTEAD - LOCAL WEBSITE PREVIEW' -ForegroundColor Green
    Write-Host "Folder: $WebsiteRoot"
    Write-Host "Home: $Url"
    Write-Host "Calculator: $($Url)estimate.html"
    Write-Host 'Edit a source file and refresh the browser. Close this window before ejecting the SD card.'
    Write-Host 'This preview is local to this computer. It does not upload or publish anything.'
    if($ReadyFile) { [IO.File]::WriteAllText($ReadyFile,(@{url=$Url;root=$WebsiteRoot;pid=$PID}|ConvertTo-Json)) }
    if(!$NoBrowser) { Start-Process $Url }
    while($true) {
        $Client = $Listener.AcceptTcpClient()
        $Client.ReceiveTimeout=5000; $Client.SendTimeout=5000
        $Stream=$Client.GetStream(); $Reader=$null
        try {
            $Reader=[IO.StreamReader]::new($Stream,[Text.Encoding]::ASCII,$false,1024,$true)
            $Line=$Reader.ReadLine()
            if(!$Line) { continue }
            if($Line.Length -gt 8192 -or $Line -notmatch '^(GET|HEAD) (\S+) HTTP/1\.[01]$') {
                Send-Text $Stream 405 'Only GET and HEAD are supported.'; continue
            }
            $HeadOnly=$Matches[1] -eq 'HEAD'; $Target=$Matches[2]
            $HeaderCount=0
            while($null -ne ($Line=$Reader.ReadLine()) -and $Line -ne '') {
                $HeaderCount++
                if($HeaderCount -gt 100 -or $Line.Length -gt 8192) { throw 'Request headers too large.' }
            }
            $Name=[Uri]::UnescapeDataString(($Target -split '\?',2)[0]).TrimStart('/')
            if(!$Name) { $Name='index.html' }
            $Segments=$Name -split '/'
            if($Name -match '[\x00-\x1f\\:]' -or @($Segments|Where-Object { $_.StartsWith('.') -or $_ -eq '' }).Count) {
                Send-Text $Stream 404 'Not found.' $HeadOnly; continue
            }
            # Match the website's existing public build surface. Never serve scripts, work, Git or sibling folders.
            $Extension=[IO.Path]::GetExtension($Name).ToLowerInvariant()
            $Allowed=($Segments.Count -eq 1 -and $Extension -in @('.html','.md','.txt')) -or ($Segments[0] -in @('assets','Application','docs','profile'))
            if(!$Allowed) { Send-Text $Stream 404 'Not found.' $HeadOnly; continue }
            $File=[IO.Path]::GetFullPath((Join-Path $WebsiteRoot $Name))
            if(!$File.StartsWith($RootPrefix,[StringComparison]::OrdinalIgnoreCase) -or !(Test-Path -LiteralPath $File -PathType Leaf)) {
                Send-Text $Stream 404 'Not found.' $HeadOnly; continue
            }
            $Cursor=Get-Item -LiteralPath $File
            $Linked=$false
            while($Cursor -and $Cursor.FullName -ne $WebsiteRoot) {
                if(($Cursor.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0) { $Linked=$true; break }
                $Cursor=if($Cursor.PSIsContainer) { $Cursor.Parent } else { $Cursor.Directory }
            }
            if($Linked) { Send-Text $Stream 404 'Not found.' $HeadOnly; continue }
            $Type=if($Mime.ContainsKey($Extension)) { $Mime[$Extension] } else { 'application/octet-stream' }
            Send-Response $Stream 200 $Type ([IO.File]::ReadAllBytes($File)) $HeadOnly
        } catch {
            try { Send-Text $Stream 400 'Unable to serve this request.' } catch {}
        } finally {
            if($Reader) { $Reader.Dispose() }
            $Stream.Dispose(); $Client.Dispose()
        }
    }
} finally {
    $Listener.Stop()
    if($ReadyFile -and (Test-Path -LiteralPath $ReadyFile)) { Remove-Item -LiteralPath $ReadyFile }
}
