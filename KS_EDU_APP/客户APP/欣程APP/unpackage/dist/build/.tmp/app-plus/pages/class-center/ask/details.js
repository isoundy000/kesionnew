(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/class-center/ask/details"],{"07a7":function(t,e,o){},"3e0d":function(t,e,o){"use strict";o.r(e);var i=o("e68b"),n=o.n(i);for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},c716:function(t,e,o){"use strict";var i=o("07a7"),n=o.n(i);n.a},cdf7:function(t,e,o){"use strict";o.r(e);var i=o("ec71"),n=o("3e0d");for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);o("c716");var a=o("2877"),c=Object(a["a"])(n["default"],i["a"],i["b"],!1,null,"5acdcf68",null);e["default"]=c.exports},e68b:function(t,e,o){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("3c1b"),s=function(){return o.e("components/ks-components/image/Image").then(o.bind(null,"cc49"))},a=function(){return Promise.all([o.e("common/vendor"),o.e("components/ks-components/collect/collect")]).then(o.bind(null,"ab46"))},c=function(){return o.e("components/ks-components/empty/empty").then(o.bind(null,"702a"))},r=function(){return o.e("components/uni/uni-load-more/uni-load-more").then(o.bind(null,"f4f8"))},l={data:function(){return{baseUrl:this.$store.state.SRC+"/config/app",loaded:!1,askData:{},getParameters:{topicId:0,pageindex:1,pagesize:10},rewardArry:["无悬赏分","1分","5分","10分","15分","20分","30分","50分","80分","100分"],isCollect:!1,conIsShow:!1,pageCount:0,moreStatus:"more",isReply:!1,isFocus:!1,content:"",isMyself:!1,collectClass:"",overHeight:!1,iscollect:!1,isHaveBest:!1,rewardIndex:0,bottomHeight:-243}},components:{KsImage:s,KsCollect:a,KsEmpty:c,UniLoadMore:r},onLoad:function(e){this.getParameters.topicId=e.topicid,t.showLoading({title:"加载中"}),this.loadPage()},onReachBottom:function(t){this.getParameters.pageindex++,this.moreList()},onShareAppMessage:function(){var t=this,e={title:t.askData.title,path:"/pages/class-center/ask/details?topicid="+t.getParameters.topicId,imageUrl:t.askData.imgList[0]||this.baseUrl+"/static/images/common/default-img.png",success:function(t){t.errMsg},fail:function(){"shareAppMessage:fail cancel"==res.errMsg||res.errMsg}};return e},methods:{bindPickerChange:function(e){var o=this;this.rewardIndex=e.target.value;var i,s=this.rewardArry[e.target.value];i="无悬赏分"==s?0:Number(s.split("分")[0]),t.showLoading({title:"正在提交中"}),(0,n.AddReward)({topicid:this.getParameters.topicId,score:i}).then(function(e){t.hideLoading(),e.result?(t.showToast({title:"设置成功",duration:2e3,icon:"none"}),o.loadPage()):t.showToast({title:e.msg,duration:2e3,icon:"none"})})},setBottomHeight:function(t){this.isFocus=!0,this.isReply&&(this.bottomHeight=t.detail.height)},setNoHeight:function(){this.isFocus=!1,this.isReply?this.bottomHeight=0:this.bottomHeight=-243},closeReply:function(){this.isReply=!1,this.isFocus=!1,this.bottomHeight=-243,this.content=""},deleteReply:function(e,o){var i=this;t.showLoading({title:"正在提交中"}),(0,n.DeleteAnswer)({topicid:e,postid:o}).then(function(e){t.hideLoading(),e.result?(t.showToast({title:"删除成功",duration:2e3,icon:"none"}),i.loadPage()):t.showToast({title:e.msg,duration:2e3,icon:"none"})})},setBestAsk:function(e,o){var i=this;t.showLoading({title:"正在提交中"}),(0,n.SetAskSatisfied)({topicid:e,postid:o}).then(function(e){t.hideLoading(),e.result?(t.showToast({title:"设置成功",duration:2e3,icon:"none"}),i.loadPage()):t.showToast({title:e.msg,duration:2e3,icon:"none"})})},setNoSatisfaction:function(){var e=this;t.showModal({title:"无满意答案",content:"如果没有满意的回答，可点击“关闭问题”按钮结束提问",success:function(t){t.confirm?e.closeAsk():t.cancel&&console.log(i("用户点击取消"," at pages\\class-center\\ask\\details.vue:309"))}})},closeAsk:function(){var e=this;t.showLoading({title:"正在提交中"}),(0,n.CloseAsk)({topicid:this.getParameters.topicId}).then(function(o){t.hideLoading(),o.result?(t.showToast({title:"关闭成功",duration:2e3,icon:"none"}),e.loadPage()):t.showToast({title:o.msg,duration:2e3,icon:"none"})})},moreList:function(){this.getParameters.pageindex>this.pageCount?this.moreStatus="noMore":(this.moreStatus="loading",this.loadPage("more"))},loadPage:function(e){var o=this;"more"==e?(0,n.GetAskView)(this.getParameters).then(function(t){o.moreStatus="more",t.result&&(t.replyList.map(function(t,e){t.isShow=!1}),o.askData.replyList=o.askData.replyList.concat(t.replyList)),o.loaded=!0}):(this.getParameters.pageindex=1,(0,n.GetAskView)(this.getParameters).then(function(e){e.result?(o.pageCount=e.pageCount,1==o.pageCount?o.moreStatus="noMore":o.moreStatus="more",o.isMyself=e.ismine,o.iscollect=e.iscollect,e.bestusername?o.isHaveBest=!0:o.isHaveBest=!1,e.replyList.map(function(t,e){t.overHeight=!1,t.isShow=!1}),o.askData=e,"0"==o.askData.issolve&&o.isMyself?o.collectClass="ks-col-5":o.collectClass="ks-col-6"):o.pageCount=0,o.loaded=!0,t.hideLoading(),o.$nextTick(function(){var e=this,o=t.createSelectorQuery().in(this);o.select("#ask-con-show").boundingClientRect(function(t){t.height>40?e.overHeight=!0:e.overHeight=!1}).exec(),this.askData.replyList.map(function(o,i){var n=t.createSelectorQuery().in(e);n.select("#reply"+i).boundingClientRect(function(t){t.height>40?o.overHeight=!0:o.overHeight=!1}).exec()})})}))},setShow:function(t,e){"reply"==t?this.askData.replyList[e].isShow=0==this.askData.replyList[e].isShow:this.conIsShow=0==this.conIsShow},replyQuestion:function(){this.isReply=!0,this.bottomHeight=0},cancel:function(){this.isReply=!1,this.isFocus=!1,this.bottomHeight=-243,this.content=""},submit:function(){var e=this;this.content?(t.showLoading({title:"正在提交中"}),(0,n.ReplyAskTopic)({topicid:this.getParameters.topicId,content:this.content}).then(function(o){t.hideLoading(),o.result?(t.showToast({title:"提交回答成功",duration:2e3,icon:"none"}),e.loadPage()):t.showToast({title:o.msg,duration:2e3,icon:"none"}),e.content="",e.isReply=!1,e.isFocus=!1,e.bottomHeight=-243})):t.showToast({title:"请输入回答内容",duration:1e4,icon:"none"})}}};e.default=l}).call(this,o("6e42")["default"],o("0de9")["default"])},ec71:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return n})},f914:function(t,e,o){"use strict";(function(t){o("661b"),o("921b");i(o("66fd"));var e=i(o("cdf7"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["f914","common/runtime","common/vendor"]]]);