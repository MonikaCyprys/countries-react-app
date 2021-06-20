(this["webpackJsonpcountries-react-app"]=this["webpackJsonpcountries-react-app"]||[]).push([[0],{15:function(e,t,n){e.exports={countryLink:"countryCard_countryLink__3c8z1",countryContainer:"countryCard_countryContainer__3umOe",countryFlag:"countryCard_countryFlag__1_wk9",countryInfo:"countryCard_countryInfo__3MTHj",countryName:"countryCard_countryName__2OyUu",hidden:"countryCard_hidden__1D_Vs",borders:"countryCard_borders__2jQwX",border:"countryCard_border__2HvR0"}},25:function(e,t,n){e.exports={AppNav:"nav_AppNav__2KV6L",SwitchModeButton:"nav_SwitchModeButton__1Qog6"}},28:function(e,t,n){e.exports={CustomSearching:"header_CustomSearching__2GlFr",clearRegions:"header_clearRegions__3OGdy"}},29:function(e,t,n){e.exports={select:"selectRegion_select__iLT4P",ContinentSelect:"selectRegion_ContinentSelect__1OInx",isActive:"selectRegion_isActive__MKhrk"}},30:function(e,t,n){e.exports={region:"regionListItem_region__2Jo-B",isActive:"regionListItem_isActive__ZGkQO"}},31:function(e,t,n){e.exports={CountryChoice:"SearchCountry_CountryChoice__3iXHj",country:"SearchCountry_country__33aIC"}},36:function(e,t,n){e.exports={border:"Border_border__13qlX"}},41:function(e,t,n){e.exports={App:"v-eHGFMQFlCXOGhZ6T0Pt"}},48:function(e,t,n){},49:function(e,t,n){},5:function(e,t,n){e.exports={details:"detailsComponent_details__2JYF6",goBackIcon:"detailsComponent_goBackIcon__2MRvJ",countryContainer:"detailsComponent_countryContainer__2Hjji",countryFlag:"detailsComponent_countryFlag__1lcan",countryInfo:"detailsComponent_countryInfo__3UmmR",countryName:"detailsComponent_countryName__1_QQ-",hidden:"detailsComponent_hidden__2AVDy",borders:"detailsComponent_borders__RYtvO"}},52:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(33),i=n.n(o),s=n(10),r=n(11),u=n(13),l=n(12),h=(n(41),n(8)),j=n(25),d=n.n(j),g=n(14),b=n(34),p=n(16),m=n(0),O=Object(m.jsx)(g.a,{icon:b.a}),y=Object(m.jsx)(g.a,{icon:p.d}),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={lightMode:!0},a.handleSwitcher=a.handleSwitcher.bind(Object(h.a)(a)),a}return Object(r.a)(n,[{key:"handleSwitcher",value:function(){var e=this;this.setState((function(){return{lightMode:!e.state.lightMode}}))}},{key:"componentDidMount",value:function(){this.state.lightMode?document.body.setAttribute("data-theme","light"):document.body.setAttribute("data-theme","dark")}},{key:"componentDidUpdate",value:function(e,t){t.lightMode!==this.state.lightMode&&this.componentDidMount(this.state.lightMode)}},{key:"render",value:function(){var e,t=this.state.lightMode;return e=t?" Dark Mode":" Light Mode",Object(m.jsxs)("nav",{className:d.a.AppNav,children:[Object(m.jsx)("h1",{children:"Where in the world?"}),Object(m.jsxs)("button",{onClick:this.handleSwitcher,className:d.a.SwitchModeButton,children:[t?O:y,e]})]})}}]),n}(c.a.Component),x=n(22),v=n(19),_=(n(48),n(49),n(17)),C=n(15),N=n.n(C),R=function(e){var t=e.name,n=e.population,a=e.region,c=e.capital,o=e.flag;return Object(m.jsx)(_.b,{className:N.a.countryLink,to:"/country/".concat(t),children:Object(m.jsxs)("section",{className:N.a.countryContainer,children:[Object(m.jsx)("div",{className:N.a.countryFlag,children:Object(m.jsx)("img",{src:o,alt:"".concat(t," flag")})}),Object(m.jsxs)("article",{className:N.a.countryInfo,children:[Object(m.jsx)("h2",{className:N.a.countryName,children:t}),Object(m.jsxs)("p",{children:["Population: ",Object(m.jsx)("span",{className:N.a.population,children:n})]}),Object(m.jsxs)("p",{children:["Region: ",Object(m.jsx)("span",{className:N.a.region,children:a})]}),Object(m.jsxs)("p",{children:["Capital: ",Object(m.jsx)("span",{className:N.a.capital,children:c})]})]})]})})},k=n(28),S=n.n(k),M=n(29),F=n.n(M),I=n(30),T=n.n(I);var w=function(e){var t=e.checkedRegion,n=e.chooseTheRegion,a=e.value,c=e.state,o=e.changeRegion;return e.region,Object(m.jsx)("li",{onClick:function(e){n(t=e.target.textContent),o(t)},className:c?T.a.isActive:T.a.region,value:a,children:a})},D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleMenuRegion=a.handleMenuRegion.bind(Object(h.a)(a)),a.chooseTheRegion=a.chooseTheRegion.bind(Object(h.a)(a)),a.state={toggle:!1,checkedRegion:"Filter by Region"},a}return Object(r.a)(n,[{key:"handleMenuRegion",value:function(){var e=this;this.setState((function(){return{toggle:!e.state.toggle}}))}},{key:"chooseTheRegion",value:function(e){this.setState((function(){return{checkedRegion:e}}))}},{key:"render",value:function(){var e=this.state.checkedRegion;return Object(m.jsx)("div",{onClick:this.handleMenuRegion,className:F.a.select,children:Object(m.jsxs)("ul",{className:F.a.ContinentSelect,children:[this.props.arrow,Object(m.jsx)("li",{className:"init",children:e}),Object(m.jsx)(w,{changeRegion:this.props.changeRegion,region:this.props.region,state:this.state.toggle,chooseTheRegion:this.chooseTheRegion,value:"africa"}),Object(m.jsx)(w,{changeRegion:this.props.changeRegion,region:this.props.region,state:this.state.toggle,chooseTheRegion:this.chooseTheRegion,value:"americas"}),Object(m.jsx)(w,{changeRegion:this.props.changeRegion,region:this.props.region,state:this.state.toggle,chooseTheRegion:this.chooseTheRegion,value:"asia"}),Object(m.jsx)(w,{changeRegion:this.props.changeRegion,region:this.props.region,state:this.state.toggle,chooseTheRegion:this.chooseTheRegion,value:"europe"}),Object(m.jsx)(w,{changeRegion:this.props.changeRegion,region:this.props.region,state:this.state.toggle,chooseTheRegion:this.chooseTheRegion,value:"oceania"})]})})}}]),n}(c.a.Component),A=n(31),L=n.n(A),B=Object(m.jsx)(g.a,{icon:p.c}),P=function(e){var t=e.handleCountries;return Object(m.jsxs)("div",{className:L.a.CountryChoice,children:[B,Object(m.jsx)("input",{type:"search",placeholder:"Search for a country...",name:"Country",className:L.a.country,onChange:t})]})},Q=Object(m.jsx)(g.a,{icon:p.a}),V=function(e){var t=e.changeRegion,n=e.region,a=e.handleCountries;return Object(m.jsxs)("header",{className:S.a.CustomSearching,children:[Object(m.jsx)(P,{handleCountries:a}),Object(m.jsx)(D,{region:n,changeRegion:t,arrow:Q}),Object(m.jsx)("button",{onClick:function(e){return t(n="/all")},className:S.a.clearRegions,children:"Clear regions"})]})},G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).changeRegion=a.changeRegion.bind(Object(h.a)(a)),a.searchCountries=a.searchCountries.bind(Object(h.a)(a)),a.state={flags:[],region:"/all",newCountries:[],inputValue:null},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="https://restcountries.eu/rest/v2".concat(this.state.region);fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState((function(){return{flags:Object(v.a)(t)}}))}))}},{key:"componentDidUpdate",value:function(e,t){t.region!==this.state.region&&this.componentDidMount(this.state.region)}},{key:"changeRegion",value:function(e){var t="/all"===e?e:"/region/".concat(e);this.setState((function(){return{region:t}}))}},{key:"searchCountries",value:function(e){var t=Object(v.a)(this.state.flags),n=e.target.value.toLowerCase(),a=t.filter((function(e){return e.name.toLowerCase().includes(n)?e:null}));this.setState((function(){return{newCountries:Object(v.a)(a),inputValue:n}}))}},{key:"render",value:function(){var e=this.state,t=e.flags,n=e.region,a=e.newCountries,c=0===a.length||0===this.state.inputValue.length?t:a;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(V,{handleCountries:this.searchCountries,region:n,changeRegion:this.changeRegion}),Object(m.jsx)("main",{children:c.map((function(e){return Object(m.jsx)(R,Object(x.a)({},e),e.name)}))})]})}}]),n}(c.a.Component),H=n(36),J=n.n(H),U=function(e){var t=e.allFlagsProps,n=e.bord,a=e.changeCountryID;e.countryName;n=n&&Array.isArray(n)?n:[];for(var c=t||[],o=[],i=0;i<c.length;i++)n.includes(c[i].alpha3Code)&&o.push(c[i].name);return o.map((function(e){return Object(m.jsx)(_.b,{to:"/country/".concat(e),children:Object(m.jsx)("h3",{onClick:function(e){return a(e.target.textContent)},className:J.a.border,children:e},e.toString())})}))},X=n(5),q=n.n(X),K=Object(m.jsx)(g.a,{icon:p.b}),Y=function(e){var t=e.name,n=e.nativeName,a=e.flag,c=e.population,o=e.region,i=e.subregion,s=e.capital,r=e.currencies,u=e.borders,l=e.languages,h=e.topLevelDomain,j=e.allFlags,d=e.changeCountryID,g=e.countryName,b=r?r[0].symbol:null,p=l?l[0].name:null;return Object(m.jsxs)("main",{className:q.a.details,children:[Object(m.jsx)(_.b,{to:"/",children:Object(m.jsxs)("button",{className:q.a.goBackIcon,children:[K," Back"]})}),Object(m.jsxs)("section",{className:q.a.countryContainer,children:[Object(m.jsx)("div",{className:q.a.countryFlag,children:Object(m.jsx)("img",{src:a,alt:""})}),Object(m.jsxs)("article",{className:q.a.countryInfo,children:[Object(m.jsx)("h2",{className:q.a.countryName,children:t}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Native name:"," ",Object(m.jsx)("span",{className:q.a.nativeName,children:n})]}),Object(m.jsxs)("p",{children:["Population:"," ",Object(m.jsx)("span",{className:q.a.population,children:c})]}),Object(m.jsxs)("p",{children:["Region: ",Object(m.jsx)("span",{className:q.a.region,children:o})]}),Object(m.jsxs)("p",{children:["Native name: ",Object(m.jsx)("span",{className:q.a.subRegion,children:i})]}),Object(m.jsxs)("p",{children:["Capital: ",Object(m.jsx)("span",{className:q.a.capital,children:s})]})]}),Object(m.jsxs)("div",{className:"secondInfo",children:[Object(m.jsxs)("p",{children:["Top level domain:",Object(m.jsx)("span",{className:q.a.domain,children:h})]}),Object(m.jsxs)("p",{children:["Currencies: ",Object(m.jsx)("span",{className:q.a.currencies,children:b})]}),Object(m.jsxs)("p",{children:["Languages: ",Object(m.jsx)("span",{className:q.a.languages,children:p})]})]}),Object(m.jsx)("div",{className:q.a.borders,children:Object(m.jsx)(U,{changeCountryID:d,countryName:g,allFlagsProps:j,bord:u})})]})]})]})},Z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).changeCountry=a.changeCountry.bind(Object(h.a)(a)),a.state={data:{},allFlags:[],countryName:""},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(e){var t=this,n=e||this.props.match.params.id,a="https://restcountries.eu/rest/v2/name/".concat(n);if(void 0===e){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return t.setState((function(){return{allFlags:Object(v.a)(e)}}))}))}fetch(a).then((function(e){return e.json()})).then((function(e){return t.setState((function(){return{data:e[0]}}))}))}},{key:"componentDidUpdate",value:function(e,t){t.countryName!==this.state.countryName&&this.componentDidMount(this.state.countryName)}},{key:"changeCountry",value:function(e){var t=e,n=e.indexOf(" (");-1!==n&&(t=e.slice(0,n)),this.state.data.name!==t&&this.setState((function(){return{countryName:t}}))}},{key:"render",value:function(){return Object(m.jsx)(Y,Object(x.a)({changeCountryID:this.changeCountry,countryName:this.state.countryName,allFlags:this.state.allFlags},this.state.data))}}]),n}(c.a.Component),z=n(3),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).body=document.querySelector("body"),a.body.setAttribute("data-theme","light"),a}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsx)(_.a,{basename:"/countries-react-app",children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)(z.c,{children:[Object(m.jsx)(z.a,{exact:!0,path:"/",component:G}),Object(m.jsx)(z.a,{path:"/country/:id",component:Z})]})]})})}}]),n}(c.a.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),W()}},[[52,1,2]]]);
//# sourceMappingURL=main.a28ee8be.chunk.js.map