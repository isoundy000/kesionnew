(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1657:function(e,n,t){"use strict";var o=t("b4b2"),u=t.n(o);u.a},"4c5a":function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{}},onLaunch:function(){plus.runtime.getProperty(plus.runtime.appid,function(n){e.request({url:"http://www.xkvo.net/webapi/app/CheckUpdateApp",data:{version:1,name:n.name},success:function(n){var o=n.data;o.result&&o.downurl&&e.downloadFile({url:o.downurl,success:function(e){200===e.statusCode&&plus.runtime.install(e.tempFilePath,{force:!1},function(){console.log(t("install success..."," at App.vue:30")),plus.runtime.restart()},function(e){console.error(t("install fail..."," at App.vue:33"))})}})}})})},onShow:function(){},onHide:function(){}};n.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},"93fd":function(e,n,t){"use strict";t.r(n);var o=t("4c5a"),u=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,function(){return o[e]})}(c);n["default"]=u.a},a24f:function(e,n,t){"use strict";t.r(n);var o=t("93fd");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("1657");var c,r,l=t("2877"),a=Object(l["a"])(o["default"],c,r,!1,null,null,null);n["default"]=a.exports},b4b2:function(e,n,t){},d293:function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("661b"),t("921b");var u=a(t("66fd")),c=a(t("a24f")),r=a(t("431e")),l=a(t("0ce6"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){i(e,n,t[n])})}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=function(){return t.e("components/ks-components/box/Box").then(t.bind(null,"143c"))},p=function(){return t.e("components/ks-components/image/Image").then(t.bind(null,"cc49"))},d=function(){return t.e("components/ks-components/empty/empty").then(t.bind(null,"702a"))},m=function(){return t.e("components/ks-components/tabs/tabs").then(t.bind(null,"3c23"))},b=function(){return t.e("components/ks-components/cell-group/cell-group").then(t.bind(null,"0bed"))},v=function(){return t.e("components/ks-components/cell/cell").then(t.bind(null,"3275"))},h=function(){return t.e("components/ks-components/page-scroller/page-scroller").then(t.bind(null,"86bd"))},k=function(){return t.e("components/ks-components/service/service").then(t.bind(null,"d428"))};u.default.component("ks-box",f),u.default.component("ks-image",p),u.default.component("ks-empty",d),u.default.component("ks-tabs",m),u.default.component("ks-cell-group",b),u.default.component("ks-cell",v),u.default.component("ks-page-scroller",h),u.default.component("ks-service",k),u.default.config.productionTip=!1,l.default.setApp({apiId:"eiocqzvc0r",apiSecret:"eb844f69cea740a68475205e2304009a"}),u.default.prototype.$plvInit=function(e){return l.default.init(e)},u.default.prototype.$plvDestory=function(){l.default.destory()},u.default.prototype.$handleSrc=function(e){switch(e.indexOf("//")){case 0:case 5:case 6:return e;default:return r.default.state.SRC+e}},u.default.prototype.$msg=function(n,t){return new Promise(function(o){"success"==t?e.showToast({title:n,icon:"success"}):e.showToast({title:n,icon:"none"}),setTimeout(function(){o()},1500)})},c.default.mpType="app";var y=new u.default(s({},c.default,{store:r.default}));o(y).$mount();var g=y;n.default=g}).call(this,t("6e42")["default"],t("6e42")["createApp"])}},[["d293","common/runtime","common/vendor"]]]);