webpackJsonp([87],{DCUx:function(e,t){},djvp:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("vMJZ"),r={name:"UserLogin",data:function(){return{username:"",password:""}},methods:{reg:function(){},login:function(){var e=this;return this.username?this.password?(this.$showLoading("正在登录"),void Object(a.f)({username:this.username,password:this.password}).then(function(t){e.$store.dispatch("updateUserInfo").then(function(){e.$hideLoading(),e.$toast("登录成功","success"),e.$navigateBack()})})):(this.$toast("请输入密码"),this.$refs.password.focus(),!1):(this.$toast("请输入账户名"),this.$refs.username.focus(),!1)}},activated:function(){document.title="登录"}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",[s("div",{staticClass:"login"},[s("div",{staticClass:"title"},[e._v("用户登录")]),e._v(" "),s("ul",[s("li",{staticClass:"line"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],ref:"username",attrs:{type:"text",placeholder:"请输入用户名/手机号"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),s("li",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",attrs:{type:"password",autocomplete:"off",placeholder:"请输入登录密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])])]),e._v(" "),s("div",{staticClass:"buttons"},[s("ks-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1),e._v(" "),e.$store.state.is_register?s("div",{staticClass:"buttons"},[s("ks-button",{on:{click:function(t){return e.$router.push("/user/reg")}}},[e._v("立即注册")])],1):e._e(),e._v(" "),s("store-footer")],1)},staticRenderFns:[]};var o=s("C7Lr")(r,n,!1,function(e){s("DCUx")},"data-v-374ed92c",null);t.default=o.exports}});