parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"tUNq":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/himilayan-blue-poppy-4202825__340.44f55ba0.jpg";
},{}],"bfrK":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/himilayan-blue-poppy-4202825_1280.4dc6dd74.jpg";
},{}],"Q8LH":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/container-4203677__340.f4a75706.jpg";
},{}],"Q8xo":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/container-4203677_1280.bdbea1be.jpg";
},{}],"CSe0":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/beach-4206785__340.b8b21f37.jpg";
},{}],"vRZ1":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/beach-4206785_1280.6d0b33f8.jpg";
},{}],"bVfa":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/flowers-1835619__340.a60c124c.jpg";
},{}],"Gvsa":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/flowers-1835619_1280.4ac2275a.jpg";
},{}],"ESGj":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/mountains-3674334__340.8ee3ce54.jpg";
},{}],"T80d":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/mountains-3674334_1280.d561b38a.jpg";
},{}],"O6n2":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208571__340.5efb1638.jpg";
},{}],"YHg0":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208571_1280.efee508e.jpg";
},{}],"APbX":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/the-alps-4209272__340.54b191e2.jpg";
},{}],"eCdk":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/the-alps-4209272_1280.452c82c5.jpg";
},{}],"Wv4R":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208255__340.76a6423c.jpg";
},{}],"DPjk":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208255_1280.a608328b.jpg";
},{}],"ZLlJ":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/lighthouse-4208843__340.d786049c.jpg";
},{}],"xsxB":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/lighthouse-4208843_1280.9c78cd4c.jpg";
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=v(require("./images/himilayan-blue-poppy-4202825__340.jpg")),i=v(require("./images/himilayan-blue-poppy-4202825_1280.jpg")),r=v(require("./images/container-4203677__340.jpg")),a=v(require("./images/container-4203677_1280.jpg")),n=v(require("./images/beach-4206785__340.jpg")),t=v(require("./images/beach-4206785_1280.jpg")),o=v(require("./images/flowers-1835619__340.jpg")),l=v(require("./images/flowers-1835619_1280.jpg")),s=v(require("./images/mountains-3674334__340.jpg")),d=v(require("./images/mountains-3674334_1280.jpg")),g=v(require("./images/landscape-4208571__340.jpg")),u=v(require("./images/landscape-4208571_1280.jpg")),c=v(require("./images/the-alps-4209272__340.jpg")),p=v(require("./images/the-alps-4209272_1280.jpg")),m=v(require("./images/landscape-4208255__340.jpg")),_=v(require("./images/landscape-4208255_1280.jpg")),w=v(require("./images/lighthouse-4208843__340.jpg")),f=v(require("./images/lighthouse-4208843_1280.jpg"));function v(e){return e&&e.__esModule?e:{default:e}}const y=[{preview:e.default,original:i.default,description:"Hokkaido Flower"},{preview:r.default,original:a.default,description:"Container Haulage Freight"},{preview:n.default,original:t.default,description:"Aerial Beach View"},{preview:o.default,original:l.default,description:"Flower Blooms"},{preview:s.default,original:d.default,description:"Alpine Mountains"},{preview:g.default,original:u.default,description:"Mountain Lake Sailing"},{preview:c.default,original:p.default,description:"Alpine Spring Meadows"},{preview:m.default,original:_.default,description:"Nature Landscape"},{preview:w.default,original:f.default,description:"Lighthouse Coast Sea"}],q={galleryList:document.querySelector(".js-gallery"),modal:document.querySelector(".js-lightbox"),modalCloseBtn:document.querySelector('button[data-action="close-lightbox"]'),modalImage:document.querySelector(".lightbox__image"),modalOverlay:document.querySelector(".lightbox__overlay")},j=h(y);function h(e){return e.map(({preview:e,original:i,description:r})=>`\n    <li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="${i}"\n  >\n    <img\n      class="gallery__image"\n      src="${e}"\n      data-source="${i}"\n      alt="${r}"\n    />\n  </a>\n</li>\n    `).join("")}function L(e,i){return q.modalImage.src=e,q.modalImage.alt=i}function k(e){"IMG"===e.target.nodeName&&(e.preventDefault(),q.modal.classList.add("is-open"),L(e.target.dataset.source,e.target.alt),window.addEventListener("keydown",A),window.addEventListener("keydown",onArrowLeftPress),window.addEventListener("keydown",onArrowRightPress))}function b(){q.modal.classList.remove("is-open"),L("",""),window.removeEventListener("keydown",A),window.removeEventListener("keydown",onArrowLeftPress),window.removeEventListener("keydown",onArrowRightPress)}function E(e){e.currentTarget===e.target&&b()}function A(e){"Escape"===e.code&&b()}q.galleryList.insertAdjacentHTML("beforeend",j),q.galleryList.addEventListener("click",k),q.modalCloseBtn.addEventListener("click",b),q.modalOverlay.addEventListener("click",E);
},{"./sass/main.scss":"clu1","./images/himilayan-blue-poppy-4202825__340.jpg":"tUNq","./images/himilayan-blue-poppy-4202825_1280.jpg":"bfrK","./images/container-4203677__340.jpg":"Q8LH","./images/container-4203677_1280.jpg":"Q8xo","./images/beach-4206785__340.jpg":"CSe0","./images/beach-4206785_1280.jpg":"vRZ1","./images/flowers-1835619__340.jpg":"bVfa","./images/flowers-1835619_1280.jpg":"Gvsa","./images/mountains-3674334__340.jpg":"ESGj","./images/mountains-3674334_1280.jpg":"T80d","./images/landscape-4208571__340.jpg":"O6n2","./images/landscape-4208571_1280.jpg":"YHg0","./images/the-alps-4209272__340.jpg":"APbX","./images/the-alps-4209272_1280.jpg":"eCdk","./images/landscape-4208255__340.jpg":"Wv4R","./images/landscape-4208255_1280.jpg":"DPjk","./images/lighthouse-4208843__340.jpg":"ZLlJ","./images/lighthouse-4208843_1280.jpg":"xsxB"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.a4813604.js.map