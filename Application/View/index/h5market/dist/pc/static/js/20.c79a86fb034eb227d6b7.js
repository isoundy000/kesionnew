webpackJsonp([20],{VLUi:function(t,e,a){"use strict";e.b=function(t){return new i.a(function(e){Object(r.b)("Microportal.common.getTeacherDetail",t).then(function(t){e(t)})})},e.c=function(t){return new i.a(function(e){Object(r.b)("Microportal.common.getTeacherLinkCourse",t).then(function(t){e(t)})})},e.a=function(t){return new i.a(function(e){t.act="appTeacher",t.callKeyName="teacher",Object(r.b)("Microportal.Common.import",[t]).then(function(t){e(t.teacher)})})};var n=a("rVsN"),i=a.n(n),r=a("60kx")},q3nZ:function(t,e){},qXTH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VLUi"),i={name:"Teacher",data:function(){return{pageCount:null,params:{p:1,maxperpage:9},teacherList:[]}},methods:{open:function(t,e){this.$router.push({name:t,params:{id:e}})},goSearch:function(){},getTeacherList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.params.p=e,Object(n.a)(this.params).then(function(e){t.pageCount=e.page.total_pages,t.teacherList=e.list})}},created:function(){this.getTeacherList()},activated:function(){}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"teacher"},[a("ks-container",{staticClass:"teacher-list",attrs:{title:"名师列表"}},[a("el-row",{attrs:{gutter:36}},t._l(t.teacherList,function(e,n){return a("el-col",{key:n,attrs:{span:8}},[a("div",{staticClass:"teacher-list__item",on:{click:function(a){return t.open("TeacherDetail",e.userid)}}},[a("div",{staticClass:"teacher-list__image"},[a("ks-image",{attrs:{src:e.head,type:"user"}})],1),t._v(" "),a("h2",[t._v(t._s(e.name))]),t._v(" "),a("h3",[t._v(t._s(e.position))]),t._v(" "),a("p",[t._v(t._s(e.shortIntro))]),t._v(" "),e.course_info.length>0?a("div",{staticClass:"teacher-list__course"},[a("h4",[t._v("讲师力荐课程")]),t._v(" "),t._l(e.course_info,function(e,n){return a("div",{key:n,staticClass:"teacher-list__box",on:{click:function(a){return a.stopPropagation(),t.open("CourseDetail",e.courseid)}}},[a("div",{staticStyle:{float:"left",width:"100%"}},[a("ks-image",{attrs:{src:e.defaultpic,fit:"cover"}}),t._v(" "),a("div",{staticClass:"teacher-list__right"},[a("h5",[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.studentcount)+"人加入学习")])])],1)])}),t._v(" "),a("div",{staticClass:"teacher-list__more"},[t._v("查看更多")])],2):t._e()])])}),1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[t.pageCount>0?a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-count":t.pageCount},on:{"current-change":t.getTeacherList}}):a("ks-empty",{attrs:{msg:"暂无教师数据"}})],1)],1)},staticRenderFns:[]};var c=a("C7Lr")(i,r,!1,function(t){a("q3nZ")},"data-v-fb72e388",null);e.default=c.exports}});