(this["webpackJsonpcountries-browser"]=this["webpackJsonpcountries-browser"]||[]).push([[0],{24:function(e,t,o){},25:function(e,t,o){},27:function(e,t,o){},29:function(e,t,o){},30:function(e,t,o){},31:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),a=o(5),c=o.n(a),s=o(6),l=o(7),i=(o(24),o(25),o(11)),d=(o(27),o(10)),u=o(2);class h extends n.PureComponent{render(){const{colorMode:e,darkModeEvent:t}=this.props;return Object(u.jsx)("div",{className:"Header "+e,children:Object(u.jsxs)("div",{className:"headerContainer",children:[Object(u.jsx)("p",{className:"title",children:"Where in the world?"}),Object(u.jsxs)("div",{className:"buttonContainer",onClick:t.bind(this,e),children:["dark"===e?Object(u.jsx)("button",{"aria-label":"dark moode button",className:"darkmode-button darkButton",children:Object(u.jsx)(d.a,{})}):Object(u.jsx)("button",{"aria-label":"dark moode button",className:"darkmode-button",children:Object(u.jsx)(d.b,{})}),Object(u.jsx)("p",{children:"Dark Mode"})]})]})})}}var C=h,p=(o(29),o(14));class b extends n.PureComponent{render(){const{colorMode:e,onInputChange:t,selectValue:o,onChange:n}=this.props;return Object(u.jsxs)("div",{className:"FilterContainer",children:[Object(u.jsxs)("div",{className:"searchBar "+e+"-searchBar",children:[Object(u.jsx)(p.a,{className:"searchIcon "+e+"-searchIcon"}),Object(u.jsx)("input",{"aria-label":"Search Box",type:"text",className:"SearchField",placeholder:"Search for a country",onChange:t})]}),Object(u.jsxs)("select",{"aria-label":"Select Region",className:"selectRegion "+e+"-selectRegion",value:o,onChange:n,children:[Object(u.jsx)("option",{value:"1",children:"Filter by Region"}),Object(u.jsx)("option",{value:"Africa",children:"Africa"}),Object(u.jsx)("option",{value:"Americas",children:"Americas"}),Object(u.jsx)("option",{value:"Asia",children:"Asia"}),Object(u.jsx)("option",{value:"Europe",children:"Europe"}),Object(u.jsx)("option",{value:"Oceania",children:"Oceania"})]})]})}}var j=b,O=o(15);o(30);var m=e=>{const[t,o]=Object(n.useState)(!1),{colorMode:r}=e;return window.addEventListener("scroll",(()=>{!t&&window.pageYOffset>400?o(!0):t&&window.pageYOffset<=400&&o(!1)})),Object(u.jsx)(O.a,{className:`scrollTop ${r}-arrow`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"block":"none"}})};var g={CHANGE_SEARCHBOX:"CHANGE_SEARCHBOX",DARKMODE_EVENT:"DARKMODE_EVENT",CHANGE_LIST:"CHANGE_LIST",CLICK_BACK:"CLICK_BACK",FETCH_COUNTRIES:"FETCH_COUNTRIES",FETCH_COUNTRY:"FETCH_COUNTRY",FETCH_BORDERS:"FETCH_BORDERS"};const E=r.a.lazy((()=>o.e(3).then(o.bind(null,36)))),y=r.a.lazy((()=>Promise.all([o.e(5),o.e(4)]).then(o.bind(null,35))));class v extends n.Component{componentDidMount(){this.props.fetchCountries()}render(){const{title:e,nameFilter:t,onInputChange:o,colorMode:r,darkModeEvent:a,selectValue:c,onChange:s,slideMethod:l,onBackClick:d,data:h,borders:p,inPage:b,currentCountry:O,onCountryClick:g}=this.props;let v=h.filter((e=>"1"===c?e.name.common.toLowerCase().includes(t.toLowerCase()):e.name.common.toLowerCase().includes(t.toLowerCase())&&e.region===c));return Object(u.jsxs)("div",{className:"App "+r+"-App",children:[Object(u.jsxs)(i.a,{children:[Object(u.jsx)("meta",{charSet:"utf-8"}),Object(u.jsx)("title",{children:e})]}),Object(u.jsx)(C,{colorMode:r,darkModeEvent:a}),Object(u.jsx)(j,{colorMode:r,onInputChange:o,selectValue:c,onChange:s}),Object(u.jsx)(n.Suspense,{fallback:Object(u.jsx)("h1",{children:"Loading Countries"}),children:Object(u.jsx)(E,{data:v,colorMode:r,onCountryClick:g,allCountries:h})}),!0===b?Object(u.jsx)(n.Suspense,{fallback:Object(u.jsx)(u.Fragment,{children:"Loading..."}),children:Object(u.jsx)(y,{slideMethod:l,onCountryClick:g,borders:p,onBackClick:d,colorMode:r,currentCountry:O})}):null,Object(u.jsx)(m,{colorMode:r})]})}}var w=Object(s.b)((e=>({nameFilter:e.uiReducer.nameFilter,colorMode:e.uiReducer.colorMode,selectValue:e.uiReducer.selectValue,slideMethod:e.dataReducer.slideMethod,data:e.dataReducer.data,currentCountry:e.dataReducer.currentCountry,inPage:e.dataReducer.inPage,borders:e.dataReducer.borders,title:e.dataReducer.title})),(e=>({onInputChange:t=>{return e((o=t.target.value,{type:g.CHANGE_SEARCHBOX,payload:o}));var o},darkModeEvent:t=>e("dark"===t?(localStorage.setItem("theme","light"),{type:g.DARKMODE_EVENT,payload:"light"}):(localStorage.setItem("theme","dark"),{type:g.DARKMODE_EVENT,payload:"dark"})),onChange:t=>{return e((o=t.target.value,{type:g.CHANGE_LIST,payload:o}));var o},onBackClick:()=>e((()=>{document.activeElement&&(document.activeElement.blur(),document.getElementById("CountriesContainer").focus(),document.body.style.overflowY="auto");return{type:g.CLICK_BACK,payload:"slide-out"}})()),fetchCountries:()=>e((e=>{fetch("https://restcountries.com/v3/all").then((e=>e.json())).then((t=>e({type:g.FETCH_COUNTRIES,payload:t}))).catch((e=>alert("Somthing Wrong,check your internet connection or please come later")))})),onCountryClick:(t,o)=>e(((e,t)=>o=>{var n;"out"===t&&o({type:g.FETCH_COUNTRY,payload:{inPage:!1,currentCountry:{}}}),fetch(`https://restcountries.com/v3/alpha/${e}`).then((e=>e.json())).then((e=>{if(n=e[0],e[0].borders.length>0)var t=e[0].borders.map((e=>`https://restcountries.com/v3/alpha/${e.toLowerCase()}`));Promise.all(t.map((e=>fetch(e).then((e=>e.json()))))).then((e=>o({type:g.FETCH_BORDERS,payload:e}))).catch((e=>o({type:g.FETCH_BORDERS,payload:[]}))),o({type:g.FETCH_COUNTRY,payload:{currentCountry:e[0],inPage:!0,slideMethod:"",title:e[0].name.common}})})).catch((e=>o({type:g.FETCH_COUNTRY,payload:{currentCountry:n,inPage:!0,slideMethod:"",title:n.name.common,borders:[]}})))})(t,o))})))(v);const R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const o=e.installing;null!=o&&(o.onstatechange=()=>{"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}const x={colorMode:localStorage.getItem("theme"),nameFilter:"",selectValue:"1"},k={data:[],currentCountry:{},borders:[],inPage:!1,slideMethod:"",title:"Countries Browser"};var N=o(16);const T=Object(l.b)({uiReducer:(e=x,t={})=>{switch(t.type){case g.CHANGE_SEARCHBOX:return Object.assign({},e,{nameFilter:t.payload});case g.DARKMODE_EVENT:return Object.assign({},e,{colorMode:t.payload});case g.CHANGE_LIST:return Object.assign({},e,{selectValue:t.payload});default:return e}},dataReducer:(e=k,t={})=>{switch(t.type){case g.CLICK_BACK:return Object.assign({},e,{slideMethod:t.payload,title:"Countries Browser"});case g.FETCH_COUNTRIES:return Object.assign({},e,{data:t.payload});case g.FETCH_BORDERS:return Object.assign({},e,{borders:t.payload});case g.FETCH_COUNTRY:return Object.assign({},e,t.payload);default:return e}}}),A=Object(l.c)(T,Object(l.a)(N.a));c.a.render(Object(u.jsx)(s.a,{store:A,children:Object(u.jsx)(w,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Country-Browser",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const t="/Country-Browser/service-worker.js";R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((o=>{const n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):f(e,t)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.ad6a9207.chunk.js.map