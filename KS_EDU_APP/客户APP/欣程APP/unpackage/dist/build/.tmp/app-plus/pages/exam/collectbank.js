(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exam/collectbank"],{2847:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return a})},"6ff3":function(t,n,o){"use strict";var e=o("cf1b"),a=o.n(e);a.a},a6aa:function(t,n,o){"use strict";o.r(n);var e=o("2847"),a=o("e2da");for(var c in a)"default"!==c&&function(t){o.d(n,t,function(){return a[t]})}(c);o("6ff3");var i=o("2877"),u=Object(i["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports},cc36:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o("b3e3"),a=function(){return o.e("components/uni/uni-popup/uni-popup").then(o.bind(null,"ad66"))},c=function(){return Promise.all([o.e("common/vendor"),o.e("components/ks-components/sort/sort")]).then(o.bind(null,"d450"))},i={components:{KsSort:c,UniPopup:a},data:function(){return{allData:{},allDataList:[],showSort:!1,categoryid:0,type:3,baseUrl:this.$store.state.SRC+"/config/app"}},methods:{close:function(t){this.showSort=t.show},openSort:function(){this.showSort=!0},closeSort:function(){this.showSort=!1},collectTkHome:function(){var t=this;(0,e.CollectTkHome)({categoryid:this.categoryid}).then(function(n){n.result&&(t.allData=n.data)}),(0,e.GetCountCollectTk)({categoryid:this.categoryid}).then(function(n){n.result&&(t.allDataList=n.data)})}},onLoad:function(t){this.categoryid=t.categoryid},onShow:function(){var n=this;this.$store.ready(function(o){1==o.isLogin?n.collectTkHome():t.navigateTo({url:"/pages/user/login/index"})})}};n.default=i}).call(this,o("6e42")["default"])},cec2:function(t,n,o){"use strict";(function(t){o("661b"),o("921b");e(o("66fd"));var n=e(o("a6aa"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("6e42")["createPage"])},cf1b:function(t,n,o){},e2da:function(t,n,o){"use strict";o.r(n);var e=o("cc36"),a=o.n(e);for(var c in e)"default"!==c&&function(t){o.d(n,t,function(){return e[t]})}(c);n["default"]=a.a}},[["cec2","common/runtime","common/vendor"]]]);