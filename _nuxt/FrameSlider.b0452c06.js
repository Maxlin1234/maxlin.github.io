import{_ as u}from"./nuxt-link.a5e9be14.js";import{l as g}from"./loadBackgroudImages.6dc4ef71.js";import{c as m}from"./marketing-agency-customjs.bb00222e.js";import{s as k}from"./showcase-script.157f33fa.js";import{h as f,o as e,b as t,f as a,F as r,k as o,u as l,G as v,j as d,t as i,l as c,e as h,w as b}from"./entry.99fc42e5.js";const p=[{id:1,background:"/dark/assets/imgs/works/full/1.jpg",year:"2023",type:"Branding",title:"Basket Lamp"},{id:2,background:"/dark/assets/imgs/works/full/2.jpg",year:"2023",type:"Branding",title:"Moon Light"},{id:3,background:"/dark/assets/imgs/works/full/3.jpg",year:"2023",type:"Branding",title:"Red Glasses"},{id:4,background:"/dark/assets/imgs/works/full/4.jpg",year:"2023",type:"Branding",title:"Waffile Maker"},{id:5,background:"/dark/assets/imgs/works/full/5.jpg",year:"2023",type:"Branding",title:"Headphone"}],y={class:"slideshow"},B={class:"slides slides--images"},x=["data-background"],w={class:"slides slides--titles"},j={class:"slide__title text-center"},N={class:"sub-title mb-15"},L=a("br",null,null,-1),S=v('<nav class="slidenav"><div class="container"><button class="slidenav__item slidenav__item--prev cursor-pointer"><span><i class="fas fa-chevron-left"></i></span><span><span>Prev</span></span></button><button class="slidenav__item slidenav__item--next cursor-pointer"><span><span>Next</span></span><span><i class="fas fa-chevron-right"></i></span></button></div></nav>',1),E={__name:"FrameSlider",setup(V){return f(()=>{g(),m(),k.demo()}),(F,M)=>{const _=u;return e(),t("div",y,[a("div",B,[(e(!0),t(r,null,o(l(p),(s,n)=>(e(),t("div",{class:d(`slide ${n===0?"slide--current":""}`),key:s.id},[a("div",{class:"slide__img bg-img","data-background":s.background},null,8,x)],2))),128))]),a("div",w,[(e(!0),t(r,null,o(l(p),(s,n)=>(e(),t("div",{class:d(`slide ${n===0?"slide--current":""}`),key:s.id},[a("h1",j,[a("span",N,"© "+i(s.year)+" "+i(s.type),1),c(),L,a("span",null,[h(_,{to:"/dark/project-details1"},{default:b(()=>[c(i(s.title),1)]),_:2},1024)])])],2))),128))]),S])}}};export{E as _};
