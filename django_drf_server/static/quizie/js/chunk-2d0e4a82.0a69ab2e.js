(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4a82"],{"90c8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e.results.length?a("span",[a("v-btn",{attrs:{icon:"",small:"",color:"success"},on:{click:function(t){return e.$router.go(-1)}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-arrow-left")])],1),e._v(" "+e._s(e.quiz_name))],1):e._e(),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.results,search:e.search}})],1)},n=[],s=a("1da1"),c=(a("96cf"),a("b0c0"),a("ac1f"),a("1276"),a("bc3a")),i=a.n(c),o={data:function(){return{search:"",headers:[{text:"Attended on",align:"start",sortable:!0,value:"date"},{text:"User",sortable:!0,value:"user"},{text:"Marks",sortable:!0,value:"marks"},{text:"Time taken",sortable:!0,value:"time"}],results:[],quiz_name:""}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),t.next=3,i.a.get("/api/v1/quiz/results/".concat(e.$route.params.id)).then((function(t){var a=t.data;for(var r in e.quiz_name=a[0]["quiz"].name,a){var n=String(a[r].attempt_on);n="".concat(n.split("T")[0]," ")+"".concat(n.split("T")[1].split(".")[0]),e.results.push({date:n,user:a[r].user["username"],marks:a[r].marks,time:a[r].time})}})).catch((function(e){console.log(e)}));case 3:e.$store.commit("setIsLoading",!1);case 4:case"end":return t.stop()}}),t)})))()}},l=o,u=a("2877"),d=a("6544"),m=a.n(d),p=a("8336"),v=a("b0af"),f=a("99d9"),h=a("8fea"),b=a("132d"),g=a("2fa4"),k=a("8654"),w=Object(u["a"])(l,r,n,!1,null,null,null);t["default"]=w.exports;m()(w,{VBtn:p["a"],VCard:v["a"],VCardTitle:f["c"],VDataTable:h["a"],VIcon:b["a"],VSpacer:g["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0e4a82.0a69ab2e.js.map