import{r as e,h as i,F as r,H as s}from"./p-cc7ce8c7.js";import{i as c}from"./p-23d4aa39.js";import{j as o,s as t,b as n}from"./p-e8f915c0.js";import"./p-7ef0f71c.js";import"./p-25433d0f.js";import"./p-d0c964cc.js";import"./p-67d61723.js";import"./p-f70181c4.js";import"./p-c06b2e12.js";import"./p-09484d0e.js";const d=":host{display:block;text-align:left;position:relative;z-index:1}";const p=class{constructor(i){e(this,i);this.label=undefined;this.showPrice=undefined;this.productId=undefined}renderPrice(e){return i(r,null,i("sc-format-number",{type:"currency",value:e.amount,currency:e.currency}),i("span",{slot:"per"},c(e,{labels:{interval:wp.i18n.__("Every","surecart"),period:wp.i18n.__("for","surecart"),once:wp.i18n.__("Once","surecart")},showOnce:true})))}render(){const e=o(this.productId);if((e===null||e===void 0?void 0:e.length)<2)return i(s,{style:{display:"none"}});return i("sc-choices",{label:this.label,required:true,style:{"--sc-input-required-indicator":" "}},(e||[]).map((e=>{var r,s,c,o;return i("sc-price-choice-container",{label:(e===null||e===void 0?void 0:e.name)||((s=(r=t[this.productId])===null||r===void 0?void 0:r.product)===null||s===void 0?void 0:s.name),showPrice:!!this.showPrice,price:e,checked:((o=(c=t[this.productId])===null||c===void 0?void 0:c.selectedPrice)===null||o===void 0?void 0:o.id)===(e===null||e===void 0?void 0:e.id),onScChange:i=>{if(i.target.checked){n(this.productId,{selectedPrice:e})}}})})))}};p.style=d;export{p as sc_product_price_choices};
//# sourceMappingURL=p-14c768d2.entry.js.map