(() => {
  'use strict';
  const supported=['en','nb','es'],locales={en:'en-IE',nb:'nb-NO',es:'es-ES'},labels={en:'English',nb:'Norsk',es:'Español'},codes={en:'EN',nb:'NO',es:'ES'};
  const entries=window.SYSTEAD_TRANSLATIONS||{},textCache=new WeakMap(),attributeCache=new WeakMap();
  let language='en';
  const normalize=s=>s.replace(/\s+/g,' ').trim();
  try { const wanted=new URLSearchParams(location.search).get('lang')||localStorage.getItem('systead.language');if(supported.includes(wanted))language=wanted;else if(wanted==='no')language='nb'; } catch {}
  function t(source,values={}) { const key=normalize(String(source));const translated=language==='en'?String(source):entries[key]?.[language]??String(source);return translated.replace(/\{(\w+)\}/g,(m,k)=>Object.hasOwn(values,k)?String(values[k]):m); }
  function money(value){return new Intl.NumberFormat(locales[language],{style:'currency',currency:'EUR',minimumFractionDigits:0,maximumFractionDigits:2}).format(value);}
  function translateNode(node){
    if(!node.nodeValue.trim())return;
    let entry=textCache.get(node);if(!entry||node.nodeValue!==entry.rendered)entry={original:node.nodeValue};
    const original=entry.original,key=normalize(original),translated=Object.hasOwn(entries,key)?t(key):original.trim();
    entry.rendered=original.slice(0,original.length-original.trimStart().length)+translated+original.slice(original.trimEnd().length);
    if(node.nodeValue!==entry.rendered)node.nodeValue=entry.rendered;textCache.set(node,entry);
  }
  function apply(root=document.body){
    if(!root)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement?.closest('script,style,code,pre,textarea,noscript,[translate="no"],.language-picker')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(translateNode);
    for(const element of root.querySelectorAll('[alt],[aria-label],[title],[placeholder]')){
      if(element.closest('.language-picker,[translate="no"]'))continue;
      let saved=attributeCache.get(element)||{};
      for(const name of ['alt','aria-label','title','placeholder'])if(element.hasAttribute(name)){
        const current=element.getAttribute(name);if(!saved[name]||current!==saved[name].rendered)saved[name]={original:current};
        const value=t(saved[name].original);element.setAttribute(name,value);saved[name].rendered=value;
      }attributeCache.set(element,saved);
    }
  }
  const title=document.title,description=document.querySelector('meta[name=description]'),originalDescription=description?.content;
  function updateLinks(){for(const a of document.querySelectorAll('a[href]')){const href=a.getAttribute('href');if(!href||href.startsWith('#'))continue;try{const u=new URL(href,location.href);if(u.origin!==location.origin||!u.pathname.endsWith('.html'))continue;u.searchParams.set('lang',language);a.setAttribute('href',u.pathname+u.search+u.hash);}catch{}}}
  function updatePicker(){for(const picker of document.querySelectorAll('.language-picker')){const toggle=picker.querySelector('.language-toggle');toggle.setAttribute('aria-label',t('Choose language')+': '+labels[language]);toggle.querySelector('img').src='assets/i18n/'+language+'.svg';toggle.querySelector('.language-code').textContent=codes[language];for(const button of picker.querySelectorAll('[data-language]')){button.setAttribute('aria-pressed',String(button.dataset.language===language));}}}
  function setLanguage(next,{remember=true}={}){
    if(!supported.includes(next))return;language=next;document.documentElement.lang=next;
    if(remember)try{localStorage.setItem('systead.language',next);}catch{}
    document.title=t(title);if(description)description.content=t(originalDescription);
    for(const meta of document.querySelectorAll('meta[property="og:title"],meta[property="og:description"]')){if(!meta.dataset.original)meta.dataset.original=meta.content;meta.content=t(meta.dataset.original);}
    updatePicker();document.dispatchEvent(new CustomEvent('systead:languagechange',{detail:{language}}));apply();updateLinks();
    const active=new URL(location.href);active.searchParams.set('lang',next);try{history.replaceState(null,'',active);}catch{}
  }
  function closePicker(picker,focus=false){picker.querySelector('.language-options').hidden=true;const toggle=picker.querySelector('.language-toggle');toggle.setAttribute('aria-expanded','false');if(focus)toggle.focus();}
  window.SysteadLocale={t,money,apply,setLanguage,get language(){return language;},get locale(){return locales[language];}};
  for(const picker of document.querySelectorAll('.language-picker')){
    const toggle=picker.querySelector('.language-toggle'),options=picker.querySelector('.language-options');
    toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';options.hidden=!open;toggle.setAttribute('aria-expanded',String(open));});
    picker.addEventListener('keydown',e=>{if(e.key==='Escape'){closePicker(picker,true);e.stopPropagation();}if(e.key==='ArrowDown'&&e.target===toggle){e.preventDefault();options.hidden=false;toggle.setAttribute('aria-expanded','true');options.querySelector('button').focus();}});
    picker.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>{setLanguage(b.dataset.language);closePicker(picker,true);}));
    document.addEventListener('click',e=>{if(!picker.contains(e.target))closePicker(picker);});
    picker.addEventListener('focusout',()=>setTimeout(()=>{if(!picker.contains(document.activeElement))closePicker(picker);},0));
  }
  setLanguage(language,{remember:false});
})();
