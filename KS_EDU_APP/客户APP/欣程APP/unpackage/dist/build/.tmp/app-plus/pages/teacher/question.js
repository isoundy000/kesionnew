(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/teacher/question"],{"0eac":function(t,e,n){"use strict";n.r(e);var i=n("9b1e"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"268e":function(t,e,n){"use strict";n.r(e);var i=n("aa63"),o=n("0eac");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("6480");var s=n("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"05feaada",null);e["default"]=u.exports},2896:function(t,e,n){"use strict";(function(t){n("661b"),n("921b");i(n("66fd"));var e=i(n("268e"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},6480:function(t,e,n){"use strict";var i=n("e08d"),o=n.n(i);o.a},"9b1e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("e3ff"),o=function(){return n.e("components/uni/uni-load-more/uni-load-more").then(n.bind(null,"f4f8"))},a={data:function(){return{loaded:!1,asklist:[],tcid:0,content:"",pageindex:1,pagesize:10,pageCount:0,moreStatus:"more",isFocus:!1,bottomHeight:0}},components:{UniLoadMore:o},onReachBottom:function(t){this.pageindex++,this.moreList()},onLoad:function(e){this.tcid=e.tcid,t.showLoading({title:"加载中"}),this.loadPage()},methods:{setBottomHeight:function(t){this.isFocus=!0,this.bottomHeight=t.detail.height},setNoHeight:function(){this.isFocus=!1,this.bottomHeight=0},moreList:function(){this.getParameters.pageindex>this.pageCount?this.moreStatus="noMore":(this.moreStatus="loading",this.loadPage("more"))},loadPage:function(e){var n=this;"more"==e?(0,i.GetWordsList)({tcid:this.tcid,pageindex:this.pageindex,pagesize:this.pagesize}).then(function(t){n.moreStatus="more",t.result&&(n.asklist=n.asklist.concat(t.data)),n.loaded=!0}):(this.pageindex=1,(0,i.GetWordsList)({tcid:this.tcid,pageindex:this.pageindex,pagesize:this.pagesize}).then(function(e){e.result?(n.pageCount=e.pageCount,1==n.pageCount?n.moreStatus="noMore":n.moreStatus="more",n.asklist=e.data):n.asklist=[],n.loaded=!0,t.hideLoading()}))},submit:function(){var e=this;t.showLoading({title:"正在提交中"}),(0,i.SaveTeacherWords)({tcid:this.tcid,content:this.content}).then(function(n){t.hideLoading(),n.result?(t.showToast({title:"提交成功",duration:2e3,icon:"none"}),e.loadPage(),e.content=""):t.showToast({title:n.msg,duration:2e3,icon:"none"})})}}};e.default=a}).call(this,n("6e42")["default"])},aa63:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},e08d:function(t,e,n){}},[["2896","common/runtime","common/vendor"]]]);