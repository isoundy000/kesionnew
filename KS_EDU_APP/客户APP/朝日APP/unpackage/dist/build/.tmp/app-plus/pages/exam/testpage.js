(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exam/testpage"],{"3a53":function(e,t,i){"use strict";i.r(t);var s=i("8e28"),a=i.n(s);for(var n in s)"default"!==n&&function(e){i.d(t,e,function(){return s[e]})}(n);t["default"]=a.a},"3e5f":function(e,t,i){"use strict";i.r(t);var s=i("5244"),a=i("3a53");for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);i("4d75");var r=i("2877"),o=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=o.exports},4700:function(e,t,i){"use strict";(function(e){i("569f"),i("921b");s(i("66fd"));var t=s(i("3e5f"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"4d75":function(e,t,i){"use strict";var s=i("6d37"),a=i.n(s);a.a},5244:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"a",function(){return s}),i.d(t,"b",function(){return a})},"6d37":function(e,t,i){},"8e28":function(e,t,i){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("c2c3"),n=r(i("03fa"));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){return i.e("components/ks-components/question-title/question-title").then(i.bind(null,"2d09"))},c=function(){return i.e("components/ks-components/paper-medal/paper-medal").then(i.bind(null,"268e"))},u=function(){return i.e("components/ks-components/short-answer/short-answer").then(i.bind(null,"54d6"))},d=function(){return Promise.all([i.e("common/vendor"),i.e("components/ks-components/analysis-info/analysis-info")]).then(i.bind(null,"1382"))},h=function(){return i.e("components/ks-components/answer-sheet/answer-sheet").then(i.bind(null,"703e"))},p=function(){return i.e("components/uni/uni-popup/uni-popup").then(i.bind(null,"c1b2"))},l=function(){return i.e("components/ks-components/fill-blanks/fill-blanks").then(i.bind(null,"a50f"))},f=function(){return Promise.all([i.e("common/vendor"),i.e("components/ks-components/multiple-choice/multiple-choice")]).then(i.bind(null,"065d"))},g={components:{QuestionTitle:o,PaperMedal:c,ShortAnswer:u,FillBlanks:l,AnalysisInfo:d,AnswerSheet:h,UniPopup:p,MultipleChoice:f},name:"testpage",data:function(){return{baseUrl:this.$store.state.SRC+"/config/app",testUseTime:"",swiperRealIndex:0,isSwiperFirsetEnd:!1,windowHeight:"",showPaperSlideTips:!1,paperTkList:[],isShow:!1,paper_title:"",paperid:0,cardVisabled:!1,recode:[],pageTuning:0,time:"00:00:00",second:0,scoreout:null,categoryid:0,xtnum:0,slideFlag:!0,is_righttf:0,is_righttfStatu:!1,dateList:[],dateInfoList:[],currentData:0,day:"",loaded:!1,correctionid:0,showPaperCorrection:!1,redresscon:"",redressType:19,radioOption:[],showClass:!0,showPopup:!1,payInfo:{},isshow_collect:0,look_tkanalysis_isfree_tips:"",set_time:0,dailyid:0,is_saveanswer:0,query:{},name:"",routers:{type:"",name:""},showTextarea:!0,timer:""}},onHide:function(){this.timer&&clearInterval(this.timer),this.loaded=!1},onUnload:function(e){this.timer&&clearInterval(this.timer),this.loaded=!1},onShow:function(){this.start()},onLoad:function(t){var i=this;console.log(e(t," at pages\\exam\\testpage.vue:364"));var n=this;this.query=t,this.routers.type=t.type,this.routers.name=t.name,this.paper_title=this.query.title,this.name=this.query.name,s.getSystemInfo({success:function(e){n.windowHeight=e.windowHeight,(0,a.GetPaperErrortype)().then(function(e){e.result?n.radioOption=e.data:n.radioOption=[]})}}),this.dataInit(),"testpage"==this.name?this.loadPage():this.$store.ready(function(e){0!=e.userInfo.UserID?i.loadPage():i.$msg("您还未登录，请登录后做题！").then(function(){s.navigateTo({url:"/pages/user/login/index"})})})},methods:{transitionEnd:function(e){var t=this;this.slideFlag=!0;var i=this.pageTuning==this.recode.length,n=[];if(this.swiperRealIndex=e.detail.current,this.paperTkList.map(function(e,i){"xt"===e.type&&(n.push(e.tkid),i===t.swiperRealIndex&&(t.pageTuning=e.num))}),i&&"exercise"===this.name&&6!=this.query.type&&!this.isSwiperFirsetEnd){this.isSwiperFirsetEnd=!0,s.showLoading({title:"加载更多题目中"});var r={categoryid:this.categoryid,type:this.query.type,isrand:this.query.isrand,tktype:this.query.tktype||0,tkids:n};switch(Number(this.query.type)){case 4:r.sectionid=this.query.sectionid;break;case 5:r.knowledgeid=this.query.knowledgeid;break;case 7:r.courseid=this.query.courseid,r.typeid=this.query.typeid;break}(0,a.GetTestTk)(r).then(function(e){if(s.hideLoading(),e.result){var i=e.data.tmlist[0];if(i){var a=t.paperTkList.length,n=[];i.tklist.map(function(e){e.look_analysis_free?t.isShow=!0:t.isShow=!1;var i=t.tkItemInit(e,0,a+n.length);n.push(i)}),t.paperTkList=t.paperTkList.concat(n)}t.isSwiperFirsetEnd=!1}else t.$msg(e.msg)})}},closePaperCorrection:function(){this.showPaperCorrection=!1,this.showTextarea=!0},close:function(e){this.popupShow=e.show},dataInit:function(){var e=this;this.pageTuning=0,this.xtnum=0,this.paper_title="",this.categoryid=this.query.categoryid,this.paperid=this.query.paperid,this.paperTkList=[],this.recode=[],this.time="00:00:00",this.second=0,this.$store.ready(function(t){var i=t.userInfo.UserID;1!=s.getStorageSync("EXAM_SLIDE_TIPS_".concat(i))&&(e.showPaperSlideTips=!0)})},getDoPracticeDaily:function(){var e=this;this.paper_title=this.query.title||"";var t={categoryid:this.categoryid,day:this.query.day};s.showLoading({icon:"loading"}),(0,a.GetDailyTestPaper)(t).then(function(t){if(t.result){e.look_tkanalysis_isfree_tips=t.data.look_analysis_free,t.data.is_righttf&&(e.is_righttf=t.data.is_righttf,e.is_righttfStatu=!0),e.dailyid=t.dailyid,e.set_time=t.set_time,s.hideLoading();var i=t.data.tmlist;if(i.length){var a=[];i.map(function(t,i){t.type="dt",t.prentKey=i,a.push(t),t.tklist.map(function(i,s){var n=e.tkItemInit(i,t.prentKey,a.length);a.push(n)})}),e.pageTuning=1,e.paperTkList=a}else e.$msg("未找到任何题目").then(function(){s.navigateBack()});e.scoreout=t.data.scoreout}else e.$msg(t.msg).then(function(){s.navigateBack()});e.loaded=!0})},lookAnswer:function(e){this.look_tkanalysis_isfree_tips.result?e.analysis_flag||(e.analysis_flag=!0):this.$msg(this.look_tkanalysis_isfree_tips.msg)},loadPage:function(){var t,i=this,n={};if("testpage"==this.name)this.paper_title=this.query.title,t=a.GetPaperDetail,n={categoryid:this.categoryid,paperid:this.paperid};else if("exercise"==this.name)switch(t=a.GetTestTk,n={categoryid:this.categoryid,type:this.query.type,isrand:this.query.isrand,tktype:this.query.tktype||0,tkids:[]},Number(this.query.type)){case 1:this.paper_title="题库练习";break;case 2:this.paper_title="错题练习";break;case 3:this.paper_title="收藏练习";break;case 4:this.paper_title="自定义题库练习",n.sectionid=this.query.sectionid;break;case 5:this.paper_title="知识点练习",n.knowledgeid=this.query.knowledgeid;break;case 6:this.paper_title="每日一练";break;case 7:this.paper_title="课时题库练习",n.courseid=this.query.courseid,n.typeid=this.query.typeid;break}t&&(6==this.query.type?(0,a.GetDailyTestDateList)({categoryid:this.query.categoryid}).then(function(t){console.log(e(t," at pages\\exam\\testpage.vue:656")),i.dateInfoList=t.data,t.data.map(function(e,t){if(e.day==i.query.day){if(i.currentData=t,i.dateInfoList[i.currentData].testdata){var s=Math.floor(i.dateInfoList[i.currentData].testdata.exam_time/3600)>=10?Math.floor(i.dateInfoList[i.currentData].testdata.exam_time/60):"0"+Math.floor(i.dateInfoList[i.currentData].testdata.exam_time/60),a=Math.floor(i.dateInfoList[i.currentData].testdata.exam_time/60)>=10?Math.floor(e.time/60):"0"+Math.floor(i.dateInfoList[i.currentData].testdata.exam_time/60),n=i.dateInfoList[i.currentData].testdata.exam_time%60>=10?i.dateInfoList[i.currentData].testdata.exam_time%60:"0"+i.dateInfoList[i.currentData].testdata.exam_time%60;i.testUseTime=s+":"+a+":"+n}i.day=e.day,e.is_test?i.loaded=!0:i.getDoPracticeDaily()}})}):(s.showLoading({icon:"loading"}),t(n).then(function(e){if(e.result){"testpage"==i.name?(i.is_saveanswer=e.data.is_saveanswer,i.set_time=e.data.exam_time,0==e.data.realtest&&1==e.data.is_tjda?i.isShow=!0:i.isShow=!1):(i.look_tkanalysis_isfree_tips=e.data.look_analysis_free,i.isShow=!0),i.isshow_collect=e.data.isshow_collect,e.data.is_righttf&&(i.is_righttf=e.data.is_righttf,i.is_righttfStatu=!0),s.hideLoading();var t=e.data.tmlist;if(t.length){var a=[];t.map(function(e,t){e.type="dt",e.prentKey=t,a.push(e),e.tklist.map(function(t,s){var n=i.tkItemInit(t,e.prentKey,a.length);a.push(n)})}),i.pageTuning=1,i.paperTkList=a}else i.$msg("未找到任何题目").then(function(){s.navigateBack()});i.scoreout=e.data.scoreout,i.loaded=!0}else s.hideLoading(),1002==e.returncode||1062==e.returncode?i.$msg(e.msg).then(function(){s.navigateBack()}):1063==e.returncode||1064==e.returncode||1065==e.returncode?(i.payInfo=e.msg,i.showPopup=!0):i.$msg(e.msg).then(function(){s.navigateBack()}),i.loaded=!0})))},tkItemInit:function(e,t,i){var s,a=this;if(this.xtnum++,e.type="xt",e.signed=!1,e.useranswer instanceof Array?e.useranswer=e.useranswer:e.useranswer=[],e.showAnswerStatus=!1,e.num=this.xtnum,e.subKey=t,e.analysis_flag=!1,5==e.tktype){var n=e.title.split(/_{3,}/);e.tkinfo.answer?e.tkinfo.answer.map(function(e){e.options=""}):(e.tkinfo.answer=[],n.map(function(t,i){i>0&&e.tkinfo.answer.push({options:""})}))}else 6==e.tktype&&e.tkinfo.childtk.map(function(e){e.analysis_flag=!1,e.showAnswerStatus=!1,e.num=a.xtnum,e.useranswer instanceof Array?e.useranswer=e.useranswer:e.useranswer=[]});return s=!(!e.useranswer||!e.useranswer.length),this.recode.push({bindSwiperIndex:i,num:this.xtnum,sign:!1,answered:s}),e},handleChoiced:function(e,t,i,s,a){this.recode[e.num-1].answered=!0,i?this.paperTkList.map(function(e){e.tkid==s&&e.tkinfo.childtk.map(function(e,i){i==a&&(e.useranswer=t)})}):this.paperTkList.map(function(i){i.tkid==e.tkid&&(i.useranswer=t)}),2!=e.tktype&&4!=e.tktype||i||this.goNext()},goNext:function(){var e=this;this.slideFlag&&(this.slideFlag=!1,setTimeout(function(){e.swiperRealIndex++},400))},handleFillBlankAnswer:function(t,i,s,a){var n=[];t.tkinfo.answer.map(function(e){n.push(e.options)}),this.recode[t.num-1].answered=!0,i?this.paperTkList.map(function(t){t.tkid==s&&t.tkinfo.childtk.map(function(t,i){i==a&&(console.log(e(t," at pages\\exam\\testpage.vue:916")),t.useranswer=n)})}):this.paperTkList.map(function(e){e.tkid==t.tkid&&(e.useranswer=n)})},handleShortAnswer:function(e,t,i,s){t?this.paperTkList.map(function(t){t.tkid==i&&t.tkinfo.childtk.map(function(t,i){i==s&&(t.useranswer=e.useranswer)})}):this.paperTkList.map(function(t){t.tkid==e.tkid&&(t.useranswer=e.useranswer)}),this.recode[e.num-1].answered=!0},sheetclick:function(){var e=this;this.cardVisabled?this.cardVisabled=!1:(this.cardVisabled=!0,this.$nextTick(function(){e.$refs.sheet.reset({answerList:e.recode,swiperChoice:e.$refs.choice})}))},handleCardClick:function(e){this.swiperRealIndex=e,this.cardVisabled=!1},sign:function(e){var t;this.recode.map(function(i){i.bindSwiperIndex==e&&(t=i)}),t&&(0==t.sign?(t.sign=!0,this.paperTkList.map(function(t,i){i==e&&(t.signed=!0)})):(t.sign=!1,this.paperTkList.map(function(t,i){i==e&&(t.signed=!1)})))},collect:function(e){0==e.collect?e.collect=1:e.collect=0,(0,a.SetPaperCollect)({type:2,categoryid:this.categoryid,infoid:e.tkid,collect:e.collect}).then(function(e){e.result})},correction:function(e){this.correctionid=e,this.showPaperCorrection=!0,this.showTextarea=!1},viewAnalysis:function(t,i,s){var r=this;console.log(e(t,t.useranswer," at pages\\exam\\testpage.vue:1058"));var o=0;if(o=i||t.tkid,"testpage"==this.name){this.$set(t,"analysis_flag",!1);var c=[];if(1==t.tktype){if(console.log(e(t,t.useranswer," at pages\\exam\\testpage.vue:1073")),""==t.useranswer)return this.$msg("请输入答案"),!1;c=[t.useranswer.toString()]}else if(2==t.tktype||3==t.tktype){if(!t.useranswer||!t.useranswer.length)return this.$msg("请选择答案"),!1;t.useranswer.map(function(e){var s=n.default.getLetterIndex(e);i?c.push(e):c.push(t.tkinfo.real_answer[s])})}else{if(!t.useranswer||!t.useranswer.length)return this.$msg("请选择答案"),!1;c=t.useranswer}(0,a.SubmitPaperAnswer)({paperid:this.paperid,tkid:o,xttkid:s||0,useranswer:c}).then(function(e){e.result?(t.analysis_flag=!0,t.showAnswerStatus=!0,t.userscore=e.data.userscore,t.tkinfo.analysis=e.data.analysis,t.tkinfo.answer=e.data.answer,t.score_rule=e.data.score_rule):(t.analysis_flag=!1,r.$msg(e.msg))})}else t.analysis_flag=!0,t.showAnswerStatus=!0},iKnow:function(){this.$store.ready(function(e){var t=e.userInfo.UserID;s.setStorageSync("EXAM_SLIDE_TIPS_".concat(t),1)}),this.showPaperSlideTips=!1},setDay:function(e,t,i){this.day=e,this.currentData=t,i||this.getDoPracticeDaily()},save:function(t){var i,r=this,o=[];this.paperTkList.map(function(e,t){"dt"==e.type&&o.push({title:e.title,tklist:[]})}),this.paperTkList.map(function(e,t){if("xt"==e.type){var i=[];6==e.tktype?e.tkinfo.childtk.map(function(e,t){i.push({tktype:e.tktype,score:e.score,useranswer:"Array"!==n.default.isArrayOrObject(e.useranswer)?[e.useranswer]:e.useranswer})}):i="Array"!==n.default.isArrayOrObject(e.useranswer)?[e.useranswer]:e.useranswer,o[e.subKey].tklist.push({tkid:e.tkid,useranswer:i,tktype:e.tktype,score:e.score})}});var c={},u=1;switch(this.name){case"testpage":i=a.SetPaperAnswer,u=2==t?0:1,c={categoryid:this.categoryid,paperid:this.paperid,flag:u,answer:o,time:this.second,workid:this.query.workid,stu:this.query.stu};break;case"exercise":switch(i=a.EndTest,c={categoryid:this.categoryid,answer:o,examtime:this.second,type:this.query.type,isrand:this.query.isrand},Number(this.query.type)){case 4:c.sectionid=this.query.sectionid;break;case 5:c.knowledgeid=this.query.knowledgeid;break;case 6:i=a.EndDailyTest,c.dailyid=this.dailyid,c.day=this.day;break;case 7:c.courseid=this.query.courseid,c.typeid=this.query.typeid;break}break}i&&(s.showLoading({title:"正在交卷"}),i(c).then(function(i){if(s.hideLoading(),i.result){var a="";a=1==t?"时间已到，自动交卷成功":2==t?"保存成功":"交卷成功";var n="";r.$msg(a,n).then(function(){switch(r.name){case"testpage":console.log(e(i.subjective_count," at pages\\exam\\testpage.vue:1281")),2!=t&&(i.subjective_count?s.navigateTo({url:"/pages/exam/ownscore?answerid=".concat(i.id,"&title=").concat(r.paper_title,"&paperid=").concat(r.paperid,"&type=1&categoryid=").concat(r.categoryid)}):s.navigateTo({url:"/pages/exam/result?id=".concat(i.id,"&title=").concat(r.paper_title,"&paperid=").concat(r.paperid,"&type=1&categoryid=").concat(r.categoryid)}));break;case"exercise":s.navigateTo({url:"/pages/exam/result?id=".concat(i.id,"&title=查看解析&type=2&categoryid=").concat(r.categoryid)}),thisr.push({path:"/exam/result",query:{type:2,id:i.id,categoryid:r.categoryid,title:"查看解析"}});break}})}}))},getTime:function(e){var t,i;t=Math.floor(e/3600),e-=3600*t,i=Math.floor(e/60),e-=60*i;var s=t<10?"0"+t:t,a=i<10?"0"+i:i,n=e<10?"0"+e:e;this.time=s+":"+a+":"+n},start:function(){var e=this;this.timer=setInterval(function(){e.second+=1,e.getTime(e.second),"testpage"!=e.name&&6!=e.query.type||e.second==60*e.set_time&&e.save(1)},1e3)},submitError:function(){var e=this;(0,a.SetTkCorrection)({tkid:this.correctionid,categoryid:this.categoryid,content:this.redresscon,errortype:this.redressType}).then(function(t){e.showPaperCorrection=!1,e.showTextarea=!0,t.result?e.$msg("提交成功","success").then(function(){e.redresscon=""}):e.$msg(t.msg,"fail").then(function(){-1==t.returncode&&s.navigateTo({url:"/pages/user/login/index"}),e.redresscon=""})})},cancelPay:function(){s.navigateBack()},buyExam:function(){var e=this;this.showPopup=!1,(0,a.PayPaper)({paperid:this.query.paperid}).then(function(t){e.$store.ready(function(i){1==i.isLogin?t.result?e.$msg("支付成功").then(function(){e.$store.dispatch("getUserInfo"),e.loadPage()}):e.$msg(t.msg).then(function(){s.navigateBack()}):s.navigateTo({url:"/pages/user/login/index"})})})}},watch:{redressid:function(){var e=this;this.showClass=!1,this.$nextTick(function(){e.showClass=!0,e.redresscon=""})}},filters:{answer:function(e,t){return e=e.toString(),""===e?"无":4==t?"1"===e?"正确":"错误":e}}};t.default=g}).call(this,i("0de9")["default"],i("6e42")["default"])}},[["4700","common/runtime","common/vendor"]]]);