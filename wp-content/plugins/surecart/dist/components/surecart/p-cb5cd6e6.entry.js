import{r as o,h as r,H as i}from"./p-cc7ce8c7.js";import{s as n}from"./p-d93fa5d8.js";import{c as l}from"./p-ba41a302.js";import"./p-25433d0f.js";import"./p-188a42bd.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-09484d0e.js";import"./p-67d61723.js";import"./p-7ef0f71c.js";import"./p-23d4aa39.js";const s=(o,r)=>(o||[]).some((({rules:o})=>t(o,r)));const t=(o,{checkout:r,processor:i})=>o.map((o=>{var n,l;const s=Array.isArray(o===null||o===void 0?void 0:o.value)?(o===null||o===void 0?void 0:o.value).map((o=>(o===null||o===void 0?void 0:o.value)||o)):o===null||o===void 0?void 0:o.value;switch(o===null||o===void 0?void 0:o.condition){case"total":return v(parseFloat(r.total_amount),parseFloat(s),o===null||o===void 0?void 0:o.operator);case"products":return u(e(r),s,o===null||o===void 0?void 0:o.operator);case"coupons":return u(d(r),s,o===null||o===void 0?void 0:o.operator);case"shipping_country":return u([(n=r===null||r===void 0?void 0:r.shipping_address)===null||n===void 0?void 0:n.country],s,o===null||o===void 0?void 0:o.operator);case"billing_country":return u([(l=r===null||r===void 0?void 0:r.billing_address)===null||l===void 0?void 0:l.country],s,o===null||o===void 0?void 0:o.operator);case"processors":return u([i],s,o===null||o===void 0?void 0:o.operator);default:return false}})).every((o=>o));const e=o=>{var r;return(((r=o===null||o===void 0?void 0:o.line_items)===null||r===void 0?void 0:r.data)||[]).map((({price:o})=>{var r;return(r=o===null||o===void 0?void 0:o.product)===null||r===void 0?void 0:r.id}))};const d=o=>{var r,i,n,l;return((i=(r=o===null||o===void 0?void 0:o.discount)===null||r===void 0?void 0:r.coupon)===null||i===void 0?void 0:i.id)?[(l=(n=o===null||o===void 0?void 0:o.discount)===null||n===void 0?void 0:n.coupon)===null||l===void 0?void 0:l.id]:[]};const u=(o,r,i)=>{switch(i){case"all":return r.filter((r=>o.some((o=>r==o)))).length===r.length;case"any":return o.filter((o=>r.some((r=>o==r)))).length>=1;case"none":return o.filter((o=>r.some((r=>o==r)))).length===0;case"exist":return o.length>=1;case"not_exist":return o.length===0;default:return false}};const v=(o,r,i)=>{switch(i){case"==":return o===r;case"!=":return o!==r;case">":return o>r;case"<":return o<r;case"<=":return o<=r;case">=":return o>=r}return false};const c=":host{display:block}";const a=class{constructor(r){o(this,r);this.rule_groups=undefined}render(){let o=s(this.rule_groups,{checkout:l(),processor:n===null||n===void 0?void 0:n.id});if(!o)return null;return r(i,null,r("slot",null))}};a.style=c;export{a as sc_conditional_form};
//# sourceMappingURL=p-cb5cd6e6.entry.js.map