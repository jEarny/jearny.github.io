import{d as V,j as I,k as N,r as n,o as i,h as c,w as t,a as e,l,m as y,P as j,c as p,t as u,e as s,i as h,F as v,f as d}from"./main.d5107157.js";const q={key:1},E=["src"],G=d(" Rating: "),L=s("div",null,"Vlietlanden Recreational Club",-1),M=d("21.06.2022"),Q={class:"ActivityDetailActionButton"},W=d("Sign up"),$={style:{"white-space":"pre-wrap"}},H=s("p",null,[s("em",null," DISCLAIMER - This activity and description was used as a demonstration of how this company (real or imagined) could be involved in our platform. The company was not involved in this nor does this represent the company in anyway. ")],-1),O=V({props:{id:null},setup(f){const g=f,a=I({loading:!0,activity:null}),k=[{text:"Had a great time!",user:"Alex"},{text:"I did this 3 months ago. They just started flowerin and the area looks so beautiful now!",user:"Sandra"},{text:"Was fun, I hope they do something like this for sunflowers!",user:"Peter"}];return N.send({url:`pages/activity-details/${g.id}`}).then(m=>{a.activity=m.data,a.loading=!1}),(m,J)=>{const S=n("DocumentSetter"),C=n("SkeletonText"),w=n("Divider"),r=n("Row"),x=n("SkeletonSquare"),D=n("Rating"),T=n("SubTitle1"),B=n("Chip"),R=n("ChipGroup"),A=n("Button"),_=n("Column"),b=n("BlockQuote"),F=n("Container"),P=n("PageFrame");return i(),c(P,null,{default:t(()=>[e(F,null,{default:t(()=>[l(a).loading?y("",!0):(i(),c(S,{key:0,title:m.$t("pages.activityDetail.htmlTitle",{name:l(a).activity.name})},null,8,["title"])),e(r,null,{default:t(()=>[e(j,null,{default:t(()=>{var o;return[l(a).loading?(i(),c(C,{key:0})):(i(),p("span",q,u((o=l(a).activity)==null?void 0:o.name),1)),e(w)]}),_:1})]),_:1}),e(r,null,{default:t(()=>[e(_,{columns:"3",class:"ActivityDetailMap"},{default:t(()=>[e(r,null,{default:t(()=>[s("div",null,[l(a).loading?(i(),c(x,{key:0})):(i(),p("img",{key:1,src:l(a).activity.image},null,8,E))]),s("div",null,[G,e(D,{"model-value":3})]),L,e(T,{class:"FullWidth"},{default:t(()=>[M]),_:1}),l(a).activity?(i(),c(R,{key:0},{default:t(()=>[(i(!0),p(v,null,h(l(a).activity.tags.split(","),o=>(i(),c(B,{key:o},{default:t(()=>[d(u(o),1)]),_:2},1024))),128))]),_:1})):y("",!0),s("div",Q,[e(A,null,{default:t(()=>[W]),_:1})])]),_:1})]),_:1}),e(_,{columns:"1"}),e(_,{columns:"8"},{default:t(()=>{var o;return[s("p",$,u((o=l(a).activity)==null?void 0:o.description),1),H]}),_:1})]),_:1}),e(r,{class:"ActivityDetailsReviews"},{default:t(()=>[(i(),p(v,null,h(k,o=>e(_,{key:o.text},{default:t(()=>[e(b,null,{default:t(()=>[d(u(o.text)+" - "+u(o.user),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}});export{O as default};