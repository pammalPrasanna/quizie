(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1e3740c2":"50f1d769","chunk-1b9177de":"9c8549a9","chunk-2b091498":"81433ec4","chunk-340fcf94":"c1c98695","chunk-2d0e4a82":"d11c7847","chunk-2d22bd06":"b53e3a06","chunk-52efed94":"8506999c","chunk-2d0dad04":"07fb30b2","chunk-2d21a39a":"67a2fdae","chunk-792dc883":"42af27a9","chunk-ed57bc02":"4412c4fc","chunk-ed9d9478":"2222b992","chunk-25df8666":"743f2013","chunk-2d0e887e":"e15dc9d4","chunk-2d0e95df":"210b5d87","chunk-e8d8465a":"3b72258a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1e3740c2":1,"chunk-1b9177de":1,"chunk-2b091498":1,"chunk-340fcf94":1,"chunk-52efed94":1,"chunk-792dc883":1,"chunk-ed57bc02":1,"chunk-ed9d9478":1,"chunk-25df8666":1,"chunk-e8d8465a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1e3740c2":"38fb335c","chunk-1b9177de":"7293261e","chunk-2b091498":"095fc615","chunk-340fcf94":"238fcd04","chunk-2d0e4a82":"31d6cfe0","chunk-2d22bd06":"31d6cfe0","chunk-52efed94":"93964b81","chunk-2d0dad04":"31d6cfe0","chunk-2d21a39a":"31d6cfe0","chunk-792dc883":"df9d9a7c","chunk-ed57bc02":"df9d9a7c","chunk-ed9d9478":"df9d9a7c","chunk-25df8666":"31b85913","chunk-2d0e887e":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-e8d8465a":"f0960a90"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/static/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[e.appBar?n("v-navigation-drawer",{attrs:{app:""},model:{value:e.$store.state.drawer,callback:function(t){e.$set(e.$store.state,"drawer",t)},expression:"$store.state.drawer"}},[n("NavbarLinks")],1):e._e(),n("v-app-bar",{attrs:{app:"",dense:"",color:"white",dark:""}},[e.appBar?n("v-app-bar-nav-icon",{attrs:{color:"success"},on:{click:function(t){return e.$store.commit("setDrawer",!0)}}}):e._e(),n("v-toolbar-title",{staticClass:"green--text"},[n("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"quizes"}}},[e._v(" Quizie")])],1),n("v-spacer"),e.$store.state.isAuthenticated?[e.$vuetify.breakpoint.xs?[n("v-btn",{staticClass:"mx-2",attrs:{icon:"",small:"",color:"success"},on:{click:function(t){return e.logout()}}},[n("v-icon",{attrs:{dark:""}},[e._v(" mdi-logout ")])],1)]:[n("v-btn",{staticClass:"text-capitalize",attrs:{label:"Logout",color:"success",outlined:""},on:{click:function(t){return e.logout()}}},[e._v("Logout ")])]]:[e.$vuetify.breakpoint.xs?e._e():n("v-btn",{staticClass:"text-capitalize",attrs:{label:"Login",outlined:"",color:"green",to:{name:"log-in"}}},[e._v("Login ")])],n("v-progress-linear",{attrs:{active:e.$store.state.isLoading,indeterminate:e.$store.state.isLoading,absolute:"",bottom:"",color:"green"}})],2),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view",[n("Home")],1)],1)],1)],1)},o=[],i=n("1da1"),c=(n("96cf"),n("bc3a")),u=n.n(c),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-list-item",[n("v-list-item-title",{staticClass:"text-h6 font-weight-regular"},[e._v(" Quizie ")]),n("v-list-item-icon",[n("v-btn",{attrs:{icon:"",color:"red lighten-2"},on:{click:function(t){return e.$store.commit("setDrawer",!1)}}},[n("v-icon",[e._v("mdi-close")])],1)],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:"",exact:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{link:"",to:t.link,"active-class":"success  lighten-4"}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{class:e.$vuetify.breakpoint.xs?"subtitle-1 font-weight-regular":"body-1 font-weight-regular"},[e._v(e._s(t.title))])],1)],1)})),1)],1)},l=[],d={data:function(){return{drawer:!0,items:[{title:"Quizes",icon:"mdi-format-list-checks",link:{name:"quizes"}},{title:"Results",icon:"mdi-chart-bar",link:{name:"user-results",params:{id:"".concat(localStorage.getItem("userid"))}}}]}}},f=d,h=n("2877"),m=n("6544"),p=n.n(m),k=n("8336"),g=n("ce7e"),v=n("132d"),b=n("8860"),w=n("da13"),y=n("5d23"),_=n("34c3"),L=Object(h["a"])(f,s,l,!1,null,null,null),S=L.exports;p()(L,{VBtn:k["a"],VDivider:g["a"],VIcon:v["a"],VList:b["a"],VListItem:w["a"],VListItemContent:y["a"],VListItemIcon:_["a"],VListItemTitle:y["c"]});var q={name:"App",data:function(){return{drawer:!1,appBar:!1}},components:{NavbarLinks:S},beforeCreate:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.commit("initializeStore");case 2:return t.next=4,e.applyAccess();case 4:e.$store.state.token?u.a.defaults.headers.common["Authorization"]="Token ".concat(e.$store.state.token):u.a.defaults.headers.common["Authorization"]="";case 5:case"end":return t.stop()}}),t)})))()},methods:{applyAccess:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.appBar=!!e.$store.state.isAuthenticated&&!e.$store.state.user.is_staff;case 1:case"end":return t.stop()}}),t)})))()},logout:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("/api/v1/token/logout/").then((function(e){console.log("Logged out")})).catch((function(e){console.log(JSON.stringify(e))}));case 2:u.a.defaults.headers.common["Authorization"]="",e.$store.commit("removeToken"),e.$router.push({name:"log-in"});case 5:case"end":return t.stop()}}),t)})))()}}},x=q,z=n("7496"),I=n("40dc"),A=n("5bc1"),O=n("a523"),$=n("f6c4"),P=n("f774"),V=n("8e36"),j=n("2fa4"),C=n("2a7f"),T=Object(h["a"])(x,a,o,!1,null,null,null),N=T.exports;p()(T,{VApp:z["a"],VAppBar:I["a"],VAppBarNavIcon:A["a"],VBtn:k["a"],VContainer:O["a"],VIcon:v["a"],VMain:$["a"],VNavigationDrawer:P["a"],VProgressLinear:V["a"],VSpacer:j["a"],VToolbarTitle:C["a"]});n("d3b7"),n("3ca3"),n("ddb0");var E=n("8c4f");r["a"].use(E["a"]);var B=[{path:"/",name:"home",component:function(){return n.e("chunk-25df8666").then(n.bind(null,"bb51"))}},{path:"/log-in",name:"log-in",component:function(){return Promise.all([n.e("chunk-1e3740c2"),n.e("chunk-792dc883")]).then(n.bind(null,"a55b"))}},{path:"/quizes",name:"quizes",component:function(){return Promise.all([n.e("chunk-1e3740c2"),n.e("chunk-1b9177de")]).then(n.bind(null,"0c1e"))},meta:{requireLogin:!0}},{path:"/quiz/:id/results",name:"quiz-results",component:function(){return Promise.all([n.e("chunk-1e3740c2"),n.e("chunk-340fcf94"),n.e("chunk-2d0e4a82")]).then(n.bind(null,"90c8"))},meta:{requireLogin:!0}},{path:"/:id/results",name:"user-results",component:function(){return Promise.all([n.e("chunk-1e3740c2"),n.e("chunk-340fcf94"),n.e("chunk-2d22bd06")]).then(n.bind(null,"f127"))},meta:{requireLogin:!0}},{path:"/add-quiz",name:"add-quiz",component:function(){return Promise.all([n.e("chunk-1e3740c2"),n.e("chunk-ed9d9478")]).then(n.bind(null,"befc"))},meta:{requireLogin:!0}},{path:"/edit-quiz/:id",name:"edit-quiz",component:function(){return Promise.all([n.e("chunk-1e3740c2"),n.e("chunk-ed57bc02")]).then(n.bind(null,"f6b7"))},meta:{requireLogin:!0}},{path:"/take-quiz/:id",name:"take-quiz",component:function(){return n.e("chunk-e8d8465a").then(n.bind(null,"7516"))},meta:{requireLogin:!0}},{path:"/view-quiz/:id",name:"view-quiz",props:!0,component:function(){return Promise.all([n.e("chunk-1e3740c2"),n.e("chunk-2b091498")]).then(n.bind(null,"ad61"))},meta:{requireLogin:!0}},{path:"/edit-question/:id",name:"edit-question",component:function(){return Promise.all([n.e("chunk-1e3740c2"),n.e("chunk-52efed94"),n.e("chunk-2d0dad04")]).then(n.bind(null,"6ccd"))},meta:{requireLogin:!0}},{path:"/:id/add-question",name:"add-question",props:!0,component:function(){return Promise.all([n.e("chunk-1e3740c2"),n.e("chunk-52efed94"),n.e("chunk-2d21a39a")]).then(n.bind(null,"bb37"))}},{path:"/401",name:"401",component:function(){return n.e("chunk-2d0e887e").then(n.bind(null,"8a54"))}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],R=new E["a"]({routes:B});R.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requireLogin}))?localStorage.getItem("token")?n():n("/log-in"):n()}));var D=R,J=n("2f62");r["a"].use(J["a"]);var M=new J["a"].Store({state:{isLoading:!1,token:"",isAuthenticated:!1,user:{id:0,username:"",is_staff:!1},drawer:!1},mutations:{setIsLoading:function(e,t){e.isLoading=t},initializeStore:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.getItem("token")?(e.token=localStorage.getItem("token"),e.isAuthenticated=!0,e.user.id=localStorage.getItem("userid"),e.user.username=localStorage.getItem("username"),e.user.is_staff=JSON.parse(localStorage.getItem("is_staff"))):(e.token="",e.isAuthenticated=!1,e.user.id="",e.user.username="",e.user.is_staff=!1);case 1:case"end":return t.stop()}}),t)})))()},setToken:function(e,t){e.token=t,e.isAuthenticated=!0},setUser:function(e,t){e.user.id=t.id,e.user.username=t.username,localStorage.setItem("username",t.username),localStorage.setItem("userid",t.id)},setUserAccess:function(e,t){e.user.is_staff=JSON.parse(t),localStorage.setItem("is_staff",JSON.parse(t))},removeToken:function(e){e.token="",e.isAuthenticated=!1,e.user.id="",e.user.username="",e.user.is_staff=!1,localStorage.removeItem("token"),localStorage.removeItem("userid"),localStorage.removeItem("username"),localStorage.removeItem("is_staff")},setDrawer:function(e,t){e.drawer=t}},actions:{},modules:{}}),U=n("f309");r["a"].use(U["a"]);var Q=new U["a"]({});u.a.defaults.baseURL="https://pammalprasanna.pythonanywhere.com",r["a"].config.productionTip=!1,new r["a"]({router:D,store:M,vuetify:Q,axios:u.a,render:function(e){return e(N)}}).$mount("#app")}});
//# sourceMappingURL=app.29609a7d.js.map