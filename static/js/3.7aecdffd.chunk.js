(this["webpackJsonpcountries-browser"]=this["webpackJsonpcountries-browser"]||[]).push([[3],{33:function(e,a,n){},37:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n.n(t),r=(n(33),n(2)),c=n(3),i=n(5),l=n(4),u=function(e){Object(i.a)(n,e);var a=Object(l.a)(n);function n(){return Object(r.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,a=e.flag,n=e.name,t=e.population,r=e.region,c=e.capital,i=e.colorMode,l=e.onCountryClick,u=e.alpha2Code;return o.a.createElement("div",{className:"Country "+i+"-Country",onClick:l.bind(this,u,"out")},o.a.createElement("img",{src:a,alt:n}),o.a.createElement("div",{className:"infoContainer"},o.a.createElement("p",{className:"countryName"},n),o.a.createElement("p",{className:"countryInfo"},"Population:"+t),o.a.createElement("p",{className:"countryInfo"},"Region:"+r),o.a.createElement("p",{className:"countryInfo"},"Capital:"+c)))}}]),n}(t.PureComponent);a.default=function(e){var a=e.data,n=e.colorMode,t=e.onCountryClick,r=[];return a.forEach((function(e,a){r.push(o.a.createElement(u,{key:a,index:a,name:e.name,flag:e.flag,population:e.population,region:e.region,capital:e.capital,colorMode:n,alpha2Code:e.alpha2Code,onCountryClick:t}))})),o.a.createElement("div",{className:"CountriesContainer",id:"CountriesContainer"},r)}}}]);
//# sourceMappingURL=3.7aecdffd.chunk.js.map