(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ks-components/comment-list/comment-list"],{"07aa":function(e,i,n){"use strict";n.r(i);var a=n("35a8"),t=n.n(a);for(var m in a)"default"!==m&&function(e){n.d(i,e,function(){return a[e]})}(m);i["default"]=t.a},2263:function(e,i,n){},"35a8":function(e,i,n){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n("2f6d"),t=function(){return n.e("components/uni/uni-load-more/uni-load-more").then(n.bind(null,"ffb3"))},m={components:{UniLoadMore:t},props:{proid:Number,periodid:Number,flag:Number,channelid:Number,from:Number,pageChange:Number},data:function(){return{state:{},switchs:!0,showEmoji:!1,textarea:"",uploads:!1,picList:[],page:1,pageCount:1,moreStatus:"",list:[],emojiList:[{name:"[微笑]",url:"/KS_Inc/static/edu/images/emoji/smiley_0.png"},{name:"[撇嘴]",url:"/KS_Inc/static/edu/images/emoji/smiley_1.png"},{name:"[色]",url:"/KS_Inc/static/edu/images/emoji/smiley_2.png"},{name:"[发呆]",url:"/KS_Inc/static/edu/images/emoji/smiley_3.png"},{name:"[得意]",url:"/KS_Inc/static/edu/images/emoji/smiley_4.png"},{name:"[流泪]",url:"/KS_Inc/static/edu/images/emoji/smiley_5.png"},{name:"[害羞]",url:"/KS_Inc/static/edu/images/emoji/smiley_6.png"},{name:"[闭嘴]",url:"/KS_Inc/static/edu/images/emoji/smiley_7.png"},{name:"[睡觉]",url:"/KS_Inc/static/edu/images/emoji/smiley_8.png"},{name:"[大哭]",url:"/KS_Inc/static/edu/images/emoji/smiley_9.png"},{name:"[尴尬]",url:"/KS_Inc/static/edu/images/emoji/smiley_10.png"},{name:"[怒]",url:"/KS_Inc/static/edu/images/emoji/smiley_11.png"},{name:"[调皮]",url:"/KS_Inc/static/edu/images/emoji/smiley_12.png"},{name:"[大笑]",url:"/KS_Inc/static/edu/images/emoji/smiley_13.png"},{name:"[惊讶]",url:"/KS_Inc/static/edu/images/emoji/smiley_14.png"},{name:"[难过]",url:"/KS_Inc/static/edu/images/emoji/smiley_15.png"},{name:"[酷]",url:"/KS_Inc/static/edu/images/emoji/smiley_16.png"},{name:"[冷汗]",url:"/KS_Inc/static/edu/images/emoji/smiley_17.png"},{name:"[抓狂]",url:"/KS_Inc/static/edu/images/emoji/smiley_18.png"},{name:"[吐]",url:"/KS_Inc/static/edu/images/emoji/smiley_19.png"},{name:"[偷笑]",url:"/KS_Inc/static/edu/images/emoji/smiley_20.png"},{name:"[可爱]",url:"/KS_Inc/static/edu/images/emoji/smiley_21.png"},{name:"[白眼]",url:"/KS_Inc/static/edu/images/emoji/smiley_22.png"},{name:"[傲慢]",url:"/KS_Inc/static/edu/images/emoji/smiley_23.png"},{name:"[饥饿]",url:"/KS_Inc/static/edu/images/emoji/smiley_24.png"},{name:"[困]",url:"/KS_Inc/static/edu/images/emoji/smiley_25.png"},{name:"[惊恐]",url:"/KS_Inc/static/edu/images/emoji/smiley_26.png"},{name:"[流汗]",url:"/KS_Inc/static/edu/images/emoji/smiley_27.png"},{name:"[憨笑]",url:"/KS_Inc/static/edu/images/emoji/smiley_28.png"},{name:"[大兵]",url:"/KS_Inc/static/edu/images/emoji/smiley_29.png"},{name:"[奋斗]",url:"/KS_Inc/static/edu/images/emoji/smiley_30.png"},{name:"[咒骂]",url:"/KS_Inc/static/edu/images/emoji/smiley_31.png"},{name:"[疑问]",url:"/KS_Inc/static/edu/images/emoji/smiley_32.png"},{name:"[嘘]",url:"/KS_Inc/static/edu/images/emoji/smiley_33.png"},{name:"[晕]",url:"/KS_Inc/static/edu/images/emoji/smiley_34.png"},{name:"[折磨]",url:"/KS_Inc/static/edu/images/emoji/smiley_35.png"},{name:"[衰]",url:"/KS_Inc/static/edu/images/emoji/smiley_36.png"},{name:"[骷髅]",url:"/KS_Inc/static/edu/images/emoji/smiley_37.png"},{name:"[敲打]",url:"/KS_Inc/static/edu/images/emoji/smiley_38.png"},{name:"[再见]",url:"/KS_Inc/static/edu/images/emoji/smiley_39.png"},{name:"[擦汗]",url:"/KS_Inc/static/edu/images/emoji/smiley_40.png"},{name:"[抠鼻]",url:"/KS_Inc/static/edu/images/emoji/smiley_41.png"},{name:"[鼓掌]",url:"/KS_Inc/static/edu/images/emoji/smiley_42.png"},{name:"[糗大了]",url:"/KS_Inc/static/edu/images/emoji/smiley_43.png"},{name:"[坏笑]",url:"/KS_Inc/static/edu/images/emoji/smiley_44.png"},{name:"[左哼哼]",url:"/KS_Inc/static/edu/images/emoji/smiley_45.png"},{name:"[右哼哼]",url:"/KS_Inc/static/edu/images/emoji/smiley_46.png"},{name:"[哈欠]",url:"/KS_Inc/static/edu/images/emoji/smiley_47.png"},{name:"[鄙视]",url:"/KS_Inc/static/edu/images/emoji/smiley_48.png"},{name:"[委屈]",url:"/KS_Inc/static/edu/images/emoji/smiley_49.png"},{name:"[快哭了]",url:"/KS_Inc/static/edu/images/emoji/smiley_50.png"},{name:"[阴险]",url:"/KS_Inc/static/edu/images/emoji/smiley_51.png"},{name:"[亲亲]",url:"/KS_Inc/static/edu/images/emoji/smiley_52.png"},{name:"[吓]",url:"/KS_Inc/static/edu/images/emoji/smiley_53.png"},{name:"[可怜]",url:"/KS_Inc/static/edu/images/emoji/smiley_54.png"},{name:"[菜刀]",url:"/KS_Inc/static/edu/images/emoji/smiley_55.png"},{name:"[西瓜]",url:"/KS_Inc/static/edu/images/emoji/smiley_56.png"},{name:"[啤酒]",url:"/KS_Inc/static/edu/images/emoji/smiley_57.png"},{name:"[篮球]",url:"/KS_Inc/static/edu/images/emoji/smiley_58.png"},{name:"[乒乓球]",url:"/KS_Inc/static/edu/images/emoji/smiley_59.png"},{name:"[咖啡]",url:"/KS_Inc/static/edu/images/emoji/smiley_60.png"},{name:"[饭]",url:"/KS_Inc/static/edu/images/emoji/smiley_61.png"},{name:"[猪头]",url:"/KS_Inc/static/edu/images/emoji/smiley_62.png"},{name:"[玫瑰]",url:"/KS_Inc/static/edu/images/emoji/smiley_63.png"},{name:"[凋谢]",url:"/KS_Inc/static/edu/images/emoji/smiley_64.png"},{name:"[示爱]",url:"/KS_Inc/static/edu/images/emoji/smiley_65.png"},{name:"[爱心]",url:"/KS_Inc/static/edu/images/emoji/smiley_66.png"},{name:"[心碎]",url:"/KS_Inc/static/edu/images/emoji/smiley_67.png"},{name:"[蛋糕]",url:"/KS_Inc/static/edu/images/emoji/smiley_68.png"},{name:"[闪电]",url:"/KS_Inc/static/edu/images/emoji/smiley_69.png"},{name:"[炸弹]",url:"/KS_Inc/static/edu/images/emoji/smiley_70.png"},{name:"[刀]",url:"/KS_Inc/static/edu/images/emoji/smiley_71.png"},{name:"[足球]",url:"/KS_Inc/static/edu/images/emoji/smiley_72.png"},{name:"[瓢虫]",url:"/KS_Inc/static/edu/images/emoji/smiley_73.png"},{name:"[便便]",url:"/KS_Inc/static/edu/images/emoji/smiley_74.png"},{name:"[月亮]",url:"/KS_Inc/static/edu/images/emoji/smiley_75.png"},{name:"[太阳]",url:"/KS_Inc/static/edu/images/emoji/smiley_76.png"},{name:"[礼物]",url:"/KS_Inc/static/edu/images/emoji/smiley_77.png"},{name:"[拥抱]",url:"/KS_Inc/static/edu/images/emoji/smiley_78.png"},{name:"[强]",url:"/KS_Inc/static/edu/images/emoji/smiley_79.png"},{name:"[弱]",url:"/KS_Inc/static/edu/images/emoji/smiley_80.png"},{name:"[握手]",url:"/KS_Inc/static/edu/images/emoji/smiley_81.png"},{name:"[胜利]",url:"/KS_Inc/static/edu/images/emoji/smiley_82.png"},{name:"[抱拳]",url:"/KS_Inc/static/edu/images/emoji/smiley_83.png"},{name:"[勾引]",url:"/KS_Inc/static/edu/images/emoji/smiley_84.png"},{name:"[拳头]",url:"/KS_Inc/static/edu/images/emoji/smiley_85.png"},{name:"[差劲]",url:"/KS_Inc/static/edu/images/emoji/smiley_86.png"},{name:"[爱你]",url:"/KS_Inc/static/edu/images/emoji/smiley_87.png"},{name:"[NO]",url:"/KS_Inc/static/edu/images/emoji/smiley_88.png"},{name:"[OK]",url:"/KS_Inc/static/edu/images/emoji/smiley_89.png"},{name:"[爱情]",url:"/KS_Inc/static/edu/images/emoji/smiley_90.png"},{name:"[飞吻]",url:"/KS_Inc/static/edu/images/emoji/smiley_91.png"},{name:"[跳跳]",url:"/KS_Inc/static/edu/images/emoji/smiley_92.png"},{name:"[发抖]",url:"/KS_Inc/static/edu/images/emoji/smiley_93.png"},{name:"[怄火]",url:"/KS_Inc/static/edu/images/emoji/smiley_94.png"},{name:"[转圈]",url:"/KS_Inc/static/edu/images/emoji/smiley_95.png"},{name:"[磕头]",url:"/KS_Inc/static/edu/images/emoji/smiley_96.png"},{name:"[回头]",url:"/KS_Inc/static/edu/images/emoji/smiley_97.png"},{name:"[跳绳]",url:"/KS_Inc/static/edu/images/emoji/smiley_98.png"},{name:"[挥手]",url:"/KS_Inc/static/edu/images/emoji/smiley_99.png"},{name:"[激动]",url:"/KS_Inc/static/edu/images/emoji/smiley_100.png"},{name:"[街舞]",url:"/KS_Inc/static/edu/images/emoji/smiley_101.png"},{name:"[献吻]",url:"/KS_Inc/static/edu/images/emoji/smiley_102.png"},{name:"[左太极]",url:"/KS_Inc/static/edu/images/emoji/smiley_103.png"},{name:"[右太极]",url:"/KS_Inc/static/edu/images/emoji/smiley_104.png"}]}},watch:{pageChange:function(e){this.reachBottom()},periodid:function(){this.getList()}},methods:{look:function(i,n){var a=[];i.map(function(e){a.push(e.pic_src)}),e.previewImage({urls:a,current:a[n]})},upload:function(){var i=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise(function(t){n[a]?(e.showLoading({title:"上传第"+(a+1)+"张图片"}),e.uploadFile({url:i.state.SRC+"/webapi/School/UploadFile",filePath:n[a],fileType:"image",name:"file",formData:{apptoken:i.state.appToken,userid:i.state.userId},success:function(e){var m=JSON.parse(e.data);m.result?(n[a]=m.fileUrl,i.upload(n,a+1).then(function(e){t(e)})):i.$msg(m.msg)}})):t(n)})},reachBottom:function(){this.page++,this.page<=this.pageCount&&this.getList(this.page)},save:function(){var i=this;1!=this.state.isLogin?(e.showToast({title:"请登录",icon:"none"}),setTimeout(function(){e.navigateTo({url:"/pages/user/login/index"})},1500)):this.textarea?this.upload(this.picList).then(function(n){(0,a.SaveAskTopic)({content:i.textarea,flag:i.flag,proid:i.proid,periodid:i.periodid,channelid:i.channelid,photolist:n.toString(),Recommend:i.switchs?1:0}).then(function(n){n.result?(e.showToast({title:"发布成功"}),i.textarea="",i.uploads=!1,i.showEmoji=!1,i.picList=[],i.getList()):(i.textarea="",i.picList=[],e.showToast({title:n.msg,icon:"none"}))})}):this.$msg("请输入需要咨询的问题")},setEmoji:function(e){this.textarea=this.textarea+e},uploadPic:function(){var i=this;e.chooseImage({count:9-this.picList.length,sizeType:["original","compressed"],success:function(e){i.picList=i.picList.concat(e.tempFilePaths)}})},deletePic:function(e){this.picList=this.picList.filter(function(i,n){if(e!=n)return i})},getList:function(){var i=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=n,1==this.page&&(this.list=[]),this.moreStatus="loading",(0,a.GetUserAskTopList)({page:this.page,pagesize:10,flag:this.flag,channelid:this.channelid,showstatus:-1,proid:this.proid,periodid:this.periodid,from:this.from}).then(function(n){e.stopPullDownRefresh(),i.pageCount=n.pagecount,i.page>=i.pageCount?i.moreStatus="noMore":i.moreStatus="more",n.result&&(n.data.length&&n.data.map(function(e){e.content.match(/\[[\u4e00-\u9fa5]+\]/g)&&e.content.match(/\[[\u4e00-\u9fa5]+\]/g).length&&e.content.match(/\[[\u4e00-\u9fa5]+\]/g).map(function(n){for(var a=0;a<i.emojiList.length;a++)i.emojiList[a].name==n&&(e.content=e.content.replace(n,'<img src="'.concat(i.state.SRC).concat(i.emojiList[a].url,'" style="width:20px;height:20px;" class="ks-emoji-image" alt="').concat(i.emojiList[a].name,'" />')))})}),i.list=i.list.concat(n.data))})}},mounted:function(){var e=this;this.$store.ready(function(i){e.state=i,e.getList()})}};i.default=m}).call(this,n("6e42")["default"])},5307:function(e,i,n){"use strict";var a=n("2263"),t=n.n(a);t.a},5976:function(e,i,n){"use strict";var a=function(){var e=this,i=e.$createElement;e._self._c;e._isMounted||(e.e0=function(i){e.showEmoji=!1,e.uploads=!1},e.e1=function(i){i.stopPropagation(),e.uploads=!e.uploads,e.showEmoji=!1},e.e2=function(i){i.stopPropagation(),e.showEmoji=!e.showEmoji,e.uploads=!1},e.e3=function(i){i.stopPropagation(),e.uploads=!0},e.e4=function(i){i.stopPropagation(),e.showEmoji=!0})},t=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return t})},ee83:function(e,i,n){"use strict";n.r(i);var a=n("5976"),t=n("07aa");for(var m in t)"default"!==m&&function(e){n.d(i,e,function(){return t[e]})}(m);n("5307");var s=n("2877"),u=Object(s["a"])(t["default"],a["a"],a["b"],!1,null,"915cec5a",null);i["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ks-components/comment-list/comment-list-create-component',
    {
        'components/ks-components/comment-list/comment-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("ee83"))
        })
    },
    [['components/ks-components/comment-list/comment-list-create-component']]
]);
