(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/column/index"],{"0685":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"290f":function(t,e,n){"use strict";n.r(e);var o=n("376d"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"376d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("3ae9"),i=function(){return n.e("components/uni/uni-load-more/uni-load-more").then(n.bind(null,"cf96"))},a={components:{UniLoadMore:i},data:function(){return{active:0,list:[],moreStatus:"",page:1,pageCount:0}},onPullDownRefresh:function(){this.getList()},onLoad:function(){this.getList()},onReachBottom:function(){this.page++,this.page<=this.pageCount&&this.getList(this.page)},methods:{onLoad:function(){this.page+=1,this.getList(this.page)},open:function(e){t.navigateTo({url:"/pages/web/web?url="+encodeURIComponent("/course/"+e.courseid)+"&title="+e.name})},getList:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=n,1==this.page&&(this.list=[]),this.moreStatus="loading",(0,o.GetUserSpecialList)({channelid:this.channelid,page:this.page,pagesize:10}).then(function(n){t.stopPullDownRefresh(),e.pageCount=n.pagecount,e.page>=e.pageCount?e.moreStatus="noMore":e.moreStatus="more",n.result&&(e.list=e.list.concat(n.data))})}}};e.default=a}).call(this,n("6e42")["default"])},"39cf":function(t,e,n){"use strict";var o=n("bd7a"),i=n.n(o);i.a},"43c7":function(t,e,n){"use strict";n.r(e);var o=n("0685"),i=n("290f");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("39cf");var u=n("2877"),s=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,"449a348c",null);e["default"]=s.exports},"48dc":function(t,e,n){"use strict";(function(t){n("3099"),n("921b");o(n("66fd"));var e=o(n("43c7"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bd7a:function(t,e,n){}},[["48dc","common/runtime","common/vendor"]]]);