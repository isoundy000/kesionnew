(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/proposal/index"],{"2ac6":function(t,n,e){"use strict";e.r(n);var o=e("af40"),i=e("cd3f");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("3bd1");var a=e("2877"),c=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"eceefa78",null);n["default"]=c.exports},"3bd1":function(t,n,e){"use strict";var o=e("51f5"),i=e.n(o);i.a},"4bd6":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("3ae9"),i=function(){return e.e("components/uni/mpvue-picker/mpvue-picker").then(e.bind(null,"5195"))},u={components:{MpvuePicker:i},data:function(){return{content:"",fontNum:500,remainingNum:500,state:{},themeColor:"#ff663d",pickerValueDefault:[1],pickerValueArray:[{label:"建议反馈",value:0},{label:"违法违规举报",value:1}],pickerText:{label:"建议反馈",value:[0]}}},onLoad:function(){var t=this;this.$store.ready(function(n){t.state=n})},methods:{onConfirm:function(t){this.pickerText=t},conInput:function(t){this.content=t.detail.value,this.remainingNum=this.fontNum-this.content.length},showPicker:function(){this.$refs.mpvuePicker.show()},submit:function(){this.content?(t.showLoading({title:"正在提交中"}),(0,o.Pasttrial)({content:this.content}).then(function(n){t.hideLoading(),n.result?t.showToast({title:"提交成功",duration:2e3,icon:"none"}):t.showToast({title:n.msg,duration:2e3,icon:"none"})})):t.showToast({title:"请输入内容",duration:2e3,icon:"none"})}}};n.default=u}).call(this,e("6e42")["default"])},"51f5":function(t,n,e){},af40:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},cd3f:function(t,n,e){"use strict";e.r(n);var o=e("4bd6"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=i.a},e940:function(t,n,e){"use strict";(function(t){e("3099"),e("921b");o(e("66fd"));var n=o(e("2ac6"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["e940","common/runtime","common/vendor"]]]);