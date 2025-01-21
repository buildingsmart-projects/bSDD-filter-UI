import{aG as L,aH as w,b3 as ee,b9 as de,ba as he,bb as me,bc as te,r as c,j as s,az as _,bd as pe,aY as ge,aZ as T,ag as z,be,a3 as Y,aU as xe,W as ne,P as se,u as R,bf as ve,bg as Ce,b as H,bh as ye,bi as ae,bj as Ie,B as oe,at as N,ay as Se,bk as we,bl as je,aE as le,ah as Ve,bm as De,t as K,bn as Ee,bo as ie,bp as Me,bq as Oe,av as k,au as Ae,br as re,bs as Pe,bt as Te,aO as ce,b0 as A,aB as ke,aL as ue,bu as Le,aD as Re,bv as Be,bw as He,bx as G,aF as ze,aJ as Fe,by as Ue,bz as $e,bA as Ne,bB as Ge,bC as We,b1 as q,aA as _e,S as Ye}from"./defaultSettings-e233099a.js";const Ke={test:"https://test.bsdd.buildingsmart.org",production:"https://api.bsdd.buildingsmart.org"},qe="production";function Je({bsddSearchSave:t}){const{t:e}=L();w(ee);const o=w(de),n=w(he),a=w(me),i=w(te);function l(I,f){return console.log("Creating bsddSearchSave data",i),i?{ifcData:pe(I,i),settings:n,propertyIsInstanceMap:f}:{ifcData:[],settings:n,propertyIsInstanceMap:f}}const d=c.useCallback(I=>{console.log("Sending bsddSearchSave data back to host",I),t(l(I,a)).then(f=>{console.log("Sent iFC data back to host",f)})},[t,a]),u=()=>{console.log(o),d(o)};return s.jsx(_,{color:"gray",fullWidth:!0,onClick:u,variant:"filled",children:e("apply")})}const J=25,Ze=25;function Z({height:t,options:e,label:o,value:n,setValue:a,placeholder:i="Search values",disabled:l}){const[d,u]=c.useState(""),[I,f]=c.useState(e.slice(0,J)),j=c.useRef(null),h=ge({onDropdownClose:()=>{h.resetSelectedOption(),h.focusTarget&&h.focusTarget()},onDropdownOpen:()=>{h.focusSearchInput&&h.searchRef.current&&h.focusSearchInput()}});c.useEffect(()=>{u(n?.label||"")},[n]),c.useEffect(()=>{const b=n===null?e.filter(y=>y?.label.toLowerCase().includes(d.toLowerCase().trim())||y?.value.toString().toLowerCase().includes(d.toLowerCase().trim())):e;f(b.slice(0,J))},[e,d,n]);const p=b=>{const{scrollTop:y,scrollHeight:M,clientHeight:D}=b.currentTarget,r=5;M-y<=D+r&&f(x=>{const E=x.length,g=(n===null?e.filter(V=>V?.label.toLowerCase().includes(d.toLowerCase().trim())||V?.value.toString().toLowerCase().includes(d.toLowerCase().trim())):e).slice(E,E+Ze);return[...x,...g]})},m=I.map(b=>s.jsx(T.Option,{value:b.value,active:n?.value===b.value,children:s.jsxs(z,{gap:"sm",children:[n?.value===b.value?s.jsx(be,{size:12}):null,s.jsx(Y,{fz:"sm",opacity:l?.6:1,children:b.label}),s.jsxs(Y,{fz:"xs",opacity:.6,children:["(",b.value,")"]})]})},b.value));return s.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:s.jsxs(T,{store:h,onOptionSubmit:b=>{if(!l){const y=e.find(D=>D.value===b),M=y&&n?.value!==y.value?y:null;a(M),h.closeDropdown()}},disabled:l,children:[s.jsx(T.Target,{children:s.jsx(xe,{rightSection:!l&&s.jsx(ne,{size:"sm",onMouseDown:b=>{b.preventDefault()},onClick:()=>{u(""),a(null)},"aria-label":"Clear value"}),label:o,value:n?`${n.label} (${n.value})`:d,onChange:b=>{l||(a(null),h.updateSelectedOptionIndex(),u(b.currentTarget.value))},onClick:()=>{l||h.openDropdown()},onBlur:()=>h.closeDropdown(),placeholder:l?"":i,disabled:l})}),t<80?s.jsx(T.Dropdown,{style:{maxHeight:"20em",overflowY:"auto"},ref:j,onScroll:p,children:s.jsx(T.Options,{children:m.length>0?m:s.jsx(T.Empty,{children:"Nothing found..."})})}):s.jsx(se,{withBorder:!0,my:"0.2em",style:{flexGrow:1,overflow:"auto",backgroundColor:l?"var(--mantine-color-gray-0)":"transparent",color:l?"var(--mantine-color-gray-6)":"inherit",pointerEvents:l?"none":"auto"},ref:j,onScroll:p,children:s.jsx(T.Options,{children:m.length>0?m:s.jsx(T.Empty,{children:"Nothing found..."})})})]})})}const Qe=(t,e,o)=>{if(!e||!e.value)return null;const n=o[t];return n?{type:"IfcClassificationReference",name:e.label,location:e.uri,identification:e.value,referencedSource:{type:"IfcClassification",name:n.name,location:n.uri,edition:n.version,editionDate:n.releaseDate}}:null},Xe=(t,e,o)=>{const n=Array.from(t.entries()).map(([a,i])=>Qe(a,i,e)).filter(a=>a!==null);n.length>0&&o(we(n))};function et({height:t,handleMouseDown:e}){const o=R(),{t:n}=L(),[a,i]=c.useState(new Map),[l,d]=c.useState(new Map),u=w(ve),I=w(Ce),f=H(ee),j=H(ye),h=H(ae),p=H(Ie);return c.useEffect(()=>{(async()=>{const y=Array.from(u.entries()).map(async([S,x])=>{if(h&&S===p){const{code:C,name:O,uri:P}=h;return[S,[{value:C,label:O,uri:P}]]}let E=[];const v=j[S],g=h?.classRelations?.map(C=>C.relatedClassUri),V=v?.filter(C=>g?.includes(C.uri));if(V&&V.length>0)E=V.map(C=>({value:C.code,label:C.name,uri:C.uri}));else try{E=(await o(je(S)).unwrap())?.map(O=>({value:O.code,label:O.name||"",uri:O.uri}))??[]}catch(C){console.error("Failed to fetch dictionary classes for",S,C),E=[]}return[S,E]}),M=await Promise.all(y),D=new Map(M);i(D);const r=new Map;D.forEach((S,x)=>{if(S.length===1)r.set(x,S[0]);else if(x in I){const E=I[x];if(E.length===1){const v=E[0];if(S.some(V=>V.value===v.identification)){const V={label:v.name||"",value:v.identification||"",uri:v.location||""};r.set(x,V)}}}}),d(r)})()},[u,j,o,I,h,p]),c.useEffect(()=>{Xe(l,f,o)},[f,o,l]),s.jsxs(se,{style:{height:`${t}px`,position:"relative"},children:[Array.from(u.entries()).map(([m,b])=>{const y=m===p,M=m===h?.dictionaryUri;return y?s.jsx(Z,{height:t,label:b.name,options:a.get(m)||[],value:l.get(m)||null,setValue:D=>{const r=new Map(l);r.set(m,D),d(r)},placeholder:n("classifications.searchClassesPlaceholder"),disabled:a.get(m)?.length===1},m):M?null:s.jsx(Z,{height:t,label:b.name,options:a.get(m)||[],value:l.get(m)||null,setValue:D=>{const r=new Map(l);r.set(m,D),d(r)},placeholder:n("classifications.searchClassesPlaceholder"),disabled:a.get(m)?.length===1},m)}),s.jsx(oe,{onMouseDown:e,style:{marginTop:"4px"},children:s.jsx(N,{label:n("classifications.dragResize"),withArrow:!0,children:s.jsx(_,{fullWidth:!0,variant:"subtle",size:"sm",color:"gray","aria-label":n("classifications.dragResize"),children:s.jsx(Se,{})})})})]})}function tt(t,e){return t==null||e==null?null:t.toLowerCase()!==e.toLowerCase()?`(${e})`:null}function nt({label:t,description:e,value:o,setValue:n,disabled:a,inputContainer:i}){const{t:l}=L(),[d,u]=c.useState(!1),[I,f]=c.useState(!0),j=()=>l(I?"checkbox.indeterminate":d?"checkbox.true":"checkbox.false"),h=m=>{m.target.indeterminate=!1,n(m.target.checked)};c.useEffect(()=>{o===!0?(u(!0),f(!1)):o===!1?(u(!1),f(!1)):o===void 0&&(u(!1),f(!0))},[o]);const p=s.jsx(le,{description:j(),checked:d,indeterminate:I,type:"checkbox",onChange:m=>h(m),disabled:a});return s.jsx(Ve.Wrapper,{label:t,description:e,children:i?i(p):p})}const st=["Name","Description","ObjectType"],at=(t,e,o)=>{if(e==="Attributes"&&!st.includes(o))return!0;const n=`${e}/${o}`;return t[n]||t[o]||!1},ot=(t,e,o,n)=>{const a=t.map(i=>{if(i.name===e){const l=i.hasProperties.map(d=>d.name===o?{...d,...n}:d);return l.some(d=>d.name===o)||l.push({name:o,...n}),{...i,hasProperties:l}}return i});return a.some(i=>i.name===e)||a.push({type:"IfcPropertySet",name:e,hasProperties:[{name:o,...n}]}),a},lt=t=>t.type==="IfcPropertySingleValue",it=t=>t.type==="IfcPropertyEnumeratedValue",rt=t=>t.enumerationValues?.[0]?.value||void 0,ct=t=>t.nominalValue?.value||void 0,ut=t=>lt(t)?ct(t).value:it(t)?rt(t).value:void 0;function ft({propertySet:t,property:e,propertyNaturalLanguageName:o}){const n=R(),a=w(r=>r.ifcData.propertyIsInstanceMap),i=w(r=>r.ifcData.savedPropertyIsInstanceMap),l=w(De),d=t.name!=="Attributes",u=`${t.name}/${e.name}`,I=i.hasOwnProperty(u)||i.hasOwnProperty(e.name),f=at(a,t.name||"",e.name),[j,h]=c.useState(),p=o?.trim()?o:e.name,m=tt(p,e.name);c.useEffect(()=>{if(e.type==="IfcPropertySingleValue"){const r=e.nominalValue?.type||"";h(r==="IfcBoolean"?e.nominalValue?.value??!1:e.nominalValue?.value??"")}else if(e.type==="IfcPropertyEnumeratedValue"){const r=e.enumerationValues?.[0];r&&r.type,h(r?.value??"")}},[e]);const b=r=>{if(h(r),l&&t.name){let S;"nominalValue"in e?S={nominalValue:{...e.nominalValue,value:r}}:"enumerationReference"in e?S={enumerationValues:(e.enumerationReference?.enumerationValues||[]).filter(g=>g.value===r)}:S={value:r};const x=ot(l,t.name,e.name,S);n(ie(x)),t.name==="Attributes"&&(e.name==="ObjectType"?n(Me(r)):e.name==="Description"&&n(Oe(r)))}},y=r=>{b(r)},M=()=>{switch(e.type){case"IfcPropertySingleValue":return e.nominalValue?.type==="IfcBoolean"?s.jsx(nt,{label:p,description:m,disabled:f,value:j,setValue:x=>y(x)}):s.jsx(k,{label:p,description:m,placeholder:e.nominalValue?.value??"",value:j,disabled:f,onChange:x=>y(x.target.value),onBlur:x=>b(x.target.value)});case"IfcPropertyEnumeratedValue":const r=e.enumerationReference?.enumerationValues||[],S=r.length===1;return s.jsx(Ae,{label:p,description:m,value:j,disabled:f||S,clearable:!S,onChange:x=>y(x),data:r.map(x=>({value:x.value,label:x.value}))});default:return s.jsx(k,{placeholder:e.name,defaultValue:ut(e),disabled:f,onChange:x=>y(x.target.value),onBlur:x=>b(x.target.value)})}},D=r=>d&&f?s.jsx(N,{label:K("bsddSearch.property.tooltipEditInstance"),withArrow:!0,children:r}):r;return s.jsxs(z,{children:[s.jsx("div",{style:{flex:1},children:D(M())}),d&&s.jsx(N,{label:K("bsddSearch.property.setAsInstanceCheckboxTooltip"),withArrow:!0,children:s.jsx(le,{style:{marginTop:"2rem"},disabled:I,checked:f,onChange:r=>{I||(b(void 0),n(Ee({propertyName:u,value:r.currentTarget.checked})))}})})]})}const dt={Boolean:"IfcBoolean",Character:"IfcText",Integer:"IfcInteger",Real:"IfcReal",String:"IfcText",Time:"IfcDateTime"};function F(t,e){const o=t&&dt[t]||"default";let n;return t==="Boolean"&&typeof e=="string"?e.toUpperCase()==="TRUE"?n=!0:e.toUpperCase()==="FALSE"?n=!1:n=void 0:n=e,{type:o,value:n}}function W(t,e){return t&&t===e?.type?e:F(t,e?.value)}function fe(t,e,o){let n;if(t&&t.isDefinedBy){let a=t.isDefinedBy.find(i=>i.name===e);if(a&&(n=a.hasProperties.find(i=>i.name===o)),n)return n;if(a=t.isDefinedBy.find(i=>i.name===""),a)return a.hasProperties.find(i=>i.name===o)}return n}function ht(t,e){const o=e?.nominalValue?.value??null;return F(t,o)}function mt(t,e,o){if(e){if(e.type==="IfcPropertyEnumeratedValue"){const n=o.find(a=>e.enumerationValues?e.enumerationValues.some(i=>i.value===a.value):!1);return n?W(t,n):null}if("nominalValue"in e&&e.nominalValue){const n=o.find(a=>a.value===e.nominalValue?.value);return n?W(t,n):null}}return null}function pt(t,e,o,n){const a=t.allowedValues?.map(u=>F(t.dataType,u.value))||[],i={type:"IfcPropertyEnumeratedValue",name:e,enumerationReference:{type:"IfcPropertyEnumeration",name:e,enumerationValues:a}};t.propertyUri&&(i.specification=t.propertyUri);let l=null,d=[];if(t.allowedValues?d=t.allowedValues:t.predefinedValue&&(d=[t.predefinedValue]),d.length===1)l=W(t.dataType,d[0]);else if(n){const u=fe(n,o,e);l=mt(t.dataType,u,a)}return l!==null&&(i.enumerationValues=[l]),i}function gt(t,e,o,n){const a={type:"IfcPropertySingleValue",name:e};t.propertyUri&&(a.specification=t.propertyUri);let i=null;if(t.predefinedValue)i=F(t.dataType,t.predefinedValue);else if(n){const l=fe(n,o,e);i=ht(t.dataType,l)}return i!==null&&(a.nominalValue=i),a}function bt(t,e,o){const{propertyCode:n}=t,a=n||"unknown",i=t.allowedValues?pt(t,a,e,o):gt(t,a,e,o);return i.specification=t.propertyUri||"",i}function xt({mainDictionaryClassification:t,recursiveMode:e}){const o=R(),n=w(re);w(Pe);const a=w(Te),i=w(ce),[l,d]=c.useState({}),[u,I]=c.useState(null);return c.useEffect(()=>{if(!t)return;const f={};[t].forEach(h=>{h.classProperties?.forEach(p=>{if(!p||!p.propertySet)return;const m=p.propertySet||h.name;f[m]||(f[m]={type:"IfcPropertySet",name:m,hasProperties:[]}),f[m].hasProperties.push(bt(p,m,n))})}),o(ie(Object.values(f))),I(Object.values(f))},[o,n,t]),c.useEffect(()=>{if(!t)return;const f={};[t].forEach(h=>{h.classProperties?.forEach(p=>{p&&p.propertyUri&&(i&&a&&a[i]&&a[i][p.propertyUri]?f[p.propertyUri]=a[i][p.propertyUri]||"":f[p.propertyUri]=p.name)})}),d(f)},[t,e,n,a,i]),s.jsx("div",{children:c.Children.toArray(u?.map((f,j)=>s.jsx(A,{variant:"contained",radius:"xs",children:s.jsxs(A.Item,{value:f.name||"Unknown",style:j!==0?{borderTopWidth:0}:{},children:[s.jsx(A.Control,{children:f.name}),s.jsx(A.Panel,{children:s.jsx(ke,{children:c.Children.toArray(f.hasProperties.map(h=>{const p=h.specification?l[h.specification]:"";return s.jsx(ft,{propertySet:f,property:h,propertyNaturalLanguageName:p})}))})})]},f.name||"Unknown")})))})}function vt({api:t,defaultSelection:e}){const o=R(),{t:n}=L(),a=w(ue),i=w(Le),[l,d]=c.useState([]),u=c.useRef(null),[I,f]=c.useState(void 0),[j,h]=c.useState(""),[p]=Re(j,300),[m,b]=c.useState(!1),[y,M]=c.useState(-1);c.useEffect(()=>{e&&!m&&l.length>0&&(l.find(g=>g.value===e.value)?(f(e),h(e.label),u.current&&u.current.blur()):(h(e.label),u.current&&(u.current.focus(),u.current.setSelectionRange(0,u.current.value.length))),b(!0))},[e,m,l]);const D=c.useCallback(v=>{h(v),M(-1);const g=l.filter(V=>V.label.toLowerCase().includes(v.toLowerCase().trim())||V.synonyms?.some(C=>C.toLowerCase().includes(v.toLowerCase().trim())));d(g)},[l]),r=c.useCallback(v=>{const g=l.find(V=>V.value===v);g&&(f(g),u.current&&u.current.blur())},[l]),S=c.useCallback(v=>{if(v.key==="Enter"){if(y>=0&&y<l.length){const g=l[y];h(g.label),r(g.value)}else if(y===-1&&l.length>0){const g=l[0];h(g.label),r(g.value)}u.current&&u.current.blur()}else v.key==="ArrowDown"?M(g=>Math.min(g+1,l.length-1)):v.key==="ArrowUp"&&M(g=>Math.max(g-1,-1))},[y,l,r]);c.useEffect(()=>{if(a){const v={SearchText:p,DictionaryUri:a.ifcClassification.location};o(Be(v))}else o(He([]))},[o,p,a]),c.useEffect(()=>{u.current&&u.current.focus()},[]),c.useEffect(()=>{if(i){if(i.count){const v=i.dictionary?.classes;v&&d(v.filter(g=>g.uri&&g.name).map(g=>({value:g.uri,label:g.name,synonyms:g.synonyms||[]})))}}else d([])},[i]),c.useEffect(()=>{o(I?G(I.value):G(null))},[o,I]);const x=c.useCallback(()=>{D(""),u.current&&u.current.focus(),f(void 0)},[D]),E=({options:v,search:g})=>{const V=g.toLowerCase().trim().split(" ");return v.filter(C=>{const O=C.label.toLowerCase().trim().split(" "),P=C.synonyms?.map(B=>B.toLowerCase().trim().split(" ")).flat()||[];return V.every(B=>O.some(U=>U.includes(B))||P.some(U=>U.includes(B)))})};return s.jsx(ze,{label:`${n("searchMainDictionaryLabel")} ${a?a.ifcClassification.name:""}`,data:l,placeholder:"bSDD search...",value:j,onChange:D,onOptionSubmit:r,filter:E,onKeyDown:S,ref:u,style:{width:"100%"},rightSection:s.jsx(ne,{size:"sm",onMouseDown:v=>{v.preventDefault()},onClick:x,"aria-label":"Clear value"})})}const $=60.7969;let Q=0,X=0;function yt(){const{t}=L(),e=R(),{bsddSearchSave:o,bsddSearchCancel:n}=Fe(),a=w(ue),i=w(ce),l=w(Ue),d=w(re),u=w($e);w(te);const[I,f]=c.useState(),[j,h]=c.useState(!1),[p,m]=c.useState(new Ne(Ke[qe])),[b,y]=c.useState($),[M,D]=c.useState("auto"),[r,S]=c.useState(!1),x=w(ae);c.useEffect(()=>{if(!x||!r)return;const C=x.classProperties||[];e(Ge({classProperties:C,languageCode:i}))},[x,r,i,e]),c.useEffect(()=>{if(!d||!a)return;const C=a.ifcClassification.location;d.hasAssociations?.forEach(O=>{if(O.type==="IfcClassificationReference"){const P=O;P.referencedSource?.location&&P.referencedSource.location===C&&(P.location&&e(G(P.location)),f({label:P.name,value:P.location}))}})},[a,d,e]),c.useEffect(()=>{u&&e(We(u))},[u,e]),c.useEffect(()=>{D(`${b*l.length+48}px`)},[l.length,b]);const E=C=>{const O=X+(C.clientY-Q)/l.length;y(O>$?O:$)},v=()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",v)},g=C=>{Q=C.clientY,X=b,document.addEventListener("mousemove",E),document.addEventListener("mouseup",v)},V=C=>{S(C.includes("Propertysets"))};return s.jsxs(oe,{children:[s.jsx(k,{type:"hidden",name:"ifcType",id:"ifcType",value:""}),s.jsx(k,{type:"hidden",name:"name",id:"name",value:""}),s.jsx(k,{type:"hidden",name:"material",id:"material",value:""}),s.jsx(z,{mx:"md",mt:"lg",mb:"sm",children:s.jsx(vt,{api:p,defaultSelection:I})}),u?s.jsxs(s.Fragment,{children:[s.jsxs(A,{defaultValue:["Classifications"],multiple:!0,onChange:V,children:[s.jsxs(A.Item,{value:"Classifications",children:[s.jsx(A.Control,{children:s.jsx(q,{order:5,children:t("classificationsLabel")})}),s.jsx(A.Panel,{style:{height:M},children:s.jsx(et,{height:b,handleMouseDown:g})})]},"Classifications"),s.jsxs(A.Item,{value:"Propertysets",children:[s.jsx(A.Control,{children:s.jsx(q,{order:5,children:t("propertysetsLabel")})}),s.jsx(A.Panel,{children:s.jsx(xt,{mainDictionaryClassification:x,recursiveMode:j})})]},"Propertysets")]}),s.jsxs(z,{my:"sm",justify:"center",children:[s.jsx(Je,{bsddSearchSave:o}),s.jsx(_,{fullWidth:!0,variant:"light",color:"gray",onClick:n,children:t("cancel")})]})]}):s.jsxs(_e,{mx:"md",title:t("noClassificationSelected"),mt:"xl",children:[t("classSearchInstruction"),s.jsx(Ye,{h:"md"}),t("needHelp")," ",s.jsx("a",{href:"https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki",target:"_blank",rel:"noreferrer",children:t("checkDocumentation")})]})]})}export{yt as B};