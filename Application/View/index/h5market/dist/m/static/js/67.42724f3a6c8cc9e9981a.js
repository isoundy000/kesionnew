webpackJsonp([67],{OaZW:function(t,e){},yyiY:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Llv5"),i={name:"TeacherList",data:function(){return{loaded:!1,teacherList:[],params:{act:"appTeacher",callKeyName:"getTeacherList",p:1,data:{},maxperpage:10},pageCount:null}},methods:{open:function(t){this.$router.push("/teacher/"+t)},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loaded=!1,this.$showLoading(),this.params.p=e,Object(s.a)([this.params]).then(function(e){t.teacherList=e.getTeacherList.list,t.pageCount=e.getTeacherList.page.total_pages,t.loaded=!0,t.$hideLoading()})}},activated:function(){document.title="名师大咖"},created:function(){this.getList()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.teacherList.length?a("ks-page-scroll-container",{staticClass:"teacher-list",attrs:{page:t.params.p,"page-count":t.pageCount},on:{"page-change":t.getList}},t._l(t.teacherList,function(e,s){return a("div",{key:s,staticClass:"teacher-list__item",on:{click:function(a){return t.open(e.userid)}}},[a("ks-create-bg",{staticClass:"teacher-list__head",attrs:{"border-radius":"50%",position:"absolute",src:e.head,type:"user"}}),t._v(" "),a("div",{staticClass:"teacher-list__text"},[a("div",{staticClass:"teacher-list__name"},[t._v("\n          "+t._s(e.name)+"\n          "),a("span",[t._v(t._s(e.position))])]),t._v(" "),a("div",{staticClass:"teacher-list__introduce"},[t._v(t._s(e.shortIntro))])])],1)}),0):t.loaded?a("ks-empty",{attrs:{msg:"暂未发现任何老师~"}}):t._e()],1)},staticRenderFns:[]};var r=a("C7Lr")(i,n,!1,function(t){a("OaZW")},"data-v-74a1c612",null);e.default=r.exports}});