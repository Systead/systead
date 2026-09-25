// Loaded only when exporting. All dependencies and font data are served locally.
import {PDFDocument, rgb} from './vendor/pdf-lib-1.17.1.js';
import './vendor/fontkit-1.1.1.js';
const fontkit=globalThis.fontkit;

export async function createEstimatePdf(report, fontBytes) {
  if (!fontBytes) {
    const response = await fetch(new URL('./vendor/DejaVuSans.ttf', import.meta.url));
    if (!response.ok) throw new Error('PDF font unavailable');
    fontBytes = new Uint8Array(await response.arrayBuffer());
  }
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const font = await doc.embedFont(fontBytes, {subset:true});
  const supported = new Set(font.getCharacterSet());
  const clean = value => {
    const text = String(value).normalize('NFC').replace(/[\u2010-\u2015\u2212]/g,'-').replace(/\s+/g,' ').trim();
    if ([...text].some(c=>!supported.has(c.codePointAt(0)))) throw new Error('PDF_UNSUPPORTED_CHARACTER');
    return text;
  };
  doc.setTitle('Systead - '+report.title);
  doc.setAuthor('Systead');
  doc.setSubject(report.status);
  doc.setLanguage(report.language);
  doc.setCreationDate(new Date(report.createdAt));
  const ink=rgb(.09,.15,.11),muted=rgb(.32,.38,.34),line=rgb(.78,.81,.75),pale=rgb(.94,.95,.91);
  const width=595.28,height=841.89,left=48,right=width-48,body=right-left;
  let page,y;
  function addPage() {
    page=doc.addPage([width,height]); y=height-90;
    page.drawRectangle({x:0,y:height-53,width,height:53,color:ink});
    page.drawText('S Y S T E A D',{x:left,y:height-33,size:13,font,color:rgb(1,1,1)});
    const date=clean(report.dateLabel);
    page.drawText(date,{x:right-font.widthOfTextAtSize(date,9),y:height-32,size:9,font,color:rgb(.84,.89,.8)});
  }
  function ensure(space){if(y-space<55)addPage();}
  function wrap(text,size,maxWidth=body){
    const words=clean(text).split(' '),lines=[];let current='';
    for(const word of words){
      if(font.widthOfTextAtSize(current?current+' '+word:word,size)<=maxWidth){current=current?current+' '+word:word;continue;}
      if(current)lines.push(current);current='';
      for(const c of word){if(current&&font.widthOfTextAtSize(current+c,size)>maxWidth){lines.push(current);current='';}current+=c;}
    }
    if(current)lines.push(current);return lines;
  }
  function paragraph(text,{size=10.2,color=ink,gap=9}={}){
    const lines=wrap(text,size),leading=size*1.47;
    // Keep ordinary paragraphs together; exceptionally long text may flow to another page.
    if(lines.length*leading<height-160)ensure(lines.length*leading+gap);
    for(const text of lines){ensure(leading);page.drawText(text,{x:left,y,size,font,color});y-=leading;}
    y-=gap;
  }
  function heading(text){ensure(70);y-=9;paragraph(text,{size:15,gap:13});}
  function rows(items){
    for(const [label,value] of items){
      const l=wrap(label,9.7,body*.53),v=wrap(value,10.4,body*.42),h=Math.max(l.length,v.length)*15+17;
      ensure(h);page.drawLine({start:{x:left,y:y+9},end:{x:right,y:y+9},thickness:.5,color:line});
      l.forEach((text,i)=>page.drawText(text,{x:left,y:y-i*15,size:9.7,font,color:muted}));
      v.forEach((text,i)=>page.drawText(text,{x:right-font.widthOfTextAtSize(text,10.4),y:y-i*15,size:10.4,font,color:ink}));
      y-=h;
    }
  }
  addPage();
  paragraph(report.heading,{size:25,gap:12});
  paragraph(report.title,{size:15,gap:10});
  paragraph(report.scope,{color:muted});
  paragraph(report.status,{color:muted,size:10});
  const totalLines=wrap(report.total,25,body-28),boxHeight=59+totalLines.length*34;
  ensure(boxHeight+40);
  page.drawRectangle({x:left-14,y:y-boxHeight+20,width:body+28,height:boxHeight,color:pale});
  paragraph(report.totalLabel,{size:10,gap:11});
  paragraph(report.total,{size:25,gap:15});
  paragraph(report.currencyNote,{size:9,color:muted,gap:13});
  rows(report.work);
  heading(report.costHeading);
  rows(report.totals);
  paragraph(report.unknownNote,{size:9.4,color:muted});
  paragraph(report.basis,{size:9.4,color:muted});
  // Keep supplier details on the first page when the shorter estimate has room.
  // Otherwise start a fresh page before the table, rather than splitting its heading.
  if(y < 85 + report.suppliers.length*32 + 60)addPage();
  heading(report.supplierHeading);
  rows(report.suppliers);
  paragraph(report.supplierNote,{size:9.4,color:muted});
  if(doc.getPageCount()===1)addPage();
  for(const section of report.sections){
    heading(section.heading);
    for(const text of section.paragraphs)paragraph(text);
  }
  doc.getPages().forEach((p,i)=>{
    p.drawLine({start:{x:left,y:39},end:{x:right,y:39},thickness:.5,color:line});
    p.drawText('systead.com · '+report.model,{x:left,y:25,size:8,font,color:muted});
    const number=`${i+1} / ${doc.getPageCount()}`;
    p.drawText(number,{x:right-font.widthOfTextAtSize(number,8),y:25,size:8,font,color:muted});
  });
  return doc.save();
}
