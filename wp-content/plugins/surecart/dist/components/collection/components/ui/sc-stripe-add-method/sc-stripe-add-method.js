import{h}from"@stencil/core";import{loadStripe}from"@stripe/stripe-js/pure";import{__}from"@wordpress/i18n";import apiFetch from"../../../functions/fetch";import{addQueryArgs}from"@wordpress/url";export class ScStripeAddMethod{constructor(){this.liveMode=!0,this.customerId=void 0,this.successUrl=void 0,this.loading=void 0,this.loaded=void 0,this.error=void 0,this.paymentIntent=void 0}componentWillLoad(){this.createPaymentIntent()}async handlePaymentIntentCreate(){var e,t,r,o,i,s,n,l,a,d,c,u,h,p,m,v,y,g;if(!(null===(r=null===(t=null===(e=this.paymentIntent)||void 0===e?void 0:e.processor_data)||void 0===t?void 0:t.stripe)||void 0===r?void 0:r.publishable_key)||!(null===(s=null===(i=null===(o=this.paymentIntent)||void 0===o?void 0:o.processor_data)||void 0===i?void 0:i.stripe)||void 0===s?void 0:s.account_id))return;if(!this.stripe)try{this.stripe=await loadStripe(null===(a=null===(l=null===(n=this.paymentIntent)||void 0===n?void 0:n.processor_data)||void 0===l?void 0:l.stripe)||void 0===a?void 0:a.publishable_key,{stripeAccount:null===(u=null===(c=null===(d=this.paymentIntent)||void 0===d?void 0:d.processor_data)||void 0===c?void 0:c.stripe)||void 0===u?void 0:u.account_id})}catch(e){return void(this.error=(null==e?void 0:e.message)||__("Stripe could not be loaded","surecart"))}if(!(null===(m=null===(p=null===(h=this.paymentIntent)||void 0===h?void 0:h.processor_data)||void 0===p?void 0:p.stripe)||void 0===m?void 0:m.client_secret)||!this.container)return void console.warn("do not have client secret or container");const _=getComputedStyle(document.body);this.elements=this.stripe.elements({clientSecret:null===(g=null===(y=null===(v=this.paymentIntent)||void 0===v?void 0:v.processor_data)||void 0===y?void 0:y.stripe)||void 0===g?void 0:g.client_secret,appearance:{variables:{colorPrimary:_.getPropertyValue("--sc-color-primary-500"),colorText:_.getPropertyValue("--sc-input-label-color"),borderRadius:_.getPropertyValue("--sc-input-border-radius-medium"),colorBackground:_.getPropertyValue("--sc-input-background-color"),fontSizeBase:_.getPropertyValue("--sc-input-font-size-medium")},rules:{".Input":{border:_.getPropertyValue("--sc-input-border")},".Input::placeholder":{color:_.getPropertyValue("--sc-input-placeholder-color")}}}}),this.elements.create("payment",{wallets:{applePay:"never",googlePay:"never"}}).mount(".sc-payment-element-container"),this.element=this.elements.getElement("payment"),this.element.on("ready",(()=>this.loaded=!0))}async createPaymentIntent(){try{this.loading=!0,this.error="",this.paymentIntent=await apiFetch({method:"POST",path:"surecart/v1/payment_intents",data:{processor_type:"stripe",live_mode:this.liveMode,customer_id:this.customerId,refresh_status:!0}})}catch(e){this.error=(null==e?void 0:e.message)||__("Something went wrong","surecart")}finally{this.loading=!1}}async handleSubmit(e){var t;e.preventDefault(),this.loading=!0;try{const e=await this.stripe.confirmSetup({elements:this.elements,confirmParams:{return_url:addQueryArgs(this.successUrl,{payment_intent:null===(t=this.paymentIntent)||void 0===t?void 0:t.id})},redirect:"always"});if(null==e?void 0:e.error)throw this.error=e.error.message,e.error}catch(e){console.error(e),this.error=(null==e?void 0:e.message)||__("Something went wrong","surecart"),this.loading=!1}}render(){return h("sc-form",{onScFormSubmit:e=>this.handleSubmit(e)},this.error&&h("sc-alert",{open:!!this.error,type:"danger"},h("span",{slot:"title"},__("Error","surecart")),this.error),h("div",{class:"loader",hidden:this.loaded},h("div",{class:"loader__row"},h("div",{style:{width:"50%"}},h("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),h("sc-skeleton",null)),h("div",{style:{flex:"1"}},h("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),h("sc-skeleton",null)),h("div",{style:{flex:"1"}},h("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),h("sc-skeleton",null))),h("div",{class:"loader__details"},h("sc-skeleton",{style:{height:"1rem"}}),h("sc-skeleton",{style:{height:"1rem",width:"30%"}}))),h("div",{hidden:!this.loaded,class:"sc-payment-element-container",ref:e=>this.container=e}),h("sc-button",{type:"primary",submit:!0,full:!0,loading:this.loading},__("Save Payment Method","surecart")))}static get is(){return"sc-stripe-add-method"}static get originalStyleUrls(){return{$:["sc-stripe-add-method.scss"]}}static get styleUrls(){return{$:["sc-stripe-add-method.css"]}}static get properties(){return{liveMode:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"live-mode",reflect:!1,defaultValue:"true"},customerId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"customer-id",reflect:!1},successUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"success-url",reflect:!1}}}static get states(){return{loading:{},loaded:{},error:{},paymentIntent:{}}}static get watchers(){return[{propName:"paymentIntent",methodName:"handlePaymentIntentCreate"}]}}