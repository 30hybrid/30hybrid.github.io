import{d as b,a1 as v,n as h,c as k,o as y,g as s,h as _,j as e,i as r,w as d,F as $,r as x,k as i,y as l,I as B,a5 as S,b as T,e as C,q as p,B as I,D as H}from"./entry.7726ca09.js";import{_ as V}from"./HeroSlider.49194e16.js";import{_ as D}from"./TitleSlider.113fb1c0.js";import{_ as E}from"./ContentPop-v2.vue.fa64d954.js";import{_ as P}from"./TitleFrame.5c33cbb4.js";import{S as F,a as L}from"./splide-extension-grid.esm.d4227716.js";import"./BaseScore.vue.3876596f.js";import"./BaseChip.vue.f269577b.js";const N={key:0,class:"w-full"},R=b({__name:"Top10TitleSlider",props:{isLoading:{type:Boolean},data:{}},setup(w){const t=v("globalDirection"),u=h(!1),o=h(),f=k(()=>({arrows:!0,direction:t.value,autoWidth:!0,focus:0,omitEnd:!0,classes:{arrows:"splide__arrows top10-arrows",arrow:"splide__arrow top10-arrow",prev:"splide__arrow--prev top10-prev",next:"splide__arrow--next top10-next"},gap:"1em",pagination:!1}));return y(()=>{const c=document.getElementById("main-scroller");new IntersectionObserver(a=>u.value=a[0].isIntersecting,{root:c,rootMargin:"100% 0px 0px 0px"}).observe(o.value)}),(c,g)=>{const a=P;return s(),_("div",{ref_key:"sliderTop10",ref:o,class:"slider h-[23.875em] w-full p-4 px-10"},[e(u)?(s(),_("div",N,[r(e(L),{class:"slider-wrapper",options:e(f)},{default:d(()=>[(s(!0),_($,null,x(c.data,(n,m)=>(s(),i(e(F),{key:n.id},{default:d(()=>[r(a,{data:n,"is-loading":c.isLoading,number:m+1,size:"medium",class:"text-xs"},null,8,["data","is-loading","number"])]),_:2},1024))),128))]),_:1},8,["options"])])):l("",!0)],512)}}});const M=B(R,[["__scopeId","data-v-78f5f1e6"]]),j={class:"mt-[-4.8rem] flex w-full flex-col gap-20"},q={"aria-label":"continue watching ",class:"flex flex-col gap-8"},z={class:"te flex flex-row items-center gap-4 text-3xl font-semibold"},O={class:"text-fonts-50"},W={class:"relative flex text-fonts-50"},A=p("span",{class:"absolute top-1/3 h-4 w-4 rounded-full bg-bg-1 blur-lg ltr:left-1/2 rtl:right-1/2"},null,-1),ee=b({__name:"home",setup(w){const t=S(),{t:u}=T();return C({title:()=>u("seo.30nama")}),(o,f)=>{const c=H,g=V,a=D,n=E,m=M;return s(),_("div",j,[p("section",q,[p("header",z,[p("h3",O,I(o.$t("welcome")),1),p("span",W,[r(c,{name:"ph:hand-waving-fill"}),A])]),e(t).heroHeader?(s(),i(g,{key:0,posts:e(t).heroHeader.posts},null,8,["posts"])):l("",!0)]),e(t).suggested?(s(),i(n,{key:0,to:{title:o.$t("archives.all"),href:"/category/suggested"},icon:"ph:star-fill",title:o.$t("archives.suggested"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).suggested.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0),e(t).top10?(s(),i(n,{key:1,icon:"ph:fire-fill",title:o.$t("archives.top10"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(m,{data:e(t).top10.posts},null,8,["data"])]),_:1},8,["title"])):l("",!0),e(t).newReleases?(s(),i(n,{key:2,to:{title:o.$t("archives.all"),href:"/category/new-releases"},icon:"ph:broadcast-fill",title:o.$t("archives.newReleases"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).newReleases.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0),e(t).movies?(s(),i(n,{key:3,to:{title:o.$t("archives.all"),href:"/category/movies"},icon:"ph:film-strip",title:o.$t("archives.movies"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).movies.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0),e(t).series?(s(),i(n,{key:4,to:{title:o.$t("archives.all"),href:"/category/series"},icon:"ph:film-slate",title:o.$t("archives.series"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).series.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0),e(t).anime?(s(),i(n,{key:5,to:{title:o.$t("archives.all"),href:"/category/anime"},icon:"ph:flower-lotus",title:o.$t("archives.anime"),"wide-background":"","shadow-background":"shadow-bg-11",foreground:"bg-bg-11"},{content:d(()=>[r(a,{data:e(t).anime.posts},null,8,["data"])]),_:1},8,["to","title"])):l("",!0)])}}});export{ee as default};
