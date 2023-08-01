import{_ as R}from"./SortByDropdown.vue.a42e7bd4.js";import{_ as S}from"./TitleList.vue.cde9bc59.js";import{d as B,u as E,V as P,n,a as q,m as V,c as h,W as j,g as k,h as x,i as _,w as L,j as a,X as M,p as N}from"./entry.77aa3f93.js";import{u as O}from"./useArchiveIcon.18656aa1.js";const T={class:"flex min-h-full w-full flex-col"},W=B({__name:"ArchiveList",props:{slug:{}},setup(y){const r=y,m=E(),A=P(),u=n(!0),l=q(),{infiniteScrolling:C}=V(),w=h(()=>{var e;return(e=[...m.categories,...m.genres].find(s=>s.slug===r.slug))==null?void 0:e.name}),i=n(),p=n(),c=h(()=>l.query.sortBy||"relevant"),g=l.query.stream==="true",f=n({}),v=n(c.value);async function d(e,s){var o;s!==v.value&&(f.value={},v.value=s),u.value=!0;const t=await M("ARCHIVE::"+[r.slug].join(",")+e+s+g,()=>N.API.actions.archive([r.slug],g,e,s));i.value=t,u.value=!1,t&&((o=i.value)!=null&&o.error&&A(i.value.msg,"ERROR"),f.value[e]=t.result.posts,p.value={pages:t.result.pages,page:t.result.page,total:t.result.total})}return j(()=>{const e=Number(l.query.page||"1");d(e,c.value)}),(e,s)=>{const t=R,o=S;return k(),x("div",T,[_(o,{"secondary-title-type":"",transparent:"",class:"min-h-full",title:a(w)||"",icon:("useArchiveIcon"in e?e.useArchiveIcon:a(O))(e.slug),"is-loading":a(u),data:a(f),"result-info":a(p),onPageChanged:s[0]||(s[0]=I=>a(C)&&d(I,a(c)))},{header:L(()=>[_(t)]),_:1},8,["title","icon","is-loading","data","result-info"])])}}});export{W as _};
