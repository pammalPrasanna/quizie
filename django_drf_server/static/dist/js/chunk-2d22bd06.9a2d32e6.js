(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bd06"],{f127:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e.results.length?a("span",[e._v("Results")]):e._e(),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.results,search:e.search}})],1)},s=[],n=a("1da1"),c=(a("96cf"),a("ac1f"),a("1276"),a("b0c0"),a("bc3a")),i=a.n(c),l={data:function(){return{search:"",headers:[{text:"Attended on",align:"start",sortable:!0,value:"date"},{text:"Quiz",sortable:!0,value:"quiz"},{text:"Marks",sortable:!0,value:"marks"},{text:"Time taken",sortable:!0,value:"time"}],results:[]}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),t.next=3,i.a.get("/api/v1/user/results/".concat(e.$route.params.id)).then((function(t){var a=t.data;for(var r in a){var s=String(a[r].attempt_on);s="".concat(s.split("T")[0]," ")+"".concat(s.split("T")[1].split(".")[0]),e.results.push({date:s,quiz:a[r]["quiz"].name,marks:a[r].marks,time:a[r].time})}})).catch((function(e){console.log(e)}));case 3:e.$store.commit("setIsLoading",!1);case 4:case"end":return t.stop()}}),t)})))()}},u=l,o=a("2877"),d=a("6544"),m=a.n(d),p=a("b0af"),h=a("99d9"),f=a("8fea"),v=a("2fa4"),b=a("8654"),g=Object(o["a"])(u,r,s,!1,null,null,null);t["default"]=g.exports;m()(g,{VCard:p["a"],VCardTitle:h["c"],VDataTable:f["a"],VSpacer:v["a"],VTextField:b["a"]})}}]);
//# sourceMappingURL=chunk-2d22bd06.9a2d32e6.js.map