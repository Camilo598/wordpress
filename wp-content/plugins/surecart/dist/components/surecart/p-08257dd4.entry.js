import{r as i,h as o,a as s,H as t}from"./p-cc7ce8c7.js";import{s as r}from"./p-16275706.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-ba41a302.js";import"./p-188a42bd.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-09484d0e.js";import"./p-67d61723.js";import"./p-7ef0f71c.js";import"./p-23d4aa39.js";import"./p-c06b2e12.js";import"./p-98057158.js";import"./p-f47b68d0.js";import"./p-c27fae79.js";import"./p-05fc1ee0.js";import"./p-996fde25.js";import"./p-18e45a13.js";const e=":host{display:block}.sc-product-donation-choices{display:grid;gap:2em;position:relative;--columns:4}.sc-product-donation-choices__form{display:grid;gap:var(--sc-spacing-small)}.sc-donation-recurring-choices{display:grid;gap:var(--sc-spacing-small);position:relative;--columns:2}";const n=class{constructor(o){i(this,o);this.productId=undefined;this.label=undefined;this.recurring=undefined}state(){return r[this.productId]}updateState(i){r[this.productId]={...r[this.productId],...i}}render(){var i,s,r,e;const n=(((r=(s=(i=this.state())===null||i===void 0?void 0:i.product)===null||s===void 0?void 0:s.prices)===null||r===void 0?void 0:r.data)||[]).filter((i=>this.recurring?(i===null||i===void 0?void 0:i.recurring_interval)&&(i===null||i===void 0?void 0:i.ad_hoc):!(i===null||i===void 0?void 0:i.recurring_interval)&&(i===null||i===void 0?void 0:i.ad_hoc))).filter((i=>!(i===null||i===void 0?void 0:i.archived)));if(!(n===null||n===void 0?void 0:n.length)){return o(t,{style:{display:"none"}})}return o("sc-recurring-price-choice-container",{prices:n.sort(((i,o)=>(i===null||i===void 0?void 0:i.position)-(o===null||o===void 0?void 0:o.position))),product:(e=this.state())===null||e===void 0?void 0:e.product,selectedPrice:this.state().selectedPrice,showDetails:false,showAmount:false,onScChange:i=>{var o,s;const t=(((s=(o=this.state().product)===null||o===void 0?void 0:o.prices)===null||s===void 0?void 0:s.data)||[]).find((({id:o})=>o==i.detail));this.updateState({selectedPrice:t})},"aria-label":this.recurring?wp.i18n.__("If you want to make your donation recurring then Press Tab once & select the recurring interval from the dropdown. ","surecart"):wp.i18n.__("If you want to make your donation once then Press Enter. ","surecart"),style:{"--sc-recurring-price-choice-white-space":"wrap","--sc-recurring-price-choice-text-align":"left"}},o("slot",null,this.label))}get el(){return s(this)}};n.style=e;export{n as sc_product_donation_choices};
//# sourceMappingURL=p-08257dd4.entry.js.map