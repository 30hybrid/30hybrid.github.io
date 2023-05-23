import{d as D,B as q,b as M,ab as N,r as S,l as B,z as J,u as Q,q as E,o as i,e as u,f as t,h as p,w as g,g as e,G as P,P as w,t as b,L as I,M as A,x as W,y,F as X,H as Z,I as F,J as K,$ as R,a0 as Y,m as O,ac as ee,X as te,D as se,ad as le,ae as oe,c as ne}from"./entry.a38ac9df.js";import{_ as ae}from"./BaseScore.vue.2e9957e2.js";import{_ as ie}from"./nuxt-link.c1449334.js";import{_ as re}from"./HeroSlider.0ef6b286.js";import{S as j,G as H,a as G}from"./splide-extension-grid.esm.35250639.js";import"./BaseChip.vue.24bd66f1.js";function ce(r){let n,s=r[0],c=1;for(;c<r.length;){const o=r[c],d=r[c+1];if(c+=2,(o==="optionalAccess"||o==="optionalCall")&&s==null)return;o==="access"||o==="optionalAccess"?(n=s,s=d(s)):(o==="call"||o==="optionalCall")&&(s=d((...l)=>s.call(n,...l)),n=void 0)}return s}const L=r=>(R("data-v-33e85d28"),r=r(),Y(),r),de={"aria-label":"continue watching",class:"bg-bg-13 relative flex h-[30em] w-full items-center justify-between rounded-2xl p-8"},ue={class:"flex h-full w-full flex-row items-center gap-8"},pe=["src","alt"],fe=["src","alt"],_e={key:1,class:"bg-bg-10 h-full w-[17.32em] shrink-0 rounded-xl"},he={class:"z-10 flex h-full min-w-[12em] flex-col items-start gap-4"},ge={class:"text-fonts-50 line-clamp-1 shrink-0 break-all text-xl font-semibold ltr:pr-12 rtl:pl-12",dir:"ltr"},me={class:"relative line-clamp-1 flex max-w-[90%] shrink-0 flex-col break-all text-lg"},xe={class:"local-numbers relative line-clamp-1 flex max-w-[90%] shrink-0 flex-col break-all text-lg"},be={key:0,class:"mt-2 flex flex-row flex-wrap gap-2 text-xs"},ve={class:"relative h-[14em] w-[20em]"},we=L(()=>t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 20C0 8.95431 8.95431 0 20 0H300C311.046 0 320 8.95431 320 20V204C320 215.046 311.046 224 300 224H153C139.667 223.833 113 215.6 113 184V161C113 121.808 79.6667 111.337 63 111H40C26.6667 110.833 0 102.6 0 71V20Z"},null,-1)),ye=[we],ke={class:"relative p-4"},$e={class:"line-clamp-[4] text-sm"},Ce={class:"absolute inset-0 h-full w-full origin-center -rotate-90"},Se=["stroke-dashoffset"],Be=["stroke-dashoffset"],Ie=L(()=>t("span",{class:"absolute h-6 w-6 rounded-full bg-white/50 opacity-0 blur-lg transition-all group-hover:opacity-100"},null,-1)),Ae={class:"absolute bottom-5 ltr:left-5 rtl:right-5"},Pe={class:"z-10"},He={class:"relative flex w-[16em] flex-col gap-4"},ze={class:"relative flex flex-row"},De=["onClick"],Ne=["src","alt"],We={class:"flex w-full flex-row gap-2"},Le=L(()=>t("button",null,null,-1)),Ve=D({__name:"ContinueWatching",props:{data:{}},setup(r){const n=r,s=q(),{t:c}=M(),o=N(),d=S(0),l=B(()=>n.data[d.value]),{dataFetchers:k}=J(),{fetchContinueWatchings:v}=k,a=B(()=>{const f=S(n.data),h=f.value.indexOf(l.value);return f.value.slice(h,h+3)});async function _(f){o.dismissContinueWatching(f);const h=await Z.API.actions.continue_watching_dismiss(f);ce([h,"optionalAccess",C=>C.success])&&s(c("removedItemFromContinueWatching"),"SUCCESS")}const{theme:$}=Q();return E(async()=>{await v(!0)}),(f,h)=>{const C=F,T=ae,V=ie,U=K;return i(),u("section",de,[t("article",ue,[p(P,{name:"fade-preset",mode:"out-in"},{default:g(()=>[(i(),u("img",{key:e(l).id,draggable:"false",src:e(l).image.cover.webp,class:"absolute inset-0 z-10 h-full w-full rounded-2xl object-cover brightness-[0.2] grayscale-[0.3]",alt:e(l).title.english+"cover"},null,8,pe))]),_:1}),p(P,{name:"fade-preset",mode:"out-in"},{default:g(()=>[(i(),u("div",{key:e(l).id,class:"poster z-10 flex h-full shrink-0"},[e(l).image.poster.webp.big?(i(),u("img",{key:0,draggable:"false",src:e(l).image.poster.webp.big,class:"bg-bg-10 flex h-full w-[17.32em] shrink-0 rounded-xl",alt:e(l).title.english+"poster"},null,8,fe)):(i(),u("div",_e))]))]),_:1}),t("figure",he,[t("div",{class:w(["bg-bg-3/10 flex min-w-[20em] max-w-[30em] flex-1 flex-col items-start gap-2 rounded-2xl p-4 backdrop-blur-sm",{"bg-bg-8/80":e($)==="light"}])},[t("div",{class:"bg-bg-1/0 hover:bg-bg-1/10 absolute top-4 flex cursor-pointer rounded-full p-2 opacity-30 transition-all hover:opacity-100 ltr:right-4 rtl:left-4",onClick:h[0]||(h[0]=m=>_(e(l).id))},[p(C,{name:"ph:trash-fill"})]),t("p",ge,b(e(l).title.english),1),t("p",me,b(e(l).title.local),1),t("p",xe,b(e(l).data.episode_title),1),e(l).score?(i(),u("ul",be,[(i(!0),u(I,null,A(e(l).score,(m,x)=>(i(),u("div",{key:x},[x==="30nama"||x==="imdb"||x==="myanimelist"?(i(),W(T,{key:0,type:x,background:"bg-bg-9/50",data:m},null,8,["type","data"])):y("",!0)]))),128))])):y("",!0)],2),t("div",ve,[(i(),u("svg",{class:w(["fill-bg-3/10 absolute h-full backdrop-blur-sm ltr:-scale-x-100",{"fill-bg-8/80":e($)==="light"}]),viewBox:"0 0 320 224",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ye,2)),t("div",ke,[t("p",$e,b(e(l).plot.local),1)]),p(V,{to:`/play/${e(l).id}`},{default:g(()=>[t("div",{class:w(["group absolute bottom-0 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-white/10 ltr:right-0 rtl:left-0",{"bg-white/50":e($)==="light"}])},[(i(),u("svg",Ce,[t("circle",{class:"circle-ring stroke-primary-500",cx:"48",cy:"48",fill:"transparent",r:"34","stroke-linecap":"round","stroke-width":"4","stroke-dasharray":"215","stroke-dashoffset":215-215*parseInt(e(l).data.progress)/100},null,8,Se),t("circle",{class:"circle-ring stroke-bg-1/10",cx:"48",cy:"48",fill:"transparent",r:"34","stroke-linecap":"round","stroke-width":"4","stroke-dasharray":"215","stroke-dashoffset":215-215*parseInt("100")/100},null,8,Be)])),p(C,{name:"ph:play-fill",class:"text-4xl text-white transition-transform group-hover:scale-[1.15]"}),Ie],2)]),_:1},8,["to"]),t("div",Ae,[p(V,{to:`/single/${e(l).id}`},{default:g(()=>[p(U,{class:"btn btn-primary-outline w-[12em] text-sm"},{default:g(()=>[X(b(f.$t("details")),1)]),_:1})]),_:1},8,["to"])])])])]),t("div",Pe,[t("div",He,[t("div",ze,[(i(!0),u(I,null,A(e(a),(m,x)=>(i(),u("div",{key:m.id,class:w(["flex h-[258px] w-[172px] items-center justify-center rounded-xl text-8xl font-bold transition-[opacity,transform] hover:!opacity-100 ltr:hover:translate-x-5 rtl:hover:-translate-x-5",{"z-[3] !transition-none hover:!translate-x-0":x===0,"z-[2] cursor-pointer opacity-80  ltr:-ml-[130px] rtl:-mr-[130px]":x===1,"z-[1] cursor-pointer opacity-50 ltr:-ml-[130px] rtl:-mr-[130px]":x===2}]),onClick:rt=>d.value=f.data.indexOf(m)},[p(P,{name:"fade-preset",appear:""},{default:g(()=>[t("img",{draggable:"false",src:m.image.poster.webp.large,class:"h-full w-full rounded-xl",alt:m.title.english+"poster"},null,8,Ne)]),_:2},1024)],10,De))),128))]),t("div",We,[t("div",{class:w(["bg-bg-12 hover:bg-bg-11 flex shrink-0 cursor-pointer rounded-xl p-2 text-2xl transition-colors ltr:rotate-180",{"disable-block":e(d)===0}]),onClick:h[1]||(h[1]=m=>d.value-=1)},[p(C,{name:"ph:caret-right"})],2),t("div",{class:w(["bg-bg-12 hover:bg-bg-11 flex shrink-0 cursor-pointer rounded-xl p-2 text-2xl transition-colors ltr:rotate-180",{"disable-block":e(d)===f.data.length-1}]),onClick:h[2]||(h[2]=m=>d.value+=1)},[p(C,{name:"ph:caret-left"})],2),Le])])])])}}});const je=O(Ve,[["__scopeId","data-v-33e85d28"]]);function z(r){let n,s=r[0],c=1;for(;c<r.length;){const o=r[c],d=r[c+1];if(c+=2,(o==="optionalAccess"||o==="optionalCall")&&s==null)return;o==="access"||o==="optionalAccess"?(n=s,s=d(s)):(o==="call"||o==="optionalCall")&&(s=d((...l)=>s.call(n,...l)),n=void 0)}return s}const Ge={key:0,class:"w-full"},Me={class:"w-[29.5em]"},Ee={key:1,class:"w-full"},Fe={class:"w-full p-4"},Oe=D({__name:"NotificationSlider",props:{isLoading:{type:Boolean},data:{}},setup(r){const n=N(),s=ee("globalDirection"),c=S(!1),o=S(),d=S();te(s,async()=>{await new Promise(a=>setTimeout(a,300)),console.log(z([d,"access",a=>a.value,"optionalAccess",a=>a.splide])),d.value&&d.value.splide.refresh()});const l=B(()=>n.notifications&&z([n,"access",a=>a.notifications,"optionalAccess",a=>a.notifications,"access",a=>a.length])>4?2:1),k=B(()=>({grid:{rows:l.value},direction:s.value,mediaQuery:"min",arrows:!0,pagination:!1,extetntions:{Grid:H},breakpoints:{4e3:{perPage:4},2560:{perPage:4},2220:{perPage:3},1850:{perPage:3},1500:{perPage:2},1150:{perPage:2},950:{perPage:2}}}));let v=null;return E(()=>{const a=document.getElementById("main-scroller");v=new IntersectionObserver(_=>c.value=_[0].isIntersecting,{root:a,rootMargin:"100% 0px 0px 0px"}),v.observe(o.value)}),se(()=>z([v,"optionalAccess",a=>a.disconnect,"call",a=>a()])),(a,_)=>{const $=le;return i(),u("div",{ref_key:"slider",ref:o,class:w(["slider h-[29em] w-full p-4",{"!h-[14.5em]":e(l)===1}])},[e(n).notifications===void 0?(i(),u("div",Ge,[p(e(G),{ref_key:"splide",ref:d,class:"slider-wrapper",options:e(k),extensions:{Grid:e(H)}},{default:g(()=>[(i(),u(I,null,A(12,f=>p(e(j),{key:f,class:"flex justify-center"},{default:g(()=>[t("div",Me,[p($,{class:"m-4","is-loading":!0})])]),_:2},1024)),64))]),_:1},8,["options","extensions"])])):e(c)?(i(),u("div",Ee,[p(e(G),{ref_key:"splide",ref:d,class:"slider-wrapper",options:e(k),extensions:{Grid:e(H)}},{default:g(()=>[(i(!0),u(I,null,A(a.data,f=>(i(),W(e(j),{key:f.id,class:"flex justify-center"},{default:g(()=>[t("div",Fe,[p($,{data:f,limit:"","is-loading":a.isLoading},null,8,["data","is-loading"])])]),_:2},1024))),128))]),_:1},8,["options","extensions"])])):y("",!0)],2)}}});const Te=O(Oe,[["__scopeId","data-v-fdb69c40"]]);function Ue(r){let n,s=r[0],c=1;for(;c<r.length;){const o=r[c],d=r[c+1];if(c+=2,(o==="optionalAccess"||o==="optionalCall")&&s==null)return;o==="access"||o==="optionalAccess"?(n=s,s=d(s)):(o==="call"||o==="optionalCall")&&(s=d((...l)=>s.call(n,...l)),n=void 0)}return s}const qe={class:"mt-[-4.25rem] flex w-full flex-col gap-20"},Je={key:0,"aria-label":"continue watching",class:"flex flex-col gap-8"},Qe={class:"te flex flex-row items-center gap-4 text-3xl font-semibold"},Xe={class:"text-fonts-50"},Ze={class:"text-fonts-50 relative flex"},Ke=t("span",{class:"bg-bg-1 absolute top-1/3 h-4 w-4 rounded-full blur-lg ltr:left-1/2 rtl:right-1/2"},null,-1),Re={key:1,"aria-label":"suggested titles",class:"flex flex-col gap-8"},Ye={class:"te flex flex-row items-center gap-4 text-3xl font-semibold"},et={class:"text-fonts-50"},tt={class:"text-fonts-50 relative flex"},st=t("span",{class:"bg-bg-1 absolute top-1/3 h-4 w-4 rounded-full blur-lg ltr:left-1/2 rtl:right-1/2"},null,-1),lt={key:2,"aria-label":"notifications",class:"flex flex-col gap-8"},ot={class:"te flex flex-row items-center gap-4 text-3xl font-semibold"},nt={class:"text-fonts-50"},at={class:"text-fonts-50 relative flex"},it=t("span",{class:"bg-bg-1 absolute top-1/3 h-4 w-4 rounded-full blur-lg ltr:left-1/2 rtl:right-1/2"},null,-1),ht=D({__name:"dashboard",setup(r){const n=N(),s=oe(),{t:c}=M();return ne({title:()=>`${c("seo.30nama")} | ${c("seo.dashboard")}`}),(o,d)=>{const l=F,k=je,v=re,a=Te;return i(),u("div",qe,[e(n).continueWatching.length?(i(),u("section",Je,[t("header",Qe,[t("h3",Xe,b(o.$t("continueWatching")),1),t("span",Ze,[p(l,{name:"ph:infinity-bold"}),Ke])]),p(k,{data:e(n).continueWatching},null,8,["data"])])):y("",!0),e(s).suggested?(i(),u("section",Re,[t("header",Ye,[t("h3",et,b(o.$t("ourSuggestions")),1),t("span",tt,[p(l,{name:"ph:pepper-fill"}),st])]),p(v,{posts:e(s).suggested.posts},null,8,["posts"])])):y("",!0),Ue([e,"call",_=>_(n),"access",_=>_.notifications,"optionalAccess",_=>_.notifications,"access",_=>_.length])?(i(),u("section",lt,[t("header",ot,[t("h3",nt,b(o.$t("notifications")),1),t("span",at,[p(l,{name:"ph:megaphone-fill"}),it])]),e(n).notifications?(i(),W(a,{key:0,data:e(n).notifications.notifications},null,8,["data"])):y("",!0)])):y("",!0)])}}});export{ht as default};
