webpackJsonp([1],{"3p9R":function(t,e){},Cgq8:function(t,e){},DhAn:function(t,e){},ELke:function(t,e){},HOeH:function(t,e,n){t.exports=n.p+"static/img/huliWechat.6366bc5.jpg"},HumN:function(t,e,n){t.exports=n.p+"static/img/bg.4980344.png"},I3ib:function(t,e){},JWoT:function(t,e,n){t.exports=n.p+"static/img/small_02.8a5a61c.png"},K1jq:function(t,e){},L4ys:function(t,e){},"N/9f":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{staticClass:"titleHeader"},[e("p",{staticClass:"userName"},[this._v("\r\n         欢迎登录  "+this._s(this.user.name)+"\r\n      ")])])},staticRenderFns:[]};var s={data:function(){return{msg:"dada side"}},created:function(){},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{staticClass:"sidebar"},[a("el-row",{staticClass:"logoImg"},[a("img",{attrs:{src:n("kVLV")}})]),t._v(" "),a("el-row",{staticClass:"listmuen"},[a("el-menu",{attrs:{router:"","text-color":"#ccc"}},[t._l(t.$router.options.routes[0].children,function(e,n){return[a("el-menu-item",{key:n,attrs:{index:e.path}},[a("i",{class:e.className}),t._v(" "),a("span",[t._v(t._s(e.name))])])]})],2)],1)],1)},staticRenderFns:[]};var r={data:function(){return{}},created:function(){},components:{"v-header":n("VU/8")({props:{user:{}},data:function(){return{}}},i,!1,function(t){n("gqYV")},null,null).exports,"v-side":n("VU/8")(s,o,!1,function(t){n("hb6V")},null,null).exports}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var u=n("VU/8")(r,c,!1,function(t){n("ELke")},null,null).exports,l=(n("K1jq"),n("mtWM")),d=n.n(l),m=n("NYxO"),h=n("//Fk"),f=n.n(h),v=n("lbHh"),p=n.n(v),g="xauthToken";function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return p.a.get(t)}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return p.a.remove(t)}var C=n("zL8q"),x=n.n(C),y=d.a.create({baseURL:"http://117.50.14.118:8000/nurseLearning-mobile/",timeout:5e4});y.interceptors.request.use(function(t){return _("xauthToken")&&(t.headers={xauthToken:$.parseJSON(_("xauthToken")).token}),t},function(t){return C.Message.error({message:"加载超时"}),f.a.reject(t)}),y.interceptors.response.use(function(t){return t},function(t){return t.response.data&&C.Message.error({message:t.response.data.err}),f.a.reject(t)});var w=y;var k={state:{realname:"",cookie:_()},mutations:{SET_REALNAME:function(t,e){t.realname=e},SET_COOKIE:function(t,e){t.cookie=e}},actions:{Login:function(t,e){var n=t.commit,a=e.account.trim();return new f.a(function(t,i){(function(t,e){return w({url:"login2",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"account="+encodeURIComponent(t)+"&password="+encodeURIComponent(e)})})(a,e.password).then(function(e){if(e.data.success){var a={};a.token=e.data.data.xauthToken,a.data={},a.data.name=e.data.data.user.realName,n("SET_COOKIE",a.token),n("SET_REALNAME",a.data.name),i=a,p.a.set(g,i)}var i;t(e)}).catch(function(t){i(t)})})},LogOut:function(t){(0,t.commit)("SET_COOKIE",""),b()}}},D={realname:function(t){return t.user.realname},cookie:function(t){return t.user.cookie}};a.default.use(m.a);var E=new m.a.Store({modules:{user:k},getters:D}),P=n("/ocq"),N=(n("XGB6"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-header",attrs:{id:"headerBox"}},[e("img",{attrs:{src:n("HumN")}})])}]});var M=n("VU/8")({data:function(){return{}}},N,!1,function(t){n("iEoA")},null,null).exports,T={name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){return"rgb("+this.randomNum(t,e)+","+this.randomNum(t,e)+","+this.randomNum(t,e)+")"},drawPic:function(){var t=document.getElementById("s-canvas").getContext("2d");t.textBaseline="bottom",t.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),t.fillRect(0,0,this.contentWidth,this.contentHeight);for(var e=0;e<this.identifyCode.length;e++)this.drawText(t,this.identifyCode[e],e);this.drawLine(t),this.drawDot(t)},drawText:function(t,e,n){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var a=(n+1)*(this.contentWidth/(this.identifyCode.length+1)),i=this.randomNum(this.fontSizeMax,this.contentHeight-5),s=this.randomNum(-45,45);t.translate(a,i),t.rotate(s*Math.PI/180),t.fillText(e,0,0),t.rotate(-s*Math.PI/180),t.translate(-a,-i)},drawLine:function(t){for(var e=0;e<8;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<100;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"s-canvas"},[e("canvas",{attrs:{id:"s-canvas",width:this.contentWidth,height:this.contentHeight}})])},staticRenderFns:[]},S=n("VU/8")(T,F,!1,null,null,null).exports,I={data:function(){return{identifyCode:"",inputCode:"",cueMessage:"",loginInfo:{account:"201811111112",password:"123456"},canSubmit:!1,currentPage:0,loginloading:!1,guideBook:[{img:"/static/img/1.png"},{img:"/static/img/2.png"},{img:"/static/img/3.png"},{img:"/static/img/4.png"},{img:"/static/img/5.png"},{img:"/static/img/6.png"},{img:"/static/img/7.png"}]}},created:function(){},mounted:function(){this.makeCode()},watch:{loginInfo:{handler:function(t,e){""===t.account?this.cueMessage="用户名不得为空":""===t.password?this.cueMessage="密码不得为空":(this.cueMessage="",this.canSubmit=!0)},deep:!0}},methods:{openBook:function(){this.currentPage=0},nextPage:function(){this.currentPage<this.guideBook.length-1&&(this.currentPage++,this.$set(this.$data,"currentPage",this.currentPage))},prevPage:function(){this.currentPage>0&&(this.currentPage--,this.$set(this.$data,"currentPage",this.currentPage))},makeCode:function(){var t=this;return new f.a(function(e,n){var a=t;d.a.get("http://localhost:3000/code").then(function(t){a.identifyCode=t.data}).catch(function(t){console.log(t)})})},loginUser:function(){var t=this;if(this.inputCode.toLowerCase()===this.identifyCode.toLowerCase()){var e=this;this.loginloading=!0,_()&&b(),this.$store.dispatch("Login",{account:this.loginInfo.account,password:this.loginInfo.password}).then(function(n){if(!n.data.data.user.publictech)return C.Message.error({message:"您不是刊授会员，无法登陆！"}),void(e.loginloading=!1);n.data.success?(e.loginloading=!1,e.$router.push({path:"/"})):t.cueMessage="登录信息填写有误"}).catch(function(){e.loginloading=!1})}else C.Message.error("验证码输入错误")}},components:{"v-header":M,"s-identify":S}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"content"}},[a("v-header"),t._v(" "),a("div",{staticClass:"division"}),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loginloading,expression:"loginloading"}],staticClass:"card-box",attrs:{"element-loading-text":"正在登陆中"}},[a("div",{staticClass:"login-from"},[a("form",[a("div",{staticClass:"row-line "},[a("i",{staticClass:"fa fa-user prefix"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginInfo.account,expression:"loginInfo.account"}],staticClass:"form-control validate",attrs:{type:"text",name:"userName",id:"form1",value:"请输入用户名"},domProps:{value:t.loginInfo.account},on:{input:function(e){e.target.composing||t.$set(t.loginInfo,"account",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"row-line"},[a("i",{staticClass:"fa fa-lock  prefix"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginInfo.password,expression:"loginInfo.password"}],staticClass:"form-control validate",attrs:{type:"password",name:"password",id:"form2",value:"请输入用户名"},domProps:{value:t.loginInfo.password},on:{input:function(e){e.target.composing||t.$set(t.loginInfo,"password",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row-line"},[a("i"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputCode,expression:"inputCode"}],staticClass:"form-control validate",attrs:{type:"text",name:"verification",id:"verification",value:"验证码"},domProps:{value:t.inputCode},on:{input:function(e){e.target.composing||(t.inputCode=e.target.value)}}}),t._v(" "),a("div",{staticClass:"code",on:{click:t.makeCode}},[a("s-identify",{attrs:{identifyCode:t.identifyCode}})],1)]),t._v(" "),a("div",{staticClass:"row-line"},[a("i"),a("button",{staticClass:"btn plugin-sub login-btn waves-effect waves-light",attrs:{type:"submit"},on:{click:t.loginUser}},[t._v("登录")]),t._v(" "),a("span",{attrs:{id:"info"}},[t._v(t._s(t.cueMessage))])])]),t._v(" "),a("div",{staticClass:"read-book"},[a("img",{attrs:{src:n("fQkI")}}),t._v(" "),a("div",{staticClass:"text-content"},[a("span",{attrs:{"data-toggle":"modal","data-target":"#myModal"},on:{click:t.openBook}},[t._v("[在线阅读]")]),t._v(" "),a("span",[t._v("[下载]")])])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("img",{attrs:{src:t.guideBook[t.currentPage].img}})]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.prevPage}},[t._v("上一页")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.nextPage}},[t._v("下一页")])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wx-code"},[e("p",[this._v("微信公众号")]),this._v(" "),e("img",{attrs:{src:n("HOeH")}}),this._v(" "),e("div",{staticClass:"img-text"},[this._v("\r\n          扫一扫关注微信公众号 "),e("br"),this._v(" \r\n          在线学习和考试 "),e("br"),this._v(" "),e("a",[this._v("微信使用说明")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[this._v("上海护理继续教育园地网站使用操作指南")])])}]};var O=n("VU/8")(I,L,!1,function(t){n("N/9f")},"data-v-5268fd2a",null).exports,A=n("7t+N"),R=n.n(A),j=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],U=["上午","下午","晚上","凌晨"],V={data:function(){return{name:"",timeSec:this.getTimeSection(),timeData:this.timeFormat()}},mounted:function(){this.updataTime()},created:function(){this.name=R.a.parseJSON(_()).data.name},methods:{updataTime:function(){var t=this;setInterval(function(){var e=t.timeFormat();t.getTimeSection(),t.$set(t.$data,"timeData",e)},1e3)},timeFormat:function(){var t=new Date;return t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日     "+j[t.getDay()]+"      "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},getTimeSection:function(){var t=(new Date).getHours();0<=t&&t<6?this.timeSec=U[3]:6<=t&&t<12?this.timeSec=U[0]:12<=t&&t<18?this.timeSec=U[1]:18<=t&&t<24?this.timeSec=U[2]:console.log("错误时间")},signOut:function(){E.dispatch("LogOut"),this.$router.push({path:"/login"})}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-time",attrs:{id:"timebar"}},[n("div",{staticClass:"user-info"},[n("span",{staticClass:"time1"},[t._v(t._s(t.timeSec)+"好")]),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(" "),n("a",{staticClass:"sign-out",on:{click:t.signOut}},[t._v("[退出]")]),t._v(" "),n("span",{staticClass:"time2"},[t._v("\n        "+t._s(t.timeData)+"\n      ")])])])},staticRenderFns:[]};var q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-silder",attrs:{id:"silder"}},[a("div",{staticClass:"card"},[a("p",{staticClass:"title"},[t._v("学员菜单")]),t._v(" "),a("div",{staticClass:"list-muen"},[a("ul",{staticClass:"slider-bars"},[a("li",[a("i",{staticClass:"fa fa-bar-chart"}),t._v("学分考试\n                ")])])]),t._v(" "),a("div",{staticClass:"notice"},[a("p",[t._v("\n                公告：2018年刊授答题一共有7期，\n                1、2、3、4、5、6、7月25日以后\n                网上开始答题，答题截止时间为9月\n                30日\n           ")])])]),t._v(" "),a("div",{staticClass:"contact-way"},[a("div",{staticClass:"wx"},[a("p",[t._v("微信公总号")]),t._v(" "),a("img",{attrs:{src:n("HOeH")}})]),t._v(" "),a("div",{staticClass:"phone"},[a("p",[t._v("客服电话")]),t._v(" "),a("p",[t._v("021-62471677")])])])])}]};var B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-footer",attrs:{id:"footer"}},[e("span",[this._v("Copyright © 2012-2018: 上海护理继续教育园地 版权所有")])])}]};var K={data:function(){return{}},components:{"v-header":M,"v-time":n("VU/8")(V,H,!1,function(t){n("jKyu")},null,null).exports,"v-silder":n("VU/8")({data:function(){return{}}},q,!1,function(t){n("X48K")},null,null).exports,"v-footer":n("VU/8")({data:function(){return{}}},B,!1,function(t){n("Cgq8")},null,null).exports}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"content"}},[e("v-header"),this._v(" "),e("div",{staticClass:"division"}),this._v(" "),e("v-time"),this._v(" "),e("div",{staticClass:"content-body"},[e("v-silder"),this._v(" "),e("div",{staticClass:"project-list"},[e("router-view")],1)],1),this._v(" "),e("div",{staticStyle:{clear:"both"}}),this._v(" "),e("v-footer")],1)},staticRenderFns:[]};var G=n("VU/8")(K,W,!1,function(t){n("DhAn")},null,null).exports;var J=n("T1Ch"),z={data:function(){return{name:"",currentExam:{name:"",begin:"",end:"",num:20,scale:100,examId:""},remainingTimes:"",loading:!1,examData:[],currentShowData:[]}},created:function(){$(".modal-backdrop")&&$(".modal-backdrop").hide(),this.showListExam()},methods:{showListExam:function(t){var e=this;this.loading=!0,this.getListData().then(function(t){t.data.data.forEach(function(t){var n={};n.bookname=t.courseName,n.beginTime=e.timeFomat(t.createTime),n.endTime=e.timeFomat(t.endOpenTime),n.examGuide=t.courseId,n.examId=t.id,e.examData.push(n)}),e.initShowData()})},initShowData:function(){this.loading=!1,this.showDataNum(5)},showDataNum:function(t){this.currentShowData=this.examData.slice(0,t)},getListData:function(){return new f.a(function(t,e){(_(),w({url:"mobile/exam/list",method:"GET",params:{page:1,rows:100}})).then(function(e){t(e)}).catch(function(t){e(t)})})},showExamInfo:function(t,e){var n,a=this;(n=e,_(),w({url:"/mobile/course/status/"+n,method:"GET"})).then(function(e){switch(e.data.data){case 0:C.Message.error({message:"您当前未参加该课程"});break;case 1:C.Message.error({message:"学习中，学时不够"});break;case 2:$("#myModal").modal(),a.getExamInfo(t).then(function(e){var n=a.timeFomat(e.data.data.beginOpenTime),i=a.timeFomat(e.data.data.endOpenTime);a.name=$.parseJSON(_()).data.name,a.currentExam.name=e.data.data.title,a.currentExam.num=e.data.data.totalQuestions,a.currentExam.scale=e.data.data.fullMarks,a.currentExam.begin=n,a.currentExam.end=i,a.currentExam.examId=t});break;case 3:Object(C.Message)({message:"考试合格,结束",type:"success"});break;default:C.Message.error({message:"未知错误"})}})},timeFomat:function(t){var e=new Date(t);return e.getFullYear()+"年"+e.getMonth()+"月"+e.getDay()+"日"},getExamInfo:function(t){var e=this;return new f.a(function(n,a){var i;(i=t,_(),w({url:"mobile/exam/"+i,method:"GET"})).then(function(t){e.remainingTimes=t.data.data.totalcount-t.data.data.useExamCount,n(t)}).catch(function(t){a(t)})})},showPDF:function(t){this.getPDF(t).then(function(t){var e="http://117.50.14.118:8000/nurseLearning-mobile/operation/readFile"+t.data.data.courseFileInfo[0].fileUrl;J.PDFObject.embed(e,"#psd-content")}).then(function(t){J.PDFObject.embed(t,"#psd-content")})},getPDF:function(t){return new f.a(function(e,n){var a;(a=t,_(),w({url:"mobile/course/getCourseFileInfo/"+a,method:"GET"})).then(function(t){e(t)}).catch(function(t){n(t)})})},goToExam:function(t){p.a.set("isComplete","OK"),this.$router.push({path:"examination",query:{num:t,remainingTimes:this.remainingTimes}})}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-list"},[n("div",{staticClass:"list-body"},[n("div",{staticClass:"project"},[n("div",{staticClass:"box-header"},[t._v("\r\n                学分考试\r\n            ")]),t._v(" "),n("table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"allData",attrs:{border:"0","element-loading-text":"拼命加载中"}},[t._m(0),t._v(" "),n("tbody",[t._l(t.currentShowData,function(e){return[n("tr",{key:e.id},[n("td",[t._v(t._s(e.bookname))]),t._v(" "),n("td",[t._v(t._s(e.beginTime)+"-"+t._s(e.endTime))]),t._v(" "),n("td",{staticClass:"guide",attrs:{"data-toggle":"modal","data-target":"#myModal2"},on:{click:function(n){t.showPDF(e.examGuide)}}},[t._v("在线阅读")]),t._v(" "),n("td",{staticClass:"testing",attrs:{"data-target":"#myModal"},on:{click:function(n){t.showExamInfo(e.examId,e.examGuide)}}},[t._v("测试")])])]})],2)]),t._v(" "),n("div",{staticClass:"buttom-group"},[n("button",{staticClass:"btn num-btn",attrs:{type:"button"},on:{click:function(e){t.showDataNum(5)}}},[t._v("5")]),t._v(" "),n("button",{staticClass:"btn num-btn",attrs:{type:"button"},on:{click:function(e){t.showDataNum(25)}}},[t._v("25")]),t._v(" "),n("button",{staticClass:"btn num-btn",attrs:{type:"button"},on:{click:function(e){t.showDataNum(50)}}},[t._v("50")]),t._v(" "),n("button",{staticClass:"btn num-btn",attrs:{type:"button"},on:{click:function(e){t.showDataNum(100)}}},[t._v("100")])])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[n("div",{staticClass:"modal-dialog show-test",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"user-exam-info"},[n("div",{staticClass:"user-title"},[n("span",[t._v(t._s(t.name)+",你好!")])]),t._v(" "),n("div",{staticClass:"exam-info"},[n("div",{staticClass:"examname"},[n("span",[t._v("考试名称:")]),t._v(t._s(t.currentExam.name)+"\r\n                  ")]),t._v(" "),n("div",{staticClass:"examnum"},[n("span",[t._v("总题目数量:")]),t._v(t._s(t.currentExam.num)),n("span",[t._v("总分：")]),t._v(t._s(t.currentExam.scale)+"\r\n                  ")]),t._v(" "),n("div",{staticClass:"examtimes"},[n("span",[t._v("考试周期：")]),t._v('"'+t._s(t.currentExam.begin)+'" 至 "'+t._s(t.currentExam.end)+'"\r\n                  ')])])])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn begin-exam",attrs:{type:"button"},on:{click:function(e){t.goToExam(t.currentExam.examId)}}},[t._v("开始考试")])])])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"myModal2",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[n("div",{staticClass:"modal-dialog show-test",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),n("div",{ref:"wheel",staticClass:"modal-body",attrs:{id:"psd-content"}})])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",{staticClass:"project-title"},[e("th",{attrs:{width:"190px"}},[this._v("对应期刊")]),this._v(" "),e("th",{attrs:{width:"190px"}},[this._v("考试周期")]),this._v(" "),e("th",{attrs:{width:"190px"}},[this._v("考试指南")]),this._v(" "),e("th",{attrs:{width:"90px"}},[this._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[this._v("开始做题")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close-2",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var X=n("VU/8")(z,Q,!1,function(t){n("L4ys")},null,null).exports,Y={data:function(){return{scoreData:{}}},created:function(){$("body").removeClass("modal-open"),this.scoreData=this.$route.query.data,b("isComplete")}},Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grade"},[a("div",{staticClass:"grade-body"},[a("div",{staticClass:"project"},[a("div",{staticClass:"box-header"},[t._v("\r\n                完成考试\r\n            ")]),t._v(" "),a("div",{staticClass:"show-score"},[a("h5",[t._v("您已完成答题!")]),t._v(" "),a("p",{staticClass:"score"},[t._v("您的得分为:"),a("span",[t._v(t._s(t.scoreData.score))])]),t._v(" "),a("p",{staticClass:"result"},[t._v("您的考试结果为:"),t.scoreData.score>=t.scoreData.passScore?a("span",[t._v("合格")]):a("span",[t._v("不合格")])]),t._v(" "),a("p",{staticClass:"exam-num"},[t._v("您还剩余:("),a("span",[t._v(t._s(t.scoreData.remainingTimes))]),t._v(" )次考试机会")]),t._v(" "),t.scoreData.score>t.scoreData.passScore?[a("img",{attrs:{src:n("Rjbl")}})]:[a("img",{attrs:{src:n("JWoT")}})]],2)])])])},staticRenderFns:[]};var tt=n("VU/8")(Y,Z,!1,function(t){n("I3ib")},null,null).exports,et={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-cueexam",attrs:{id:"cueexam"}},[e("div",{staticClass:"cue-header"},[this._v("温馨提示")]),this._v(" "),e("div",{staticClass:"cue-body"},[this._v("您已经没有考试次数了")]),this._v(" "),e("div",{staticClass:"cue-footer"},[e("button",{staticClass:"btn sure-btn",attrs:{type:"button"}},[this._v("确定")]),this._v(" "),e("button",{staticClass:"btn close-btn",attrs:{type:"button"}},[this._v("取消")])])])}]};var nt=n("VU/8")({data:function(){return{}}},et,!1,function(t){n("tFKn")},null,null).exports,at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-cueunanswer",attrs:{id:"cueunanswer"}},[n("div",{staticClass:"cueunanswer-header"},[t._v("温馨提示")]),t._v(" "),n("div",{staticClass:"cueunanswer-body"},[n("h4",[t._v("总共["+t._s(t.completeData.len)+"]题,您已答["+t._s(t.completeData.answeredLen)+"]题,剩余["+t._s(t.completeData.unanswer.length)+"}]题未答,提交试卷后,成绩将会生效,请确认是否提交试卷!")]),t._v(" "),t._l(t.completeData.unanswer,function(e){return[n("p",{key:e.id},[t._v("第"+t._s(e+1)+"题没有选择答案")])]})],2),t._v(" "),n("div",{staticClass:"cueunanswer-footer"},[n("button",{staticClass:"btn sure-btn",attrs:{type:"button"},on:{click:t.closeBox}},[t._v("继续答题")])])])},staticRenderFns:[]};var it=n("VU/8")({props:{completeData:{}},data:function(){return{}},methods:{closeBox:function(){this.$emit("closebox")}}},at,!1,function(t){n("Q/pn")},null,null).exports,st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-suresubmit",attrs:{id:"suresubmit"}},[n("div",{staticClass:"suresubmit-header"},[t._v("温馨提示")]),t._v(" "),n("div",{staticClass:"suresubmit-body"},[t._v("总共["+t._s(t.completeData.len)+"]题,您已答["+t._s(t.completeData.len)+"}]题,剩余[0]题未答,提交试卷后,成绩将会生效,请确认是否提交试卷!")]),t._v(" "),n("div",{staticClass:"suresubmit-footer"},[n("button",{staticClass:"btn sure-btn",attrs:{type:"button"},on:{click:t.submitActive}},[t._v("确定提交")]),t._v(" "),n("button",{staticClass:"btn close-btn",attrs:{type:"button"},on:{click:t.closeActive}},[t._v("取消")])])])},staticRenderFns:[]};var ot=n("VU/8")({props:{completeData:{}},data:function(){return{}},methods:{submitActive:function(){this.$emit("submit"),this.$emit("closebox")},closeActive:function(){this.$emit("closebox")}}},st,!1,function(t){n("3p9R")},null,null).exports,rt={props:{radioData:{},quesionIndex:Number},data:function(){return{radio:void 0}},created:function(){},methods:{select:function(t){var e={num:this.quesionIndex,currentSelect:this.radio};this.$emit("changeRadioAnswer",e)}}},ct={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"problem"},[n("h4",[t._v(t._s(t.quesionIndex+1)+". "+t._s(t.radioData.title))]),t._v(" "),n("el-radio-group",{on:{input:function(e){t.select()}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._l(t.radioData.options,function(e,a){return[n("el-radio",{key:a,attrs:{label:a}},[t._v(t._s(e.optionContent))])]})],2)],1)},staticRenderFns:[]},ut=n("VU/8")(rt,ct,!1,null,null,null).exports,lt={props:{radioData:{},quesionIndex:Number},data:function(){return{checkList:[]}},created:function(){},methods:{select:function(){var t={num:this.quesionIndex,selectArray:this.checkList};this.$emit("changeCheckboxAnswer",t)}}},dt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"problem"},[n("h4",[t._v(t._s(t.quesionIndex+1)+".  12313131313")]),t._v(" "),n("el-checkbox-group",{on:{input:t.select},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[t._l(t.radioData.options,function(e,a){return[n("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(e.optionContent))])]})],2)],1)},staticRenderFns:[]},mt=n("VU/8")(lt,dt,!1,null,null,null).exports,ht=n("M4fF"),ft=n.n(ht),vt={data:function(){return{answeredNum:[],resAllData:{},examPaper:[],isComplete:!1,isSubmit:!1,answerData:{},passScore:""}},created:function(){this.getPaperInfo(this.$route.query.num).then(function(t){console.log(t)})},methods:{getPaperInfo:function(t){var e=this;return new f.a(function(n,a){var i;(i=t,w({url:"mobile/exam/start/"+i,method:"GET"})).then(function(t){e.resAllData=t.data,e.passScore=t.data.passScore,console.log(e.passScore),e.examPaper=e.resAllData.examQuestions,n(t)}).catch(function(t){a(t)})})},radioFunction:function(t){this.examPaper[t.num].options.forEach(function(t){t.choose&&delete t.choose}),this.examPaper[t.num].options[t.currentSelect].choose=!0,this.isPushInArray(t.num)},checkboxFunction:function(t){var e=this;this.examPaper[t.num].options.forEach(function(n,a){-1!==t.selectArray.indexOf(a)?e.examPaper[t.num].options[a].choose=!0:delete e.examPaper[t.num].options[a].choose}),t.selectArray.length?this.isPushInArray(t.num):this.removeoutArray(t.num)},closeBox1:function(){this.isComplete=!1},closeBox2:function(){this.isSubmit=!1},submitData:function(){var t=this;return new f.a(function(e,n){var a;(a=t.resAllData,_(),w({url:"mobile/exam/submit/0",method:"POST",data:a})).then(function(n){var a=n.data;a.passScore=t.passScore,a.remainingTimes=t.$route.query.remainingTimes,t.$router.push({path:"grade",query:{data:a}}),e(n)}).catch(function(t){n(t)})})},removeoutArray:function(t){this.answeredNum=ft.a.pull(this.answeredNum,t)},isPushInArray:function(t){-1===this.answeredNum.indexOf(t)&&this.answeredNum.push(t)},submitAnswer:function(){this.answerData.len=this.examPaper.length,this.answerData.answeredLen=this.answeredNum.length,this.answerData.unanswer=[];for(var t=0;t<this.examPaper.length;t++)-1===this.answeredNum.indexOf(t)&&this.answerData.unanswer.push(t);this.examPaper.length>this.answeredNum.length?this.isComplete=!0:this.examPaper.length===this.answeredNum.length&&(this.isSubmit=!0)}},components:{"v-cueexam":nt,"v-cueunanswer":it,"v-suresubmit":ot,"v-radio":ut,"v-checkList":mt}},pt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exam-paper"},[n("div",{staticClass:"page-paper"},[n("div",{staticClass:"paper-header"},[n("h4",[t._v(t._s(t.resAllData.title))])]),t._v(" "),n("div",{staticClass:"paper-line"},[n("div",{staticClass:"paper-body"},[t._l(t.examPaper,function(e,a){return[1===e.type?n("v-radio",{key:a,attrs:{"radio-data":e,"quesion-index":a},on:{changeRadioAnswer:t.radioFunction}}):t._e(),t._v(" "),2===e.type?n("v-radio",{key:a,attrs:{"radio-data":e,"quesion-index":a},on:{changeRadioAnswer:t.radioFunction}}):t._e(),t._v(" "),3===e.type?n("v-checkList",{key:a,attrs:{"radio-data":e,"quesion-index":a},on:{changeCheckboxAnswer:t.checkboxFunction}}):t._e()]}),t._v(" "),t._e(),t._v(" "),t.isComplete?n("v-cueunanswer",{attrs:{completeData:t.answerData,isComplete:t.isComplete},on:{closebox:t.closeBox1}}):t._e(),t._v(" "),t.isSubmit?n("v-suresubmit",{attrs:{isSubmit:t.isSubmit,completeData:t.answerData},on:{submit:t.submitData,closebox:t.closeBox2}}):t._e()],2)]),t._v(" "),n("div",{staticClass:"paper-footer"},[n("button",{staticClass:"btn submit-paper",attrs:{type:"button"},on:{click:t.submitAnswer}},[t._v("提交答案")])])])])},staticRenderFns:[]};var gt=n("VU/8")(vt,pt,!1,function(t){n("zWys")},null,null).exports,_t={data:function(){return{identifyCodes:"1234567890",identifyCode:""}},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(t,e){this.identifyCode="12a4",console.log(this.identifyCode)}},components:{"s-identify":S}},bt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code",on:{click:this.refreshCode}},[e("s-identify",{attrs:{identifyCode:this.identifyCode}})],1)},staticRenderFns:[]};var Ct=n("VU/8")(_t,bt,!1,function(t){n("aCrA")},null,null).exports;a.default.use(P.a);var xt=new P.a({routes:[{path:"/",redirect:"/project",component:G,name:G,children:[{path:"project",component:X,name:"lihao"},{path:"grade",component:tt,name:"grade"}]},{path:"/login",component:O},{path:"/examination",component:gt},{path:"/codetest",component:Ct}]});xt.beforeEach(function(t,e,n){var a=_("xauthToken")&&"undefined"!==_("xauthToken");"/login"===t.path?n():a?"/examination"===t.path?_("isComplete")&&"undefined"!==_("isComplete")?n():n("/project"):(b("isComplete"),n()):n("/login")});n("tvR6"),n("OKBw");a.default.config.productionTip=!1,a.default.prototype.$http=d.a,a.default.use(x.a),new a.default({router:xt,store:E,components:{App:u},template:"<App/>"}).$mount("#app")},OKBw:function(t,e){},"Q/pn":function(t,e){},Rjbl:function(t,e,n){t.exports=n.p+"static/img/small_01.c94e716.png"},T1Ch:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e,a,i=n("pFYg"),s=n.n(i);e=this,a=function(){if("undefined"==typeof window||"undefined"==typeof navigator)return!1;var t,e,n,a,i,s,o,r,c,u,l=void 0!==navigator.mimeTypes["application/pdf"],d=/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());return e=function(t){var e;try{e=new ActiveXObject(t)}catch(t){e=null}return e},n=function(){return!(!e("AcroPDF.PDF")&&!e("PDF.PdfCtrl"))},t=l||function(){return!!(window.ActiveXObject||"ActiveXObject"in window)}()&&n(),a=function(t){var e,n="";if(t){for(e in t)t.hasOwnProperty(e)&&(n+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&");n&&(n=(n="#"+n).slice(0,n.length-1))}return n},i=function(t){"undefined"!=typeof console&&console.log&&console.log("[PDFObject] "+t)},s=function(t){return i(t),!1},r=function(t){var e=document.body;return"string"==typeof t?e=document.querySelector(t):"undefined"!=typeof jQuery&&t instanceof jQuery&&t.length?e=t.get(0):void 0!==t.nodeType&&1===t.nodeType&&(e=t),e},c=function(t,e,n,a,i){var s=a+"?file="+encodeURIComponent(e)+n,o="<div style='"+(d?"-webkit-overflow-scrolling: touch; overflow-y: scroll; ":"overflow: hidden; ")+"position: absolute; top: 0; right: 0; bottom: 0; left: 0;'><iframe  "+i+" src='"+s+"' style='border: none; width: 100%; height: 100%;' frameborder='0'></iframe></div>";return t.className+=" pdfobject-container",t.style.position="relative",t.style.overflow="auto",t.innerHTML=o,t.getElementsByTagName("iframe")[0]},u=function(t,e,n,a,i,s,o){var r="";return r=e&&e!==document.body?"width: "+i+"; height: "+s+";":"position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;",t.className+=" pdfobject-container",t.innerHTML="<embed "+o+" class='pdfobject' src='"+n+a+"' type='application/pdf' style='overflow: auto; "+r+"'/>",t.getElementsByTagName("embed")[0]},o=function(e,n,i){if("string"!=typeof e)return s("URL is not valid");n=void 0!==n&&n;var o,l=(i=void 0!==i?i:{}).id&&"string"==typeof i.id?"id='"+i.id+"'":"",d=!!i.page&&i.page,m=i.pdfOpenParams?i.pdfOpenParams:{},h=void 0===i.fallbackLink||i.fallbackLink,f=i.width?i.width:"100%",v=i.height?i.height:"100%",p="boolean"==typeof i.forcePDFJS&&i.forcePDFJS,g=!!i.PDFJS_URL&&i.PDFJS_URL,_=r(n),b="";return _?(d&&(m.page=d),o=a(m),p&&g?c(_,e,o,g,l):t?u(_,n,e,o,f,v,l):g?c(_,e,o,g,l):(h&&(b="string"==typeof h?h:"<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>",_.innerHTML=b.replace(/\[url\]/g,e)),s("This browser does not support embedded PDFs"))):s("Target element cannot be determined")},{embed:function(t,e,n){return o(t,e,n)},pdfobjectversion:"2.0.201604172",supportsPDFs:t}},"function"==typeof define&&n("nErl")?define([],a):"object"===s()(t)&&t.exports?t.exports=a():e.PDFObject=a()}.call(e,n("f1Eh")(t))},X48K:function(t,e){},XGB6:function(t,e){},aCrA:function(t,e){},fQkI:function(t,e,n){t.exports=n.p+"static/img/small_03.cfacf6c.png"},gqYV:function(t,e){},hb6V:function(t,e){},iEoA:function(t,e){},jKyu:function(t,e){},kVLV:function(t,e,n){t.exports=n.p+"static/img/gamelogo.4b46263.png"},tFKn:function(t,e){},tvR6:function(t,e){},zWys:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9998053cc35eae3a85d1.js.map