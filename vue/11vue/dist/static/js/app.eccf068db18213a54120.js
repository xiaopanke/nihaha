webpackJsonp([1],{"5d34":function(t,e){},"7GK5":function(t,e){},"7VP5":function(t,e){},"7dfX":function(t,e){},"D/5c":function(t,e,n){t.exports=n.p+"static/img/timg.342b84c.jpeg"},DmEO:function(t,e){},EbwR:function(t,e){},FpFs:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";function o(t){n("rgIa")}function s(t){n("wtxf")}function i(t){n("mj2/")}function r(t){n("EbwR")}function a(t){n("7VP5")}function c(t){n("q68R")}function l(t){n("FpFs")}function u(t){n("7GK5")}function p(t){n("cCXh")}function d(t){n("VxY4")}function h(t){n("DmEO")}function f(t){n("pGZ4")}function v(t){n("5d34")}function m(t){n("bu7e")}function b(t){n("NnWk")}function g(t){n("7dfX")}Object.defineProperty(e,"__esModule",{value:!0});var _=n("7+uW"),w={data:function(){return{msg:"123"}}},x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("ul",[n("li",[n("router-link",{attrs:{to:"/eventbus"}},[t._v("eventbusa")]),t._v(" "),n("router-link",{attrs:{to:"/uploadimg"}},[t._v("改头像")]),t._v(" "),n("router-link",{attrs:{to:"/stylus"}},[t._v("stylus")]),t._v(" "),n("router-link",{attrs:{to:"/created"}},[t._v("created")]),t._v(" "),n("router-link",{attrs:{to:"/vuex"}},[t._v("vuex")]),t._v(" "),n("router-link",{attrs:{to:"/vuexa"}},[t._v("vuexa")]),t._v(" "),n("router-link",{attrs:{to:"/vuexb"}},[t._v("vuexb")]),t._v(" "),n("router-link",{attrs:{to:"/toastparent"}},[t._v("toastparent")]),t._v(" "),n("router-link",{attrs:{to:"/upload"}},[t._v("upload")]),t._v(" "),n("router-link",{attrs:{to:"/swiperdemo"}},[t._v("swiperdemo")])],1)])])},y=[],N={render:x,staticRenderFns:y},$=N,k=n("VU/8"),O=o,U=k(w,$,!1,O,"data-v-0629f610",null),E=U.exports,C={components:{Navbar:E}},R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),t._v(" "),n("router-view")],1)},F=[],X={render:R,staticRenderFns:F},j=X,T=n("VU/8"),V=s,q=T(C,j,!1,V,null,null),D=q.exports,I=n("/ocq"),P={data:function(){return{msg:"123"}},beforeCreate:function(){console.group("%c%s","color:green","beforeCreate 创建前状态===============组件a》")},created:function(){console.group("%c%s","color:green","created 创建完毕状态===============组件a》")},beforeMount:function(){console.group("%c%s","color:green","beforeMount 挂载前状态===============组件a》")},mounted:function(){console.group("%c%s","color:green","mounted 挂载状态===============组件a》")},beforeUpdate:function(){console.group("%c%s","color:green","beforeUpdate 更新前状态===============组件a》")},updated:function(){console.group("%c%s","color:green","updated 更新状态===============组件a》")},beforeDestroy:function(){bus.$emit("get",{item:"a的item ",date:"a的date"}),console.group("%c%s","color:green","beforeDestroy 破前状态===============组件a》")},destroyed:function(){console.group("%c%s","color:green","destroyed 破坏状态===============组件a》")},methods:{gob:function(){this.$router.replace({path:"/eventbusb"})}}},W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("span",{on:{click:t.gob}},[t._v("我是a页面的按钮")])])},S=[],M={render:W,staticRenderFns:S},L=M,H=n("VU/8"),A=i,G=H(P,L,!1,A,"data-v-467fac07",null),z=G.exports,J={data:function(){return{msg:"123"}},components:{Eventbusa:z}},Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Eventbusa")],1)},B=[],K={render:Y,staticRenderFns:B},Z=K,Q=n("VU/8"),tt=r,et=Q(J,Z,!1,tt,"data-v-86105ac4",null),nt=et.exports,ot={data:function(){return{msg:"123"}},beforeCreate:function(){console.group("%c%s","color:red","beforeCreate 创建前状态===============组件b》")},created:function(){console.group("%c%s","color:red","created 创建完毕状态===============组件b》"),bus.$on("get",this.myhandle)},beforeMount:function(){console.group("%c%s","color:red","beforeMount 挂载前状态===============组件b》")},mounted:function(){console.group("%c%s","color:red","mounted 挂载状态===============组件b》")},beforeUpdate:function(){console.group("%c%s","color:red","beforeUpdate 更新前状态===============组件b》")},updated:function(){console.group("%c%s","color:red","updated 更新状态===============组件b》")},beforeDestroy:function(){bus.$off("get",this.myhandle),console.group("%c%s","color:red","beforeDestroy 破前状态===============组件b》")},destroyed:function(){console.group("%c%s","color:red","destroyed 破坏状态===============组件b》")},methods:{myhandle:function(t){console.log(t,"这是从上个页面传递过来的参数")}}},st=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"hello"},[t._v("\n  bb\n")])},it=[],rt={render:st,staticRenderFns:it},at=rt,ct=n("VU/8"),lt=a,ut=ct(ot,at,!1,lt,"data-v-eac2d55e",null),pt=ut.exports,dt={data:function(){return{imgurl:n("D/5c")}},components:{},methods:{uploadHeadImg:function(){this.$refs.hiddenInput.click()},handleFile:function(t){var e=this,n=t.target||t.srcElement,o=n.files[0],s=new FileReader;s.onload=function(t){var n=t.target||t.srcElement,o=new Image;o.onload=function(){setTimeout(function(){e.imgurl=n.result},2e3)},o.src=n.result},s.readAsDataURL(o)}}},ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  更改头像\n  "),n("span",{staticClass:"img",on:{click:function(e){e.stopPropagation(),t.uploadHeadImg(e)}}},[n("img",{directives:[{name:"autofix",rawName:"v-autofix"}],attrs:{src:t.imgurl,alt:""}})]),t._v(" "),n("input",{ref:"hiddenInput",attrs:{type:"file",accept:"image/*"},on:{change:t.handleFile}})])},ft=[],vt={render:ht,staticRenderFns:ft},mt=vt,bt=n("VU/8"),gt=c,_t=bt(dt,mt,!1,gt,"data-v-e91d0132",null),wt=_t.exports,xt={data:function(){return{}}},yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},Nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"haha"},[n("ul",[n("li",[t._v("\n        113\n      ")]),t._v(" "),n("li",[t._v("\n        113\n      ")])])])}],$t={render:yt,staticRenderFns:Nt},kt=$t,Ot=n("VU/8"),Ut=l,Et=Ot(xt,kt,!1,Ut,"data-v-93f90ece",null),Ct=Et.exports,Rt={data:function(){return{msg:"123"}},created:function(){var t=this;console.log("created"),console.log(this.$refs.span),console.log(this),this.$nextTick(function(){console.log(1),console.log(t.$refs.span)})},mounted:function(){console.log("mounted"),console.log(this.$refs.span),console.log(this)}},Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("span",{ref:"span",attrs:{id:"span"}},[t._v("我是span")])])},Xt=[],jt={render:Ft,staticRenderFns:Xt},Tt=jt,Vt=n("VU/8"),qt=u,Dt=Vt(Rt,Tt,!1,qt,"data-v-79c70e7a",null),It=Dt.exports,Pt=n("Dd8w"),Wt=n.n(Pt),St=n("NYxO"),Mt={data:function(){return{}},methods:Wt()({},Object(St.b)({addhaha:"add"}),Object(St.d)(["add"])),computed:Wt()({},Object(St.e)(["count","count2"]),Object(St.c)({getcount:"count"}))},Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._v("\n    "+t._s(t.$store.state.count)+"\n    "+t._s(this.$store.state.count)+"\n    "),t._v("\n    "+t._s(t.count)+"\n    "+t._s(t.count2)+"\n    "),t._v("\n    "+t._s(this.$store.getters.count)+"\n    "+t._s(t.getcount)+"\n    "),n("span",{on:{click:function(e){t.add(6)}}},[t._v("加6")]),t._v(" "),n("span",{on:{click:function(e){t.$store.dispatch("add",10)}}},[t._v("加10")]),t._v(" "),n("span",{on:{click:function(e){t.addhaha(11)}}},[t._v("加11")])])},Ht=[],At={render:Lt,staticRenderFns:Ht},Gt=At,zt=n("VU/8"),Jt=p,Yt=zt(Mt,Gt,!1,Jt,"data-v-07c26590",null),Bt=Yt.exports,Kt={data:function(){return{}},methods:Wt()({},Object(St.b)({addhaha:"add"}),Object(St.d)(["add"])),computed:Wt()({},Object(St.e)(["count","count2"]),Object(St.c)({getcount:"count"}))},Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._v("我是vuexa页面\n    "+t._s(t.$store.state.count)+"\n    "+t._s(this.$store.state.count)+"\n    "),t._v("\n    "+t._s(t.count)+"\n    "+t._s(t.count2)+"\n    "),t._v("\n    "+t._s(this.$store.getters.count)+"\n    "+t._s(t.getcount)+"\n    "),n("span",{on:{click:function(e){t.add(6)}}},[t._v("加6")]),t._v(" "),n("span",{on:{click:function(e){t.$store.dispatch("add",10)}}},[t._v("加10")]),t._v(" "),n("span",{on:{click:function(e){t.addhaha(11)}}},[t._v("加11")])])},Qt=[],te={render:Zt,staticRenderFns:Qt},ee=te,ne=n("VU/8"),oe=d,se=ne(Kt,ee,!1,oe,"data-v-c5d5bdc6",null),ie=se.exports,re={data:function(){return{}}},ae=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{},[t._v("\n    bbbbbb\n")])},ce=[],le={render:ae,staticRenderFns:ce},ue=le,pe=n("VU/8"),de=h,he=pe(re,ue,!1,de,"data-v-273f269f",null),fe=he.exports,ve={data:function(){return{show:!0}},props:{msg:{default:"我是一个提示框"}},beforeCreate:function(){console.group("%c%s","color:red","beforeCreate 创建前状态》")},created:function(){console.group("%c%s","color:red","created 创建完毕状态》")},beforeMount:function(){console.group("%c%s","color:red","beforeMount 挂载前状态》")},mounted:function(){console.group("%c%s","color:red","mounted 挂载状态》")},beforeUpdate:function(){console.group("%c%s","color:red","beforeUpdate 更新前状态》")},updated:function(){var t=this;console.group("%c%s","color:red","updated 更新状态》"),setTimeout(function(){t.show=!1},3e3)},beforeDestroy:function(){console.group("%c%s","color:red","beforeDestroy 破前状态》")},destroyed:function(){console.group("%c%s","color:red","destroyed 破坏状态》")}},me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{},[t._v("\n  "+t._s(t.msg)+"\n")]):t._e()},be=[],ge={render:me,staticRenderFns:be},_e=ge,we=n("VU/8"),xe=f,ye=we(ve,_e,!1,xe,"data-v-ec176268",null),Ne=ye.exports,$e={data:function(){return{msg:123}},components:{Toast:Ne},methods:{showtoast:function(){this.msg=576}}},ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._v("\n    toastparent\n    "),n("span",{on:{click:t.showtoast}},[t._v("按钮，点击之后出现toast")]),t._v(" "),n("Toast",{attrs:{msg:t.msg}})],1)},Oe=[],Ue={render:ke,staticRenderFns:Oe},Ee=Ue,Ce=n("VU/8"),Re=v,Fe=Ce($e,Ee,!1,Re,"data-v-31081aa7",null),Xe=Fe.exports,je={data:function(){return{file:{filename:"",fileprogress:0}}},created:function(){},mounted:function(){},methods:{uploadclick:function(){this.$refs.upbtninput.click()},uploadfn:function(t){var e=this,n=t.target||t.srcElement;this.file.filename=n.files[0].name;var o=n.files[0],s=o.size,i=new FileReader;console.log(i),i.readAsDataURL(o),i.onload=function(t){t.target||t.srcElement},i.onprogress=function(t){e.file.fileprogress=t.loaded/s*100,console.log(e.file.fileprogress)},i.onabort=function(){console.log("文件上传中断,请重试")},i.onerror=function(){console.log("文件上传出错，请重试")}}}},Te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn btn-default upbtn",on:{click:t.uploadclick}},[t._v("上传文件")]),t._v(" "),n("input",{ref:"upbtninput",staticClass:"hidden upbtninput",attrs:{type:"file",accept:".csv,.xlsx"},on:{change:function(e){t.uploadfn(e)}}}),t._v(" "),n("button",{staticClass:"btn btn-default"},[t._v("下载模板")]),t._v(" "),n("br"),t._v("文件名："),n("span",{staticClass:"name"},[t._v(t._s(t.file.filename))]),t._v(" "),n("br"),t._v("文件上传进度：\n        "),n("div",{staticClass:"row"},[n("div",{staticClass:"progress col-md-6 col-md-offset-3"},[n("span",{style:{width:t.file.fileprogress+"%"}})])])])])},Ve=[],qe={render:Te,staticRenderFns:Ve},De=qe,Ie=n("VU/8"),Pe=m,We=Ie(je,De,!1,Pe,"data-v-5a4e6266",null),Se=We.exports,Me={data:function(){return{x:-document.documentElement.getBoundingClientRect().width,w:document.documentElement.getBoundingClientRect().width,oUl:"",aLi:"",iNow:1,bReady:!0,downX:"",disX:"",timer:"",aSpan:"",speed:0,leng:0}},mounted:function(){this.oUl=this.$refs.swiper,this.aLi=this.oUl.children,this.aSpan=this.$refs.dotbtn.children,this.leng=this.aLi.length,console.log(this.leng),this.speed=this.options.speed||.5,this.initswiper()},props:["options","swiperimg"],methods:{initswiper:function(){this.oUl.style.width=this.leng*this.w+"px",this.options.loop?this.oUl.style.WebkitTransform="translateX("+this.x+"px)":(this.iNow=0,this.x=0,this.aSpan[0].style.background="green"),this.options.autoplay&&this.autoplayfn()},go:function(t,e){!this.options.loop&&(t.style&&this.iNow==this.aSpan.length-1&&(this.iNow=-1),t.currentTarget&&"0.3"==t.currentTarget.style.opacity)||0!=this.bready&&(this.bready=!1,clearInterval(this.timer),this.iNow+=e,this.panduaniNow(),this.dongqilai(1))},startfn:function(t){console.log("startfn"),0!=this.bready&&(this.bready=!1,clearInterval(this.timer),this.oUl.style.WebkitTransition="none",this.downX=t.targetTouches[0].pageX,this.disX=this.downX-this.x,console.log(this.downX,this.disX),console.log("startfn"))},movefn:function(t){t.preventDefault(),!this.options.loop&&t.targetTouches[0].pageX-this.disX>=100?this.oUl.style.WebkitTransform="translateX(100px)":!this.options.loop&&t.targetTouches[0].pageX-this.disX<=-this.w*(this.leng-1)-100||(this.oUl.style.WebkitTransform="translateX("+(t.targetTouches[0].pageX-this.disX)+"px)")},endfn:function(t){this.$refs.swiper.removeEventListener("touchmove",this.movefn);var e=t.changedTouches[0].pageX;this.downX==e&&(this.bready=!0),Math.abs(e-this.downX)>50&&(this.downX>e?this.iNow++:this.iNow--,this.options.loop||(-1==this.iNow&&(this.iNow=0),this.iNow==this.leng&&(this.iNow=this.leng-1)),this.panduaniNow()),this.dongqilai(1)},tend:function(){this.bready=!0,this.oUl.removeEventListener("transitionend",this.tend,!1),this.options.loop?(this.iNow==this.leng-1&&(this.iNow=1),0==this.iNow&&(this.iNow=this.leng-2),this.dongqilai(0)):this.dongqilai(1)},dotclick:function(t){(this.options.loop||t!=this.iNow)&&(this.options.loop&&t+1==this.iNow||0!=this.bready&&(this.bready=!1,clearInterval(this.timer),this.options.loop?this.iNow=t+1:this.iNow=t,this.dongqilai(1)))},panduaniNow:function(){this.iNow==this.leng&&(this.iNow=this.leng-1),-1==this.iNow&&(this.iNow=0)},dongqilai:function(t){0==t?this.oUl.style.WebkitTransition="none":(this.oUl.style.WebkitTransition=this.speed+"s all ease",this.oUl.addEventListener("transitionend",this.tend,!1),this.dotsspancur()),this.x=-this.iNow*this.w,this.oUl.style.WebkitTransform="translate3d("+this.x+"px,0,0)",this.options.autoplay&&this.autoplayfn()},autoplayfn:function(){var t=this;clearInterval(this.timer),this.timer=setInterval(function(){t.go(t.$refs.nextbtn,1)},this.options.autoplay)},dotsspancur:function(){this.options.loop?(0!=this.iNow&&this.iNow!=this.aSpan.length||(this.aSpan[this.aSpan.length-1].style.background="green"),1!=this.iNow&&this.iNow!=this.aSpan.length+1||(this.aSpan[0].style.background="green")):this.iNow==this.aSpan.length-1?(this.$refs.nextbtn.style.opacity=".3",this.$refs.prevbtn.style.opacity="1"):0==this.iNow?(this.$refs.prevbtn.style.opacity=".3",this.$refs.nextbtn.style.opacity="1"):(this.$refs.nextbtn.style.opacity="1",this.$refs.prevbtn.style.opacity="1")}}},Le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("ul",{ref:"swiper",staticClass:"swiper",on:{touchstart:function(e){t.startfn(e)},touchmove:function(e){t.movefn(e)},touchend:function(e){t.endfn(e)}}},[t.options.loop?n("li",{staticClass:"item",style:{width:t.w+"px"}},[n("img",{ref:"img",attrs:{src:t.swiperimg[t.swiperimg.length-1].src}})]):t._e(),t._v(" "),t._l(t.swiperimg,function(e,o){return n("li",{key:o,staticClass:"item",style:{width:t.w+"px"}},[n("img",{ref:"img",refInFor:!0,attrs:{src:e.src}})])}),t._v(" "),t.options.loop?n("li",{staticClass:"item",style:{width:t.w+"px"}},[n("img",{ref:"img",attrs:{src:t.swiperimg[0].src}})]):t._e()],2),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.options.prevnextbtn,expression:"options.prevnextbtn"}],ref:"prevbtn",staticClass:"prevbtn",on:{click:function(e){t.go(e,-1)}}},[t._v("<")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.options.prevnextbtn,expression:"options.prevnextbtn"}],ref:"nextbtn",staticClass:"nextbtn",on:{click:function(e){t.go(e,1)}}},[t._v(">")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.options.dotbtn,expression:"options.dotbtn"}],ref:"dotbtn",staticClass:"dotbtn"},t._l(t.swiperimg,function(e,o){return n("span",{style:{background:o==(t.options.loop?t.iNow-1:t.iNow)?"green":""},attrs:{key2:o},on:{click:function(e){t.dotclick(o)}}},[t._v(t._s(o+1))])}))])},He=[],Ae={render:Le,staticRenderFns:He},Ge=Ae,ze=n("VU/8"),Je=b,Ye=ze(Me,Ge,!1,Je,"data-v-76ea551b",null),Be=Ye.exports,Ke={data:function(){return{swiperOption:{autoplay:2e3,dotbtn:!0,prevnextbtn:!0,speed:.2,loop:!0},swiperimg:[{href:"https://www.baidu.com/",src:"http://upload.ouliu.net/i/20171206145305sgj8m.jpeg"},{href:"https://www.taobao.com/",src:"http://upload.ouliu.net/i/201712061454195ee4v.jpeg"},{href:"https://www.jd.com/",src:"http://upload.ouliu.net/i/201712061454346k3x9.jpeg"},{href:"https://www.baidu.com/",src:"http://upload.ouliu.net/i/20171206145538l0s1b.jpeg"},{href:"https://www.taobao.com/",src:"http://upload.ouliu.net/i/20171206145557w60zh.jpeg"},{href:"https://www.jd.com/",src:"http://upload.ouliu.net/i/20171206145617jnlz6.jpeg"}]}},components:{swiper:Be}},Ze=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"item01"},[n("swiper",{attrs:{options:t.swiperOption,swiperimg:t.swiperimg}})],1),t._v(" "),n("div",{staticClass:"item02"},[n("p",[t._v("你想要什么配置呢：")]),t._v(" "),n("ul",[n("li",[t._v("\n        自动播放时间: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swiperOption.autoplay,expression:"swiperOption.autoplay"}],attrs:{type:"text",name:""},domProps:{value:t.swiperOption.autoplay},on:{input:function(e){e.target.composing||t.$set(t.swiperOption,"autoplay",e.target.value)}}})]),t._v(" "),n("li",[t._v("\n        是否显示下面的小按钮:\n        "),n("label",{attrs:{for:""}},[t._v("是"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swiperOption.dotbtn,expression:"swiperOption.dotbtn"}],attrs:{type:"radio"},domProps:{value:!0,checked:t._q(t.swiperOption.dotbtn,!0)},on:{change:function(e){t.$set(t.swiperOption,"dotbtn",!0)}}})]),t._v(" "),n("label",{attrs:{for:""}},[t._v("否"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swiperOption.dotbtn,expression:"swiperOption.dotbtn"}],attrs:{type:"radio"},domProps:{value:!1,checked:t._q(t.swiperOption.dotbtn,!1)},on:{change:function(e){t.$set(t.swiperOption,"dotbtn",!1)}}})])]),t._v(" "),n("li",[t._v("\n        是否显示左右的小按钮:\n        "),n("label",{attrs:{for:""}},[t._v("是"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swiperOption.prevnextbtn,expression:"swiperOption.prevnextbtn"}],attrs:{type:"radio"},domProps:{value:!0,checked:t._q(t.swiperOption.prevnextbtn,!0)},on:{change:function(e){t.$set(t.swiperOption,"prevnextbtn",!0)}}})]),t._v(" "),n("label",{attrs:{for:""}},[t._v("否"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swiperOption.prevnextbtn,expression:"swiperOption.prevnextbtn"}],attrs:{type:"radio"},domProps:{value:!1,checked:t._q(t.swiperOption.prevnextbtn,!1)},on:{change:function(e){t.$set(t.swiperOption,"prevnextbtn",!1)}}})])]),t._v(" "),n("li",[t._v("\n        运动的速度:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swiperOption.speed,expression:"swiperOption.speed"}],attrs:{type:"text"},domProps:{value:t.swiperOption.speed},on:{input:function(e){e.target.composing||t.$set(t.swiperOption,"speed",e.target.value)}}})]),t._v(" "),n("li",[t._v("\n        是否循环播放:\n        "),n("label",{attrs:{for:""}},[t._v("是"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swiperOption.loop,expression:"swiperOption.loop"}],attrs:{type:"radio"},domProps:{value:!0,checked:t._q(t.swiperOption.loop,!0)},on:{change:function(e){t.$set(t.swiperOption,"loop",!0)}}})]),t._v(" "),n("label",{attrs:{for:""}},[t._v("否"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swiperOption.loop,expression:"swiperOption.loop"}],attrs:{type:"radio"},domProps:{value:!1,checked:t._q(t.swiperOption.loop,!1)},on:{change:function(e){t.$set(t.swiperOption,"loop",!1)}}})])])])]),t._v(" "),t._m(0,!1,!1)])},Qe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br"),t._v("\n    123 "),n("br")])}],tn={render:Ze,staticRenderFns:Qe},en=tn,nn=n("VU/8"),on=g,sn=nn(Ke,en,!1,on,"data-v-aa73b166",null),rn=sn.exports;_.a.use(I.a);var an=new I.a({routes:[{path:"/eventbus",component:nt},{path:"/eventbusb",component:pt},{path:"/uploadimg",component:wt},{path:"/stylus",component:Ct},{path:"/created",component:It},{path:"/vuex",component:Bt},{path:"/vuexa",component:ie},{path:"/vuexb",component:fe},{path:"/toastparent",component:Xe},{path:"/upload",component:Se},{path:"/swiperdemo",component:rn}]});_.a.use(St.a);var cn={count:0,count2:1},ln={count:function(t){return t.count+10}},un={add:function(t,e){(0,t.commit)("add",e)}},pn={add:function(t,e){t.count+=e}},dn=new St.a.Store({state:cn,getters:ln,mutations:pn,actions:un});n("Jmt5");!function(t){t.directive("autofix",{bind:function(t,e,n){},update:function(t,e,n){console.log("carry",e);var o=new Image,s=t.parentNode.offsetWidth;o.onload=function(){o.width<o.height?(t.style.height=Math.floor(o.height/o.width*s)+"px",t.style.width=s+"px",t.style.marginTop=-(t.offsetHeight-s)/2+"px"):(t.style.width=Math.floor(o.width/o.height*s)+"px",t.style.height=s+"px",t.style.marginLeft=-(t.offsetWidth-s)/2+"px")},o.src=t.src},unbind:function(t){}})}(_.a),window.bus=new _.a,new _.a({el:"#app",router:an,store:dn,template:"<App/>",components:{App:D}})},NnWk:function(t,e){},VxY4:function(t,e){},bu7e:function(t,e){},cCXh:function(t,e){},"mj2/":function(t,e){},pGZ4:function(t,e){},q68R:function(t,e){},rgIa:function(t,e){},wtxf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eccf068db18213a54120.js.map