webpackJsonp([27],{rEJ0:function(t,e){},vcOo:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("vMJZ"),n=s("0xDb"),a={name:"MyCoupon",data:function(){return{list:[],type:0,tab:{current:0,options:["全部","已过期"],values:[0,3]},page:1,pageCount:null,loaded:!1,count:0}},methods:{goUse:function(t){if(0==t.infoid)this.$router.push({name:"CourseList"});else{var e=Object(n.e)(t,"infoid");this.$router.push(e)}},slideTab:function(t){this.type=t,this.getList()},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$showLoading(),this.page=e,this.loaded=!1,1==e&&(this.list=[]),Object(i.o)({type:this.type,p:e,maxperpage:6}).then(function(e){e.list.map(function(t){t.money=parseFloat(t.money).toString()}),t.list=e.list,0==t.type&&(t.count=e.list.length),t.pageCount=10*e.page.total_pages,t.loaded=!0,t.$hideLoading()})},voucherTypeName:function(t){return Object(n.d)(t)}},activated:function(){this.getList()}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myCoupon"},[s("div",{staticClass:"myCoupon-top"},[s("h1",[t._v("我的优惠券")]),t._v(" "),s("div",{staticClass:"myCoupon-top__box"},[s("div",{staticClass:"myCoupon-top__tab"},[s("span",{class:{active:0==t.type},on:{click:function(e){return t.slideTab(0)}}},[t._v("可使用")]),t._v(" "),s("span",{class:{active:1==t.type},on:{click:function(e){return t.slideTab(1)}}},[t._v("已使用")]),t._v(" "),s("span",{class:{active:3==t.type},on:{click:function(e){return t.slideTab(3)}}},[t._v("已过期")])])])]),t._v(" "),s("div",{staticClass:"myCoupon-list"},[s("el-row",{attrs:{gutter:92}},t._l(t.list,function(e,i){return s("el-col",{key:i,attrs:{span:12}},[s("div",{staticClass:"myVip-list__box",class:{bg:0!=t.type}},[s("div",{staticClass:"myVip-list__top"},[s("div",{staticClass:"myVip-list__left"},[t._v("\n\t\t\t\t\t\t\t\t¥"),s("span",[t._v(t._s(e.money))])]),t._v(" "),s("div",{staticClass:"myVip-list__right"},[s("h2",[t._v(t._s(e.title))]),t._v(" "),0==e.awarddate?s("h3",[t._v("无使用时间限制")]):1==e.awarddate?s("h3",[t._v(t._s(e.time))]):t._e(),t._v(" "),0==e.term?s("p",[t._v("满任意金额可用")]):s("p",[t._v("满￥"+t._s(e.term)+"元可用")]),t._v(" "),0==e.isuse?s("span",{on:{click:function(s){return t.goUse(e)}}},[t._v("去使用")]):t._e()])]),t._v(" "),s("div",{staticClass:"myVip-list__bottom"},[0!=e.infoid?s("p",[t._v("限"+t._s(t.voucherTypeName(e.type))+"《"+t._s(e.infotitle)+"》可用")]):s("p",[t._v("全站通用")])])])])}),1)],1),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[t.pageCount>0?s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pageCount},on:{"current-change":t.getList}}):s("ks-empty",{attrs:{msg:"该分类下暂无优惠券"}})],1)])},staticRenderFns:[]};var c=s("C7Lr")(a,o,!1,function(t){s("rEJ0")},"data-v-02b42c53",null);e.default=c.exports}});