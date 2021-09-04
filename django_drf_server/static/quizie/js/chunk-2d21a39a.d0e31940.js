(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a39a"],{bb37:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"success--text title font-weight-regular"},[i("v-btn",{attrs:{icon:"",small:"",color:"success"},on:{click:function(t){return e.$router.go(-1)}}},[i("v-icon",{attrs:{dark:""}},[e._v(" mdi-arrow-left")])],1),e._v(" Add question"),i("div",{staticClass:"text-center"},[e._v(e._s(e.quiz["name"]))])],1),i("v-form",{staticClass:"pt-3",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[i("v-textarea",{attrs:{"auto-grow":"",outlined:"",rows:"4",clearable:"",color:"success",required:"",label:"Enter the question"},model:{value:e.question.question,callback:function(t){e.$set(e.question,"question",t)},expression:"question.question"}}),i("v-alert",{attrs:{border:"left","colored-border":"",color:"warning",elevation:"2",dismissible:""}},[e._v("Select the check box near the answer to mark it as an answer for this question ")]),e._l(e.totalChoices,(function(t){return i("div",{key:t,staticClass:"pt-2"},[i("v-row",[i("v-checkbox",{staticClass:"shrink mr-2 mt-0",attrs:{dense:"","hide-details":""},model:{value:e.choices[t].is_answer,callback:function(i){e.$set(e.choices[t],"is_answer",i)},expression:"choices[n].is_answer"}}),i("v-textarea",{attrs:{"auto-grow":"",outlined:"",rows:"4",clearable:"",required:"",color:"success",label:e.getChoiceLabel(t)},model:{value:e.choices[t].choice,callback:function(i){e.$set(e.choices[t],"choice",i)},expression:"choices[n].choice"}}),i("v-btn",{staticClass:"shrink ml-2 mt-0",attrs:{"hide-details":"",icon:"",color:"red"},on:{click:function(i){return e.removeOption(e.choices[t])}}},[i("v-icon",[e._v("mdi-delete")])],1)],1)],1)})),i("div",{staticClass:"pt-2"},[i("v-btn",{staticClass:"text-capitalize",attrs:{tile:"",block:"",dark:"",color:"success"},on:{click:function(t){return e.addOption()}}},[i("v-icon",{attrs:{left:""}},[e._v(" mdi-plus ")]),e._v(" Add option")],1)],1),i("v-textarea",{staticClass:"pt-4",attrs:{"auto-grow":"",outlined:"",rows:"4",clearable:"",required:"",color:"success",label:"Explanation for the answer (optional)"},model:{value:e.question.answer_explantion,callback:function(t){e.$set(e.question,"answer_explantion",t)},expression:"question.answer_explantion"}}),i("v-text-field",{staticClass:"mt-0 pt-0",attrs:{type:"number",label:"Enter maximum marks in number",color:"success",required:"",outlined:""},model:{value:e.question.maximum_mark,callback:function(t){e.$set(e.question,"maximum_mark",t)},expression:"question.maximum_mark"}}),e.error.length?i("v-alert",{attrs:{border:"left",color:"red lighten-1",dark:""}},[e._v(" "+e._s(e.error)+" ")]):e._e(),i("v-btn",{staticClass:"text-capitalize",attrs:{type:"submit",block:"",color:"success"}},[e._v("Submit")])],2),i("v-snackbar",{attrs:{timeout:e.timeout,color:"warning"},scopedSlots:e._u([{key:"action",fn:function(t){var s=t.attrs;return[i("v-btn",e._b({attrs:{icon:"",color:"white"},on:{click:function(t){e.snackbar=!1}}},"v-btn",s,!1),[i("v-icon",[e._v("mdi-close")])],1)]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")])],1)},o=[],a=i("1da1"),n=(i("96cf"),i("bc3a")),r=i.n(n),c={data:function(){return{totalChoices:2,snackbar:!1,text:"",timeout:3e3,error:"",quiz:{},question:{quiz_id:"",question:"",maximum_mark:"",answer_explantion:"",objective_type:""},choices:[{id:0,choice:"",is_answer:!1},{id:1,choice:"",is_answer:!1},{id:2,choice:"",is_answer:!1},{id:3,choice:"",is_answer:!1},{id:4,choice:"",is_answer:!1},{id:5,choice:"",is_answer:!1},{id:6,choice:"",is_answer:!1},{id:7,choice:"",is_answer:!1},{id:8,choice:"",is_answer:!1},{id:9,choice:"",is_answer:!1},{id:10,choice:"",is_answer:!1}],formData:{}}},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),t.next=3,r.a.get("/api/v1/quiz/".concat(e.$route.params.id)).then((function(t){e.quiz=t.data}));case 3:e.$store.commit("setIsLoading",!1);case 4:case"end":return t.stop()}}),t)})))()},methods:{getChoiceLabel:function(e){return"Enter the option ".concat(e)},addOption:function(){10===this.totalChoices?(this.text="You cannot add more than 10 choices!",this.snackbar=!0):this.totalChoices+=1},removeOption:function(e){if(2===this.choices.length)this.text="Minimum two options are required to create a question!",this.snackbar=!0;else{var t=this.choices.indexOf(e);this.choices[t].choice="",this.choices[t].is_answer=!1,this.totalChoices-=1}},validate:function(){if(this.error="",""===this.question.question)return this.error="Question field cannot be empty!",!1;for(var e=1;e<=this.totalChoices;e++)if(""===this.choices[e].choice)return this.error="Option ".concat(e," cannot be empty!"),!1;var t=!1;for(e=1;e<=this.totalChoices;e++)!0===this.choices[e].is_answer&&(t=t||this.choices[e].is_answer);return!1===t?(this.error="Choose atleast one option as correct answer!",!1):(""===this.question.maximum_mark&&(this.error="Maximum marks cannot be empty!"),!0)},prepareData:function(){for(var e=[],t=0,i=1;i<=this.totalChoices;i++)""!=this.choices[i].choice&&(e.push(this.choices[i]),!0===this.choices[i].is_answer&&(t+=1));return this.question.objective_type=t>1?"multiple":"single",this.question.quiz_id=this.quiz["id"],this.formData["question"]=this.question,this.formData["choices"]=e,!0},submitForm:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setIsLoading",!0),t.next=3,e.validate();case 3:if(!t.sent){t.next=10;break}return t.next=6,e.prepareData();case 6:if(!t.sent){t.next=10;break}return e.$store.commit("setIsLoading",!0),t.next=10,r.a.post("/api/v1/question/",e.formData).then((function(t){console.log(t.data),e.$router.push({name:"view-quiz",params:{id:e.quiz["id"]}})})).catch((function(e){console.log(JSON.stringify(e))}));case 10:e.$store.commit("setIsLoading",!1);case 11:case"end":return t.stop()}}),t)})))()}}},u=c,l=i("2877"),h=i("6544"),d=i.n(h),m=i("0798"),b=i("8336"),p=i("ac7c"),v=i("4bd4"),f=i("132d"),w=i("0fd9"),_=i("2db4"),k=i("8654"),x=i("a844"),q=Object(l["a"])(u,s,o,!1,null,null,null);t["default"]=q.exports;d()(q,{VAlert:m["a"],VBtn:b["a"],VCheckbox:p["a"],VForm:v["a"],VIcon:f["a"],VRow:w["a"],VSnackbar:_["a"],VTextField:k["a"],VTextarea:x["a"]})}}]);
//# sourceMappingURL=chunk-2d21a39a.d0e31940.js.map