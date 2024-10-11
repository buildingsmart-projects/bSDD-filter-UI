import{r as u,x as Ve,l as ee,n as me,R as L,B as te,o as ge,p as Oe,f as ke,k as ve,d as Re,W as Me,X as Ae,_ as Te,Y as ye,$ as Pe,a0 as M,S as se,a1 as Be,h as Ne,a6 as Le,a7 as $,a8 as w,am as xe,aB as H,aC as ne,aD as He,j as i,ax as ae,aE as Fe,ac as Z,aF as Ue,ad as ue,C as Ce,as as z,aG as $e,aH as ze,aI as Ge,aJ as be,aK as We,ae as Ye,aL as Je,aM as Ke,aN as Xe,av as qe,aw as U,aj as Qe,aO as G,aP as Se,aQ as Ze,aR as we,af as A,aa as De,aS as _e,aT as et,aU as tt,aV as _,ab as st,aW as nt,at,aX as ot,aY as it,aZ as rt,a_ as ct,a$ as lt,b0 as ut,au as ft,b1 as dt,b2 as pt,aA as ht,ak as fe,ah as mt,ai as gt}from"./theme-c3854510.js";function vt(t,e,s={leading:!1}){const[a,r]=u.useState(t),o=u.useRef(!1),n=u.useRef(null),d=u.useRef(!1),c=()=>window.clearTimeout(n.current);return u.useEffect(()=>{o.current&&(!d.current&&s.leading?(d.current=!0,r(t)):(c(),n.current=window.setTimeout(()=>{d.current=!1,r(t)},e)))},[t,s.leading,e]),u.useEffect(()=>(o.current=!0,c),[]),[a,c]}var je={root:"m-1b7284a3"};const yt={},xt=ge((t,{radius:e,shadow:s})=>({root:{"--paper-radius":e===void 0?void 0:Oe(e),"--paper-shadow":ke(s)}})),Y=Ve((t,e)=>{const s=ee("Paper",yt,t),{classNames:a,className:r,style:o,styles:n,unstyled:d,withBorder:c,vars:f,radius:x,shadow:h,variant:l,...C}=s,g=me({name:"Paper",props:s,classes:je,className:r,style:o,classNames:a,styles:n,unstyled:d,vars:f,varsResolver:xt});return L.createElement(te,{ref:e,mod:{"data-with-border":c},...g("root"),variant:l,...C})});Y.classes=je;Y.displayName="@mantine/core/Paper";const Ct={},oe=ve((t,e)=>{const s=ee("Autocomplete",Ct,t),{classNames:a,styles:r,unstyled:o,vars:n,dropdownOpened:d,defaultDropdownOpened:c,onDropdownClose:f,onDropdownOpen:x,onFocus:h,onBlur:l,onClick:C,onChange:g,data:v,value:y,defaultValue:b,selectFirstOptionOnChange:S,onOptionSubmit:E,comboboxProps:D,readOnly:I,disabled:m,filter:p,limit:O,withScrollArea:k,maxDropdownHeight:j,size:R,id:F,...J}=s,V=Re(F),T=Me(v),N=Ae(T),[K,re]=Te({value:y,defaultValue:b,finalValue:"",onChange:g}),B=ye({opened:d,defaultOpened:c,onDropdownOpen:x,onDropdownClose:()=>{f?.(),B.resetSelectedOption()}}),{resolvedClassNames:ce,resolvedStyles:le}=Pe({props:s,styles:r,classNames:a});return u.useEffect(()=>{S&&B.selectFirstOption()},[S,K]),L.createElement(M,{store:B,__staticSelector:"Autocomplete",classNames:ce,styles:le,unstyled:o,readOnly:I,onOptionSubmit:P=>{E?.(P),re(N[P].label),B.closeDropdown()},size:R,...D},L.createElement(M.Target,null,L.createElement(se,{ref:e,...J,size:R,__staticSelector:"Autocomplete",disabled:m,readOnly:I,value:K,onChange:P=>{re(P.currentTarget.value),B.openDropdown(),S&&B.selectFirstOption()},onFocus:P=>{B.openDropdown(),h?.(P)},onBlur:P=>{B.closeDropdown(),l?.(P)},onClick:P=>{B.openDropdown(),C?.(P)},classNames:ce,styles:le,unstyled:o,id:V})),L.createElement(Be,{data:T,hidden:I||m,filter:p,search:K,limit:O,hiddenWhenEmpty:!0,withScrollArea:k,maxDropdownHeight:j,unstyled:o,labelId:`${V}-label`}))});oe.classes={...se.classes,...M.classes};oe.displayName="@mantine/core/Autocomplete";var Ie={root:"m-6d731127"};const bt={gap:"md",align:"stretch",justify:"flex-start"},St=ge((t,{gap:e,align:s,justify:a})=>({root:{"--stack-gap":Ne(e),"--stack-align":s,"--stack-justify":a}})),ie=ve((t,e)=>{const s=ee("Stack",bt,t),{classNames:a,className:r,style:o,styles:n,unstyled:d,vars:c,align:f,justify:x,gap:h,variant:l,...C}=s,g=me({name:"Stack",props:s,classes:Ie,className:r,style:o,classNames:a,styles:n,unstyled:d,vars:c,varsResolver:St});return L.createElement(te,{ref:e,...g("root"),variant:l,...C})});ie.classes=Ie;ie.displayName="@mantine/core/Stack";/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var wt=Le("outline","grip-horizontal","IconGripHorizontal",[["path",{d:"M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);const Dt={test:"https://test.bsdd.buildingsmart.org",production:"https://api.bsdd.buildingsmart.org"},jt="production";function It({callback:t,ifcEntity:e}){const{t:s}=$();w(xe);const a=H(ne),r=H(He);function o(d){const c=d?{...JSON.parse(JSON.stringify(d))}:{hasAssociations:[],isDefinedBy:[]};return c.isDefinedBy=a?.filter(f=>f.name!=="Attributes"),c.hasAssociations=[],r?.forEach(f=>{if(f.type==="IfcClassificationReference"&&f?.referencedSource?.location?.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/")){const{type:x,predefinedType:h}=Fe(f.identification);x&&(c.type=x),h&&(c.predefinedType=h),c.predefinedType||(c.predefinedType="NOTDEFINED")}else c.hasAssociations?.push(f)}),c}const n=()=>{const d=o(e);console.log(d),t(d)};return i.jsx(ae,{color:"gray",fullWidth:!0,onClick:n,variant:"filled",children:s("apply")})}const de=25,Et=25;function Vt({height:t,options:e,label:s,value:a,setValue:r,placeholder:o="Search values",disabled:n}){const[d,c]=u.useState(""),[f,x]=u.useState(e.slice(0,de)),h=u.useRef(null),l=ye({onDropdownClose:()=>{l.resetSelectedOption(),l.focusTarget&&l.focusTarget()},onDropdownOpen:()=>{l.focusSearchInput&&l.focusSearchInput()}});u.useEffect(()=>{c(a?.label||"")},[a]),u.useEffect(()=>{const v=a===null?e.filter(y=>y?.label.toLowerCase().includes(d.toLowerCase().trim())||y?.value.toString().toLowerCase().includes(d.toLowerCase().trim())):e;x(v.slice(0,de))},[e,d,a]);const C=v=>{const{scrollTop:y,scrollHeight:b,clientHeight:S}=v.currentTarget,E=5;b-y<=S+E&&x(I=>{const m=I.length,p=e.filter(O=>O?.label.toLowerCase().includes(d.toLowerCase().trim())).slice(m,m+Et);return[...I,...p]})},g=f.map(v=>i.jsx(M.Option,{value:v.value,active:a?.value===v.value,children:i.jsxs(Z,{gap:"sm",children:[a?.value===v.value?i.jsx(Ue,{size:12}):null,i.jsx(ue,{fz:"sm",opacity:n?.6:1,children:v.label}),i.jsxs(ue,{fz:"xs",opacity:.6,children:["(",v.value,")"]})]})},v.value));return i.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:i.jsxs(M,{store:l,onOptionSubmit:v=>{if(!n){const y=e.find(S=>S.value===v),b=y&&a?.value!==y.value?y:null;r(b),l.closeDropdown()}},disabled:n,children:[i.jsx(M.Target,{children:i.jsx(se,{rightSection:!n&&i.jsx(Ce,{size:"sm",onMouseDown:v=>{v.preventDefault()},onClick:()=>{c(""),r(null)},"aria-label":"Clear value"}),label:s,value:a?`${a.label} (${a.value})`:d,onChange:v=>{n||(r(null),l.updateSelectedOptionIndex(),c(v.currentTarget.value))},onClick:()=>{n||l.openDropdown()},onBlur:()=>l.closeDropdown(),placeholder:n?"":o,disabled:n})}),t<80?i.jsx(M.Dropdown,{style:{maxHeight:"20em",overflowY:"auto"},ref:h,onScroll:C,children:i.jsx(M.Options,{children:g.length>0?g:i.jsx(M.Empty,{children:"Nothing found..."})})}):i.jsx(Y,{withBorder:!0,my:"0.2em",style:{flexGrow:1,overflow:"auto",backgroundColor:n?"var(--mantine-color-gray-0)":"transparent",color:n?"var(--mantine-color-gray-6)":"inherit",pointerEvents:n?"none":"auto"},ref:h,onScroll:C,children:i.jsx(M.Options,{children:g.length>0?g:i.jsx(M.Empty,{children:"Nothing found..."})})})]})})}function Ot({height:t,handleMouseDown:e}){const s=z(),{t:a}=$(),[r,o]=u.useState(new Map),[n,d]=u.useState(new Map),c=w($e),f=w(ze),x=H(xe),h=H(Ge),l=H(be),C=H(We);return u.useEffect(()=>{(async()=>{const y=Array.from(c.entries()).map(async([D,I])=>{if(l&&D===C){const{code:j,name:R,uri:F}=l;return[D,[{value:j,label:R,uri:F}]]}let m=[];const p=h[D],O=l?.classRelations?.map(j=>j.relatedClassUri),k=p?.filter(j=>O?.includes(j.uri));if(k&&k.length>0)m=k.map(j=>({value:j.code,label:j.name,uri:j.uri}));else try{m=(await s(Je(D)).unwrap())?.map(R=>({value:R.code,label:R.name||"",uri:R.uri}))??[]}catch(j){console.error("Failed to fetch dictionary classes for",D,j),m=[]}return[D,m]}),b=await Promise.all(y),S=new Map(b);o(S);const E=new Map;S.forEach((D,I)=>{if(D.length===1)E.set(I,D[0]);else if(I in f){const m=f[I];if(m.length===1){const p=m[0];if(D.some(k=>k.value===p.identification)){const k={label:p.name||"",value:p.identification||"",uri:p.location||""};E.set(I,k)}}}}),d(E)})()},[c,h,s,f,l,C]),u.useEffect(()=>{(()=>{const v=Array.from(n.entries()).map(([y,b])=>{if(!b||!b.value)return null;const S=x[y];return{type:"IfcClassificationReference",name:b.label,location:b.uri,identification:b.value,referencedSource:{type:"IfcClassification",name:S.name,location:S.uri,edition:S.version,editionDate:S.releaseDate}}}).filter(y=>y!==null);v.length>0&&s(Ke(v))})()},[x,s,n]),i.jsxs(Y,{style:{height:`${t}px`,position:"relative"},children:[Array.from(c.entries()).map(([g,v])=>i.jsx(Vt,{height:t,label:v.name,options:r.get(g)||[],value:n.get(g)||null,setValue:y=>{const b=new Map(n);b.set(g,y),d(b)},placeholder:a("classifications.searchClassesPlaceholder"),disabled:g===l?.dictionaryUri||r.get(g)?.length===1},g)),i.jsx(te,{onMouseDown:e,style:{marginTop:"4px"},children:i.jsx(Ye,{label:a("classifications.dragResize"),withArrow:!0,children:i.jsx(ae,{fullWidth:!0,variant:"subtle",size:"sm",color:"gray","aria-label":a("classifications.dragResize"),children:i.jsx(wt,{})})})})]})}function X(t,e){return t==null||e==null?null:t.toLowerCase()!==e.toLowerCase()?`(${e})`:null}function kt({label:t,description:e,value:s,setValue:a,disabled:r}){const{t:o}=$(),[n,d]=u.useState(!1),[c,f]=u.useState(!0),x=()=>o(c?"checkbox.indeterminate":n?"checkbox.true":"checkbox.false"),h=l=>{l.target.indeterminate=!1,a(l.target.checked)};return u.useEffect(()=>{s===!0?(d(!0),f(!1)):s===!1?(d(!1),f(!1)):s===void 0&&(d(!1),f(!0))},[s]),i.jsx(Xe.Wrapper,{label:t,description:e,children:i.jsx(qe,{description:x(),checked:n,indeterminate:c,type:"checkbox",onChange:l=>h(l),disabled:r})})}const q=(t,e,s,a)=>t.map(r=>{if(r.name===e){const o=r.hasProperties.map(n=>n.name===s?{...n,...a}:n);return{...r,hasProperties:o}}return r});function Rt({propertySet:t,property:e,property_natural_language_name:s}){const a=z(),r=w(ne),[o,n]=u.useState();return u.useEffect(()=>{switch(e.type){case"IfcPropertySingleValue":{e.nominalValue.type==="IfcBoolean"?n(i.jsx(kt,{label:s,description:X(s,e.name),disabled:!1,value:e.nominalValue.value,setValue:d=>{if(r&&t.name){const c={nominalValue:{...e.nominalValue,value:d}},f=q(r,t.name,e.name,c);a(G(Object.values(f)))}}})):n(i.jsx(U,{label:s,description:X(s,e.name),placeholder:e.nominalValue.value,value:e.nominalValue.value||"",onChange:d=>{if(r&&t.name){const c={nominalValue:{...e.nominalValue,value:d.target.value}},f=q(r,t.name,e.name,c);a(G(Object.values(f)))}}}));break}case"IfcPropertyEnumeratedValue":{const d=e.enumerationValues?.[0]?.value,c=e.enumerationReference?.enumerationValues||[];n(i.jsx(Qe,{label:s,description:X(s,e.name),value:d,disabled:e.enumerationReference?.enumerationValues?.length===1,onChange:f=>{if(r&&t.name){const x=c.find(C=>C.value===f),h={enumerationValues:x?[x]:[]},l=q(r,t.name,e.name,h);a(G(Object.values(l)))}},data:c.map(f=>({value:f.value,label:f.value}))}));break}default:{n(i.jsx(U,{placeholder:e.name,value:"{ifcProperty.nominalValue}"}));break}}},[e,t,n,s,a,r]),o}const Mt={Boolean:"IfcBoolean",Character:"IfcText",Integer:"IfcInteger",Real:"IfcReal",String:"IfcText",Time:"IfcDateTime"};function W(t,e){const s=t&&Mt[t]||"default";let a;return t==="Boolean"&&typeof e=="string"?e.toUpperCase()==="TRUE"?a=!0:e.toUpperCase()==="FALSE"?a=!1:a=void 0:a=e,{type:s,value:a}}function Ee(t,e,s){let a;if(t&&t.isDefinedBy){let r=t.isDefinedBy.find(o=>o.name===e);if(r&&(a=r.hasProperties.find(o=>o.name===s)),a)return a;if(r=t.isDefinedBy.find(o=>o.name===""),r)return r.hasProperties.find(o=>o.name===s)}return a}function At(t,e,s,a){const o=Ee(e,s,a)?.nominalValue?.value??null;return W(t,o)}function Tt(t,e,s,a,r){const o=Ee(e,s,a);if(o){if(o.type==="IfcPropertyEnumeratedValue")return r.filter(n=>o.enumerationValues?o.enumerationValues.some(d=>d.value===n.value):!1);if("nominalValue"in o&&o.nominalValue){const n=r.find(d=>d.value===o.nominalValue.value);return n?[n]:[]}}return[]}function Pt(t,e,s,a){const r=t.allowedValues?.map(d=>W(t.dataType,d.value))||[],o={type:"IfcPropertyEnumeratedValue",name:e,enumerationReference:{type:"IfcPropertyEnumeration",name:e,enumerationValues:r},enumerationValues:r};t.propertyUri&&(o.specification=t.propertyUri);const n=t.predefinedValue?[W(t.dataType,t.predefinedValue)]:Tt(t.dataType,a,s,e,r);return n.length>0&&(o.enumerationValues=n),o}function Bt(t,e,s,a){const r={type:"IfcPropertySingleValue",name:e,specification:t.propertyUri||""},o=t.predefinedValue?W(t.dataType,t.predefinedValue):At(t.dataType,a,s,e);return o!==null&&(r.nominalValue=o),r}function Nt(t,e,s){const{propertyCode:a}=t,r=a||"unknown",o=t.allowedValues?Pt(t,r,e,s):Bt(t,r,e,s);return o.specification=t.propertyUri||"",o}function Lt({mainDictionaryClassification:t,recursiveMode:e}){const s=z(),a=w(Se),r=w(ne),o=w(Ze),n=w(we),[d,c]=u.useState({});return u.useEffect(()=>{if(!t)return;const f={};[t].forEach(h=>{h.classProperties?.forEach(l=>{if(!l||!l.propertySet)return;const C=l.propertySet||h.name;f[C]||(f[C]={type:"IfcPropertySet",name:C,hasProperties:[]}),f[C].hasProperties.push(Nt(l,C,a))})}),s(G(Object.values(f)))},[s,a,t]),u.useEffect(()=>{if(!t)return;const f={};[t].forEach(h=>{h.classProperties?.forEach(l=>{l&&l.propertyUri&&(n&&o&&o[n]&&o[n][l.propertyUri]?f[l.propertyUri]=o[n][l.propertyUri]||"":f[l.propertyUri]=l.name)})}),c(f)},[t,e,a,o,n]),i.jsx("div",{children:u.Children.toArray(r?.map((f,x)=>i.jsx(A,{variant:"contained",radius:"xs",children:i.jsxs(A.Item,{value:f.name||"Unknown",style:x!==0?{borderTopWidth:0}:{},children:[i.jsx(A.Control,{children:f.name}),i.jsx(A.Panel,{children:i.jsx(ie,{children:u.Children.toArray(f.hasProperties.map(h=>{const l=h.specification?d[h.specification]:"";return i.jsx(Rt,{propertySet:f,property:h,property_natural_language_name:l})}))})})]},f.name||"Unknown")})))})}function Ht({api:t,defaultSelection:e}){const s=z(),{t:a}=$(),r=w(De),o=w(_e),[n,d]=u.useState([]),c=u.useRef(null),[f,x]=u.useState(void 0),[h,l]=u.useState(""),[C]=vt(h,300),[g,v]=u.useState(!1),[y,b]=u.useState(-1);u.useEffect(()=>{e&&!g&&n.length>0&&(n.find(p=>p.value===e.value)?(x(e),l(e.label),c.current&&c.current.blur()):(l(e.label),c.current&&(c.current.focus(),c.current.setSelectionRange(0,c.current.value.length))),v(!0))},[e,g,n]);const S=u.useCallback(m=>{l(m),b(-1)},[]),E=u.useCallback(m=>{const p=n.find(O=>O.value===m);p&&(x(p),c.current&&c.current.blur())},[n]),D=u.useCallback(m=>{if(m.key==="Enter"){if(y>=0&&y<n.length){const p=n[y];l(p.label),E(p.value)}else if(y===-1&&n.length>0){const p=n[0];l(p.label),E(p.value)}c.current&&c.current.blur()}else m.key==="ArrowDown"?b(p=>Math.min(p+1,n.length-1)):m.key==="ArrowUp"&&b(p=>Math.max(p-1,-1))},[y,n,E]);u.useEffect(()=>{if(r){const m={SearchText:C,DictionaryUri:r.ifcClassification.location};s(et(m))}else s(tt([]))},[s,C,r]),u.useEffect(()=>{c.current&&c.current.focus()},[]),u.useEffect(()=>{if(o){if(o.count){const m=o.dictionary?.classes;m&&d(m.filter(p=>p.uri&&p.name).map(p=>({value:p.uri,label:p.name})))}}else d([])},[o]),u.useEffect(()=>{s(f?_(f.value):_(null))},[s,f]);const I=u.useCallback(()=>{S(""),c.current&&c.current.focus(),x(void 0)},[S]);return i.jsx(oe,{label:`${a("searchMainDictionaryLabel")} ${r?r.ifcClassification.name:""}`,data:n,placeholder:"bSDD search...",value:h,onChange:S,onOptionSubmit:E,onKeyDown:D,ref:c,style:{width:"100%"},rightSection:i.jsx(Ce,{size:"sm",onMouseDown:m=>{m.preventDefault()},onClick:I,"aria-label":"Clear value"})})}const Q=60.7969;let pe=0,he=0;function Ft({selectedIfcEntity:t}){const{t:e}=$(),s=z(),{bsddSearchSave:a,bsddSearchCancel:r}=st(),[o,n]=u.useState(),[d,c]=u.useState(!1),[f,x]=u.useState(new nt(Dt[jt])),h=w(De),l=w(we),C=w(at),g=w(ot),v=w(it),y=w(Se),b=w(rt),[S,E]=u.useState(Q),[D,I]=u.useState("auto"),[m,p]=u.useState(!1),O=w(be);u.useEffect(()=>{t&&s(ct(t))},[s,t]);const k=u.useCallback(V=>{a(V).then(T=>{console.log("Sent iFC data back to host",T)})},[a]);u.useEffect(()=>{if(!O||!m)return;const V=O.classProperties||[];s(lt({classProperties:V,languageCode:l}))},[O,m,l,s]),u.useEffect(()=>{if(!y||!h)return;const V=h.ifcClassification.location;y.hasAssociations?.forEach(T=>{if(T.type==="IfcClassificationReference"){const N=T;N.referencedSource?.location&&N.referencedSource.location===V&&(N.location&&s(_(N.location)),n({label:N.name,value:N.location}))}})},[h,y,s]),u.useEffect(()=>{C!==null&&(s(ut(g)),s(ft(C)),s(dt(g)))},[C,s,g,l]),u.useEffect(()=>{b&&s(pt(b))},[b,s]),u.useEffect(()=>{I(`${S*g.length+48}px`)},[g.length,S]);const j=V=>{const T=he+(V.clientY-pe)/g.length;E(T>Q?T:Q)},R=()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",R)},F=V=>{pe=V.clientY,he=S,document.addEventListener("mousemove",j),document.addEventListener("mouseup",R)},J=V=>{p(V.includes("Propertysets"))};return i.jsxs(ht,{children:[i.jsx(U,{type:"hidden",name:"ifcType",id:"ifcType",value:""}),i.jsx(U,{type:"hidden",name:"name",id:"name",value:""}),i.jsx(U,{type:"hidden",name:"material",id:"material",value:""}),i.jsx(Z,{mx:"md",mt:"lg",mb:"sm",children:i.jsx(Ht,{api:f,defaultSelection:o})}),b?i.jsxs(i.Fragment,{children:[i.jsxs(A,{defaultValue:["Classifications"],multiple:!0,onChange:J,children:[i.jsxs(A.Item,{value:"Classifications",children:[i.jsx(A.Control,{children:i.jsx(fe,{order:5,children:e("classificationsLabel")})}),i.jsx(A.Panel,{style:{height:D},children:i.jsx(Ot,{height:S,handleMouseDown:F})})]},"Classifications"),i.jsxs(A.Item,{value:"Propertysets",children:[i.jsx(A.Control,{children:i.jsx(fe,{order:5,children:e("propertysetsLabel")})}),i.jsx(A.Panel,{children:i.jsx(Lt,{mainDictionaryClassification:O,recursiveMode:d})})]},"Propertysets")]}),i.jsxs(Z,{my:"sm",justify:"center",children:[i.jsx(It,{callback:k,ifcEntity:v}),i.jsx(ae,{fullWidth:!0,variant:"light",color:"gray",onClick:r,children:e("cancel")})]})]}):i.jsxs(mt,{mx:"md",title:e("noClassificationSelected"),mt:"xl",children:[e("classSearchInstruction"),i.jsx(gt,{h:"md"}),e("needHelp")," ",i.jsx("a",{href:"https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki",target:"_blank",rel:"noreferrer",children:e("checkDocumentation")})]})]})}function $t({selectedIfcEntity:t}){return i.jsx(Ft,{selectedIfcEntity:t})}export{$t as M,Y as P};
