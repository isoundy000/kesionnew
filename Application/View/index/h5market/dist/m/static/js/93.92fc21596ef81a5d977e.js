webpackJsonp([93],{"4mNt":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("vMJZ"),n={data:function(){return{tabActive:0,value1:0,option1:[{text:"全部分类",value:0}],tabList:[{name:"全部",value:0}],pageFlag:!1,list:[],page:1,pageCount:1,groupid:0,classid:0}},methods:{handleClick:function(t){this.groupid=t,this.studentList()},dropdown:function(t){this.classid=t,this.studentList()},studentList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=a,Object(s.G)({p:a,maxperpage:10,keyword:this.$route.query.key,groupid:this.groupid,extuserid:this.classid}).then(function(e){console.log(e),e.list.map(function(t){1==t.status?t.flag=!0:t.flag=!1}),t.pageCount=e.page.total_pages,t.list=1==a?e.list:t.list.concat(e.list),console.log(t.list)})},onPageChange:function(t){this.studentList(t)},changeFlag:function(t){Object(s.D)({userid:t})}},computed:{key:function(){return this.$route.query.key}},watch:{key:function(){this.studentList()}},created:function(){var t=this;Object(s.R)().then(function(a){a.list.map(function(a){t.option1.push({text:a.username,value:a.userid})})}),Object(s.B)().then(function(a){a.data.map(function(a){t.tabList.push({name:a.name,value:a.id})}),t.pageFlag=!0}),this.studentList()}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.pageFlag?e("div",{staticClass:"page"},[e("ks-page-scroll-container",{attrs:{page:t.page,"page-count":t.pageCount},on:{"page-change":t.onPageChange}},[e("div",{staticClass:"student"},[e("div",{staticClass:"student-head"},[e("kd-search",{staticClass:"search",attrs:{placeholder:"搜索学员"}}),t._v(" "),e("van-dropdown-menu",[e("van-dropdown-item",{staticClass:"option1",attrs:{options:t.option1},on:{change:t.dropdown},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}})],1)],1),t._v(" "),e("ks-tabs",{on:{"tab-click":t.handleClick},model:{value:t.tabActive,callback:function(a){t.tabActive=a},expression:"tabActive"}},t._l(t.tabList,function(t,a){return e("ks-tab-pane",{key:a,attrs:{label:t.name,name:t.value}})}),1)],1),t._v(" "),t._l(t.list,function(a,s){return e("div",{key:s,staticClass:"accountList"},[e("div",{staticClass:"accountList-msg"},[e("div",{staticClass:"accountList-msg__left"},[e("ks-image",{attrs:{src:a.head}}),t._v(" "),e("span",[t._v(t._s(a.username))])],1),t._v(" "),e("div",{staticStyle:{height:"20px"},on:{click:function(e){return t.changeFlag(a.userid)}}},[e("ks-switch",{staticClass:"ks-fl",model:{value:a.flag,callback:function(e){t.$set(a,"flag",e)},expression:"item.flag"}})],1)]),t._v(" "),e("div",{staticClass:"accountList-info"},[e("span",[t._v(t._s(a.group_name))])]),t._v(" "),e("div",{staticClass:"accountList-infos"},[e("span",[t._v("推荐人："+t._s(a.inviter))])])])}),t._v(" "),t.list.length?t._e():e("ks-empty",{attrs:{msg:"当前没有任何数据~"}})],2)],1):t._e()},staticRenderFns:[]};var c=e("C7Lr")(n,i,!1,function(t){e("mafY")},"data-v-18499507",null);a.default=c.exports},mafY:function(t,a){}});