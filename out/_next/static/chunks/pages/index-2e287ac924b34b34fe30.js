(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6372:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),i=n(7757),o=n.n(i);function a(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function c(e){a(o,r,i,c,s,"next",e)}function s(e){a(o,r,i,c,s,"throw",e)}c(void 0)}))}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=n(9008),u=n(4476),d=n.n(u),g=n(321),p=n.n(g),m=.69,f="http://localhost:3001/functionup",x=function(e){return"".concat(f,"/collegeDetails?collegeName=").concat(e)},_="".concat(f,"/interns"),y=function(e){var t=e.width,n=void 0===t?0:t,i=e.height,o=void 0===i?0:i;return(0,r.jsx)("div",{style:{width:n,height:o}})};function v(e){var t=e.collegeDetails,n=t.fullName,i=t.logoLink,o=l((null===n||void 0===n?void 0:n.split(","))||["",""],2),a=o[0],c=o[1];return(0,r.jsxs)("section",{className:"".concat(d().full," ").concat(d().section," ").concat(p().leftSection),children:[(0,r.jsx)(y,{height:"2.5rem"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:p().companyNameContainer,children:[(0,r.jsx)("img",{src:i,alt:"logo",width:80*m,height:80*m}),(0,r.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,r.jsx)("h2",{className:p().collegeName,children:a.trim()}),!!c&&(0,r.jsx)("small",{className:p().collegeCity,children:c.trim()})]})]}),(0,r.jsx)(y,{height:"4rem"}),(0,r.jsxs)("h1",{className:p().descHeading,children:["Want to be a part ",(0,r.jsx)("br",{})," of Company?"]}),(0,r.jsx)(y,{height:"1.7rem"}),(0,r.jsx)("img",{src:"/svgs/student.svg",alt:"student reading",width:442*m,height:419*m})]}),(0,r.jsx)(y,{height:".5rem"}),(0,r.jsxs)("small",{className:"".concat(p().copyrightText," ").concat(p().hideCopyRightText),children:["Powered by ",(0,r.jsx)("span",{style:{color:"#FF2231"},children:"FunctionUp"})]})]})}var j=n(4942),b=n(1856),w=n.n(b),N=n(7294);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){if("string"!==typeof e)return e;var t=l(e.split("@"),2),n=t[0],r=t[1];return"".concat(n.slice(0,n.length/2)).concat("*".repeat(n.length/2))+(r?"@":"")+(r||"")}var T=function(e){var t=e.width,n=void 0===t?0:t,i=e.height,o=void 0===i?0:i;return(0,r.jsx)("div",{style:{width:n,height:o}})};function B(e){var t=e.collegeDetails,n=e.refreshCollegeDetails,i=(0,N.useState)(1),a=i[0],s=i[1],l=(0,N.useState)({}),h=l[0],u=l[1],g=(0,N.useState)({}),f=g[0],x=g[1],y=(0,N.useState)(!1),v=y[0],b=y[1],S=t.interns,B=t.name,k=t.fullName,E=0===a?[{placeholder:"Name",type:"text",id:"name",handleOnChange:H},{placeholder:"Email Address",type:"email",id:"email",handleOnChange:H},{placeholder:"WhatsApp No.",type:"number",id:"mobile",maxlength:10,handleOnChange:H},{placeholder:"Resume upload",type:"file",id:"cv",handleOnChange:function(e,t){var n,r=t.target.files[0];u(C(C({},h),{},(n={},(0,j.Z)(n,e,r),(0,j.Z)(n,"cvName",r.name),n)))}}]:[{placeholder:"Company Name",type:"text",id:"name",handleOnChange:H},{placeholder:"Location",type:"text",id:"location",handleOnChange:H},{placeholder:"Phone No.",type:"number",id:"mobile",maxlength:10,handleOnChange:H},{placeholder:"Email Address",type:"email",id:"email",handleOnChange:H}],A=0===a?u:x,P=0===a?h:f;function F(e){return a===e?"".concat(w().toggleBtn," ").concat(w().whiteText):w().toggleBtn}function H(e,t){A(C(C({},P),{},(0,j.Z)({},e,t.target.value)))}function R(){return(R=c(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b(!0),!(Object.keys(P).length<4||Object.values(P).filter((function(e){return!e})).length)){e.next=5;break}return alert("All fields are mandatory"),e.abrupt("return");case 5:if(1!==a){e.next=9;break}return alert("your request has been submitted successfully"),x({}),e.abrupt("return");case 9:return t=new FormData,Object.keys(h).forEach((function(e){return t.append(e,h[e])})),t.append("collegeName",B),e.next=14,fetch(_,{method:"POST",body:t});case 14:return r=e.sent,e.next=17,r.json();case 17:if(!1!==e.sent.status){e.next=20;break}throw"";case 20:alert("Your request has been submitted successfully. You will be contacted soon"),u({}),n(),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(0),console.log(e.t0,"post");case 28:return e.prev=28,b(!1),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[0,25,28,31]])})))).apply(this,arguments)}return(0,r.jsxs)("section",{className:"".concat(d().section," ").concat(w().rightSection),children:[(0,r.jsx)(T,{height:"2.5rem"}),(0,r.jsxs)("div",{onClick:function(e){void 0!=e.target.value&&e.target.value!==a&&s(Number(e.target.value))},className:w().internToggleBtnContainer,children:[(0,r.jsx)("div",{className:0===a?"".concat(w().selectedToggleBtn," ").concat(w().selectedToggleBtnLeft):"".concat(w().selectedToggleBtn," ").concat(w().selectedToggleBtnRight)}),(0,r.jsx)("button",{value:0,className:F(0),children:"Apply for internship"}),(0,r.jsx)("button",{value:1,className:F(1),children:"Hire Software Interns"})]}),(0,r.jsx)(T,{height:"2.5rem"}),1===a&&Array.isArray(S)&&!!S.length&&(0,r.jsxs)("div",{className:w().interestContainer,children:[(0,r.jsxs)("div",{className:w().interestRow,children:[(0,r.jsx)("span",{className:w().rowItemHeading,style:{flex:.75},children:"S. no"}),(0,r.jsx)("span",{className:w().rowItemHeading,style:{flex:1},children:"Intern Name"}),(0,r.jsx)("span",{className:w().rowItemHeading,style:{flex:1},children:"Email Address"})]},0),S.map((function(e,t){return(0,r.jsxs)("div",{className:w().interestRow,children:[(0,r.jsx)("span",{style:{flex:.75,fontSize:".87rem",fontWeight:"700"},children:"".concat(t+1,". ")}),(0,r.jsx)("span",{style:{flex:1,fontSize:".87rem",fontWeight:"700"},children:e.name}),(0,r.jsx)("span",{style:{flex:1,fontSize:".87rem"},children:O(e.email)})]},e._id)}))]}),(0,r.jsx)(T,{height:"1.5rem"}),(0,r.jsx)("p",{className:w().intro_text,children:0===a?"Join as a Software Developer Intern in a top tier company. Register Now.":"Looking to hire interns from ".concat(k,"? Register Now.")}),(0,r.jsx)(T,{height:"1.5rem"}),(0,r.jsx)("div",{className:w().inputContainer,children:E.map((function(e){var t=e.id,n=e.type,i=e.handleOnChange,o=e.placeholder;return(0,r.jsxs)("div",{className:w().formElementContainer,children:[(0,r.jsx)("label",{htmlFor:t,className:w().labelBox,style:{color:h.cvName?"black":"#caccdd"},children:"cv"===t&&(h.cvName||o)}),(0,r.jsx)("input",{onChange:function(e){return i(t,e)},value:P["cv"===t?"":t]||"",id:t,type:n,required:!0,autoComplete:"on",className:w().inputBox,placeholder:o})]},t)}))}),(0,r.jsx)(T,{height:"1.25rem"}),(0,r.jsx)("button",{disabled:v,className:w().applyBtn,onClick:function(){return R.apply(this,arguments)},children:"Apply Now"}),0===a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{height:"4rem"}),(0,r.jsx)("p",{children:"More than 200+ Brands trust us"}),(0,r.jsx)(T,{height:"1rem"}),(0,r.jsx)("img",{src:"/svgs/companies.svg",alt:"companies",width:517.5,height:40*m})]}),(0,r.jsx)(T,{height:"2rem"}),(0,r.jsxs)("small",{className:"".concat(p().copyrightText," ").concat(w().copyrightText),children:["Powered by ",(0,r.jsx)("span",{style:{color:"#FF2231"},children:"FunctionUp"})]}),(0,r.jsx)(T,{height:"2rem"})]})}var k=n(1163);function E(){var e,t=(0,N.useState)({}),n=t[0],i=t[1],a=(0,N.useState)(!1),s=(a[0],a[1]),u=((0,k.useRouter)(),(null===(e=window)||void 0===e?void 0:e.location).hostname),g=l((null===u||void 0===u?void 0:u.split("."))||[],3),p=g[0],m=g[1],f=(g[2],"www"===p?m:p);function _(){return(_=c(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(x(f));case 3:return t=e.sent,e.next=6,t.json();case 6:if(!1!==(n=e.sent).status){e.next=9;break}throw n.msg;case 9:i(n.data),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:return e.prev=14,e.finish(14);case 16:case"end":return e.stop()}}),e,null,[[0,12,14,16]])})))).apply(this,arguments)}return(0,N.useEffect)((function(){function e(){return(e=c(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch(x(f));case 4:return t=e.sent,e.next=7,t.json();case 7:if(!1!==(n=e.sent).status){e.next=10;break}throw n.msg;case 10:i(n.data),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.prev=15,s(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,13,15,18]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),(0,r.jsxs)("div",{className:"".concat(d().full," ").concat(d().container),children:[(0,r.jsxs)(h.default,{children:[(0,r.jsx)("title",{children:"Function Up Intern"}),(0,r.jsx)("meta",{name:"description",content:"Intern Form"})]}),(0,r.jsxs)("main",{className:"".concat(d().full," ").concat(d().main),children:[(0,r.jsx)(v,{collegeDetails:n}),(0,r.jsx)(B,{refreshCollegeDetails:function(){return _.apply(this,arguments)},collegeDetails:n})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6372)}])},321:function(e){e.exports={leftSection:"leftSection_leftSection__2Swu5",companyNameContainer:"leftSection_companyNameContainer__24qEu",descHeading:"leftSection_descHeading__x8J_D",copyrightText:"leftSection_copyrightText__850tF",collegeName:"leftSection_collegeName__2yQR3",collegeCity:"leftSection_collegeCity__2WSgJ",hideCopyRightText:"leftSection_hideCopyRightText__2zbcT"}},1856:function(e){e.exports={rightSection:"rightSection_rightSection__3IF9x",intro_text:"rightSection_intro_text__36uv7",internToggleBtnContainer:"rightSection_internToggleBtnContainer__1dPhD",toggleBtn:"rightSection_toggleBtn__1GBoz",selectedToggleBtn:"rightSection_selectedToggleBtn__3w8kX",selectedToggleBtnRight:"rightSection_selectedToggleBtnRight__3z1vF",selectedToggleBtnLeft:"rightSection_selectedToggleBtnLeft__KyycX",whiteText:"rightSection_whiteText__2NQQO",inputContainer:"rightSection_inputContainer__3vcjf",inputBox:"rightSection_inputBox__1kwWw",formElementContainer:"rightSection_formElementContainer__3ahNU",labelBox:"rightSection_labelBox__399Or",applyBtn:"rightSection_applyBtn__3iRFu",companyContainer:"rightSection_companyContainer__3G1uS",interestContainer:"rightSection_interestContainer__3zW4a",interestRow:"rightSection_interestRow__AG_nt",rowItemHeading:"rightSection_rowItemHeading__3k5yY",copyrightText:"rightSection_copyrightText__uKzF9"}},4476:function(e){e.exports={full:"Home_full__2oLj5",container:"Home_container__1EcsU",main:"Home_main__1x8gC",section:"Home_section__16Giz",loader:"Home_loader__2xJ8c",spin:"Home_spin__dz3Ay",loader_container:"Home_loader_container__1IBu9"}},9008:function(e,t,n){e.exports=n(639)},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);