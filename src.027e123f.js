parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const e=[{preview:"images/himilayan-blue-poppy-4202825_340.jpg",original:"images/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"images/container-4203677__340.jpg",original:"images/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"images/beach-4206785__340.jpg",original:"images/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"images/flowers-1835619__340.jpg",original:"images/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"images/mountains-3674334__340.jpg",original:"images/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"images/landscape-4208571__340.jpg",original:"images/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"images/the-alps-4209272__340.jpg",original:"images/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"images/landscape-4208255__340.jpg",original:"images/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"images/lighthouse-4208843__340.jpg",original:"images/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],i={galleryList:document.querySelector(".js-gallery"),modal:document.querySelector(".js-lightbox"),modalCloseBtn:document.querySelector('button[data-action="close-lightbox"]'),modalImage:document.querySelector(".lightbox__image"),modalOverlay:document.querySelector(".lightbox__overlay")},n=a(e);function a(e){return e.map(({preview:e,original:i,description:n})=>`\n    <li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="${i}"\n  >\n    <img\n      class="gallery__image"\n      src="${e}"\n      data-source="${i}"\n      alt="${n}"\n    />\n  </a>\n</li>\n    `).join("")}function o(e,n){return i.modalImage.src=e,i.modalImage.alt=n}function r(e){"IMG"===e.target.nodeName&&(e.preventDefault(),i.modal.classList.add("is-open"),o(e.target.dataset.source,e.target.alt),window.addEventListener("keydown",l),window.addEventListener("keydown",onArrowLeftPress),window.addEventListener("keydown",onArrowRightPress))}function t(){i.modal.classList.remove("is-open"),o("",""),window.removeEventListener("keydown",l),window.removeEventListener("keydown",onArrowLeftPress),window.removeEventListener("keydown",onArrowRightPress)}function s(e){e.currentTarget===e.target&&t()}function l(e){"Escape"===e.code&&t()}i.galleryList.insertAdjacentHTML("beforeend",n),i.galleryList.addEventListener("click",r),i.modalCloseBtn.addEventListener("click",t),i.modalOverlay.addEventListener("click",s);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.027e123f.js.map