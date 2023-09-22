import{_ as V}from"./PlayerMain.vue.d25a7082.js";import{d as k,g as w,h as M,q as n,i as e,m as L,n as h,o as $,f as j,p as x,W as D,af as B,v as G,A as a,w as t,j as N,O as Z,B as F,a1 as R,D as W,E,ag as z,R as O,ah as Y,a0 as U}from"./entry.9b18dbbe.js";import{C,i as S}from"./chartjs-plugin-gradient.esm.2d018598.js";const J={class:"flex flex-row items-center gap-8 w-full h-full"},q={class:"w-1/2 h-full"},H={class:"w-1/2 h-full"},P=k({__name:"TestJwplayer",setup(T){const i={image:{cover:"https://cdn-eu.our-api.com/cover/3043023_30NAMA.jpg?1637102466",cover_webp:"https://cdn-eu.our-api.com/cover/3043023_30NAMA.webp?1637102466"},info:{displayName:"آلیس در آنسوی آیینه",title:"",file_id:52247,post_id:43023,isSeries:!1,time:150},options:{intro_end:"00:00:37",intro_start:"00:00:00",token:"309bbb68e5bbf39f3ffcd843a1920507faaebbbf5c"},subtitle:{en:"https://eu.our-api.com/api/v2/action/subtitle/file/L3N0cmVhbS8zMGM0MmQ5NDBkODcwMWJlODQ4MmFhMjZkODk1YjJlOGFkMjFhZTZiYjIvbW92aWVzL2EvYWxpY2VfdGhyb3VnaF90aGVfbG9va2luZ19nbGFzc18yMDE2X2VuLnNydA==",fa:"https://eu.our-api.com/api/v2/action/subtitle/file/L3N0cmVhbS8zMDkxZGQ1OTRkMTk2ZWFlOTAyZDBmZTZhY2NlYzM4YTBlZjJhMTUzZmUvbW92aWVzL2EvYWxpY2VfdGhyb3VnaF90aGVfbG9va2luZ19nbGFzc18yMDE2X2ZhLnNydA=="},file:{m3u8:[{default:"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_auto.m3u8","6ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_6ch.m3u8","2ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_2ch.m3u8",label:"Auto"},{default:"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_1080p_auto.m3u8","6ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_1080p_6ch.m3u8","2ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_1080p_2ch.m3u8",label:"1080p"},{default:"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_720p_auto.m3u8","6ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_720p_6ch.m3u8","2ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_720p_2ch.m3u8",label:"720p"},{default:"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_480p_auto.m3u8","6ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_480p_6ch.m3u8","2ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_480p_2ch.m3u8",label:"480p"},{default:"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_360p_auto.m3u8","6ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_360p_6ch.m3u8","2ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_360p_2ch.m3u8",label:"360p"},{default:"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_240p_auto.m3u8","6ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_240p_6ch.m3u8","2ch":"https://eu-stream-storage-01.30cdn.net/stream/2/1/192541/52247/43023/95.211.178.238/1691176512/3056891f2253303376f30daf2a379afaa99d386e27/movies/a/alice_through_the_looking_glass_2016/playlist_240p_2ch.m3u8",label:"240p"}]}};return(u,d)=>{const l=V,f=V;return w(),M("div",J,[n("div",q,[e(l,{"player-data":i})]),n("div",H,[e(f,{"player-data":i,class:"w-full h-full"})])])}}}),Q={class:"relative"},X=n("div",{class:"absolute inset-0 h-full w-full overflow-hidden"},[n("div",{class:"absolute -left-[9.4rem] h-full w-[calc(100%_+_9.4rem)]"},[n("canvas",{id:"acquisitions",class:"!w-full"})])],-1),K=[X],ee=k({__name:"TestChart",setup(T,{expose:i}){const{disableAnimations:u}=L(),d=h(getComputedStyle(document.body).getPropertyValue("--primary-500"));let l;const f=_=>{const r=c[_.dataIndex];return`${x.core.bytesToSize(r)}/s`};$(()=>{C.register(S),l=new C(document.getElementById("acquisitions"),{type:"line",data:{labels:[],datasets:[{gradient:{backgroundColor:{axis:"y",colors:{0:`rgb(${d.value} / 0)`,100:`rgb(${d.value} / 0.3)`}}},pointBackgroundColor:`rgb(${d.value})`,fill:!0,label:"",data:[],tension:.4}]},plugins:[S],options:{backgroundColor:`rgb(${d.value})`,borderColor:`rgb(${d.value})`,maintainAspectRatio:!1,animation:{duration:u.value?0:1e3,easing:"linear"},scales:{x:{ticks:{display:!1},grid:{display:!1},border:{display:!1}},y:{ticks:{display:!1},grid:{display:!1},border:{display:!1}}},hover:{mode:"nearest",intersect:!0},plugins:{legend:{display:!1},tooltip:{enabled:!0,mode:"index",titleFont:{weight:"normal"},intersect:!1,displayColors:!1,backgroundColor:"rgba(0,0,0,0.9)",cornerRadius:8,callbacks:{label:f}}},responsive:!0}})}),j(()=>l.destroy());const g=()=>new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),c=[];function b(){var r;l&&l.data.datasets[0].data.length>=50&&((r=l.data.labels)==null||r.shift(),l.data.datasets[0].data.shift(),l.update()),c.length>=50&&c.shift()}function m(_){b(),l==null||l.data.labels.push(g()),c.push(_);const r=Math.max(...c),o=Math.min(...c);l.data.datasets[0].data.push(Math.floor(x.core.ILerp(o,r,_,100)));for(let p=0;p<(l==null?void 0:l.data.datasets[0].data.length);p++){const y=Math.floor(x.core.ILerp(o,r,c[p],100));l.data.datasets[0].data[p]=y}l==null||l.update()}return i({addRecord:m}),(_,r)=>(w(),M("div",Q,K))}}),ae={class:"flex w-full flex-shrink-0 flex-col items-center justify-center gap-4"},te={class:"flex w-full justify-center"},se={class:"text-2xl"},le=R('<section class="flex flex-row flex-nowrap items-center gap-2"><div class="bg-primary-500/50 w-poster-big h-poster-big text-3xl"> Big</div><div class="bg-primary-500/50 w-poster-large h-poster-large text-3xl"> Large</div><div class="bg-primary-500/50 w-poster-medium h-poster-medium text-3xl"> Medium</div><div class="bg-primary-500/50 w-poster-small h-poster-small text-3xl"> Small</div></section>',1),oe={class:"flex break-all text-2xl"},ne={class:"flex w-full flex-1 flex-row items-center justify-center gap-4"},ie={class:"flex w-full flex-1 flex-row items-center justify-center gap-4"},re={class:"flex w-full flex-1 flex-row items-center justify-center gap-4"},ue=k({__name:"playground",setup(T){const i=D(),u=h(""),d=h();function l(){const[b,m]=i("default","DEFAULT");i("success","SUCCESS"),i("info","INFO"),i("WARNING","WARNING"),i("error","ERROR"),console.log({id:b,toastInstance:m})}const f=h(Array.from(Array(50).keys())),g=h(1);B(f.value,{itemHeight:1}),G(g,()=>{B(f.value,{itemHeight:g.value})}),$(()=>{setTimeout(()=>{g.value=100,console.log("updated vlist")},2e3)});const c=h();return(b,m)=>{const _=P,r=ee,o=W,p=E,y=z,v=O,A=Y,s=U;return w(),M("div",ae,[e(_),e(r,{class:"h-[32rem] w-[80rem]"}),e(o,{name:"ph:activity",class:"text-2xl"}),e(o,{name:"ph:address-book-fill",class:"text-4xl"}),n("div",te,[n("button",{class:"absolute right-0",ref_key:"test2",ref:c}," ye jayee dg onvare donya",512),n("button",null,[a("Button "),e(p,{placement:"local-start"},{default:t(()=>[a(" سلام. خوبی؟ ")]),_:1})])]),n("div",se,[e(y),e(v,{type:"circle"}),e(v,{type:"triangle"}),e(v,{type:"square"})]),le,e(A,{modelValue:N(u),"onUpdate:modelValue":m[0]||(m[0]=I=>Z(u)?u.value=I:null),name:"test","label-bg":"bg-bg-12",class:"self-start",label:"نام کول بری",icon:"ph:user-fill"},null,8,["modelValue"]),e(s,{class:"btn-primary",tooltip:"من تول تیپم",onClick:l},{default:t(()=>[a(" hoy ")]),_:1}),n("h1",oe,F(N(u)),1),e(o,{ref_key:"testIcon",ref:d,name:"ph:address-book-fill "},null,512),n("section",ne,[e(s,{class:"btn-primary",loading:"",disable:""},{default:t(()=>[a(" hello ")]),_:1}),e(s,{class:"btn-primary",disable:""},{default:t(()=>[a(" hello ")]),_:1}),e(s,{class:"btn-primary"},{default:t(()=>[a(" hello ")]),_:1}),e(s,{class:"btn-primary"},{default:t(()=>[e(o,{name:"ph:cat-fill"}),a(" hello ")]),_:1}),e(s,{class:"btn-primary-outline"},{default:t(()=>[a(" hello ")]),_:1}),e(s,{class:"btn-primary-side"},{default:t(()=>[a(" hello ")]),_:1}),e(s,{class:"btn-secondary"},{default:t(()=>[a(" hello ")]),_:1}),e(s,{class:"btn-secondary-outline"},{default:t(()=>[a(" hello ")]),_:1}),e(s,{class:"btn-secondary-side"},{default:t(()=>[a(" hello ")]),_:1}),e(s,{class:"btn-side"},{default:t(()=>[a(" hello ")]),_:1})]),n("section",ie,[e(s,{class:"btn-primary disable"},{default:t(()=>[a(" دکمه ")]),_:1}),e(s,{class:"btn-primary disable"},{default:t(()=>[a(" دکمه ")]),_:1}),e(s,{class:"btn-primary"},{default:t(()=>[a(" دکمه ")]),_:1}),e(s,{class:"btn-primary-outline"},{default:t(()=>[a(" دکمه ")]),_:1}),e(s,{class:"btn-primary-side"},{default:t(()=>[a(" دکمه ")]),_:1}),e(s,{class:"btn-secondary"},{default:t(()=>[a(" دکمه ")]),_:1}),e(s,{class:"btn-secondary-outline"},{default:t(()=>[a(" دکمه ")]),_:1}),e(s,{class:"btn-secondary-side"},{default:t(()=>[a(" دکمه ")]),_:1}),e(s,{class:"btn-side"},{default:t(()=>[a(" دکمه ")]),_:1})]),n("section",re,[e(s,{class:"btn-primary"},{default:t(()=>[e(o,{name:"ph:cat-fill"}),a(" دکمه ")]),_:1}),e(s,{class:"btn-primary-outline"},{default:t(()=>[e(o,{name:"ph:cat-fill"}),a(" دکمه ")]),_:1}),e(s,{class:"btn-primary-side"},{default:t(()=>[e(o,{name:"ph:cat-fill"}),a(" دکمه ")]),_:1}),e(s,{class:"btn-secondary"},{default:t(()=>[e(o,{name:"ph:cat-fill"}),a(" دکمه ")]),_:1}),e(s,{class:"btn-secondary-outline"},{default:t(()=>[e(o,{name:"ph:cat-fill"}),a(" دکمه ")]),_:1}),e(s,{class:"btn-secondary-side"},{default:t(()=>[e(o,{name:"ph:cat-fill"}),a(" دکمه ")]),_:1}),e(s,{class:"btn-side"},{default:t(()=>[e(o,{name:"ph:cat-fill"}),a(" دکمه ")]),_:1})])])}}});export{ue as default};
