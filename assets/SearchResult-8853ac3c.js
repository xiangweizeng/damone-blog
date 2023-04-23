import{u as O,b as Q,l as V,c as W,m as _,d as z,n as G,y as J,h as K,e as N,g as T,r as b,i as X,v as Y,L as Z,H as ee}from"./app-3794cf91.js";import{c as te,B as ae,H as se,r as g,h as w,w as j,j as t,R as P,E as le,i as ue}from"./framework-b23b3642.js";const re="search-pro-result-history",o=O(re,[]),ne=()=>{const{resultHistoryCount:u}=b,c=u>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<u?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,u-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},oe=u=>{const c=Q(),l=g(!1),h=g([]);let i;const v=T(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/damone-blog/${b.worker}`,{}),i.addEventListener("message",({data:f})=>{h.value=f,l.value=!1}),i.postMessage({query:d,routeLocale:c.value})):(h.value=[],l.value=!1)},b.delay);return j([u,c],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var ve=te({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:c}){const l=X(),h=ae(),i=Q(),v=V(Y),{addQueryHistory:d}=Z(),{enabled:f,resultHistory:L,addResultHistory:q,removeResultHistory:x}=ne(),R=se(u,"query"),{results:y,searching:A}=oe(R),r=g(0),s=g(0),C=w(()=>L.value.length>0),$=w(()=>y.value.length>0),H=w(()=>y.value[r.value]||null),U=()=>{r.value=r.value>0?r.value-1:y.value.length-1,s.value=H.value.contents.length-1},B=()=>{r.value=r.value<y.value.length-1?r.value+1:0,s.value=0},F=()=>{s.value<H.value.contents.length-1?s.value=s.value+1:B()},I=()=>{s.value>0?s.value=s.value-1:U()},D=e=>e.map(a=>ue(a)?a:t(a[0],a[1])),S=e=>{if(e.type==="custom"){const a=ee[e.index]||"$content",[p,m=""]=le(a)?a[i.value].split("$content"):a.split("$content");return D([p,...e.display,m])}return D(e.display)},k=()=>{r.value=0,s.value=0,c("updateQuery",""),c("close")};return W("keydown",e=>{if($.value){if(e.key==="ArrowUp")I();else if(e.key==="ArrowDown")F();else if(e.key==="Enter"){const a=H.value.contents[s.value];l.value.path!==a.path&&(d(u.query),q(a),h.push(a.path),k())}}}),j([r,s],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:R.value?!$.value:!C.value}],id:"search-pro-results"},R.value===""?C.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),L.value.map((e,a)=>t(P,{to:e.path,class:["search-pro-result-item",{active:s.value===a}],onClick:()=>{k()}},()=>[t(_,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),x(a)}},t(z))]))])):f?v.value.emptyHistory:v.value.emptyResult:A.value?t(G,{hint:v.value.searching}):$.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:a},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),a.map((n,M)=>{const E=m&&s.value===M;return t(P,{to:n.path,class:["search-pro-result-item",{active:E,"aria-selected":E}],onClick:()=>{d(u.query),q(n),k()}},()=>[n.type==="content"?null:t(n.type==="title"?J:n.type==="heading"?K:N,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{ve as default};
