import{q as B,o as s,c as h,d as f,r as t,h as m,w as n,a as e,s as V,v as R,l as u,f as v,t as w,i as S,F as g,e as k,j as b,k as D,m as F}from"./main.1c44d1a4.js";var L="/assets/fake-map.94be812f.jpg";const N={},U={src:L,class:"ActivitySearch__TopographyView"};function M(l,o){return s(),h("img",U)}var j=B(N,[["render",M]]);const E=f({props:{modelValue:null},emits:["update:modelValue"],setup(l,{emit:o}){return(i,c)=>{const r=t("IconButton"),_=t("Column"),a=t("TextField"),d=t("Row"),p=t("Container"),y=t("Card");return s(),m(y,null,{default:n(()=>[e(p,null,{default:n(()=>[e(d,null,{default:n(()=>[e(_,{columns:2},{default:n(()=>[e(r,{flat:"",icon:"mdi-menu"})]),_:1}),e(_,{columns:8},{default:n(()=>[e(a,{"model-value":l.modelValue,class:"ActivitySearch__SearchInput",placeholder:i.$t("pages.activitySearch.searchActivities"),borderless:"","onUpdate:modelValue":c[0]||(c[0]=C=>o("update:modelValue",C))},null,8,["model-value","placeholder"])]),_:1}),e(_,{columns:2},{default:n(()=>[e(r,{flat:"",icon:"mdi-magnify"})]),_:1})]),_:1})]),_:1})]),_:1})}}});const G=f({props:{activity:null},emits:["click"],setup(l,{emit:o}){const i=l,c=V(()=>window.innerWidth*i.activity.x),r=V(()=>window.innerHeight*i.activity.y),_=V(()=>`top:${r.value}px;left:${c.value}px;`);return(a,d)=>{const p=t("IconButton");return s(),m(p,{icon:"mdi-map-marker",style:R(u(_)),flat:"",color:"red",class:"ActivitySearch__ActivityMarker",onClick:d[0]||(d[0]=y=>o("click"))},null,8,["style"])}}});const q=k("br",null,null,-1),z=v(" DISCLAIMER - This activity and description was used as a demonstration of how this company (real or imagined) could be involved in our platform. The company was not involved in this nor does this represent the company in anyway. "),H=f({props:{modelValue:null},emits:["update:modelValue"],setup(l,{emit:o}){return(i,c)=>{const r=t("Column"),_=t("Icon"),a=t("Row"),d=t("RouterLink"),p=t("CardTitle"),y=t("Rating"),C=t("Chip"),T=t("ChipGroup"),$=t("ScrollView"),A=t("CardText"),I=t("Card");return s(),m(I,{class:"ActivitySearch__ActivityInfo"},{default:n(()=>[e(p,null,{default:n(()=>[e(d,{to:i.$pageUrls.activities.view(l.modelValue.id),class:"ActivitySummary__Title"},{default:n(()=>[e(a,null,{default:n(()=>[e(r,{columns:10},{default:n(()=>[v(w(l.modelValue.name),1)]),_:1}),e(r,{columns:2},{default:n(()=>[e(_,{icon:"mdi-arrow-right",class:"ActivitySummary__TitleArrow"})]),_:1})]),_:1})]),_:1},8,["to"])]),_:1}),e(A,{style:{"white-space":"pre-wrap"}},{default:n(()=>[e(y,{"model-value":3}),e(T,null,{default:n(()=>[(s(!0),h(g,null,S(l.modelValue.tags.split(","),x=>(s(),m(C,{key:x},{default:n(()=>[v(w(x),1)]),_:2},1024))),128))]),_:1}),q,e($,{height:"100px"},{default:n(()=>[v(w(l.modelValue.description),1)]),_:1})]),_:1}),e(A,null,{default:n(()=>[z]),_:1})]),_:1})}}});const O={class:"ActivitySearch"},W=v(" \xA9 SuperView-2 "),K=f({setup(l){const o=b({searchTerm:"",activities:new Array,chosenActivity:null});return D.send({url:"pages/activity-search"}).then(i=>o.activities=i.data.activities),(i,c)=>{const r=t("DocumentSetter"),_=t("Container");return s(),h(g,null,[e(r,{title:i.$t("pages.activitySearch.htmlTitle")},null,8,["title"]),k("div",O,[e(j),W,e(_,{class:"ActivitySearch__Overlay"},{default:n(()=>[e(E,{modelValue:u(o).searchTerm,"onUpdate:modelValue":c[0]||(c[0]=a=>u(o).searchTerm=a)},null,8,["modelValue"]),(s(!0),h(g,null,S(u(o).activities,a=>(s(),m(G,{key:a.id,activity:a,onClick:d=>u(o).chosenActivity=a},null,8,["activity","onClick"]))),128)),u(o).chosenActivity?(s(),m(H,{key:0,modelValue:u(o).chosenActivity,"onUpdate:modelValue":c[1]||(c[1]=a=>u(o).chosenActivity=a)},null,8,["modelValue"])):F("",!0)]),_:1})])],64)}}});export{K as default};