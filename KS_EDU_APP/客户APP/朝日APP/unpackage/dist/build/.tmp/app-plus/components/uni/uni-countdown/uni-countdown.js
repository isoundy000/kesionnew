(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni/uni-countdown/uni-countdown"],{1475:function(t,n,e){},"4ac8":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},6340:function(t,n,e){"use strict";e.r(n);var o=e("950c"),u=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=u.a},"72d4":function(t,n,e){"use strict";var o=e("1475"),u=e.n(o);u.a},"8acb":function(t,n,e){"use strict";e.r(n);var o=e("4ac8"),u=e("6340");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("72d4");var r=e("2877"),a=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=a.exports},"950c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"uni-countdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},created:function(t){var n=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval(function(){n.seconds--,n.seconds<0?n.timeUp():n.countDown()},1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,e,o){return 60*t*60*24+60*n*60+60*e+o},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,e=0,o=0,u=0;t>0?(n=Math.floor(t/86400),e=Math.floor(t/3600)-24*n,o=Math.floor(t/60)-24*n*60-60*e,u=Math.floor(t)-24*n*60*60-60*e*60-60*o):this.timeUp(),n<10&&(n="0"+n),e<10&&(e="0"+e),o<10&&(o="0"+o),u<10&&(u="0"+u),this.d=n,this.h=e,this.i=o,this.s=u}}};n.default=o}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni/uni-countdown/uni-countdown-create-component',
    {
        'components/uni/uni-countdown/uni-countdown-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("8acb"))
        })
    },
    [['components/uni/uni-countdown/uni-countdown-create-component']]
]);
