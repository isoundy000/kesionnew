(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["lib/polyv/components/chat-list/content-parser/content-parser"],{"39cf":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u})},"785f":function(t,n,e){"use strict";e.r(n);var r=e("b54d"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n["default"]=u.a},"9b63":function(t,n,e){"use strict";e.r(n);var r=e("39cf"),u=e("785f");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("bd18");var c=e("2877"),o=Object(c["a"])(u["default"],r["a"],r["b"],!1,null,"36384ee0",null);n["default"]=o.exports},b54d:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("97b8"));function u(t){return t&&t.__esModule?t:{default:t}}var a={};r.default.forEach(function(t){a[t.title]="https:"+t.url});var c={props:{content:{type:[String,Object]}},data:function(){return{contentArr:[]}},watch:{content:{handler:function(t,n){t&&t!==n&&"string"==typeof t&&(this.contentArr=this.parseEmotion(t))},deep:!0,immediate:!0}},methods:{tapImage:function(){var n=this.content.uploadImgUrl;t.previewImage({urls:[n],current:n})},parseEmotion:function(t){var n=t;if("string"!=typeof n||!n)return[];n=n.replace(/&lt;/g,"<").replace(/&gt;/g,">");for(var e=[];-1!==n.indexOf("[");){var r=n.indexOf("["),u=n.indexOf("]",r+1);if(-1===u)break;e.push({type:"text",content:n.substring(0,r)});var c=n.substring(r+1,u),o={type:"em",content:c};a[c]?o.url=a[c]:(o.type="text",o.content="[".concat(c,"]")),e.push(o),n=n.substring(u+1)}return e.push({type:"text",content:n}),e}}};n.default=c}).call(this,e("6e42")["default"])},bd18:function(t,n,e){"use strict";var r=e("cd93"),u=e.n(r);u.a},cd93:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'lib/polyv/components/chat-list/content-parser/content-parser-create-component',
    {
        'lib/polyv/components/chat-list/content-parser/content-parser-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("9b63"))
        })
    },
    [['lib/polyv/components/chat-list/content-parser/content-parser-create-component']]
]);
