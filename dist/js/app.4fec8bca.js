(function(t){function e(e){for(var o,s,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function s(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"45c24e33"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(t);var u=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{color:"primary",dark:"",app:"","clipped-left":""}},[n("v-toolbar-title",[t._v("BASKETBALL")])],1),n("v-content",[n("v-list-item",{staticClass:"text-h1 teal--text text--accent-3"},[t._v("Score Board")]),n("v-row",[n("v-col",{attrs:{col:"2"}},[n("Timer10")],1),n("v-col",{attrs:{col:"2"}},[n("Timer2")],1),n("v-col",{attrs:{cols:"2"}},[n("p",[t._v(t._s(t.message))]),n("EditForm")],1),n("v-col",{attrs:{clos:"2"}},[n("v-btn",[n("button",{on:{click:function(e){return t.increment()}}},[t._v("threePoint")])]),n("h1",[t._v(t._s(t.threePoint))]),n("v-btn",[n("button",{on:{click:function(e){return t.increment1()}}},[t._v("twoPoint")])]),n("h1",[t._v(t._s(t.twoPoint))]),n("v-btn",[n("button",{on:{click:function(e){return t.increment2()}}},[t._v("onePoint")])]),n("h1",[t._v(t._s(t.onePoint))]),n("p",[t._v("得点")]),n("h1",[t._v(t._s(t.threePoint+t.twoPoint+t.onePoint))])],1),n("v-col",{attrs:{cols:"2"}},[n("p",[t._v(t._s(t.message2))]),n("EditForm2")],1),n("v-col",{attrs:{cols:"2"}},[n("v-btn",[n("button",{on:{click:function(e){return t.increment3()}}},[t._v("threePoint")])]),n("h1",[t._v(t._s(t.threePoint2))]),n("v-btn",[n("button",{on:{click:function(e){return t.increment4()}}},[t._v("twoPoint")])]),n("h1",[t._v(t._s(t.twoPoint2))]),n("v-btn",[n("button",{on:{click:function(e){return t.increment5()}}},[t._v("onePoint")])]),n("h1",[t._v(t._s(t.onePoint2))]),n("p",[t._v("得点")]),n("h1",[t._v(t._s(t.threePoint2+t.twoPoint2+t.onePoint2))])],1),n("v-col",[n("Add"),n("Index")],1)],1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"edit-form"},[n("input",{attrs:{type:"text"},domProps:{value:t.message},on:{input:t.doUpdate}})])])},a=[],c={name:"EditForm",computed:{message:function(){return this.$store.getters.message}},methods:{doUpdate:function(t){this.$store.dispatch("doUpdate",t.target.value)}}},u=c,l=n("2877"),m=n("6544"),f=n.n(m),h=n("7496"),p=Object(l["a"])(u,s,a,!1,null,null,null),v=p.exports;f()(p,{VApp:h["a"]});var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"edit-form"},[n("input",{attrs:{type:"text"},domProps:{value:t.message2},on:{input:t.doUpdate2}})])])},b=[],_={name:"EditForm2",computed:{message2:function(){return this.$store.getters.message2}},methods:{doUpdate2:function(t){this.$store.dispatch("doUpdate2",t.target.value)}}},g=_,y=Object(l["a"])(g,d,b,!1,null,null,null),w=y.exports;f()(y,{VApp:h["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{attrs:{id:"timer"}},[n("div",{staticClass:"timer"},[n("div",{staticClass:"time"},[n("v-list",{staticClass:"text-h3"},[t._v(" "+t._s(t.formatTime)+" ")])],1),n("v-btn",[t.timerOn?t._e():n("button",{on:{click:t.start}},[t._v("Start")]),t.timerOn?n("button",{on:{click:t.stop}},[t._v("Stop")]):t._e()]),n("v-btn",[n("button",{on:{click:t.reset}},[t._v("Reset")])])],1)])])},x=[],j=(n("d81d"),n("d3b7"),n("25f0"),{name:"timer",data:function(){return{min:10,sec:0,timerOn:!1,timerObj:null}},methods:{count:function(){this.sec<=0&&this.min>=1?(this.min--,this.sec=59):this.sec<=0&&this.min<=0?this.complete():this.sec--},start:function(){var t=this;this.timerObj=setInterval((function(){t.count()}),1e3),this.timerOn=!0},stop:function(){clearInterval(this.timerObj),this.timerOn=!1},reset:function(){this.min=10,this.sec=0},complete:function(){clearInterval(this.timerObj)}},computed:{formatTime:function(){var t=[this.min.toString(),this.sec.toString()].map((function(t){return t.length<2?"0"+t:t}));return t[0]+":"+t[1]}}}),O=j,k=n("8336"),C=n("8860"),$=Object(l["a"])(O,P,x,!1,null,null,null),V=$.exports;f()($,{VApp:h["a"],VBtn:k["a"],VList:C["a"]});var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{attrs:{id:"timer"}},[n("div",{staticClass:"timer"},[n("div",{staticClass:"time"},[n("v-list",{staticClass:"text-h3"},[t._v(" "+t._s(t.formatTime)+" ")])],1),n("v-btn",[t.timerOn?t._e():n("button",{on:{click:t.start}},[t._v("Start")]),t.timerOn?n("button",{on:{click:t.stop}},[t._v("Stop")]):t._e()]),n("v-btn",[n("button",{on:{click:t.reset}},[t._v("Reset")])])],1)])])},E=[],S={name:"timer",data:function(){return{min:2,sec:0,timerOn:!1,timerObj:null}},methods:{count:function(){this.sec<=0&&this.min>=1?(this.min--,this.sec=59):this.sec<=0&&this.min<=0?this.complete():this.sec--},start:function(){var t=this;this.timerObj=setInterval((function(){t.count()}),1e3),this.timerOn=!0},stop:function(){clearInterval(this.timerObj),this.timerOn=!1},reset:function(){this.min=2,this.sec=0},complete:function(){clearInterval(this.timerObj)}},computed:{formatTime:function(){var t=[this.min.toString(),this.sec.toString()].map((function(t){return t.length<2?"0"+t:t}));return t[0]+":"+t[1]}}},I=S,T=Object(l["a"])(I,A,E,!1,null,null,null),B=T.exports;f()(T,{VApp:h["a"],VBtn:k["a"],VList:C["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[n("h1",[t._v("Match Result Input")]),n("div",[n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("v-btn",[n("li",[n("button",{on:{click:t.addwinorlose}},[t._v("Add")])])])],1)])])])},L=[],F=(n("b0c0"),n("2591")),U=(n("e71f"),{name:"winorloseAdd",data:function(){return{db:null,name:""}},created:function(){this.db=F["a"].firestore()},methods:{addwinorlose:function(){var t=this;this.db.collection("winorloses").add({name:t.name}).then((function(){t.name=""})).catch((function(){}))}}}),R=U,H=Object(l["a"])(R,M,L,!1,null,null,null),q=H.exports;f()(H,{VApp:h["a"],VBtn:k["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[n("h1",[t._v("Match Result")]),n("table",[n("thead",[n("td",[t._v("winorlose")])]),t._l(this.winorloses,(function(e){return n("tr",{key:e.id},[n("td",[t._v(" "+t._s(e.name)+" ")])])}))],2)])])},W=[],z=(n("159b"),{name:"winorloseIndex",data:function(){return{db:null,winorloses:[]}},created:function(){this.db=F["a"].firestore();var t=this;this.db.collection("winorloses").onSnapshot((function(e){t.winorloses=[],e.forEach((function(e){var n=e.data();n.id=e.id,t.winorloses.push(n)}))}))}}),D=z,Z=Object(l["a"])(D,N,W,!1,null,null,null),J=Z.exports;f()(Z,{VApp:h["a"]});var K={name:"app",components:{EditForm:v,EditForm2:w,Timer10:V,Timer2:B,Add:q,Index:J},methods:{increment:function(){this.$store.commit("increment")},increment1:function(){this.$store.commit("increment1")},increment2:function(){this.$store.commit("increment2")},increment3:function(){this.$store.commit("increment3")},increment4:function(){this.$store.commit("increment4")},increment5:function(){this.$store.commit("increment5")}},computed:{message:function(){return this.$store.getters.message},message2:function(){return this.$store.getters.message2},threePoint:function(){return this.$store.state.threePoint},twoPoint:function(){return this.$store.state.twoPoint},onePoint:function(){return this.$store.state.onePoint},threePoint2:function(){return this.$store.state.threePoint2},twoPoint2:function(){return this.$store.state.twoPoint2},onePoint2:function(){return this.$store.state.onePoint2}}},G=K,Q=n("40dc"),X=n("62ad"),Y=n("a75b"),tt=n("da13"),et=n("0fd9"),nt=n("2a7f"),ot=Object(l["a"])(G,i,r,!1,null,null,null),it=ot.exports;f()(ot,{VApp:h["a"],VAppBar:Q["a"],VBtn:k["a"],VCol:X["a"],VContent:Y["a"],VListItem:tt["a"],VRow:et["a"],VToolbarTitle:nt["a"]});n("3ca3"),n("ddb0");var rt=n("8c4f"),st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world")},at=[],ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),o("br"),t._v("please join our online "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},ut=[],lt={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},mt=lt,ft=n("a523"),ht=n("adda"),pt=Object(l["a"])(mt,ct,ut,!1,null,null,null),vt=pt.exports;f()(pt,{VCol:X["a"],VContainer:ft["a"],VImg:ht["a"],VRow:et["a"]});var dt={name:"Home",components:{HelloWorld:vt}},bt=dt,_t=Object(l["a"])(bt,st,at,!1,null,null,null),gt=_t.exports;o["a"].use(rt["a"]);var yt=[{path:"/",name:"Home",component:gt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],wt=new rt["a"]({mode:"history",base:"/",routes:yt}),Pt=wt,xt=n("2f62");o["a"].use(xt["a"]);var jt=new xt["a"].Store({state:{message:"チーム名",message2:"チーム名",threePoint:0,threePoint2:0,twoPoint:0,twoPoint2:0,onePoint:0,onePoint2:0},getters:{message:function(t){return t.message},message2:function(t){return t.message2}},mutations:{setMessage:function(t,e){t.message=e.message},setMessage2:function(t,e){t.message2=e.message2},increment:function(t){t.threePoint+=3},increment3:function(t){t.threePoint2+=3},increment1:function(t){t.twoPoint+=2},increment4:function(t){t.twoPoint2+=2},increment2:function(t){t.onePoint+=1},increment5:function(t){t.onePoint2+=1}},actions:{doUpdate:function(t,e){var n=t.commit;n("setMessage",{message:e})},doUpdate2:function(t,e){var n=t.commit;n("setMessage2",{message2:e})}}}),Ot=n("f309");o["a"].use(Ot["a"]);var kt=new Ot["a"]({});o["a"].config.productionTip=!1;var Ct={apiKey:"AIzaSyBI4eon9y1sAhaNymgcmvcSzA7wC-VHZ1U",authDomain:"basuke-3cc7b.firebaseapp.com",projectId:"basuke-3cc7b",storageBucket:"basuke-3cc7b.appspot.com",messagingSenderId:"320192139310",appId:"1:320192139310:web:eaadc767f519a28451cfbf",measurementId:"G-C3ZF1B8ZPP"};F["a"].initializeApp(Ct),new o["a"]({router:Pt,store:jt,vuetify:kt,render:function(t){return t(it)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.4fec8bca.js.map