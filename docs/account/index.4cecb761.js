function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire33f3;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire33f3=r),r.register("27Lyk",(function(t,n){var o,r;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("27Lyk").register(JSON.parse('{"9SsVi":"index.4cecb761.js","abxcp":"Brown.a9beda0a.jpg","1Fupy":"Choco.9b8eb164.jpg","Zz5rb":"ConMuzi.987b79ea.jpg","5CL5F":"Selly.80e40361.jpg"}'));const a=localStorage.getItem("allUserInfo"),s=new URLSearchParams(location.search);console.log(a);const l=localStorage.getItem("allUserInfo"),i=JSON.parse(l);console.log(i);const c=Object.values(i).length;console.log(c);const p=Object.keys(i);console.log(p);const u=p[c-1];console.log(u);let f=localStorage.getItem("accountInfo"),g=JSON.parse(f);console.log(g);document.getElementById("myPicContainer"),document.getElementById("personalInfoContainer");const d=document.getElementById("container"),m=document.querySelector(".msg-container");let b;!async function(e){let t;for(const e of s.values())console.log(e),t=e;await async function(){const e=`https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/users/${t}.json`,n=await fetch(e);await n.json().then((e=>{b=e,d.innerHTML=function(e){let t;return t="Brown.jpg"==e.pic?`<img src="${new URL(w).toString()}" alt="pfp">`:"Choco.jpg"==e.pic?`<img src="${new URL(v).toString()}" alt="pfp">`:"ConMuzi.jpg"==e.pic?`<img src="${new URL(S).toString()}" alt="pfp">`:`<img src="${new URL(y).toString()}" alt="pfp">`,t+`\n  <div class="item"> \n  <p class="item_name">Name: ${e.username.split("@")[0]}</p>  \n  \n  </div>\n      `}(e)}))}(),fetch("https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/posts.json").then((e=>e.json())).then((e=>{console.warn(e),function(e){e.forEach((e=>{if(console.log(e,b),e.username==b.username){let t=`<div> \n          <p class="item_name">MSG: ${e.msg}</p>   \n        </div>`;m.innerHTML+=t}}))}(Object.values(e))}))}();var w={};w=new URL("../"+r("27Lyk").resolve("abxcp"),import.meta.url).toString();var v={};v=new URL("../"+r("27Lyk").resolve("1Fupy"),import.meta.url).toString();var S={};S=new URL("../"+r("27Lyk").resolve("Zz5rb"),import.meta.url).toString();var y={};y=new URL("../"+r("27Lyk").resolve("5CL5F"),import.meta.url).toString();
//# sourceMappingURL=index.4cecb761.js.map
