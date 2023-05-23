import{d as B,r as j,Y as G,o as l,e as s,f as c,h as g,t as d,I as C,ah as X,x as m,w as f,L as v,M as b,F as h,y as _,g as o,aU as H,m as M,b as J,S as K,p as O,B as W,l as N,c as Y,q as Q,K as Z,H as ee,D as te,J as le}from"./entry.a38ac9df.js";import{_ as R}from"./nuxt-link.c1449334.js";import{_ as ae}from"./BaseScore.vue.2e9957e2.js";import{_ as se}from"./BaseChip.vue.24bd66f1.js";import{u as P}from"./useBackground.49e628ed.js";function z(y){let e,p=y[0],r=1;for(;r<y.length;){const n=y[r],t=y[r+1];if(r+=2,(n==="optionalAccess"||n==="optionalCall")&&p==null)return;n==="access"||n==="optionalAccess"?(e=p,p=t(p)):(n==="call"||n==="optionalCall")&&(p=t((...w)=>p.call(e,...w)),e=void 0)}return p}const oe={"aria-label":"character-X",class:"group"},ne={class:"relative flex flex-col items-center justify-center gap-4 rounded-3xl p-4"},ie={key:0,class:"bg-bg-10 __skeleton relative aspect-[2/3] w-[5em] rounded-2xl transition-transform duration-500 will-change-transform"},re={key:1,class:"bg-bg-10 relative aspect-[2/3] w-[5em] overflow-hidden rounded-2xl transition-transform duration-500 will-change-transform group-hover:scale-105"},ce={key:2,class:"bg-bg-10 relative flex aspect-[2/3] w-[5em] items-center justify-center overflow-hidden rounded-2xl transition-transform duration-500 will-change-transform group-hover:scale-105"},de={key:3,class:"relative max-w-[9em] items-center rounded-2xl p-2 transition-transform duration-500 will-change-transform",dir:"ltr"},ue=c("p",{class:"line-clamp-1 w-full text-center text-sm blur-sm"},"this is the name and the others",-1),fe=c("p",{class:"text-fonts-200 line-clamp-1 w-full text-center text-sm blur-sm"},"this is the role",-1),pe=[ue,fe],_e={key:4,class:"relative max-w-[9em] items-center rounded-2xl p-2 transition-transform duration-500 will-change-transform group-hover:scale-105",dir:"ltr"},me={class:"text line-clamp-1 w-full text-center text-sm"},ge={class:"text-fonts-200 line-clamp-1 w-full text-center text-sm"},he=B({__name:"BaseCharacterFrame",props:{data:{},isLoading:{type:Boolean}},setup(y){const e=j();async function p(){await new Promise(t=>setTimeout(t,250));const r=z([e,"access",t=>t.value,"optionalAccess",t=>t.$el,"access",t=>t.children,"access",t=>t[0]]),n=z([e,"access",t=>t.value,"optionalAccess",t=>t.$el,"access",t=>t.children,"access",t=>t[1]]);r&&r.tagName==="CANVAS"&&(r.style.opacity=0),n&&n.tagName==="IMG"&&(n.style.opacity=1)}return(r,n)=>{const t=G("vue3-blurhash"),w=C;return l(),s("article",oe,[c("figure",ne,[r.isLoading?(l(),s("div",ie)):r.data.image?(l(),s("div",re,[g(t,{ref_key:"img",ref:e,src:r.data.image.poster.webp.medium,punch:1,hash:r.data.image.poster.preview,height:"100%",class:"blur-img",width:"100%","resolution-x":10,"resolution-y":10,onImageLoaded:p},null,8,["src","hash"])])):(l(),s("div",ce,[g(w,{name:"ph:user",class:"text-fonts-300 text-5xl"})])),r.isLoading?(l(),s("figcaption",de,pe)):(l(),s("figcaption",_e,[c("p",me,d(r.data.name),1),c("p",ge,d(r.data.as),1)]))])])}}}),ye={class:"relative flex flex-col items-start rounded-3xl"},we={key:0,class:"bg-bg-11 __skeleton-2 group relative flex h-24 w-44 flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl rounded-tl-none"},ve={key:1,class:"bg-bg-11 group relative flex h-24 w-44 flex-col items-center gap-1 overflow-hidden rounded-2xl rounded-tl-none"},be=c("span",{class:"bg-primary-500 group-hover:bg-primary-500 absolute left-2 top-2 h-[0.38rem] w-[0.38rem] rounded-full"},null,-1),ke=c("span",{class:"bg-primary-500 absolute left-2 top-2 h-6 w-6 scale-0 rounded-full blur-2xl transition-transform group-hover:scale-100"},null,-1),$e={class:"text-fonts-200 relative mt-4 whitespace-nowrap text-base capitalize transition-transform duration-500 will-change-transform"},xe={class:"relative flex flex-row flex-wrap justify-center gap-1 overflow-auto px-1 py-1 text-sm"},V=B({__name:"SinglePageDetailsBar",props:{title:{},icon:{},isLoading:{type:Boolean}},setup(y){return(e,p)=>{const r=C;return l(),s("section",ye,[e.isLoading?(l(),s("div",we)):(l(),s("div",ve,[g(r,{name:e.icon,class:"text-bg-9/30 group-hover:text-bg-9/50 absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl transition-all will-change-transform group-hover:scale-110"},null,8,["name"]),be,ke,c("h6",$e,d(e.title),1),c("div",xe,[X(e.$slots,"default")])]))])}}});function F(y){let e,p=y[0],r=1;for(;r<y.length;){const n=y[r],t=y[r+1];if(r+=2,(n==="optionalAccess"||n==="optionalCall")&&p==null)return;n==="access"||n==="optionalAccess"?(e=p,p=t(p)):(n==="call"||n==="optionalCall")&&(p=t((...w)=>p.call(e,...w)),e=void 0)}return p}const De={class:"relative flex flex-row flex-wrap justify-center gap-4"},Ae={class:"local-numbers"},Le={dir:"rtl",class:"local-numbers"},Be={key:0},je={class:"local-numbers"},Ce={class:"local-numbers"},k="#",Se=B({__name:"SinglePageDetails",props:{data:{},isLoading:{type:Boolean}},setup(y){return(e,p)=>{const r=R,n=V;return l(),s("section",De,[e.data.country?(l(),m(n,{key:0,title:e.$t("singleDetails.countries"),icon:"ph:globe-fill"},{default:f(()=>[(l(!0),s(v,null,b(e.data.country,t=>(l(),m(r,{key:t.code,class:"links",to:`${k}?country=${t.code}`},{default:f(()=>[h(d(t.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):_("",!0),e.data.language.primary?(l(),m(n,{key:1,title:e.$t("singleDetails.primaryLanguage"),icon:"ph:translate-fill"},{default:f(()=>[g(r,{class:"links",to:`${k}?language=${e.data.language.primary.code}`},{default:f(()=>[h(d(e.data.language.primary.name),1)]),_:1},8,["to"])]),_:1},8,["title"])):_("",!0),e.data.language.others?(l(),m(n,{key:2,title:e.$t("singleDetails.otherLanguages"),icon:"ph:flag-fill"},{default:f(()=>[(l(!0),s(v,null,b(e.data.language.others,t=>(l(),m(r,{key:t.code,class:"links",to:`${k}?language=${t.code}`},{default:f(()=>[h(d(t.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):_("",!0),e.data.info.time.default?(l(),m(n,{key:3,title:e.$t("singleDetails.time"),icon:"ph:clock-fill"},{default:f(()=>[c("p",Ae,[h(d(e.data.info.time.default)+" ",1),c("span",null,d(e.$t("singleDetails.minutes")),1)])]),_:1},8,["title"])):_("",!0),e.data.air.air_status?(l(),m(n,{key:4,title:e.$t("singleDetails.airstatus"),icon:"ph:broadcast-fill"},{default:f(()=>[c("p",null,d(e.data.air.air_status)+" "+d(e.data.air.air_data),1)]),_:1},8,["title"])):_("",!0),e.data.air.next_episode_caption||e.data.air.next_episode_date?(l(),m(n,{key:5,title:e.data.air.next_episode_caption,icon:"ph:megaphone-fill"},{default:f(()=>[c("p",Le,d(("useLocalizedDate"in e?e.useLocalizedDate:o(H))(e.data.air.next_episode_date)),1)]),_:1},8,["title"])):_("",!0),e.data.info.age?(l(),m(n,{key:6,dir:"ltr",title:e.$t("singleDetails.age"),icon:"ph:person-fill"},{default:f(()=>[g(r,{class:"links",to:`${k}?age=${e.data.info.age}`},{default:f(()=>[h(d(e.data.info.age),1)]),_:1},8,["to"])]),_:1},8,["title"])):_("",!0),e.data.info.year||e.data.info.year_end?(l(),m(n,{key:7,dir:"ltr",title:e.$t("singleDetails.year"),icon:"ph:calendar-blank-fill"},{default:f(()=>[g(r,{class:"links",to:`${k}?min_year=${e.data.info.year}&max_year=${e.data.info.year}`},{default:f(()=>[h(d(e.data.info.year),1)]),_:1},8,["to"]),e.data.info.year_end?(l(),s("span",Be,"-")):_("",!0),g(r,{class:"links",to:`${k}?min_year=${e.data.info.year_end}&max_year=${e.data.info.year_end}`},{default:f(()=>[h(d(e.data.info.year_end),1)]),_:1},8,["to"])]),_:1},8,["title"])):_("",!0),e.data.network?(l(),m(n,{key:8,dir:"ltr",title:e.$t("singleDetails.network"),icon:"ph:television-simple-fill"},{default:f(()=>[(l(!0),s(v,null,b(e.data.network,t=>(l(),m(r,{key:t,class:"links",to:`${k}?channel=${t}`},{default:f(()=>[h(d(t),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):_("",!0),e.data.crew.director?(l(),m(n,{key:9,dir:"ltr",title:e.$t("singleDetails.director"),icon:"ph:video-camera-fill"},{default:f(()=>[(l(!0),s(v,null,b(e.data.crew.director,t=>(l(),m(r,{key:t.imdb,class:"links",to:`${k}?director=${t.imdb}`},{default:f(()=>[h(d(t.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):_("",!0),e.data.crew.creator?(l(),m(n,{key:10,dir:"ltr",title:e.$t("singleDetails.creator"),icon:"ph:video-camera-fill"},{default:f(()=>[(l(!0),s(v,null,b(e.data.crew.creator,t=>(l(),m(r,{key:t.imdb,class:"links",to:`${k}?director=${t.imdb}`},{default:f(()=>[h(d(t.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):_("",!0),e.data.crew.writer?(l(),m(n,{key:11,dir:"ltr",title:e.$t("singleDetails.writer"),icon:"ph:pencil-line-fill"},{default:f(()=>[(l(!0),s(v,null,b(e.data.crew.writer,t=>(l(),m(r,{key:t.imdb,class:"links",to:`${k}?writer=${t.imdb}`},{default:f(()=>[h(d(t.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["title"])):_("",!0),e.data.info.budget?(l(),m(n,{key:12,title:e.$t("singleDetails.budget"),icon:"ph:currency-dollar-simple-fill"},{default:f(()=>[c("p",null,d(e.data.info.budget),1)]),_:1},8,["title"])):_("",!0),F([e,"access",t=>t.data,"access",t=>t.score,"optionalAccess",t=>t.imdb,"optionalAccess",t=>t.top_250])?(l(),m(n,{key:13,title:e.$t("singleDetails.IMDb250"),icon:"ph:list-numbers-fill"},{default:f(()=>[c("p",null,d(F([e,"access",t=>t.data,"access",t=>t.score,"access",t=>t.imdb,"optionalAccess",t=>t.top_250])),1)]),_:1},8,["title"])):_("",!0),e.data.list.watchlist?(l(),m(n,{key:14,dir:"ltr",title:e.$t("singleDetails.totalWatchList"),icon:"ph:eye-fill"},{default:f(()=>[c("p",je,d(e.data.list.watchlist),1)]),_:1},8,["title"])):_("",!0),e.data.list.favorite?(l(),m(n,{key:15,title:e.$t("singleDetails.totalFavoriteList"),icon:"ph:heart-fill"},{default:f(()=>[c("p",Ce,d(e.data.list.favorite),1)]),_:1},8,["title"])):_("",!0)])}}});const Ie=M(Se,[["__scopeId","data-v-5111e37b"]]);function $(y){let e,p=y[0],r=1;for(;r<y.length;){const n=y[r],t=y[r+1];if(r+=2,(n==="optionalAccess"||n==="optionalCall")&&p==null)return;n==="access"||n==="optionalAccess"?(e=p,p=t(p)):(n==="call"||n==="optionalCall")&&(p=t((...w)=>p.call(e,...w)),e=void 0)}return p}const Ne={"aria-label":"single page X",class:"flex justify-center"},Pe={class:"top flex aspect-video w-full max-w-[80em] flex-col justify-center gap-24 px-12"},ze={key:0,class:"bg-bg-11 relative flex aspect-video w-full max-w-[80em] rounded-2xl"},Fe={class:"flex h-full w-[32em] rounded-xl p-8"},He={class:"__skeleton flex h-full w-[32em] flex-row items-end justify-center gap-4 rounded-xl p-8"},Me={key:1,class:"cover relative h-full"},Re={key:0,class:"cover-child absolute h-full w-full"},Ve=["src"],Ee=["src"],qe={key:1,class:"absolute h-full w-full"},Te={class:"absolute h-full w-full overflow-hidden rounded-2xl"},Ue=["src"],Ge={class:"flex h-full w-full items-center justify-center"},Xe=["src"],Je={"aria-label":"article",class:"h-full w-[32em] p-8"},Ke={class:"bg-bg-13/50 flex h-full w-full flex-col items-center justify-center rounded-xl backdrop-blur-[16px]"},Oe={class:"flex h-full flex-col items-center justify-center gap-6 p-8"},We={class:"text-fonts-50 line-clamp-3 shrink-0 break-all text-xl font-semibold",dir:"ltr"},Ye={key:0,class:"relative line-clamp-2 flex max-w-[90%] shrink-0 flex-col break-all text-2xl font-bold"},Qe={class:"text-fonts-100 flex flex-row flex-wrap gap-5"},Ze={key:0},et={key:1},tt={key:2,class:"local-numbers"},lt={key:3},at={class:"flex flex-row flex-wrap gap-2 text-xs"},st={key:1,class:"flex flex-row flex-wrap gap-2"},ot={class:"text-fonts-100 line-clamp-[5] flex w-full shrink-0 text-center text-sm"},nt={key:2,class:"flex h-full items-end justify-end gap-4"},it={key:3,class:"flex h-full items-end justify-end gap-4"},rt={class:"flex text-xl"},ct={key:2,class:"local-numbers flex flex-col gap-2"},dt={key:3,class:"flex h-[9em] w-full shrink-0 flex-col gap-2 overflow-y-auto px-2"},ut={key:0,class:"flex h-full w-full flex-col gap-2"},ft={class:"text-fonts-300 inline-block ltr:float-right rtl:float-left"},pt={class:"flex flex-row flex-wrap gap-2"},_t={class:"text-fonts-200 font-bold"},mt={class:"flex rounded-2xl p-4"},gt={key:0,class:"flex w-full flex-row flex-wrap justify-around gap-4"},ht={key:1,class:"flex w-full flex-row flex-wrap justify-around gap-4"},yt={class:"flex flex-wrap rounded-2xl p-4"},wt={key:0,class:"flex flex-wrap justify-center gap-8"},vt={key:1,class:"flex flex-wrap items-center justify-center gap-8"},bt=B({__name:"info",setup(y){const{t:e}=J(),p=K(),r=O(),n=W(),t=N(()=>p.params.id);typeof t.value!="string"&&r.replace("/");const w=j(),x=j(!0),u=N(()=>$([w,"access",i=>i.value,"optionalAccess",i=>i.result]));return Y({title:()=>`${e("seo.30nama")} | ${$([w,"access",i=>i.value,"optionalAccess",i=>i.result,"access",i=>i.title,"access",i=>i.english])?$([w,"access",i=>i.value,"optionalAccess",i=>i.result,"access",i=>i.title,"access",i=>i.english]):""}`}),Q(async()=>{typeof t.value=="string"&&(w.value=await Z("SINGLE::"+t.value,()=>ee.API.actions.single(Number(t.value))),x.value=!1,$([w,"access",i=>i.value,"optionalAccess",i=>i.error])&&n(w.value.msg,"ERROR"),$([w,"access",i=>i.value,"optionalAccess",i=>i.result,"optionalAccess",i=>i.image,"access",i=>i.cover,"access",i=>i.webp])&&P(w.value.result.image.cover.webp))}),te(()=>P("")),(i,kt)=>{const A=C,L=le,D=R,E=ae,q=se,S=he,T=V,U=Ie;return l(),s("section",Ne,[c("div",Pe,[o(x)?(l(),s("div",ze,[c("span",Fe,[c("div",He,[g(L,{class:"btn-primary-outline skeleton"},{default:f(()=>[g(A,{name:"ph:download-simple-fill"}),h(" "+d(i.$t("download")),1)]),_:1}),g(L,{class:"btn-primary skeleton"},{default:f(()=>[g(A,{name:"ph:play-fill"}),h(" "+d(i.$t("watchNow")),1)]),_:1})])])])):o(u)?(l(),s("div",Me,[o(u).image.cover?(l(),s("div",Re,[c("img",{draggable:"false",src:o(u).image.cover.webp,class:"absolute inset-0 h-full object-cover blur-md",alt:""},null,8,Ve),c("img",{draggable:"false",src:o(u).image.cover.webp,class:"absolute inset-0 h-full rounded-2xl object-cover",alt:""},null,8,Ee)])):(l(),s("div",qe,[c("div",Te,[c("img",{draggable:"false",src:$([o,"call",a=>a(u),"optionalAccess",a=>a.image,"access",a=>a.poster,"access",a=>a.webp,"access",a=>a.big]),class:"absolute h-full w-full rounded-2xl blur-xl invert",alt:""},null,8,Ue)]),c("div",Ge,[c("img",{draggable:"false",src:$([o,"call",a=>a(u),"optionalAccess",a=>a.image,"access",a=>a.poster,"access",a=>a.webp,"access",a=>a.large]),class:"absolute rounded-2xl ltr:right-72 rtl:left-72",alt:""},null,8,Xe)])])),c("section",Je,[c("div",Ke,[c("div",Oe,[c("p",We,d(o(u).title.english),1),o(u).title.local?(l(),s("p",Ye,d(o(u).title.local),1)):_("",!0),c("ul",Qe,[o(u).crew.director?(l(),s("li",Ze,[g(D,{class:"hover:text-primary-500 transition-colors",to:`#?director=${o(u).crew.director[0].imdb}`},{default:f(()=>[h(d(o(u).crew.director[0].name),1)]),_:1},8,["to"])])):_("",!0),o(u).crew.creator?(l(),s("li",et,[g(D,{class:"hover:text-primary-500 transition-colors",to:`#?director=${o(u).crew.creator[0].imdb}`},{default:f(()=>[h(d(o(u).crew.creator[0].name),1)]),_:1},8,["to"])])):_("",!0),o(u).info.time.default?(l(),s("li",tt,[h(d(o(u).info.time.default)+" ",1),c("span",null,d(i.$t("singleDetails.minutes")),1)])):_("",!0),o(u).info.age?(l(),s("li",lt,[g(D,{class:"hover:text-primary-500 transition-colors",to:`#?age=${o(u).info.age}`},{default:f(()=>[h(d(o(u).info.age),1)]),_:1},8,["to"])])):_("",!0)]),c("ul",at,[(l(!0),s(v,null,b(o(u).score,(a,I)=>(l(),m(E,{key:I,type:I,background:"bg-bg-9",data:a},null,8,["type","data"]))),128))]),o(u).genre?(l(),s("ul",st,[(l(!0),s(v,null,b(o(u).genre,a=>(l(),m(q,{key:a.slug,background:"bg-bg-9",to:`/genre/${a.slug}`},{default:f(()=>[h(d(a.name),1)]),_:2},1032,["to"]))),128))])):_("",!0),c("div",ot,d(o(u).plot.local),1),o(u).options.coming_soon?(l(),s("div",it,[c("h5",rt,d(i.$t("commingSoon")),1)])):(l(),s("div",nt,[g(D,{to:{path:`/single/${o(u).id}/download`,query:{free:o(u).options.free_download?"true":void 0}}},{default:f(()=>[g(L,{class:"btn-primary-outline"},{default:f(()=>[g(A,{name:"ph:download-simple-fill"}),h(" "+d(i.$t("download")),1)]),_:1})]),_:1},8,["to"]),g(D,{to:{path:`/play/${o(u).id}`,query:{free:o(u).options.free_stream?"true":void 0}}},{default:f(()=>[o(u).options.stream?(l(),m(L,{key:0,class:"btn-primary"},{default:f(()=>[g(A,{name:"ph:play-fill"}),h(" "+d(i.$t("watchNow")),1)]),_:1})):_("",!0)]),_:1},8,["to"])]))])])])])):_("",!0),$([o,"call",a=>a(u),"optionalAccess",a=>a.note,"access",a=>a.main])?(l(),s("div",ct,[(l(!0),s(v,null,b(o(u).note.main.split(`
`),a=>(l(),s("p",{key:a,class:"bg-bg-11 rounded-xl p-2 px-4 text-sm"},d(a),1))),128))])):_("",!0),o(u)?(l(),s("div",dt,[o(u).note.update?(l(),s("div",ut,[(l(!0),s(v,null,b(o(u).note.update,a=>(l(),s("div",{key:a.content,class:"bg-bg-11 local-numbers inline-block rounded-xl p-2 px-4 text-sm"},[c("p",ft,d(("useLocalizedDate"in i?i.useLocalizedDate:o(H))(a.date)),1),c("div",pt,[c("p",_t,d(a.title),1),c("p",null,d(a.content),1)])]))),128))])):_("",!0)])):_("",!0),c("div",mt,[o(x)?(l(),s("div",gt,[(l(),s(v,null,b(11,a=>g(S,{key:a,data:{},"is-loading":o(x)},null,8,["is-loading"])),64))])):(l(),s("div",ht,[(l(!0),s(v,null,b($([o,"call",a=>a(u),"optionalAccess",a=>a.cast]),a=>(l(),m(S,{key:a.id,data:a},null,8,["data"]))),128))]))]),c("div",yt,[o(x)?(l(),s("div",wt,[(l(),s(v,null,b(12,a=>g(T,{key:a,"is-loading":o(x),"data-":{},icon:"",title:""},null,8,["is-loading"])),64))])):o(u)?(l(),s("div",vt,[g(U,{data:o(u)},null,8,["data"])])):_("",!0)])])])}}});const Bt=M(bt,[["__scopeId","data-v-60f02e10"]]);export{Bt as default};
