import {calculate,MODEL_VERSION} from './model.js';

// Snapshot every displayed value before asynchronous PDF loading starts.
// Only customer-facing draft data is accepted; private effort/notes never enter the report.
export function estimateReport({draft,title,language='en',briefText,t,money,createdAt=new Date()}) {
  const r=calculate(draft),range=x=>(x.low===x.high?money(x.low):money(x.low)+'–'+money(x.high))+(x.missing?.length?' + '+t('unpriced items'):''),item=x=>x.low===null||x.high===null?t('Needs a price'):range(x);
  const missing=[...new Set([...r.firstYear.missing,...r.annual.missing])];
  const sectionNames=['WHAT THE SCOPE MEANS','DELIVERY','BEFORE A PROPOSAL'].map(x=>t(x));
  const sections=[];
  for(const line of briefText.split('\n')){
    if(sectionNames.includes(line))sections.push({heading:line,paragraphs:[]});
    else if(sections.length&&line.trim())sections.at(-1).paragraphs.push(line);
  }
  return {
    title,language,model:MODEL_VERSION,createdAt:createdAt.toISOString(),
    dateLabel:new Intl.DateTimeFormat({en:'en-GB',nb:'nb-NO',es:'es-ES'}[language]||'en-GB',{dateStyle:'medium'}).format(createdAt),
    heading:t('Website estimate'),scope:r.scope.name+' · '+t(r.scope.limit),
    status:t(r.assessment?'Assessment budget · not a fixed quote':'Working estimate · not a quote'),
    totalLabel:t('One-off Systead work'),total:range(r.service),
    currencyNote:t('Non-binding. EUR before applicable tax; tax is not calculated.'),
    work:r.work.map(x=>[t(x.name),item(x)]),costHeading:t('First year and renewals'),
    totals:[[t('First year with modelled suppliers'),range(r.firstYear)],[t('Annual supplier renewal'),range(r.annual)]],
    unknownNote:missing.length?t('Still unpriced: {items}. These amounts are excluded from the subtotals.',{items:missing.map(x=>t(x)).join(', ')}):t('All modelled costs have amounts. Confirm them in the proposal.'),
    basis:t('Planning basis: {tier} working hypothesis · {version}',{tier:t(r.draft.tier),version:MODEL_VERSION}),
    supplierHeading:t('Provider cost details'),suppliers:[...r.external,...r.renewal].map(x=>[t(x.name),item(x)]),
    supplierNote:t('Unknown amounts are excluded from subtotals, not treated as free.'),sections
  };
}
