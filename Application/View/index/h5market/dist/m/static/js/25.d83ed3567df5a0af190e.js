webpackJsonp([25],{"4Cib":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("lC5x"),n=a.n(i),s=a("J0Oq"),c=a.n(s),r=a("vMJZ"),o={components:{cavansPopups:a("w8io").a},data:function(){return{info:{},tabActive:"0",tabList:[{name:"考试证书",val:"0"}],list:[],page:1,pageCount:1}},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c()(n.a.mark(function a(){var i;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.page=e,a.next=3,Object(r.r)({p:e,maxperpage:10});case 3:i=a.sent,t.list=1==e?i.list:t.list.concat(i.list),t.pageCount=i.page.total_pages;case 6:case"end":return a.stop()}},a,t)}))()},onPageChange:function(t){this.getList(t)},getcanvas:function(t,e){var a=this;this.info=t,this.$nextTick(function(){a.$refs.canvas.getcanvas()})}},activated:function(){this.getList()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[t.list&&t.list.length?a("ks-page-scroll-container",{attrs:{page:t.page,"page-count":t.pageCount},on:{"page-change":t.onPageChange}},[a("ks-tabs",{model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},t._l(t.tabList,function(t,e){return a("ks-tab-pane",{key:e,attrs:{label:t.name,name:t.val}})}),1),t._v(" "),a("div",{staticClass:"cerlist"},t._l(t.list,function(e,i){return a("div",{key:i,staticClass:"cerlist-every"},[a("div",{ref:"scream",refInFor:!0,staticClass:"cerlist-every--bg",style:{background:"url("+e.cover+") center center / 100% 100% no-repeat"},on:{click:function(a){return t.getcanvas(e,i)}}},[a("p",{class:["cerlist-every--bg__title","/Public/app/images/certificate_bg2.png"==e.cover?"bgactive":""]},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"cerlist-every--bg__msg"},[a("ks-image",{staticClass:"cerlist-every--bg__image",attrs:{src:t.$store.state.userInfo.headimg,alt:""}}),t._v(" "),a("p",{class:["cerlist-every--bg__name","/Public/app/images/certificate_bg2.png"==e.cover?"bgactive":""]},[t._v(t._s(t.$store.state.userInfo.nickname))]),t._v(" "),a("p",{class:["cerlist-every--bg__grade","/Public/app/images/certificate_bg2.png"==e.cover?"bgactive":""]},[t._v(" 在"+t._s(e.info_title)+"获得了"+t._s(e.sumscore)+"分")]),t._v(" "),a("p",{class:["cerlist-every--bg__com","/Public/app/images/certificate_bg2.png"==e.cover?"bgactive":""]},[a("span",[t._v(t._s(e.json.comment))])])],1),t._v(" "),a("div",{staticClass:"certcon-tem__focus"},[a("div",{staticClass:"certcon-tem__focus--image"},[a("ks-image",{staticClass:"certcon-tem__focus--img",attrs:{src:e.qrcode,alt:""}})],1),t._v(" "),a("div",{staticClass:"certcon-tem__focus--info"},[a("div",{class:["certcon-tem__focus--name","/Public/app/images/certificate_bg2.png"==e.cover?"bgactive":""]},[t._v(t._s(e.share_title))]),t._v(" "),a("div",{class:["certcon-tem__focus--desc","/Public/app/images/certificate_bg2.png"==e.cover?"bgactive":""]},[t._v("识别二维码")])])])]),t._v(" "),a("p",{staticClass:"cerlist-every__time"},[t._v(t._s(e.adddate))])])}),0)],1):a("ks-empty",{attrs:{msg:"暂时没有任何成就"}}),t._v(" "),a("cavansPopups",{ref:"canvas",attrs:{info:t.info}})],1)},staticRenderFns:[]};var g=a("C7Lr")(o,l,!1,function(t){a("ucoN")},"data-v-7db2515a",null);e.default=g.exports},sHW7:function(t,e){},ucoN:function(t,e){},w8io:function(t,e,a){"use strict";var i=a("rVsN"),n=a.n(i),s=new Object;s.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.ctx=t.ctx,this.width=t.width,this.height=t.height},s.circleImg=function(t,e,a,i,n){var s=Math.min(a,i);n>s/2&&(n=s/2),this.ctx.beginPath(),this.ctx.moveTo(t+n,e),this.ctx.arcTo(t+a,e,t+a,e+i,n),this.ctx.arcTo(t+a,e+i,t,e+i,n),this.ctx.arcTo(t,e+i,t,e,n),this.ctx.arcTo(t,e,t+a,e,n),this.ctx.closePath()},s.draw=function(t,e){var a=this.ctx.createPattern(t,"no-repeat");this.circleImg(e.x,e.y,e.width,e.height,1*e.radius||0),this.ctx.fillStyle=a,this.ctx.fill()},s.drawImage=function(t,e){var a=this;return new n.a(function(i){var n=new Image;n.crossOrigin="Anonymous",n.src=t,e.x=e.x||0,e.y=e.y||0,e.radius=e.radius||0,e.width=e.width||a.width,e.height=e.height||a.height,n.onload=function(){e.radius?function(t,e,a,i,n){t.save();var s=2*n,c=a+n,r=i+n;t.arc(c,r,n,0,2*Math.PI),t.clip(),t.drawImage(e,a,i,s,s),t.restore()}(a.ctx,n,e.x,e.y,e.width/2):a.ctx.drawImage(n,e.x,e.y,e.width,e.height),i()}})},s.fillText=function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a.fontSize=a.fontSize||14,a.fontWeight=a.fontWeight||"bold",a.fontStyle=a.fontStyle||"Arial",a.x=a.x||0,a.y=a.y||0,a.padding=a.padding||0,a.fillStyle=a.fillStyle||"black",this.ctx.fillStyle=a.fillStyle,this.ctx.fontWeight=a.fontWeight,t){var i=t.match(/[\u4e00-\u9fa5]/g),n=Number(t.length),s=void 0;s=i&&i.length?Number(i.length):0;var c=Number(a.fontSize),r=n-s;i&&i.length&&r?s*c+r*c/2:i?i.length*c:r*c/2;for(var o=Math.floor((this.width-2*a.padding-a.x)/a.fontSize),l=t.split(""),g=0,h=[],v=0,f=0;f<t.length;f++){var d=c/2;l[f].charCodeAt()>127||94==l[f].charCodeAt()?(g+=2,d*=2):g++,g/2<=o?h[v]?h[v]={text:h[v].text+t.substr(f,1),w:h[v].w+d}:h[v]={text:t.substr(f,1),w:d}:(h[v+=1]={text:t.substr(f,1),w:d},g=0)}this.ctx.font=a.fontSize+"px  "+a.fontStyle,h.map(function(t,i){a.x||(a.x=(e.width-t.w)/2),e.ctx.fillText(t.text,a.x,a.y+i*c)})}};var c=s,r={props:{info:Object},data:function(){return{flag:!1,canvasWidth:.88*window.innerWidth*4,canvasHeight:.88*window.innerWidth/.66*4,canImg:""}},methods:{getcanvas:function(){var t=this;this.$showLoading();var e=Math.ceil(1e7*Math.random()),a=this.$refs.myCanvas,i={ctx:a.getContext("2d"),width:this.canvasWidth,height:this.canvasHeight};c.init(i),c.drawImage(this.info.cover+"?"+e,{width:this.canvasWidth,height:this.canvasHeight,containerWidth:.8*this.canvasWidth}).then(function(){c.drawImage(t.$store.state.userInfo.headimg+"?"+e,{x:.406*t.canvasWidth,y:.262*t.canvasHeight,width:.187*t.canvasWidth,height:.11*t.canvasHeight,radius:40}).then(function(){c.drawImage(t.info.qrcode+"?"+e,{x:.164*t.canvasWidth,y:.76*t.canvasHeight,width:.233*t.canvasWidth,height:.137*t.canvasHeight}).then(function(){var e;e="/Public/app/images/certificate_bg2.png"==t.info.cover?"white":"black",c.fillText(t.info.title,{fontSize:72,padding:30,y:.235*t.canvasHeight,fillStyle:e}),c.fillText(t.$store.state.userInfo.nickname,{fontSize:64,padding:30,y:.425*t.canvasHeight,fillStyle:e}),c.fillText("在"+t.info.info_title+"获得了"+t.info.sumscore+"分",{fontSize:64,padding:30,y:.471*t.canvasHeight,fillStyle:e}),c.fillText(t.info.json.comment,{fontSize:64,padding:30,y:.606*t.canvasHeight,fillStyle:e}),c.fillText("asdasdaasdas",{padding:30,x:.44*t.canvasWidth,y:.8*t.canvasHeight,fillStyle:e,fontSize:56}),c.fillText("长按保存二维码",{padding:30,x:.44*t.canvasWidth,y:.88*t.canvasHeight,fillStyle:"#bdbdb0",fontSize:56})}).then(function(){t.canImg=a.toDataURL("image/png"),t.flag=!0,t.$hideLoading()})})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-overlay",{attrs:{show:t.flag},on:{click:function(e){t.flag=!1}}},[a("div",{staticClass:"Canvas"},[a("canvas",{ref:"myCanvas",staticClass:"canvas-can",attrs:{width:t.canvasWidth,height:t.canvasHeight}})]),t._v(" "),a("div",{staticClass:"canImg"},[t.canImg?a("img",{staticClass:"canImg-image",style:{width:t.canvasWidth/4+"px",height:t.canvasHeight/4+"px"},attrs:{src:t.canImg}}):t._e()]),t._v(" "),a("div",{staticClass:"operation"},[a("p",[t._v("长按保存图片，发微信好友或微信群")])])])],1)},staticRenderFns:[]};var l=a("C7Lr")(r,o,!1,function(t){a("sHW7")},"data-v-07c9917b",null);e.a=l.exports}});