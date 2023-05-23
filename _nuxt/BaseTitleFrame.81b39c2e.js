import{_ as k}from"./BaseScore.vue.2e9957e2.js";import{d as w,r as x,Y as $,o as n,e as i,h as g,w as A,f as o,P as h,E as _,t as m,x as b,y as r,F as z,G as C,I as B,$ as I,a0 as N,m as S}from"./entry.a38ac9df.js";function p(c){let u,d=c[0],e=1;for(;e<c.length;){const t=c[e],a=c[e+1];if(e+=2,(t==="optionalAccess"||t==="optionalCall")&&d==null)return;t==="access"||t==="optionalAccess"?(u=d,d=a(d)):(t==="call"||t==="optionalCall")&&(d=a((...f)=>d.call(u,...f)),u=void 0)}return d}const v=c=>(I("data-v-2fe79582"),c=c(),N(),c),F={key:0,class:"flex w-full flex-col gap-2"},L=v(()=>o("div",{key:"sekleton-2",class:"flex w-full flex-col gap-2"},[o("div",{class:"flex",dir:"ltr"},[o("span",{class:"__skeleton-2 w-[100px] self-end rounded-full text-[1.4em] leading-5"}," ")]),o("div",{class:"flex flex-row flex-nowrap justify-between"},[o("span",{class:"__skeleton-2 w-[4.5em] rounded-md text-[1em]"}),o("span",{class:"__skeleton-2 rounded-md px-3 py-1 text-[1em] font-semibold"},[o("div",{class:"invisible opacity-0"},"0000")])])],-1)),T={key:1,class:"flex w-full cursor-pointer flex-col gap-2"},V=["onMousedown"],M={class:"local-numbers number absolute -left-4 bottom-16 z-30 text-[14em]"},j={class:"absolute left-2 top-2 flex flex-col gap-2"},E={class:"absolute bottom-2 right-2 flex flex-col gap-1"},G={key:0,class:"text-secondary-500 bg-bg-13/50 rounded-full p-2 text-[1.6em] backdrop-blur-sm"},P=v(()=>o("span",{class:"bg-primary-500 absolute inset-0 flex h-full w-full scale-50 rounded-full opacity-0 blur-[12px] transition-opacity group-hover/icon:opacity-100"},null,-1)),q={class:"absolute bottom-[0.8rem] left-0 flex flex-col gap-2"},D={key:0,class:"bg-primary-500 rounded-r-lg p-1 px-2 text-xs"},H={key:1,class:"bg-primary-500 rounded-r-lg p-1 px-2 text-xs"},Y={key:"footer",class:"flex w-full flex-col gap-2 transition-all duration-500 will-change-transform group-hover:-translate-y-1"},J={dir:"ltr",class:"line-clamp-1 text-left text-[1.4em] leading-5"},K={class:"flex w-full",dir:"ltr"},O={class:"flex min-h-[1.5rem] items-center"},Q={key:0,class:"bg-bg-10/80 text-fonts-200 flex rounded-md px-3 py-1 text-[1em] font-semibold"},R={key:0,class:"flex flex-1 items-center justify-end gap-1"},U={dir:"auto"},W={key:0,class:"text-primary-500 text-[1.4em] font-semibold"},X=w({__name:"BaseTitleFrame",props:{size:{},isLoading:{type:Boolean},data:{},number:{}},setup(c){const u=x();async function d(){await new Promise(a=>setTimeout(a,250));const e=p([u,"access",a=>a.value,"optionalAccess",a=>a.$el,"access",a=>a.children,"access",a=>a[0]]),t=p([u,"access",a=>a.value,"optionalAccess",a=>a.$el,"access",a=>a.children,"access",a=>a[1]]);e&&e.tagName==="CANVAS"&&(e.style.opacity=0),t&&t.tagName==="IMG"&&(t.style.opacity=1)}return(e,t)=>{const a=$("vue3-blurhash"),f=k,y=B;return n(),i("section",{class:h(["group relative mx-4 mt-8 flex flex-col flex-nowrap items-center gap-2",[`w-poster-${e.size}`,{"text-xs":e.size==="medium"}]])},[g(C,{name:"titleframe",mode:"out-in",appear:""},{default:A(()=>[e.isLoading?(n(),i("section",F,[o("span",{key:"skeleton-1",class:h([[`w-poster-${e.size}`,`h-poster-${e.size}`],"__skeleton rounded-xl"])},null,2),L])):e.data?(n(),i("section",T,[o("div",{key:"poster",class:h([[`w-poster-${e.size}`,`h-poster-${e.size}`],"relative rounded-xl transition-transform duration-300 will-change-transform group-hover:-translate-y-2"]),onClick:t[1]||(t[1]=s=>e.$router.push({path:"/single/"+p([e,"access",l=>l.data,"optionalAccess",l=>l.id])}))},[o("span",{class:h(["absolute inset-0 overflow-hidden rounded-xl",[`w-poster-${e.size}`,`h-poster-${e.size}`]]),draggable:"false",onMousedown:_(s=>"",["prevent"])},[g(a,{ref_key:"img",ref:u,src:e.data.image.poster.webp[e.size],punch:1,hash:e.data.image.poster.preview,height:"100%",class:"blur-img",width:"100%","resolution-x":10,"resolution-y":10,onImageLoaded:d},null,8,["src","hash"])],42,V),o("h4",M,m(e.number),1),o("ul",j,[p([e,"access",s=>s.data,"access",s=>s.score,"optionalAccess",s=>s.myanimelist])?(n(),b(f,{key:0,type:"myanimelist",data:e.data.score.myanimelist,"no-votes":"",background:"bg-bg-13/50",class:"rounded-2xl text-[0.9em] backdrop-blur-sm"},null,8,["data"])):p([e,"access",s=>s.data,"access",s=>s.score,"optionalAccess",s=>s.imdb])&&p([e,"access",s=>s.data,"access",s=>s.score,"optionalAccess",s=>s.imdb,"access",s=>s.votes])?(n(),b(f,{key:1,type:"imdb",data:e.data.score.imdb,"no-votes":"",background:"bg-bg-13/50",class:"rounded-2xl text-[0.9em] backdrop-blur-sm"},null,8,["data"])):r("",!0),p([e,"access",s=>s.data,"access",s=>s.score,"optionalAccess",s=>s["30nama"]])?(n(),b(f,{key:2,type:"30nama",data:e.data.score["30nama"],"no-votes":"",background:"bg-bg-13/50",class:"rounded-2xl text-[0.9em] backdrop-blur-sm"},null,8,["data"])):r("",!0)]),o("div",E,[e.data.options.exclusive_subtitle?(n(),i("span",G,[g(y,{name:"ph:closed-captioning-fill"})])):r("",!0),e.data.options.stream?(n(),i("span",{key:1,class:"group/icon text-primary-500 bg-bg-13/50 hover:bg-bg-13/70 relative rounded-full p-2 text-[1.6em] backdrop-blur-sm transition-all",onClick:t[0]||(t[0]=_(s=>e.$router.push({path:`/play/${p([e,"access",l=>l.data,"optionalAccess",l=>l.id])}`,query:{free:p([e,"access",l=>l.data,"optionalAccess",l=>l.options,"access",l=>l.free_stream])?"true":void 0}}),["stop","prevent"]))},[P,g(y,{name:"ph:play-fill",class:"relative"})])):r("",!0)]),o("div",q,[e.data.options.free_stream?(n(),i("span",D,m(e.$t("watchFree")),1)):r("",!0),e.data.options.free_download?(n(),i("span",H,m(e.$t("downloadFree")),1)):r("",!0)])],2),o("footer",Y,[o("h6",J,m(e.data.title.english.split(" ").slice(0,-1).join(" ")),1),o("div",K,[o("div",O,[e.data.info.year?(n(),i("span",Q,m(e.data.info.year),1)):r("",!0)]),e.data.options.is_series?(n(),i("span",R,[o("div",U,[z(m(e.$t("season"))+" ",1),e.data.info.seasons?(n(),i("span",W,m(e.data.info.seasons),1)):r("",!0)])])):r("",!0)])])])):r("",!0)]),_:1})],2)}}});const se=S(X,[["__scopeId","data-v-2fe79582"]]);export{se as _};
