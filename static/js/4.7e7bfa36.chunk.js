(this["webpackJsonpcountries-browser"]=this["webpackJsonpcountries-browser"]||[]).push([[4],{39:function(e,a,n){},41:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),r=(n(39),n(40)),c=(n(16),void 0);a.default=function(e){var a=e.slideMethod,n=e.onBackClick,t=e.colorMode,o=e.currentCountry,u=e.borders,m=e.onCountryClick,s=[l.a.createElement("p",{key:-1},"Border Countries")];u.forEach((function(e,a){s.push(l.a.createElement("button",{key:a,onClick:m.bind(c,e.alpha2Code,"in")},e.name))}));var i=function(e){document.body.style.overflowY=!0===e?"scroll":"hidden"};return l.a.createElement("div",{onMouseOver:i,onMouseOut:i.bind(c,!0),className:" CountryPage "+t+"-CountryPage "+a},l.a.createElement("div",{className:"button-container "+t+"-button-container",onClick:n},l.a.createElement(r.a,{className:"back-icon"}),l.a.createElement("button",{className:"back-button"},"Back")),l.a.createElement("div",{className:"CountryCont"},l.a.createElement("div",{className:"flag"},l.a.createElement("img",{alt:o.name,src:o.flag})),l.a.createElement("div",{className:"CountryInfo"},l.a.createElement("h1",null,o.name),l.a.createElement("div",{className:"infoCont"},l.a.createElement("div",{className:"info1"},l.a.createElement("p",null,"Native Name: ",l.a.createElement("span",null,o.nativeName)),l.a.createElement("p",null,"Population: ",l.a.createElement("span",null,o.population)),l.a.createElement("p",null,"Region: ",l.a.createElement("span",null,o.region)),l.a.createElement("p",null,"Sub Region: ",l.a.createElement("span",null,o.subregion)),l.a.createElement("p",null,"Capital: ",l.a.createElement("span",null,o.capital))),l.a.createElement("div",{className:"info2"},l.a.createElement("p",null,"Top Level Domain: ",l.a.createElement("span",null,o.topLevelDomain)),l.a.createElement("p",null,"Currencies: ",l.a.createElement("span",null,o.currencies.map((function(e){return e.name+","})))),l.a.createElement("p",null,"Languages: ",l.a.createElement("span",null,o.languages.map((function(e){return e.name+","})))))),l.a.createElement("div",{className:"borderButton "+t+"-borderButton"},s))))}}}]);
//# sourceMappingURL=4.7e7bfa36.chunk.js.map