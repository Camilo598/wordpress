"use strict";const trackEvent=(w,d)=>{((null===window||void 0===window?void 0:window.dataLayer)||(null===window||void 0===window?void 0:window.gtag))&&d&&((null===window||void 0===window?void 0:window.dataLayer)?(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:w,ecommerce:d})):window.gtag("event",w,d))};exports.trackEvent=trackEvent;