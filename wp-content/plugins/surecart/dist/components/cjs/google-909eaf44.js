"use strict";const currency=require("./currency-ba038e2f.js"),google=require("./google-4d37e025.js");window.addEventListener("scSearched",(function(i){var n;if(!(null===window||void 0===window?void 0:window.fbq))return;const o=i.detail;window.fbq("track","Search",{search_string:o.searchString,content_ids:o.searchResultIds,...(null===(n=null==o?void 0:o.searchCollections)||void 0===n?void 0:n.length)?{content_category:o.searchCollections.join(",")}:{}})})),window.addEventListener("scProductViewed",(function(i){var n,o,e,l,d,t;if(!(null===window||void 0===window?void 0:window.fbq))return;const c=i.detail;window.fbq("track","ViewContent",{content_ids:[c.id],content_category:null===(o=null===(n=null==c?void 0:c.product_collections)||void 0===n?void 0:n.data)||void 0===o?void 0:o.map((i=>i.name)).join(", "),content_name:(null==c?void 0:c.name)+((null===(e=null==c?void 0:c.variant_options)||void 0===e?void 0:e.length)?` - ${null==c?void 0:c.variant_options.join(" / ")}`:""),content_type:"product",contents:[{id:c.id,quantity:1}],currency:null===(l=null==c?void 0:c.price)||void 0===l?void 0:l.currency,value:currency.maybeConvertAmount((null===(d=c.price)||void 0===d?void 0:d.amount)||0,(null===(t=c.price)||void 0===t?void 0:t.currency)||"USD")})})),window.addEventListener("scSearched",(i=>{var n;google.trackEvent("search",{search_term:null===(n=i.detail)||void 0===n?void 0:n.searchString})})),window.addEventListener("scProductViewed",(i=>{var n,o,e,l,d,t,c,r,v,u,a,s;const m=i.detail;google.trackEvent("view_item",{value:currency.maybeConvertAmount((null===(n=m.price)||void 0===n?void 0:n.amount)||0,(null===(o=m.price)||void 0===o?void 0:o.currency)||"USD"),currency:null===(e=m.price)||void 0===e?void 0:e.currency,items:[{item_id:null==m?void 0:m.id,item_name:null==m?void 0:m.name,currency:null===(l=null==m?void 0:m.price)||void 0===l?void 0:l.currency,discount:(null==m?void 0:m.discount_amount)?currency.maybeConvertAmount(null==m?void 0:m.discount_amount,null===(d=null==m?void 0:m.price)||void 0===d?void 0:d.currency):0,price:currency.maybeConvertAmount(null===(t=null==m?void 0:m.price)||void 0===t?void 0:t.amount,null===(c=null==m?void 0:m.price)||void 0===c?void 0:c.currency),quantity:(null==m?void 0:m.quantity)||1,...(null===(r=null==m?void 0:m.variant_options)||void 0===r?void 0:r.length)?{item_variant:null==m?void 0:m.variant_options.map((i=>i.name)).join(" / ")}:{},...(null===(u=null===(v=null==m?void 0:m.product_collections)||void 0===v?void 0:v.data)||void 0===u?void 0:u.length)?{item_category:null===(s=null===(a=null==m?void 0:m.product_collections)||void 0===a?void 0:a.data)||void 0===s?void 0:s.map((i=>i.name)).join(", ")}:{}}]})})),window.addEventListener("scProductsViewed",(i=>{var n;const o=i.detail;google.trackEvent("view_item_list",{...(null==o?void 0:o.collectionId)?{item_list_id:o.collectionId}:{},item_list_name:o.pageTitle,items:null===(n=null==o?void 0:o.products)||void 0===n?void 0:n.map((i=>{var n,e,l,d;return{item_id:null==i?void 0:i.id,item_name:null==i?void 0:i.name,...(null===(e=null===(n=null==i?void 0:i.product_collections)||void 0===n?void 0:n.data)||void 0===e?void 0:e.length)?{item_category:null===(d=null===(l=null==i?void 0:i.product_collections)||void 0===l?void 0:l.data)||void 0===d?void 0:d.map((i=>i.name)).join(", ")}:{},...(null==o?void 0:o.collectionId)?{item_list_id:o.collectionId}:{},item_list_name:o.pageTitle}}))})}));