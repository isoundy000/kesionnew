(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ks-components/analysis-info/analysis-info"],{"02d4":function(e,t,n){},"09a9":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.getReferenceAnswer(e.item.tktype,e.item.tkinfo)),i=e.getAnswer(e.item.useranswer,e.item.tktype,e.item.tkinfo),o=e.getReferenceAnswer(e.item.tktype,e.item.tkinfo),r=e.getAnswer(e.item.useranswer,e.item.tktype);e.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:o,m3:r}})},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},3746:function(e,t,n){"use strict";var i=n("02d4"),o=n.n(i);o.a},"8b71":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("f7ac"));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(){return n.e("components/uni/uni-audio/uni-audio").then(n.bind(null,"c5ad"))},s={components:{UniAudio:a},props:{routers:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},parenttkid:0},data:function(){return{isShowOpera:!1,src:"",playAudio:!1,show:!1,videoContext:""}},methods:{fullscreenchange:function(t){t.detail.fullScreen||(this.show=!1,console.log(e(this.show," at components\\ks-components\\analysis-info\\analysis-info.vue:136")))},playVideo:function(){this.videoContext.requestFullScreen(),this.videoContext.play(),this.show=!0},plays:function(){this.videoContext.requestFullScreen()},showVideo:function(){this.isShowOpera=!this.isShowOpera},open:function(e){i.navigateTo({url:"/pages/web/web?title="+e.name+"&url="+encodeURIComponent("/course/"+e.courseid)})},getAnswer:function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var n=e.toString();return""===n?"无":2==t||3==t?e.join():4==t?"1"===n?"A":"B":n},getReferenceAnswer:function(e,t){var n=this;if(2==e||3==e){var i=[];return t.answer.map(function(e){var r;n.parenttkid?i=t.answer:t.real_answer&&t.real_answer.length&&(r=t.real_answer.indexOf(e),i.push(o.default.getLetter(r)))}),i.toString()}return 4==e?"1"===t.answer.toString()?"A":"B":t.answer.toString()}},created:function(){var e=this;this.$store.ready(function(t){e.src=t.SRC})},mounted:function(){this.videoContext=i.createVideoContext("myVideo",this)}};t.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},9894:function(e,t,n){"use strict";n.r(t);var i=n("8b71"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a},f4ba:function(e,t,n){"use strict";n.r(t);var i=n("09a9"),o=n("9894");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("3746");var a=n("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"4dceff76",null);t["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ks-components/analysis-info/analysis-info-create-component',
    {
        'components/ks-components/analysis-info/analysis-info-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("f4ba"))
        })
    },
    [['components/ks-components/analysis-info/analysis-info-create-component']]
]);                
