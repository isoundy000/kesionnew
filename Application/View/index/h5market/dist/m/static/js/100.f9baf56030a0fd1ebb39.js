webpackJsonp([100],{MHWY:function(t,e){},aF38:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("dAT0"),s=a("g+M4"),c={name:"PaperFavorite",components:{PaperMedal:i.a},data:function(){return{type:2,categoryid:0,categoryname:[],count:0}},activated:function(){this.categoryid=this.$route.query.categoryid,this.getList()},methods:{goFavTest:function(){this.count>0?this.$router.push({path:"/exam/DoFavtest",query:{categoryid:this.categoryid}}):this.$toast("无收藏的题目")},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(s.h)({type:this.type,categoryid:this.categoryid,p:e}).then(function(e){console.log(e),t.categoryname=e.categoryname,t.count=e.count})},clearAll:function(){var t=this;this.count>0&&this.$confirm("确认清空收藏记录吗").then(function(){Object(s.b)({type:2,categoryid:t.categoryid}).then(function(e){"success"===e.result&&(t.$toast("清除成功","success"),t.getList())})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"paper-favorite"},[a("paper-medal",{attrs:{name:"累计收藏",value:t.count}})],1),t._v(" "),a("div",{staticClass:"paper-favorite-list"},[a("div",{staticClass:"paper-favorite-list__item",on:{click:t.goFavTest}},[a("div",{staticClass:"paper-favorite-list__title"},[t._v(t._s(t.categoryname.join("、")||"收藏夹"))]),t._v(" "),a("div",{staticClass:"paper-favorite-list__num"},[t._v(t._s(t.count))])])]),t._v(" "),a("div",{staticClass:"clearall-button",class:t.count<=0&&"clearall-button--disabled",on:{click:t.clearAll}},[t._v("清空我的收藏")])])},staticRenderFns:[]};var n=a("C7Lr")(c,o,!1,function(t){a("MHWY")},"data-v-14086b59",null);e.default=n.exports}});