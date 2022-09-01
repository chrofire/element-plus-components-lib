import{e as E,r as B,f as z,h as d,m as H,E as M,g as w,i as q,j as K,k as W,l as J,n as Q,p as X,q as Y,s as Z,t as O,v as I,x as ee,y as te,z as ne,A as le,B as re,C as ae,D as oe,G as se,H as ce,I as ie,J as ue,u as g,K as de,L as pe,M as fe,N as ge,O as me,P as be,Q as Re,R as ye,S as he,T as Se,U as V,V as xe,W as Pe,X as ke,Y as ve}from"../app.9ec5ef1e.js";const F=e=>(e.install=s=>{s.component(e.name,e)},e),Be=["click","dblclick","contextmenu"],Ee=E({name:"BaseButton",props:{controlLoading:{type:Boolean,default:!1}},emits:[...Be],setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null),u=z({loading:!1}),c=i=>{u.loading=i},t=(i,o)=>{if(!e.controlLoading){m(o,i);return}m(o,{event:i,toggleLoading:c})};return R({buttonRef:r,state:u}),()=>d(M,H(e,{ref:r,loading:e.controlLoading?u.loading:e.loading,onClick:i=>t(i,"click"),onDblclick:i=>t(i,"dblclick"),onContextmenu:i=>t(i,"contextmenu")}),n)}}),Me=F(Ee),G=E({name:"BaseCheckboxGroup",inheritAttrs:!1,props:{optionType:{type:String,default:"checkbox",validator:e=>["checkbox","button"].includes(e)},options:{type:Array,default:()=>[]},optionProps:{type:Function,default:e=>{const{label:s,labelRenderer:n,...m}=e;return{key:s,label:s,...m}}},labelRenderer:{type:Function}},setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null);return R({checkboxGroupRef:r}),()=>{const u=e.optionType==="button"?w:q;return d(K,{ref:r,...s},{default:()=>e.options.map(c=>{const t=e.optionProps(c);return d(u,t,c.labelRenderer&&(()=>c.labelRenderer(t,c))||e.labelRenderer&&(()=>e.labelRenderer(t,c))||n.label&&(()=>n.label({option:t,rawOption:c}))||(()=>t.label))})})}}}),Ne=F(G),L=E({name:"BaseRadioGroup",inheritAttrs:!1,props:{optionType:{type:String,default:"radio",validator:e=>["radio","button"].includes(e)},options:{type:Array,default:()=>[]},optionProps:{type:Function,default:e=>{const{label:s,labelRenderer:n,...m}=e;return{key:s,label:s,...m}}},labelRenderer:{type:Function}},setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null);return R({radioGroupRef:r}),()=>{const u=e.optionType==="button"?W:J;return d(Q,{ref:r,...s},{default:()=>e.options.map(c=>{const t=e.optionProps(c);return d(u,t,c.labelRenderer&&(()=>c.labelRenderer(t,c))||e.labelRenderer&&(()=>e.labelRenderer(t,c))||n.label&&(()=>n.label({option:t,rawOption:c}))||(()=>t.label))})})}}}),U=E({name:"BaseSelect",inheritAttrs:!1,props:{options:{type:Array,default:()=>[]},bindObject:{type:Boolean,default:!1},groupProps:{type:Function,default:e=>{const{label:s,children:n,...m}=e;return{key:s,label:s,...m}}},optionProps:{type:Function},prefixRenderer:{type:Function},emptyRenderer:{type:Function},labelRenderer:{type:Function}},setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null),u=()=>e.optionProps?e.optionProps:e.bindObject?i:t,c=o=>{const h=u()(o);return d(Z,h,o.labelRenderer&&(()=>o.labelRenderer(h,o))||e.labelRenderer&&(()=>e.labelRenderer(h,o))||n.label&&(()=>n.label({option:h,rawOption:o}))||(()=>h.label))},t=o=>{const{value:b,labelRenderer:h,...P}=o;return{key:b,value:b,...P}},i=o=>{const{value:b,labelRenderer:h,...P}=o;return{key:o[s.valueKey]||o[s["value-key"]]||b,value:o,...P}};return R({selectRef:r}),()=>d(Y,{ref:r,...s},{default:()=>e.options.map(o=>o.children&&Array.isArray(o.children)?d(X,e.groupProps(o),()=>o.children.map(b=>c(b))):c(o)),prefix:e.prefixRenderer&&(()=>e.prefixRenderer())||n.prefix&&(()=>n.prefix())||null,empty:e.emptyRenderer&&(()=>e.emptyRenderer())||n.empty&&(()=>n.empty())||null})}}),S=new Map;S.set("autocomplete",{component:O});S.set("cascader",{component:I});S.set("checkbox-group",{component:G});S.set("color-picker",{component:ee});S.set("date-picker",{component:te});S.set("input",{component:ne});S.set("input-number",{component:le});S.set("radio-group",{component:L});S.set("rate",{component:re});S.set("select",{component:U});S.set("slider",{component:ae});S.set("switch",{component:oe});S.set("time-picker",{component:se});S.set("time-select",{component:ce});S.set("tree-select",{component:ie});const Fe=E({name:"BaseForm",inheritAttrs:!1,props:{items:{type:Array,default:()=>[],required:!0},modelValue:{type:Object,default:()=>({}),required:!0},row:{type:Object,default:()=>({})}},emits:["update:modelValue","register"],setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null),u=ue({get(){return e.modelValue},set(p){m("update:modelValue",p)}}),c=p=>p.map(x=>{const{col:_={},extra:A,labelRenderer:l,errorRenderer:a,isShow:f,...y}=x,k={...y},v={default:()=>t(x),label:()=>l==null?void 0:l(),error:({error:T})=>a==null?void 0:a(T)},C=d(ge,{key:x.prop,..._},()=>d(fe,k,v));return typeof f=="function"?f()?C:null:C}),t=p=>{var l;const{defaultRenderer:x,prop:_}=p,A={formItem:p,formData:g(u)};if(!x)return(l=n[_])==null?void 0:l.call(n,A);if(typeof x=="object")return[...S.keys()].includes(x.component)?i(p):d("span","\u672A\u6CE8\u518C\u7EC4\u4EF6");if(typeof x=="function")return x(A)},i=p=>{const{defaultRenderer:x,prop:_}=p,{component:A,props:l={},slots:a={}}=x,f=S.get(A);return typeof f.customRenderer=="function"?f.customRenderer({componentInfo:f,formItem:p,formData:u}):d(f.component,{modelValue:u.value[_],"onUpdate:modelValue":k=>u.value[_]=k,...l},a)},$={formRef:r,...{validate:async()=>{const p={valid:null,errors:null};try{p.valid=await g(r).validate()}catch(x){Object.assign(p,{valid:!1,errors:x})}return p},validateField:(...p)=>g(r).validateField(...p),resetFields:(...p)=>g(r).resetFields(...p),scrollToField:(...p)=>g(r).scrollToField(...p),clearValidate:(...p)=>g(r).clearValidate(...p)}};return m("register",$),R($),()=>d(de,{ref:r,model:g(u),labelWidth:"100px",...s},()=>d(pe,e.row,()=>c(e.items)))}}),Ve=F(Fe),ze=F(L),He=F(U),Ce=E({name:"BaseDescriptions",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},titleRenderer:{type:Function},extraRenderer:{type:Function}},setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null),u=t=>{const{titleRenderer:i,extraRenderer:o,...b}=t;return{...b}},c=t=>{const{valueRenderer:i,labelRenderer:o,prop:b,...h}=t;return{key:b,...h}};return R({descriptionsRef:r}),()=>d(be,{ref:r,...u(s)},{default:()=>e.items.map(t=>d(me,c(t),{default:t.valueRenderer&&(()=>t.valueRenderer(t))||n[t.prop]&&(()=>n[t.prop](t))||(()=>t.value),label:t.labelRenderer&&(()=>t.labelRenderer(t))||n[`${t.prop}Label`]&&(()=>n[`${t.prop}Label`](t))||(()=>t.label)})),title:e.titleRenderer&&(()=>e.titleRenderer())||n.title&&(()=>n.title())||null,extra:e.extraRenderer&&(()=>e.extraRenderer())||n.extra&&(()=>n.extra())||null})}}),Ge=F(Ce),_e=E({name:"BasePagination",inheritAttrs:!1,props:{pagination:{type:Object,default:()=>({pageNum:1,pageSize:10,total:10})},defaultRenderer:{type:Function}},emits:["change"],setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null),u={background:!0,pageSizes:[10,50,100,300,500],layout:"total, sizes, prev, pager, next, jumper",pagerCount:7},c=i=>{m("change",{type:"pageNum",value:i})},t=i=>{e.pagination.pageNum=1,m("change",{type:"pageSize",value:i})};return R({paginationRef:r}),()=>d(Re,{ref:r,...u,currentPage:e.pagination.pageNum,"onUpdate:currentPage":[i=>e.pagination.pageNum=i,c],pageSize:e.pagination.pageSize,"onUpdate:pageSize":[i=>e.pagination.pageSize=i,t],total:e.pagination.total,...s},e.defaultRenderer&&(()=>e.defaultRenderer())||n.default&&(()=>n.default())||null)}}),Le=F(_e);const Ae=E({name:"BaseTable",inheritAttrs:!1,props:{columns:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>({pageNum:1,pageSize:10,total:0})},singleSelect:{type:Boolean,default:!1},singleItemMultipleSelect:{type:Boolean,default:!1},autoHeight:{type:Boolean,default:!1}},emits:["register"],setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null),u=l=>l.map((a,f)=>{const{children:y,...k}=a;let v={key:a.prop||void 0,"show-overflow-tooltip":!0,...k},C=c(a);if(a.type==="selection"){const{columnProps:T,columnSlots:j}=t(a);v=T,C=j}if(a.type==="index"){const{columnProps:T,columnSlots:j}=i(a);v=T,C=j}return y!=null&&y.length?d(V,v,()=>u(y)):d(V,v,C)}),c=l=>({default:f=>{var k,v;const y={...f,columns:e.columns,columnInfo:l};return((k=l.cellRenderer)==null?void 0:k.call(l,y))||((v=n[l.prop])==null?void 0:v.call(n,y))||f.row[f.column.property]},header:f=>{var v,C;const y={...f,columns:e.columns,columnInfo:l},k=l.prop?`${l.prop}Header`:null;return((v=l.headerRenderer)==null?void 0:v.call(l,y))||((C=n[k])==null?void 0:C.call(n,y))||f.column.label}}),t=l=>({columnProps:{key:"_selection",type:"selection",width:"60",align:"center","label-class-name":e.singleItemMultipleSelect?"base-table-default-hidden-checkbox-header-class":"",...l},columnSlots:{}}),i=l=>{const a={key:"_index",type:"index",label:"\u5E8F\u53F7",width:"60",align:"center",index:y=>y+1+(e.pagination.pageNum-1)*e.pagination.pageSize,...l},f=c(l);return(!l.cellRenderer||l.index)&&delete f.default,{columnProps:a,columnSlots:f}},o=B(null),b=(l,a,f)=>{e.singleSelect&&h(l)},h=l=>{l===g(o)?(o.value=null,g(r).setCurrentRow(null)):(o.value=l,g(r).setCurrentRow(l))},P=()=>g(o),D=l=>{if(e.singleItemMultipleSelect){console.warn("\u542F\u7528 \u5355\u9879\u591A\u9009 \u65F6 \u7981\u6B62 \u8BBE\u7F6E\u591A\u9879\u591A\u9009");return}l?l.forEach(a=>{g(r).toggleRowSelection(a)}):g(r).clearSelection()},N=l=>{const a=p();g(r).clearSelection(),a.includes(l)||g(r).toggleRowSelection(l)},$=(l,a)=>{!e.singleItemMultipleSelect||(l.includes(a)?(g(r).clearSelection(),g(r).toggleRowSelection(a)):g(r).clearSelection())},p=()=>g(r).getSelectionRows(),_=(()=>{const l=B(void 0);let a;return he(()=>e.autoHeight,async f=>{if(a==null||a.disconnect(),!f){l.value=void 0,g(r).$el.style.height=null,g(r).scrollBarRef.update();return}a=new ResizeObserver(y=>{const{height:k}=y.shift().contentRect;l.value=k,g(r).scrollBarRef.update()}),await xe(),a.observe(g(r).$el.parentElement)},{immediate:!0}),Se(()=>{a==null||a.disconnect()}),l})(),A={tableRef:r,currentRow:o,setSingleSelect:h,getSingleSelect:P,setMultipleSelect:D,setSingleItemMultipleSelect:N,getMultipleSelect:p};return m("register",A),R(A),()=>{const{height:l,...a}=s,f={ref:r,data:e.data,onRowClick:b,onSelect:$,"highlight-current-row":e.singleSelect,height:e.autoHeight?g(_):l},y=H(f,a);return d(ye,y,()=>u(e.columns))}}}),Ue=F(Ae),Te=E({name:"BaseTabs",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]}},setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null),u=t=>{const{labelRenderer:i,...o}=t;return{...o}},c=t=>{const{valueRenderer:i,labelRenderer:o,name:b,...h}=t;return{key:b,name:b,...h}};return R({tabsRef:r}),()=>d(Pe,{ref:r,...u(s)},()=>e.items.map(t=>d(ke,c(t),{default:t.valueRenderer&&(()=>t.valueRenderer(t))||n[t.name]&&(()=>n[t.name](t))||null,label:t.labelRenderer&&(()=>t.labelRenderer(t))||n[`${t.name}Label`]&&(()=>n[`${t.name}Label`](t))||(()=>t.label)})))}}),we=F(Te),De=E({name:"BaseDialog",inheritAttrs:!1,props:{title:[String,Number],headerRenderer:Function,defaultRenderer:Function,footerRenderer:Function,confirm:{type:[Function,String],default:()=>"\u786E\u5B9A"},confirmProps:{type:Object,default:()=>({})},cancel:{type:[Function,String],default:()=>"\u53D6\u6D88"},cancelProps:{type:Object,default:()=>({})}},emits:["register"],setup(e,{attrs:s,slots:n,emit:m,expose:R}){const r=B(null),u=z({visible:!1}),c=(P=!1)=>{u.visible=P},t=()=>e.headerRenderer&&(()=>e.headerRenderer())||n.header&&(()=>n.header())||(()=>d("div",{class:"el-dialog__title",style:{minHeight:"var(--el-dialog-font-line-height)"}},e.title)),i=()=>e.defaultRenderer&&(()=>e.defaultRenderer())||n.default&&(()=>n.default())||null,o=()=>{const P={type:"primary",size:"default",...e.confirmProps},D={size:"default",...e.cancelProps};return[d(M,P,typeof e.confirm=="function"?e.confirm:{default:()=>e.confirm}),d(M,D,typeof e.cancel=="function"?e.cancel:{default:()=>e.cancel})]},b=()=>e.footerRenderer&&(()=>e.footerRenderer())||n.footer&&(()=>n.footer())||(()=>o()),h={dialogRef:r,state:u,setVisible:c};return m("register",h),R(h),()=>d(ve,{ref:r,modelValue:u.visible,"onUpdate:modelValue":P=>u.visible=P,"append-to-body":!0,"close-on-click-modal":!1,...s},{header:t(),default:i(),footer:b()})}}),qe=F(De),$e=E({name:"BaseRenderer",inheritAttrs:!1,props:{render:{type:Function,default:()=>null}},setup(e,{attrs:s}){return()=>e.render(s)}}),Ke=F($e);export{Me as B,De as _,Ge as a,Le as b,Ue as c,Ke as d,qe as e,Ne as f,Ve as g,S as h,ze as i,He as j,we as k};
