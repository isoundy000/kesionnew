(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exam/collectbank"],{"512e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("c2c3"),a=function(){return e.e("components/uni/uni-popup/uni-popup").then(e.bind(null,"c1b2"))},i=function(){return e.e("components/ks-components/sort/sort").then(e.bind(null,"8e6e"))},u={components:{KsSort:i,UniPopup:a},data:function(){return{allData:{},allDataList:[],showSort:!1,categoryid:0,type:3,baseUrl:this.$store.state.SRC+"/config/app"}},methods:{close:function(t){this.showSort=t.show},openSort:function(){this.showSort=!0},closeSort:function(){this.showSort=!1},collectTkHome:function(){var t=this;(0,o.CollectTkHome)({categoryid:this.categoryid}).then(function(n){n.result&&(t.allData=n.data)}),(0,o.GetCountCollectTk)({categoryid:this.categoryid}).then(function(n){n.result&&(t.allDataList=n.data)})}},onLoad:function(t){this.categoryid=t.categoryid},onShow:function(){var n=this;this.$store.ready(function(e){1==e.isLogin?n.collectTkHome():t.navigateTo({url:"/pages/user/login/index"})})}};n.default=u}).call(this,e("6e42")["default"])},5370:function(t,n,e){},7655:function(t,n,e){"use strict";(function(t){e("569f"),e("921b");o(e("66fd"));var n=o(e("af46"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"8eb9":function(t,n,e){"use strict";e.r(n);var o=e("512e"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},aaac:function(t,n,e){"use strict";var o=e("5370"),a=e.n(o);a.a},af46:function(t,n,e){"use strict";e.r(n);var o=e("d58e"),a=e("8eb9");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("aaac");var u=e("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},d58e:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})}},[["7655","common/runtime","common/vendor"]]]);