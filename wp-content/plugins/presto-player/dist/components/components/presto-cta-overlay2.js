import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$3}from"./presto-cta-overlay-controller2.js";import{d as defineCustomElement$2}from"./presto-cta-overlay-ui2.js";import{d as defineCustomElement$1}from"./presto-player-button2.js";const prestoCtaOverlayCss=":host{display:block}",PrestoCTAOverlay=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.player=void 0,this.direction=void 0,this.preset=void 0,this.i18n=void 0,this.provider=void 0,this.currentTime=void 0,this.duration=void 0,this.ended=void 0}componentWillLoad(){this.player&&(this.player.on("ended",(()=>this.setEnded())),this.player.on("timeupdate",(e=>this.setCurrentTime(e))))}setEnded(){this.ended=!0}setCurrentTime(e){var t,r;this.currentTime=null===(t=null==e?void 0:e.detail)||void 0===t?void 0:t.plyr.currentTime,this.duration=null===(r=null==e?void 0:e.detail)||void 0===r?void 0:r.plyr.duration}disconnectedCallback(){this.player&&(this.player.off("ended",this.setEnded),this.player.off("timeupdate",this.setCurrentTime))}render(){var e;return h("presto-cta-overlay-controller",{ended:this.ended,currentTime:this.currentTime,duration:this.duration,direction:this.direction,cta:null===(e=this.preset)||void 0===e?void 0:e.cta,i18n:this.i18n,provider:this.provider})}static get style(){return prestoCtaOverlayCss}},[0,"presto-cta-overlay",{player:[8],direction:[1],preset:[16],i18n:[16],provider:[1],currentTime:[32],duration:[32],ended:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["presto-cta-overlay","presto-cta-overlay-controller","presto-cta-overlay-ui","presto-player-button"].forEach((e=>{switch(e){case"presto-cta-overlay":customElements.get(e)||customElements.define(e,PrestoCTAOverlay);break;case"presto-cta-overlay-controller":customElements.get(e)||defineCustomElement$3();break;case"presto-cta-overlay-ui":customElements.get(e)||defineCustomElement$2();break;case"presto-player-button":customElements.get(e)||defineCustomElement$1()}}))}defineCustomElement();export{PrestoCTAOverlay as P,defineCustomElement as d};