import{S as c,a as u,i}from"./assets/vendor-B3Lscd_h.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const m=new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,closeText:"x",showCounter:!0}),a={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery")};function p(r){r.preventDefault();const s=r.target.elements["search-text"].value.trim();return r.target.reset(),s}function d(r){const{hits:s}=r,l=s.map(o=>`<li class="item-gallery">
    <a href="${o.largeImageURL}">
    <img class="gallery-image" 
      src="${o.webformatURL}" 
      alt="${o.tags}" 
      width="360px"
      height="152px">
    </a>
      <ul class="list-descriptions">
        <li class="name">
          <p class="title-text">Likes <span class="text">${o.likes}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Views <span class="text">${o.views}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Comments <span class="text">${o.comments}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Downloads <span class="text">${o.downloads}</span></p>
        </li>
      </ul>
  </li>`).join("");a.listElem.insertAdjacentHTML("beforeend",l),m.refresh()}function g(){a.listElem.innerHTML=""}function f(){document.getElementById("loader-wrap").hidden=!1}function h(){document.getElementById("loader-wrap").hidden=!0}function y(r){const s="https://pixabay.com/api/",l="50348877-00e3539199181f67fed2a274d",o=new URLSearchParams({key:l,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}?${o.toString()}`;return console.log(e),u.get(e).then(t=>t.data)}a.formElem.addEventListener("submit",r=>{r.preventDefault(),g(),f();const s=p(r);y(s).then(l=>{if(console.log(l.hits.length),h(),l.hits.length===0)return i.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null;d(l)}).catch(l=>(i.show({title:"ERROR",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Something wrong",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null))});
//# sourceMappingURL=index.js.map
