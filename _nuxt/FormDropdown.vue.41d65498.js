import{d as S,b as $,r as m,q as E,l as x,aq as M,o as v,e as y,f as r,P as b,g as a,t as g,h as A,ay as N,y as _,L as j,M as q,aO as z,I as F}from"./entry.a38ac9df.js";import{_ as T}from"./FormInput.f90ae91a.js";function O(u){let c,t=u[0],d=1;for(;d<u.length;){const l=u[d],p=u[d+1];if(d+=2,(l==="optionalAccess"||l==="optionalCall")&&t==null)return;l==="access"||l==="optionalAccess"?(c=t,t=p(t)):(l==="call"||l==="optionalCall")&&(t=p((...h)=>t.call(c,...h)),c=void 0)}return t}const H={class:"relative w-[12.5rem]"},P={class:"pointer-events-none -mb-2 transform-gpu whitespace-nowrap px-2 transition-all"},R={class:"text-fonts-200 line-clamp-1"},U={class:"flex h-full w-full flex-col gap-2 overflow-auto px-2","aria-labelledby":"dropdownMenuButton"},G={key:0,class:"mb-2 w-full"},J={key:1},K=["onClick"],Y=S({__name:"FormDropdown",props:{multiSelection:{type:Boolean},title:{},style:{},hasDefaultAll:{type:Boolean},selectedOption:{},selectedOptionArray:{},searchable:{type:Boolean},list:{}},emits:["update:modelValue","onChange"],setup(u,{emit:c}){const t=u,{t:d}=$(),l=m(!1),p=m(),h=m(null),f=m(""),L=[{title:"item1",value:"number 1"},{title:"item2",value:"number 2"}],n=m([]);E(()=>{t.hasDefaultAll?n.value=t.selectedOptionArray?t.selectedOptionArray:t.selectedOption?[t.selectedOption||"ALL"]:["ALL"]:n.value=t.selectedOptionArray?t.selectedOptionArray:t.selectedOption!==void 0?[t.selectedOption]:[]});async function C(){l.value=!0,await z(100),O([h,"access",e=>e.value,"optionalAccess",e=>e.focusOnInput,"call",e=>e()])}function k(){l.value=!1}function w(){const e=n.value.length?n.value:["ALL"];c("update:modelValue",e),c("onChange",e)}function B(){n.value=["ALL"],w(),l.value=!1}function V(e){if(t.multiSelection)return n.value=n.value.filter(s=>s!=="ALL"),n.value.includes(e)?(n.value=n.value.filter(s=>s!==e),n.value.length===0&&(n.value=["ALL"]),w()):(n.value.push(e),w());n.value=[e],w(),l.value=!1}const D=x(()=>(t.list||L).filter(s=>s.title.toLowerCase().includes(f.value.toLowerCase())));M(p,()=>{l.value&&(l.value=!1)});const I=x(()=>{const e=t.list||L;return n.value.map(s=>s==="ALL"?d("form.dropdown.default"):O([e,"access",i=>i.find,"call",i=>i(o=>o.value===s),"optionalAccess",i=>i.title])||s)});return(e,s)=>{const i=F;return v(),y("div",{ref_key:"dropdown",ref:p,class:"text-sm"},[r("div",H,[r("fieldset",{class:b(["text-fonts-50 input outline-fonts-[50] relative my-2 flex w-full cursor-pointer flex-row items-center justify-between gap-2 rounded-xl border-2 p-2 px-4 outline-offset-2 transition-colors",[{"!border-primary-500":a(l)},e.style.dimmed?"border-fonts-300":"border-fonts-50"]]),"aria-haspopup":"true","aria-expanded":"false",onClick:s[0]||(s[0]=o=>a(l)?k():C())},[r("legend",P,g(e.title),1),r("p",R,g([...a(I)].join(", ")),1),A(i,{name:"ph:caret-down-bold",class:b([{"rotate-180":a(l)},"transition-transform"])},null,8,["class"])],2),r("div",{class:b(["invisible absolute z-20 flex max-h-[15em] w-full -translate-y-2 flex-col gap-1 rounded-xl px-1 py-2 opacity-0 transition-all",[{"!visible !translate-y-0 !opacity-100":a(l)},e.style.foreground]])},[r("ul",U,[e.searchable?(v(),y("li",G,[A(a(T),{ref_key:"searchInputEl",ref:h,modelValue:a(f),"onUpdate:modelValue":s[1]||(s[1]=o=>N(f)?f.value=o:null),name:"dropdown-name-searchbox",label:e.$t("form.dropdown.search"),"label-bg":e.style.foreground,class:"text-xs",icon:"ph:magnifying-glass-fill"},null,8,["modelValue","label","label-bg"])])):_("",!0),!a(f)&&e.hasDefaultAll?(v(),y("li",J,[r("button",{type:"button",class:b([{"bg-primary-500 hover:!bg-primary-500 text-white":a(n).includes("ALL")},"10 hover:bg-fonts-50/10 flex w-full rounded-md px-4 py-2"]),onClick:B},g(e.$t("form.dropdown.default")),3)])):_("",!0),(v(!0),y(j,null,q(a(D),o=>(v(),y("li",{key:o.value},[r("button",{type:"button",class:b([{"bg-primary-500 hover:!bg-primary-500 text-white":a(n).includes(o.value)},"10 hover:bg-fonts-50/10 flex w-full rounded-md px-4 py-2"]),onClick:Q=>V(o.value)},g(o.title),11,K)]))),128))])],2)])],512)}}});export{Y as _};
