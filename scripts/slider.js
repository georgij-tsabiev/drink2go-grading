var s=document.querySelectorAll(".slider-pagination__button"),n=document.querySelectorAll(".slider__item"),c=document.querySelector(".slider-button-prev"),i=document.querySelector(".slider-button-next"),u=document.querySelector(".hero"),l=n.length,a={0:"#f3ebe1",1:"#eae6fc",2:"#e5e6e8"},e=0,d=()=>{let r=t=>{n.forEach(o=>o.classList.remove("slider__item--current")),s.forEach(o=>o.classList.remove("slider-pagination__button--current")),n[t].classList.add("slider__item--current"),s[t].classList.add("slider-pagination__button--current"),c.style.cursor=t===0?"default":"pointer",i.style.cursor=t===l-1?"default":"pointer",e=t,u.style.backgroundColor=a[t]||a[0]};s.forEach((t,o)=>{t.addEventListener("click",()=>r(o))}),c.addEventListener("click",()=>{e>0&&(e--,r(e))}),i.addEventListener("click",()=>{e<l-1&&(e++,r(e))}),r(e)};export{d as initializeSlider};
