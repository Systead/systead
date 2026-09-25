import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {freshDraft} from '../assets/service/model.js';
import {estimateReport} from '../assets/service/estimate-report.js';
const ctx={window:{}};
vm.runInNewContext(await fs.readFile(new URL('../assets/i18n/messages.js',import.meta.url),'utf8'),ctx);
function reportFor(language,draft){
 const t=(key,values={})=>(ctx.window.SYSTEAD_TRANSLATIONS[key]?.[language]||key).replace(/\{(\w+)\}/g,(m,k)=>values[k]??m);
 const money=n=>new Intl.NumberFormat({en:'en-IE',nb:'nb-NO',es:'es-ES'}[language],{style:'currency',currency:'EUR',maximumFractionDigits:2}).format(n);
 return estimateReport({draft,title:'Ærlig blåbær · Diseño Muñoz',language,t,money,briefText:[t('WHAT THE SCOPE MEANS'),'Scope text',t('DELIVERY'),'Delivery text',t('BEFORE A PROPOSAL'),'Proposal text'].join('\n'),notes:'PRIVATE NOTE',effort:{hours:77},createdAt:new Date('2026-09-25T10:00:00Z')});
}
test('PDF report preserves unknown costs, all sections and excludes private notes',()=>{
 const r=reportFor('en',{...freshDraft(),domain:'new'});
 assert.match(r.total,/unpriced items/);assert.match(r.unknownNote,/domain/);
 assert.equal(r.sections.length,3);assert.equal(r.suppliers.length,4);
 assert.equal(JSON.stringify(r).includes('PRIVATE NOTE'),false);
});
test('PDF data is a translated snapshot and preserves explicit zero supplier costs',()=>{
 for(const language of ['en','nb','es']){
  const d={...freshDraft(),scope:'complete',language:true,costs:{domainFirst:0,domainRenew:0,hostingFirst:0,hostingRenew:0}};
  const r=reportFor(language,d);d.costs.hostingFirst=999;
  assert.equal(r.language,language);assert.match(r.total,/€/);assert.ok(r.suppliers.every(x=>x[1].includes('0')));
  assert.equal(r.title,'Ærlig blåbær · Diseño Muñoz');assert.equal(r.model,'web-house-1');
 }
});
test('bundled PDF engine embeds Norwegian and Spanish characters and creates readable pages',async()=>{
 globalThis.self=globalThis;
 const {createEstimatePdf}=await import('../assets/service/estimate-pdf.js');
 const {PDFDocument}=await import('../assets/service/vendor/pdf-lib-1.17.1.js');
 const font=await fs.readFile(new URL('../assets/service/vendor/DejaVuSans.ttf',import.meta.url));
 for(const language of ['en','nb','es']){
  const bytes=await createEstimatePdf(reportFor(language,freshDraft()),font);
  const pdf=await PDFDocument.load(bytes);
  assert.equal(pdf.getTitle(),'Systead - Ærlig blåbær · Diseño Muñoz');
  assert.ok(pdf.getPageCount()>=2&&pdf.getPageCount()<=3);
 }
});
