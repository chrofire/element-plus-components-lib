import"./chunks/index.abeb6cb3.js";import{u as e,ab as A,r as C,o as D,c as F,a0 as o,a as c,w as r,F as u,b as t,E as d,d as g}from"./app.9ec5ef1e.js";const _=(p={})=>{let s=null,n=null;return{start:()=>{if(s)return;const{target:a}=p;typeof a=="function"?n=a():n=e(a),s=A.service({...p,target:n})},stop:()=>{s==null||s.close(),s=null,n=null}}},m=t("start"),f=t("stop"),E={__name:"Demo1",setup(p){const s=C(null),n=_({target:s});return(y,l)=>{const a=d;return D(),F(u,null,[o("div",{ref_key:"container",ref:s,class:"w-200px h-100px bg-gray mb-10px"},null,512),c(a,{onClick:l[0]||(l[0]=i=>e(n).start())},{default:r(()=>[m]),_:1}),c(a,{onClick:l[1]||(l[1]=i=>e(n).stop())},{default:r(()=>[f]),_:1})],64)}}},b=o("h1",{id:"useloading",tabindex:"-1"},[t("useLoading "),o("a",{class:"header-anchor",href:"#useloading","aria-hidden":"true"},"#")],-1),h=o("h2",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[t("\u57FA\u672C\u4F7F\u7528 "),o("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#")],-1),v=g("",1),L=JSON.parse('{"title":"useLoading","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]}],"relativePath":"Feedback/Loading/index.md"}'),x={name:"Feedback/Loading/index.md"},T=Object.assign(x,{setup(p){return(s,n)=>(D(),F("div",null,[b,h,c(E),v]))}});export{L as __pageData,T as default};
