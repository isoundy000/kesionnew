(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/class-center/ask/question"],{5672:function(t,i,a){"use strict";a.r(i);var s=a("6aa3"),e=a.n(s);for(var l in s)"default"!==l&&function(t){a.d(i,t,function(){return s[t]})}(l);i["default"]=e.a},"6aa3":function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a("74ce"),e={data:function(){return{loaded:!1,classList:[],secondArrData:[],isSelect:!1,array:[[],[],[]],indexArr:[0,0,0],index:0,index2:0,index3:0,scoreArray:["无悬赏分","1分","5分","10分","15分","20分","30分","50分","80分","100分"],scoreIndex:0,askData:{},code:"",getParameters:{topicId:0},form:{title:"",classid:"0",reward:""},pageCount:0,moreStatus:"more"}},onLoad:function(i){this.getParameters.topicId=i.topicid,t.showLoading({title:"加载中"}),this.loadPage()},methods:{bindPickerChange:function(t){this.isSelect=!0,this.classList[t.detail.value[0]].childList.length?this.classList[t.detail.value[0]].childList[t.detail.value[1]].childList.length?this.form.classid=this.classList[t.detail.value[0]].childList[t.detail.value[1]].childList[t.detail.value[2]].classID:this.form.classid=this.classList[t.detail.value[0]].childList[t.detail.value[1]].classID:this.form.classid=this.classList[t.detail.value[0]].classID},getColValue:function(t){var i=[];if(0==t.detail.column){if(this.index=t.detail.value,this.classList[t.detail.value].childList.length){var a=[];if(this.classList[t.detail.value].childList.map(function(t){i.push(t.className),a.push(t)}),this.secondArrData=a,this.array[1]=i,a[0].childList.length){var s=[];a[0].childList.map(function(t){s.push(t.className)}),this.array[2]=s}else this.array[2]=[]}}else if(1==t.detail.column){var e=[];if(this.classList[0].childList.map(function(t){e.push(t)}),this.secondArrData=e,this.index2=t.detail.value,this.secondArrData[t.detail.value].childList.length){var l=[];this.secondArrData[t.detail.value].childList.map(function(t){l.push(t.className)}),this.array[2]=l}else this.array[2]=[]}else this.index3=t.detail.value},cancelSelect:function(){this.isSelect=!1,this.form.classid="0",this.index=0,this.index2=0,this.index3=0,this.indexArr=[0,0,0]},bindScoreChange:function(t){this.scoreIndex=t.target.value;var i=this.scoreArray[t.target.value];this.form.reward="无悬赏分"==i?0:Number(i.split("分")[0])},moreList:function(){this.getParameters.pageindex>this.pageCount?this.moreStatus="noMore":(this.moreStatus="loading",this.loadPage("more"))},loadPage:function(){var i=this;(0,s.GetAskClass)({}).then(function(a){if(a.result){i.classList=a.data;var s=[];if(a.data.map(function(t){s.push(t.className)}),i.array[0]=s,i.classList[0].childList.length){var e=[];if(i.classList[0].childList.map(function(t){e.push(t.className)}),i.array[1]=e,i.classList[0].childList[0].childList.length){var l=[];i.classList[0].childList[0].childList.map(function(t){l.push(t.className)}),i.array[2]=l}}}else i.classList=[],i.array[0]=[];i.loaded=!0,t.hideLoading()})},submit:function(){var i=this;this.form.title?(t.showLoading({title:"正在提交中"}),(0,s.PublishAskTopic)(this.form).then(function(a){t.hideLoading(),a.result?(i.isReply=!1,t.showToast({title:"问题提交成功",duration:1e3,icon:"none"}),setTimeout(function(){t.navigateBack()},1e3)):(i.isReply=!1,t.showToast({title:a.msg,duration:1e3,icon:"none"}))})):t.showToast({title:"请输入问题内容",duration:1e3,icon:"none"})}}};i.default=e}).call(this,a("6e42")["default"])},"9d4b":function(t,i,a){},a822:function(t,i,a){"use strict";(function(t){a("3099"),a("921b");s(a("66fd"));var i=s(a("fbf5"));function s(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,a("6e42")["createPage"])},d325:function(t,i,a){"use strict";var s=a("9d4b"),e=a.n(s);e.a},db21:function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement;t._self._c},e=[];a.d(i,"a",function(){return s}),a.d(i,"b",function(){return e})},fbf5:function(t,i,a){"use strict";a.r(i);var s=a("db21"),e=a("5672");for(var l in e)"default"!==l&&function(t){a.d(i,t,function(){return e[t]})}(l);a("d325");var n=a("2877"),c=Object(n["a"])(e["default"],s["a"],s["b"],!1,null,"6d331a3d",null);i["default"]=c.exports}},[["a822","common/runtime","common/vendor"]]]);