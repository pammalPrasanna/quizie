(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4a82"],{"90c8":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-card",[t("v-card-title",[e.results.length?t("span",[e._v(e._s(e.quiz_name))]):e._e(),t("v-spacer"),t("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1),t("v-data-table",{attrs:{headers:e.headers,items:e.results,search:e.search}})],1)},n=[],s=t("1da1"),c=(t("96cf"),t("b0c0"),t("ac1f"),t("1276"),t("bc3a")),i=t.n(c),u={data:function(){return{search:"",headers:[{text:"Attended on",align:"start",sortable:!0,value:"date"},{text:"User",sortable:!0,value:"user"},{text:"Marks",sortable:!0,value:"marks"},{text:"Time taken",sortable:!0,value:"time"}],results:[],quiz_name:""}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.$store.commit("setIsLoading",!0),a.next=3,i.a.get("/api/v1/quiz/results/".concat(e.$route.params.id)).then((function(a){var t=a.data;for(var r in e.quiz_name=t[0]["quiz"].name,t){var n=String(t[r].attempt_on);n="".concat(n.split("T")[0]," ")+"".concat(n.split("T")[1].split(".")[0]),e.results.push({date:n,user:t[r].user["username"],marks:t[r].marks,time:t[r].time})}})).catch((function(e){console.log(e)}));case 3:e.$store.commit("setIsLoading",!1);case 4:case"end":return a.stop()}}),a)})))()}},l=u,o=t("2877"),d=t("6544"),m=t.n(d),p=t("b0af"),h=t("99d9"),f=t("8fea"),v=t("2fa4"),b=t("8654"),g=Object(o["a"])(l,r,n,!1,null,null,null);a["default"]=g.exports;m()(g,{VCard:p["a"],VCardTitle:h["c"],VDataTable:f["a"],VSpacer:v["a"],VTextField:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0e4a82.ad546f1b.js.map