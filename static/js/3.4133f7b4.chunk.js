(this["webpackJsonpcountries-browser"]=this["webpackJsonpcountries-browser"]||[]).push([[3],{32:function(n,o,e){},36:function(n,o,e){"use strict";e.r(o);var t=e(1),a=(e(32),e(2));class c extends t.PureComponent{render(){const{flag:n,name:o,population:e,continent:t,capital:c,colorMode:s,onCountryClick:i,alpha2Code:r}=this.props;return Object(a.jsxs)("div",{className:"Country "+s+"-Country",onClick:i.bind(this,r,"out"),children:[Object(a.jsx)("img",{src:n,alt:o}),Object(a.jsxs)("div",{className:"infoContainer",children:[Object(a.jsx)("p",{className:"countryName",children:o}),Object(a.jsx)("p",{className:"countryInfo",children:"Population:"+e}),Object(a.jsx)("p",{className:"countryInfo",children:"Continent:"+t}),Object(a.jsx)("p",{className:"countryInfo",children:"Capital:"+c})]})]})}}var s=c;o.default=({data:n,colorMode:o,onCountryClick:e})=>{const t=[];return n.forEach(((n,c)=>{t.push(Object(a.jsx)(s,{index:c,name:n.name,flag:n.flags[1],population:n.population,continent:n.continent,capital:n.capital,colorMode:o,alpha2Code:n.alpha2Code,onCountryClick:e},c))})),Object(a.jsx)("div",{className:"CountriesContainer",id:"CountriesContainer",children:t})}}}]);
//# sourceMappingURL=3.4133f7b4.chunk.js.map