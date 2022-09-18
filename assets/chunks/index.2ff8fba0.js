import{e as F,r as k,f as N,h as b,m as G,E as H,g as K,i as X,j as Y,k as J,l as Q,n as Z,p as I,q as ee,s as te,t as ne,v as le,x as re,y as ae,z as oe,A as se,B as ce,C as ie,D as ue,G as de,H as pe,I as fe,J as U,u as m,K as ge,L as me,M as be,N as ye,O as he,P as Re,Q as Se,R as xe,S as ve,T as _e,U as V,V as j,W as Pe,X as Ce,Y as ke,Z as Ee,a as w,_ as z,$ as Be}from"../app.ccad06a3.js";const A=e=>(e.install=u=>{u.component(e.name,e)},e),Fe=["click","dblclick","contextmenu"],Ae=F({name:"BaseButton",props:{controlLoading:{type:Boolean,default:!1}},emits:[...Fe],setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null),f=N({loading:!1}),d=p=>{f.loading=p},t=(p,s)=>{if(!e.controlLoading){c(s,p);return}c(s,{event:p,toggleLoading:d})};return S({buttonRef:l,state:f}),()=>b(H,G(e,{ref:l,loading:e.controlLoading?f.loading:e.loading,onClick:p=>t(p,"click"),onDblclick:p=>t(p,"dblclick"),onContextmenu:p=>t(p,"contextmenu")}),n)}}),ze=A(Ae),W=F({name:"BaseCheckboxGroup",inheritAttrs:!1,props:{optionType:{type:String,default:"checkbox",validator:e=>["checkbox","button"].includes(e)},options:{type:Array,default:()=>[]},optionProps:{type:Function,default:e=>{const{label:u,labelRenderer:n,...c}=e;return{key:u,label:u,...c}}},labelRenderer:{type:Function}},setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null);return S({checkboxGroupRef:l}),()=>{const f=e.optionType==="button"?K:X;return b(Y,{ref:l,...u},{default:()=>e.options.map(d=>{const t=e.optionProps(d);return b(f,t,d.labelRenderer&&(()=>d.labelRenderer(t,d))||e.labelRenderer&&(()=>e.labelRenderer(t,d))||n.label&&(()=>n.label({option:t,rawOption:d}))||(()=>t.label))})})}}}),Ge=A(W),q=F({name:"BaseRadioGroup",inheritAttrs:!1,props:{optionType:{type:String,default:"radio",validator:e=>["radio","button"].includes(e)},options:{type:Array,default:()=>[]},optionProps:{type:Function,default:e=>{const{label:u,labelRenderer:n,...c}=e;return{key:u,label:u,...c}}},labelRenderer:{type:Function}},setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null);return S({radioGroupRef:l}),()=>{const f=e.optionType==="button"?J:Q;return b(Z,{ref:l,...u},{default:()=>e.options.map(d=>{const t=e.optionProps(d);return b(f,t,d.labelRenderer&&(()=>d.labelRenderer(t,d))||e.labelRenderer&&(()=>e.labelRenderer(t,d))||n.label&&(()=>n.label({option:t,rawOption:d}))||(()=>t.label))})})}}}),O=F({name:"BaseSelect",inheritAttrs:!1,props:{options:{type:Array,default:()=>[]},bindObject:{type:Boolean,default:!1},groupProps:{type:Function,default:e=>{const{label:u,children:n,...c}=e;return{key:u,label:u,...c}}},optionProps:{type:Function},prefixRenderer:{type:Function},emptyRenderer:{type:Function},labelRenderer:{type:Function}},setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null),f=()=>e.optionProps?e.optionProps:e.bindObject?p:t,d=s=>{const x=f()(s);return b(te,x,s.labelRenderer&&(()=>s.labelRenderer(x,s))||e.labelRenderer&&(()=>e.labelRenderer(x,s))||n.label&&(()=>n.label({option:x,rawOption:s}))||(()=>x.label))},t=s=>{const{value:R,labelRenderer:x,...C}=s;return{key:R,value:R,...C}},p=s=>{const{value:R,labelRenderer:x,...C}=s;return{key:s[u.valueKey]||s[u["value-key"]]||R,value:s,...C}};return S({selectRef:l}),()=>b(ee,{ref:l,...u},{default:()=>e.options.map(s=>s.children&&Array.isArray(s.children)?b(I,e.groupProps(s),()=>s.children.map(R=>d(R))):d(s)),prefix:e.prefixRenderer&&(()=>e.prefixRenderer())||n.prefix&&(()=>n.prefix())||null,empty:e.emptyRenderer&&(()=>e.emptyRenderer())||n.empty&&(()=>n.empty())||null})}}),P=new Map;P.set("autocomplete",{component:ne});P.set("cascader",{component:le});P.set("checkbox-group",{component:W});P.set("color-picker",{component:re});P.set("date-picker",{component:ae});P.set("input",{component:oe});P.set("input-number",{component:se});P.set("radio-group",{component:q});P.set("rate",{component:ce});P.set("select",{component:O});P.set("slider",{component:ie});P.set("switch",{component:ue});P.set("time-picker",{component:de});P.set("time-select",{component:pe});P.set("tree-select",{component:fe});const Me=F({name:"BaseForm",inheritAttrs:!1,props:{items:{type:Array,default:()=>[],required:!0},modelValue:{type:Object,default:()=>({}),required:!0},row:{type:Object,default:()=>({})}},emits:["update:modelValue","register"],setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null),f=U({get(){return e.modelValue},set(r){c("update:modelValue",r)}}),d=r=>r.map(y=>{const{col:v={},extra:M,labelRenderer:a,errorRenderer:i,isShow:h,..._}=y,E={..._},B={default:()=>t(y),label:()=>a==null?void 0:a(),error:({error:$})=>i==null?void 0:i($)},T=b(ye,{key:y.prop,...v},()=>b(be,E,B));return typeof h=="function"?h()?T:null:T}),t=r=>{var a;const{defaultRenderer:y,prop:v}=r,M={formItem:r,formData:m(f)};if(!y)return(a=n[v])==null?void 0:a.call(n,M);if(typeof y=="object")return[...P.keys()].includes(y.component)?p(r):b("span","\u672A\u6CE8\u518C\u7EC4\u4EF6");if(typeof y=="function")return y(M)},p=r=>{const{defaultRenderer:y,prop:v}=r,{component:M,props:a={},slots:i={}}=y,h=P.get(M);return typeof h.customRenderer=="function"?h.customRenderer({componentInfo:h,formItem:r,formData:f}):b(h.component,{modelValue:f.value[v],"onUpdate:modelValue":E=>f.value[v]=E,...a},i)},g={formRef:l,...{validate:async()=>{const r={valid:null,errors:null};try{r.valid=await m(l).validate()}catch(y){Object.assign(r,{valid:!1,errors:y})}return r},validateField:(...r)=>m(l).validateField(...r),resetFields:(...r)=>m(l).resetFields(...r),scrollToField:(...r)=>m(l).scrollToField(...r),clearValidate:(...r)=>m(l).clearValidate(...r)}};return c("register",g),S(g),()=>b(ge,{ref:l,model:m(f),labelWidth:"100px",...u},()=>b(me,e.row,()=>d(e.items)))}}),Ue=A(Me),We=A(q),qe=A(O),we=F({name:"BaseDescriptions",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},titleRenderer:{type:Function},extraRenderer:{type:Function}},setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null),f=t=>{const{titleRenderer:p,extraRenderer:s,...R}=t;return{...R}},d=t=>{const{valueRenderer:p,labelRenderer:s,prop:R,...x}=t;return{key:R,...x}};return S({descriptionsRef:l}),()=>b(Re,{ref:l,...f(u)},{default:()=>e.items.map(t=>b(he,d(t),{default:t.valueRenderer&&(()=>t.valueRenderer(t))||n[t.prop]&&(()=>n[t.prop](t))||(()=>t.value),label:t.labelRenderer&&(()=>t.labelRenderer(t))||n[`${t.prop}Label`]&&(()=>n[`${t.prop}Label`](t))||(()=>t.label)})),title:e.titleRenderer&&(()=>e.titleRenderer())||n.title&&(()=>n.title())||null,extra:e.extraRenderer&&(()=>e.extraRenderer())||n.extra&&(()=>n.extra())||null})}}),Oe=A(we),Te=F({name:"BasePagination",inheritAttrs:!1,props:{pagination:{type:Object,default:()=>({pageNum:1,pageSize:10,total:10})},defaultRenderer:{type:Function}},emits:["change"],setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null),f={background:!0,pageSizes:[10,50,100,300,500],layout:"total, sizes, prev, pager, next, jumper",pagerCount:7},d=p=>{c("change",{type:"pageNum",value:p})},t=p=>{e.pagination.pageNum=1,c("change",{type:"pageSize",value:p})};return S({paginationRef:l}),()=>b(Se,{ref:l,...f,currentPage:e.pagination.pageNum,"onUpdate:currentPage":[p=>e.pagination.pageNum=p,d],pageSize:e.pagination.pageSize,"onUpdate:pageSize":[p=>e.pagination.pageSize=p,t],total:e.pagination.total,...u},e.defaultRenderer&&(()=>e.defaultRenderer())||n.default&&(()=>n.default())||null)}}),Ke=A(Te);const De=F({name:"BaseTable",inheritAttrs:!1,props:{columns:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>({pageNum:1,pageSize:10,total:0})},singleSelect:{type:Boolean,default:!1},singleItemMultipleSelect:{type:Boolean,default:!1},autoHeight:{type:Boolean,default:!1}},emits:["register"],setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null),f=a=>a.map((i,h)=>{const{children:_,...E}=i;let B={key:i.prop||void 0,"show-overflow-tooltip":!0,...E},T=d(i);if(i.type==="selection"){const{columnProps:$,columnSlots:L}=t(i);B=$,T=L}if(i.type==="index"){const{columnProps:$,columnSlots:L}=p(i);B=$,T=L}return _!=null&&_.length?b(V,B,()=>f(_)):b(V,B,T)}),d=a=>({default:h=>{var E,B;const _={...h,columns:e.columns,columnInfo:a};return((E=a.cellRenderer)==null?void 0:E.call(a,_))||((B=n[a.prop])==null?void 0:B.call(n,_))||h.row[h.column.property]},header:h=>{var B,T;const _={...h,columns:e.columns,columnInfo:a},E=a.prop?`${a.prop}Header`:null;return((B=a.headerRenderer)==null?void 0:B.call(a,_))||((T=n[E])==null?void 0:T.call(n,_))||h.column.label}}),t=a=>({columnProps:{key:"_selection",type:"selection",width:"60",align:"center","label-class-name":e.singleItemMultipleSelect?"base-table-default-hidden-checkbox-header-class":"",...a},columnSlots:{}}),p=a=>{const i={key:"_index",type:"index",label:"\u5E8F\u53F7",width:"60",align:"center",index:_=>_+1+(e.pagination.pageNum-1)*e.pagination.pageSize,...a},h=d(a);return(!a.cellRenderer||a.index)&&delete h.default,{columnProps:i,columnSlots:h}},s=k(null),R=(a,i,h)=>{e.singleSelect&&x(a)},x=a=>{a===m(s)?(s.value=null,m(l).setCurrentRow(null)):(s.value=a,m(l).setCurrentRow(a))},C=()=>m(s),D=a=>{if(e.singleItemMultipleSelect){console.warn("\u542F\u7528 \u5355\u9879\u591A\u9009 \u65F6 \u7981\u6B62 \u8BBE\u7F6E\u591A\u9879\u591A\u9009");return}a?a.forEach(i=>{m(l).toggleRowSelection(i)}):m(l).clearSelection()},o=a=>{const i=r();m(l).clearSelection(),i.includes(a)||m(l).toggleRowSelection(a)},g=(a,i)=>{!e.singleItemMultipleSelect||(a.includes(i)?(m(l).clearSelection(),m(l).toggleRowSelection(i)):m(l).clearSelection())},r=()=>m(l).getSelectionRows(),v=(()=>{const a=k(void 0);let i;return ve(()=>e.autoHeight,async h=>{if(i==null||i.disconnect(),!h){a.value=void 0,m(l).$el.style.height=null,m(l).scrollBarRef.update();return}i=new ResizeObserver(_=>{const{height:E}=_.shift().contentRect;a.value=E,m(l).scrollBarRef.update()}),await j(),i.observe(m(l).$el.parentElement)},{immediate:!0}),_e(()=>{i==null||i.disconnect()}),a})(),M={tableRef:l,currentRow:s,setSingleSelect:x,getSingleSelect:C,setMultipleSelect:D,setSingleItemMultipleSelect:o,getMultipleSelect:r};return c("register",M),S(M),()=>{const{height:a,...i}=u,h={ref:l,data:e.data,onRowClick:R,onSelect:g,"highlight-current-row":e.singleSelect,height:e.autoHeight?m(v):a},_=G(h,i);return b(xe,_,()=>f(e.columns))}}}),Xe=A(De),$e=F({name:"BaseTabs",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]}},setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null),f=t=>{const{labelRenderer:p,...s}=t;return{...s}},d=t=>{const{valueRenderer:p,labelRenderer:s,name:R,...x}=t;return{key:R,name:R,...x}};return S({tabsRef:l}),()=>b(Pe,{ref:l,...f(u)},()=>e.items.map(t=>b(Ce,d(t),{default:t.valueRenderer&&(()=>t.valueRenderer(t))||n[t.name]&&(()=>n[t.name](t))||null,label:t.labelRenderer&&(()=>t.labelRenderer(t))||n[`${t.name}Label`]&&(()=>n[`${t.name}Label`](t))||(()=>t.label)})))}}),Ye=A($e),je=F({name:"BaseDialog",inheritAttrs:!1,props:{title:[String,Number],headerRenderer:Function,defaultRenderer:Function,footerRenderer:Function,confirm:{type:[Function,String],default:()=>"\u786E\u5B9A"},confirmProps:{type:Object,default:()=>({})},cancel:{type:[Function,String],default:()=>"\u53D6\u6D88"},cancelProps:{type:Object,default:()=>({})}},emits:["register"],setup(e,{attrs:u,slots:n,emit:c,expose:S}){const l=k(null),f=N({visible:!1}),d=(C=!1)=>{f.visible=C},t=()=>e.headerRenderer&&(()=>e.headerRenderer())||n.header&&(()=>n.header())||(()=>b("div",{class:"el-dialog__title",style:{minHeight:"var(--el-dialog-font-line-height)"}},e.title)),p=()=>e.defaultRenderer&&(()=>e.defaultRenderer())||n.default&&(()=>n.default())||null,s=()=>{const C={type:"primary",size:"default",...e.confirmProps},D={size:"default",...e.cancelProps};return[b(H,C,typeof e.confirm=="function"?e.confirm:{default:()=>e.confirm}),b(H,D,typeof e.cancel=="function"?e.cancel:{default:()=>e.cancel})]},R=()=>e.footerRenderer&&(()=>e.footerRenderer())||n.footer&&(()=>n.footer())||(()=>s()),x={dialogRef:l,state:f,setVisible:d};return c("register",x),S(x),()=>b(ke,{ref:l,modelValue:f.visible,"onUpdate:modelValue":C=>f.visible=C,"append-to-body":!0,"close-on-click-modal":!1,...u},{header:t(),default:p(),footer:R()})}}),Je=A(je),Le=F({name:"BaseContextMenu",props:{menuList:{type:Array,default:()=>{}}},setup(e,{expose:u}){const n=k(null);Ee(n,()=>d());const c=N({visible:!1,contextMenuPosition:{left:0,top:0},payload:null}),S=U(()=>l(c.contextMenuPosition)),l=o=>{const{left:g,top:r}=o;return{left:`${g}px`,top:`${r}px`}},f=async(o,g)=>{if(!o)throw new Error("\u672A\u4F20\u5165event");o.preventDefault(),c.payload=g,c.visible&&(c.visible=!1),p(e.menuList),await j();const{clientX:r,clientY:y}=o;Object.assign(c.contextMenuPosition,{left:r+1,top:y}),c.visible=!0,await j();const v=m(n).firstElementChild.getBoundingClientRect();document.body.clientWidth-r<v.width&&Object.assign(c.contextMenuPosition,{left:document.body.clientWidth-v.width-1}),document.body.clientHeight-y<v.height&&Object.assign(c.contextMenuPosition,{top:document.body.clientHeight-v.height-1})},d=()=>{c.visible=!1,p(e.menuList),c.payload=null},t=o=>{if(!o.onClick)return;const g={item:o,state:c,close:d};o.onClick(g)},p=(o,g=!1)=>{!Array.isArray(o)||o.forEach(r=>{r.select=!1,r.wrapperEl&&(r.wrapperEl=null),p(r.children,g)})},s=async(o,g,r)=>{var M;o.stopPropagation(),p(r,!1),g.select=!0;const y=o.currentTarget.getBoundingClientRect();if(g.wrapperPosition={left:y.width,top:-5},!((M=g.children)!=null&&M.length))return;await j();const v=g.wrapperEl.getBoundingClientRect();document.body.clientWidth-y.right<v.width&&Object.assign(g.wrapperPosition,{left:-v.width}),document.body.clientHeight-v.top<v.height&&Object.assign(g.wrapperPosition,{top:-v.height+(5+y.height)})},R=o=>typeof o.label=="function"?o.label(o):o.label,x=(o,g)=>w("div",{class:["context-menu__menu-item",{select:o.select}],onMouseover:r=>s(r,o,g),onClick:()=>t(o),onContextmenu:r=>r.preventDefault()},[w("div",{class:"label"},[R(o)])]),C=(o,g)=>w("div",{class:["context-menu__sub-menu-item",{select:o.select}],onMouseover:r=>s(r,o,g),onClick:()=>t(o),onContextmenu:r=>r.preventDefault()},[w("div",{class:"label"},[R(o)]),w("div",{class:"right-icon__wrapper"},[w("div",{class:"right-icon"},null)]),w(z,{name:"fade-in-linear"},{default:()=>[o.select&&D(o.children,o)]})]),D=(o=[],g)=>w("div",{class:"context-menu__wrapper",style:g&&l(g.wrapperPosition),ref:r=>g&&(g.wrapperEl=r)},[o.map(r=>{var y;return(y=r.children)!=null&&y.length?C(r,o):x(r,o)})]);return u({state:c,open:f,close:d}),()=>w(z,{name:"fade-in-linear"},{default:()=>[c.visible&&w("div",{class:"context-menu",ref:n,style:m(S)},[D(e.menuList)])]})}});const He=Be(Le,[["__scopeId","data-v-650f68af"]]),Qe=A(He),Ne=F({name:"BaseRenderer",inheritAttrs:!1,props:{render:{type:Function,default:()=>null}},setup(e,{attrs:u}){return()=>e.render(u)}}),Ze=A(Ne);export{ze as B,He as C,je as _,Oe as a,Ke as b,Xe as c,Qe as d,Ze as e,Je as f,Ge as g,Ue as h,P as i,We as j,qe as k,Ye as l};
