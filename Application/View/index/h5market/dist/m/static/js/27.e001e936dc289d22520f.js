webpackJsonp([27],{AYCh:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Llv5"),i=s("rVsN"),r=s.n(i),c=s("60kx");var n={name:"TeacherView",data:function(){return{loaded:!1,detail:{},teacherList:[],sort:2,teacherCourseList:[]}},methods:{changeSort:function(t){this.sort=t,this.getTeacherCourses()},getTeacherCourses:function(){var t=this;this.$showLoading();var e,s=this.$route.params.id;(e={userid:s,order:this.sort,maxperpage:20},new r.a(function(t){Object(c.b)("Microportal.common.getTeacherLinkCourse",e).then(function(e){t(e)})})).then(function(e){t.teacherCourseList=e.list,t.$hideLoading()})},openCourseView:function(t){this.$router.push("/course/"+t)},openTeacherView:function(t){this.$router.push("/teacher/"+t),this.dataInit()},dataInit:function(){var t=this;this.loaded=!1,document.title="";var e,s=this.$route.params.id;(e={userid:s},new r.a(function(t){Object(c.b)("Microportal.common.getTeacherDetail",e).then(function(e){t(e)})})).then(function(e){e.detail.teacherIntro=e.detail.teacherIntro||"暂无介绍",t.detail=e.detail,document.title=e.detail.name,t.loaded=!0}),this.getTeacherCourses(),Object(a.a)([{act:"appTeacher",callKeyName:"getTeacherList",p:1,data:{},maxperpage:3}]).then(function(e){t.teacherList=e.getTeacherList.list})}},activated:function(){this.dataInit()}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loaded?a("div",[a("div",{staticClass:"head"},[t._m(0),t._v(" "),a("div",{staticClass:"teach-info"},[a("div",{staticClass:"teach-info-icon"},[a("ks-create-bg",{staticClass:"teach-info-icon__img",staticStyle:{width:"100px",height:"100px"},attrs:{src:t.detail.head,type:"teacher","border-radius":"50%"}}),t._v(" "),a("div",{staticClass:"teach-name"},[t._v(t._s(t.detail.name))]),t._v(" "),a("p",{staticClass:"teach-txt"},[t._v("\n          "+t._s(t.detail.position)+"\n          "),a("br")])],1)])]),t._v(" "),a("div",{staticClass:"teacher-intro"},[a("div",{staticClass:"teacher-intro__item"},[a("h2",{staticClass:"teacher-view-h2"},[t._v("名师介绍")]),t._v(" "),a("div",{staticClass:"teacher-intro__cons",domProps:{innerHTML:t._s(t.detail.teacherIntro)}})])]),t._v(" "),a("div",{staticClass:"list"},[a("h2",{staticClass:"teacher-view-h2"},[t._v("相关课程")]),t._v(" "),a("span",{staticClass:"list-right"},[a("span",{class:2==t.sort&&"ks-color-primary",on:{click:function(e){return t.changeSort(2)}}},[t._v("最受欢迎")]),t._v("/\n      "),a("span",{class:1==t.sort&&"ks-color-primary",on:{click:function(e){return t.changeSort(1)}}},[t._v("最新课程")])]),t._v(" "),t.teacherCourseList.length?a("div",{staticClass:"list-card ks-row"},t._l(t.teacherCourseList,function(e,i){return a("div",{key:i,staticClass:"ks-col-12",on:{click:function(s){return t.openCourseView(e.courseid)}}},[a("div",{staticClass:"list-card__item"},[a("ks-create-bg",{staticClass:"list-card__item__img",attrs:{src:e.defaultpic}}),t._v(" "),a("ks-text",{staticClass:"list-card__txt",attrs:{"font-size":"14px"}},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"list-card__info"},[a("span",[a("img",{attrs:{src:s("RAbA")}}),t._v("\n              "+t._s(e.studentcount)+"\n            ")]),t._v(" "),a("span",{staticClass:"list-card__info__money"},[t._v(t._s(e.price)+"元")])])],1)])}),0):a("ks-empty",{attrs:{msg:"没有相关课程"}})],1),t._v(" "),a("div",{staticClass:"tail"},[a("h2",{staticClass:"teacher-view-h2"},[t._v("相关老师")]),t._v(" "),a("div",{staticClass:"ks-row"},t._l(t.teacherList,function(e){return a("div",{key:e.userid,staticClass:"ks-col-8"},[a("div",{staticClass:"tail-item",on:{click:function(s){return t.openTeacherView(e.userid)}}},[a("ks-create-bg",{staticClass:"tail-item__avatar",attrs:{"border-radius":"50%",src:e.head}}),t._v(" "),a("p",[t._v(t._s(e.name))])],1)])}),0),t._v(" "),a("span",{staticClass:"more"},[a("i",{staticClass:"eva-icon arrow-ios-forward-outline"}),t._v(" "),a("router-link",{attrs:{to:"/teacher"}},[t._v("查看更多")])],1)]),t._v(" "),a("store-footer")],1):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-bgm"},[e("img",{attrs:{src:s("HzOy")}})])}]};var l=s("C7Lr")(n,o,!1,function(t){s("gA4m")},"data-v-05e18721",null);e.default=l.exports},HzOy:function(t,e,s){t.exports=s.p+"static/img/mBanner.c45872a.png"},RAbA:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVQ4T6WTUXHDQBBDtQwCoRBSBikDmUEYNAwaCAmCpghOEAwhDFoIYbAd3diei+O0H74fz9i7b7XSObDyxMp+PABIbgC8SLqSJABGxCYzbwCOkn7aoXcAknsAOwAyxIWSTn4aHBHKzH0LmQAk3eAJhqDrur6UYth0BnWuOYwvW4CLN5I0FB4kHecezcEtYAvA8ir9iYK7GtfNPfC+3wC+vDaA7Qj0ihFxyUxKsqH1tArs/ntEvGWmTbwA+IyIVwBXm5uZH5LODyk0DtugfoxvHhtJ+2ST7U9VURWQtFn90FyLxjTmJg7DvIprbhXQdZ1KKd7ZMEufJizd1EHJzilNCsbISJ7anJ9ddQ+yynkKjsnkevv+OouA/5qWvq/+G38BjvOeERHjESQAAAAASUVORK5CYII="},gA4m:function(t,e){}});