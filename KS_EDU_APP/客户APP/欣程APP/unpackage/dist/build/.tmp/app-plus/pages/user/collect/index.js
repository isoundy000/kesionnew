(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/collect/index"],{"0022":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("ab59"),o=function(){return a.e("components/uni/uni-load-more/uni-load-more").then(a.bind(null,"f4f8"))},s={components:{UniLoadMore:o},data:function(){return{tabs:["我的收藏","问题收藏"],active:0,index:0,tabList:[],list:[],status:-1,page:1,pageCount:0,moreStatus:""}},onPullDownRefresh:function(){0==this.index?this.getList():this.getAskList()},onReachBottom:function(){this.page++,this.page<=this.pageCount&&(0==this.index?this.getList(this.page):this.getAskList(this.page))},onLoad:function(){var e=this;this.$store.ready(function(a){console.log(t(a," at pages\\user\\collect\\index.vue:81"));var n=[{value:-1,name:"全部"},{value:1,name:"文章"}];a.userInfo.model.teacher&&n.push({value:0,name:"教师"}),a.userInfo.model.exam&&n.push({value:50,name:"试卷"}),a.userInfo.model.edu&&(a.isshowprice?n.push({value:-10,name:"点播"},{value:-11,name:"面授"},{value:-12,name:"直播"}):n.push({value:-10,name:"点播"},{value:-11,name:"面授"})),e.tabList=n})},onShow:function(){this.getList()},methods:{openAsk:function(t){n.navigateTo({url:"/pages/class-center/ask/details?topicid="+t.topicid})},open:function(t){var e="";"面授"==t.favorite_type_str||"点播"==t.favorite_type_str||"直播"==t.favorite_type_str?e="/pages/web/web?title="+t.title+"&photo="+t.photourl+"&url="+encodeURIComponent("/course/"+t.InfoID):"文章"==t.favorite_type_str?e="/pages/web/web?title="+t.title+"&photo="+t.photourl+"&url="+encodeURIComponent(t.view_url):"教师"==t.favorite_type_str?e="/pages/teacher/details?tcid="+t.InfoID:"试卷"==t.favorite_type_str&&(e="/pages/web/web?title=试卷介绍&url="+encodeURIComponent("/config/app/#/exam/paperinfo?paperid="+t.InfoID)),n.navigateTo({url:e})},changeTabs:function(t){"问题收藏"===t.tab?this.getAskList():this.getList()},changeList:function(t){this.status=t.tab.value,this.getList()},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=e,1==this.page&&(this.list=[]),this.moreStatus="loading",(0,i.GetUserFavoriteList)({channelid:this.status,page:this.page,pagesize:10}).then(function(e){n.stopPullDownRefresh(),t.pageCount=e.pagecount,t.page>=t.pageCount?t.moreStatus="noMore":t.moreStatus="more",e.result&&(t.list=t.list.concat(e.data))})},getAskList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=e,1==this.page&&(this.list=[]),this.moreStatus="loading",(0,i.GetUserAskFavriteList)({channelid:this.status,page:this.page,pagesize:10}).then(function(e){t.pageCount=e.pagecount,t.page>=t.pageCount?t.moreStatus="noMore":t.moreStatus="more",e.result&&(t.list=t.list.concat(e.data))})}}};e.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},"22af":function(t,e,a){},"37aa":function(t,e,a){"use strict";var n=a("22af"),i=a.n(n);i.a},7115:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},adc0:function(t,e,a){"use strict";a.r(e);var n=a("7115"),i=a("be45");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("37aa");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"f16c537e",null);e["default"]=u.exports},b5ee:function(t,e,a){"use strict";(function(t){a("661b"),a("921b");n(a("66fd"));var e=n(a("adc0"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},be45:function(t,e,a){"use strict";a.r(e);var n=a("0022"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a}},[["b5ee","common/runtime","common/vendor"]]]);