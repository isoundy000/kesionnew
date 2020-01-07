webpackJsonp([55],{ALCq:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("PeA4"),c=i("BXtI"),n={name:"SelectTicket",mixins:[e.a],data:function(){return{time:"",payNum:"1"}},computed:{canPlus:function(){return-1!=this.currentTicket&&(this.payNum<this.courseInfo.json.content.ticket_info[this.currentTicket].purchase_limit&&this.payNum<this.courseInfo.json.content.ticket_info[this.currentTicket].residue)},canMinus:function(){return-1!=this.currentTicket&&this.payNum>1}},methods:{selectTicket:function(t){1==this.courseInfo.json.content.ticket_info[t].status&&(this.currentTicket=t,localStorage.setItem("currentTicket",t),this.payNum="1")},minusNum:function(){this.payNum>1&&this.payNum--},plusNum:function(){this.payNum<this.courseInfo.json.content.ticket_info[this.currentTicket].purchase_limit&&this.payNum<this.courseInfo.json.content.ticket_info[this.currentTicket].residue&&this.payNum++},nextStep:function(){var t=this;if(-1!=this.currentTicket){if((new Date).getTime()>this.courseInfo.json.content.ticket_info[this.currentTicket].order_date[1])return this.$toast("报名时间已过"),!1;var s=this.courseInfo.json.content.ticket_info[this.currentTicket].receive,i=this.courseInfo.json.content.ticket_info[this.currentTicket].num-s;if(0==(i=i<0?0:i))return this.$toast("已售完没票了"),!1;if(this.payNum>i)return this.$toast("还剩"+i+"张票"),!1;var e=this.$route.params.id,n=this.courseInfo.json.content.ticket_info[this.currentTicket].ticketid,a=this.courseInfo.json.content.ticket_info[this.currentTicket].order_date[0];if((new Date).valueOf()<a)return this.$toast("该活动还未开始"),!1;Object(c.e)({courseid:e,ticketid:n,num:this.payNum}).then(function(s){if("nologin"===s.code&&setTimeout(function(){t.$router.push("/user/login")},500),"error"==s.result)return t.$toast(s.msg),!1;0==t.courseInfo.json.setting.is_pledge?t.$router.push({name:"RegistrationForm",params:{id:t.$route.params.id},query:{ticketIndex:t.currentTicket,num:t.payNum,paymodel:"1"}}):t.$router.push({name:"PayModel",params:{id:t.$route.params.id},query:{ticketIndex:t.currentTicket,num:t.payNum}})})}}}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.loading?i("div",[i("div",{staticClass:"ks-bg-white activity-info"},[i("img",{staticClass:"activity-cover",attrs:{src:t.courseInfo.defaultpic}}),t._v(" "),i("div",{staticClass:"activity-info__content"},[i("div",{staticClass:"ks-fz14"},[t._v("课程活动: "+t._s(t.courseInfo.title))]),t._v(" "),i("div",{staticClass:"count-price"},[i("div",{staticClass:"count"},[t._v("已有 "+t._s(t.courseInfo.json.count_active)+"人报名")]),t._v(" "),i("div",{staticClass:"ks-fz14 price"},[t._v("￥ "+t._s(t.courseInfo.json.min_price)+"起")])])])]),t._v(" "),i("div",t._l(t.courseInfo.json.content.ticket_info,function(s,e){return i("div",{key:e},[t.currentTicket!=e||s.order_date[0]>t.time||0==s.residue?i("div",{staticClass:"ticket-item",on:{click:function(s){return t.selectTicket(e)}}},[i("div",{staticClass:"top"},[i("span",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),0==s.status&&0!=s.residue?i("span",{staticClass:"state__stop-robbing"},[t._v("未开始")]):1==s.status&&0!=s.residue?i("span",{staticClass:"state__robbing"},[t._v("抢票中")]):i("span",{staticClass:"state__stop-robbing"},[t._v("已停售")])]),t._v(" "),0==s.status&&0!=s.residue?i("span",{staticClass:"order-date"},[t._v("售票时间:"+t._s(t.formatTimestamp(s.order_date[0]))+" - "+t._s(t.formatTimestamp(s.order_date[1])))]):t._e(),t._v(" "),i("div",{staticClass:"price"},[0==s.chargetype?i("span",[t._v("免费")]):i("span",[t._v("￥ "+t._s(s.price))])]),t._v(" "),1==s.check?i("div",{staticClass:"check"}):t._e()]):i("div",{staticClass:"ticket-item ticket-item__select"},[i("div",{staticClass:"top"},[i("span",{staticClass:"title"},[t._v(t._s(s.title))])]),t._v(" "),i("div",{staticClass:"ks-line ticket-item__row price"},[0==s.chargetype?i("span",[t._v("免费")]):i("span",[t._v("￥ "+t._s(s.price))])]),t._v(" "),0!=t.courseInfo.json.setting.is_pledge?i("div",{staticClass:"ks-line ticket-item__row"},[i("span",[t._v("保证金 (签到后可退) :")]),t._v(" "),i("span",{staticClass:"price"},[t._v("￥"+t._s(s.cash_deposit))])]):t._e(),t._v(" "),1==s.check?i("div",{staticClass:"ks-line ticket-item__row check__row"},[i("span",{staticClass:"flag"},[t._v("审")]),t._v(" "),i("span",[t._v("报名此票种需要经过主办方审核")])]):t._e(),t._v(" "),i("div",{staticClass:"ks-line ticket-item__row"},[t._v("售票时间:"+t._s(t.formatTimestamp(s.order_date[0]))+" - "+t._s(t.formatTimestamp(s.order_date[1])))]),t._v(" "),i("div",{staticClass:"ks-line ticket-item__row"},[t._v("有效期: "+t._s(t.formatTimestamp(s.effective_date[0]))+" - "+t._s(t.formatTimestamp(s.effective_date[1])))]),t._v(" "),i("div",{staticClass:"ticket-item__row"},[t._v("最大可购: "+t._s(s.purchase_limit))]),t._v(" "),i("div",{staticClass:"ticket-item__row"},[t._v("剩余票数: "+t._s(s.residue))]),t._v(" "),i("div",{staticClass:"ticket-item__row"},[t._v("备注说明: "+t._s(s.explain))]),t._v(" "),t._m(0,!0),t._v(" "),1==s.check?i("div",{staticClass:"check"}):t._e()])])}),0),t._v(" "),i("div",{staticClass:"placeholder"}),t._v(" "),i("div",{staticClass:"bottom"},[i("div",{staticClass:"bottom-left"},[i("span",[t._v("数量:")]),t._v(" \n      "),t.canMinus?i("i",{staticClass:"ks-icon ks-icon-minus-circle-outline",on:{click:t.minusNum}}):i("i",{staticClass:"ks-icon ks-icon-minus-circle minus-disable"}),t._v(" "),i("span",{staticClass:"num"},[t._v(" "+t._s(t.payNum)+" ")]),t._v(" "),t.canPlus?i("i",{staticClass:"ks-icon ks-icon-plus-circle-outline",on:{click:t.plusNum}}):i("i",{staticClass:"ks-icon ks-icon-plus-circle plus-disable"})]),t._v(" "),i("div",{staticClass:"bottom-right"},[i("ks-button",{staticClass:"next-step-btn",attrs:{type:-1!=t.currentTicket?"primary":"",width:"100%"},on:{click:t.nextStep}},[t._v("下一步")])],1)])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"select_current"},[s("i",{staticClass:"ks-icon ks-icon-checkmark-outline"})])}]};var r=i("C7Lr")(n,a,!1,function(t){i("Ov0S")},"data-v-a5962c08",null);s.default=r.exports},Ov0S:function(t,s){}});