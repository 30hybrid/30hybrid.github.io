import{_ as R}from"./TitleList.vue.9c714871.js";import{d as k,b as x,e as S,ap as $,a8 as B,a as N,R as P,c as C,r as l,aF as H,V as L,f as j,g as i,h as f,j as a,k as y,t as _,l as E,aa as I,K as A}from"./entry.afe8f604.js";import"./TitleFrame.3a320619.js";import"./TitleFrameUserlist.vue.ec6836d8.js";import"./ContentPop-v2.vue.2751399d.js";const D={class:"flex min-h-full w-full flex-col"},F={key:0,class:"flex h-full w-full items-center justify-center"},K={class:"text-fonts-700 text-5xl font-bold"},T={key:1,class:"flex h-full w-full items-center justify-center"},V={class:"text-fonts-700 text-5xl font-bold"},J=k({__name:"precise",setup(M){const{t:h}=x();S({title:()=>`${h("seo.30nama")} | ${h("seo.search")}`});const b=$(),q=B(),t=N(),{infiniteScrolling:v}=P(),d=C(()=>{var e;return!!t.query.q&&((e=t.query.q)==null?void 0:e.trim().length)>=3}),u=l(d.value),o=l(Number(t.query.page||"1")),r=l({}),g=l(),m=l("");async function c(e,n){if(!e.trim()||e.trim().length<3)return;e!==m.value&&(r.value={},m.value=e),u.value=!0;const s=await I(`SEARCH::${e}::${n}`,()=>A.API.actions.search(e,!1,n));if(!(t.query.q!==e||t.query.page&&Number(t.query.page)!==n)&&(u.value=!1,!!s)){if(s.error)return q(s.msg,"ERROR");r.value[n]=s.result.posts,g.value={pages:s.result.pages,page:s.result.page,total:s.result.total}}}function w(e){t.query.q&&c(t.query.q,e)}return H(()=>t.query.q,e=>{e&&c(e,o.value)},{debounce:300,immediate:!0}),L(()=>t.query.page,e=>{v.value||(o.value=e?Number(e):1,t.query.q&&c(t.query.q,o.value))}),j(()=>{const{replaceLastRoute:e}=b;e(t.fullPath)}),(e,n)=>{var p;const s=R;return i(),f("div",D,[a(d)?!((p=a(r)[a(o)])!=null&&p.length)&&!a(u)?(i(),f("span",T,[y("h4",V,_(a(r)[a(o)]?e.$t("noResult"):e.$t("searchNow")),1)])):(i(),E(s,{key:2,id:"title-list-result",title:e.$t("searchResults"),aligned:"",icon:"ph:magnifying-glass-fill",style:{background:"bg-bg-12",foreground:"bg-bg-11",shadowBack:"shadow-bg-12",shadowFore:"shadow-bg-11"},"is-loading":a(u),data:a(r),"result-info":a(g),onPageChanged:w},null,8,["title","is-loading","data","result-info"])):(i(),f("span",F,[y("h4",K,_(e.$t("searchNow")),1)]))])}}});export{J as default};
