import{r as s,h as t}from"./p-cc7ce8c7.js";import{a as e}from"./p-18e45a13.js";import"./p-1c2e2695.js";const r=":host{display:block;position:relative}";const a=class{constructor(t){s(this,t);this.heading=undefined;this.successUrl=undefined;this.user=undefined;this.loading=undefined;this.error=undefined;this.enableValidation=true}renderEmpty(){return t("slot",{name:"empty"},wp.i18n.__("User not found.","surecart"))}validatePassword(s){const t=new RegExp("^(?=.*?[#?!@$%^&*-]).{6,}$");if(t.test(s))return true;return false}async handleSubmit(s){this.loading=true;this.error="";try{const{password:t}=await s.target.getFormJson();await e({path:`wp/v2/users/me`,method:"PATCH",data:{password:t,meta:{default_password_nag:false}}});if(this.successUrl){window.location.assign(this.successUrl)}else{this.loading=false}}catch(s){this.error=(s===null||s===void 0?void 0:s.message)||wp.i18n.__("Something went wrong","surecart");this.loading=false}}render(){return t("sc-dashboard-module",{class:"customer-details",error:this.error},t("span",{slot:"heading"},this.heading||wp.i18n.__("Update Password","surecart")," "),t("slot",{name:"end",slot:"end"}),t("sc-card",null,t("sc-form",{onScFormSubmit:s=>this.handleSubmit(s)},t("sc-password",{enableValidation:this.enableValidation,label:wp.i18n.__("New Password","surecart"),name:"password",confirmation:true,required:true}),t("div",null,t("sc-button",{type:"primary",full:true,submit:true},wp.i18n.__("Update Password","surecart"))))),this.loading&&t("sc-block-ui",{spinner:true}))}};a.style=r;export{a as sc_wordpress_password_edit};
//# sourceMappingURL=p-0aa53c84.entry.js.map