function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire33f3;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire33f3=r),r.register("27Lyk",(function(t,o){var n,r;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var l={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},r=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("27Lyk").register(JSON.parse('{"i85Qc":"home.3b43b115.js","abxcp":"Brown.a9beda0a.jpg","1Fupy":"Choco.9b8eb164.jpg","Zz5rb":"ConMuzi.987b79ea.jpg","5CL5F":"Selly.80e40361.jpg"}'));const l=document.querySelector(".container"),s=document.querySelector("#inputName"),a=document.querySelector("#btn");console.log(l);const c=localStorage.getItem("personalInfo");document.querySelectorAll(".item");let i;(async function(){const e=await fetch("https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/users/.json"),t=await e.json();return i=t,console.log(t),t})().then((e=>{console.log(e),function(e){console.log(e),l.innerHTML=Object.values(e).map(((e,o)=>t(e,o))).join("");function t(e,t){let o,n=JSON.parse(c);JSON.parse(localStorage.getItem("allUserInfo"));return console.log(e),"Brown.jpg"==e.pic?o=`<img src="${new URL(p).toString()}" alt="pfp">`:"Choco.jpg"==e.pic?o=`<img src="${new URL(u).toString()}" alt="pfp">`:"ConMuzi.jpg"==e.pic?o=`<img src="${new URL(g).toString()}" alt="pfp">`:"Selly.jpg"==e.pic&&(o=`<img src="${new URL(f).toString()}" alt="pfp">`),`\n      <div class="item ${n.username===e.username?"myUser":""}">\n        ${o}\n        <span class="item_name">${e.username.split("@")[0]}</span>         \n        <button username ="${e.username}" pic=${e.pic}  class='goToPersnalInfo'>Click to watch more</button>\n      </div>\n    `}document.querySelectorAll(".goToPersnalInfo").forEach(((e,t)=>{e.addEventListener("click",(e=>{e.preventDefault(),console.log(t),console.log(Object.keys(i)[t]);Object.keys(i)[t];console.log(e.target);Object.values(i)[t];window.location.href=`../account/index.html?id=${Object.keys(i)[t]}`}))}))}(e),localStorage.setItem("allUserInfo",JSON.stringify(e))})).catch((e=>console.log(e)));var p={};p=new URL("../"+r("27Lyk").resolve("abxcp"),import.meta.url).toString();var u={};u=new URL("../"+r("27Lyk").resolve("1Fupy"),import.meta.url).toString();var g={};g=new URL("../"+r("27Lyk").resolve("Zz5rb"),import.meta.url).toString();var f={};let d;f=new URL("../"+r("27Lyk").resolve("5CL5F"),import.meta.url).toString(),a.addEventListener("click",(e=>{e.preventDefault();const t=JSON.parse(localStorage.getItem("personalInfo"));console.log("user",t),d={username:t.username,pic:t.pic,createdAt:(new Date).toISOString(),msg:s.value},console.log("user",d),async function(e,t){const o="https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/posts/.json",n={method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UFT-8"}};try{const r=await fetch(o,n);await r.json();console.log(e);localStorage.setItem("accountlInfo",JSON.stringify(e));let l=JSON.parse(localStorage.getItem("accountInfo"));console.log(l),alert("You have successfully registered"),t&&location.reload()}catch(e){console.log(e)}}(d,!0)})),async function(){const e=await fetch("https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/posts/.json"),t=await e.json();return console.log(t),t}().then((e=>{console.log(Object.values(e));const t=Object.values(e);for(let e=0;e<t.length;e++){let o;"Brown.jpg"==t[e].pic?o=`${new URL(p).toString()}`:"Choco.jpg"==t[e].pic?o=`${new URL(u).toString()}`:"ConMuzi.jpg"==t[e].pic?o=`${new URL(g).toString()}`:"Selly.jpg"==t[e].pic&&(o=`${new URL(f).toString()}`);const n=document.querySelector(".itemsStatus"),r=document.createElement("img");r.src=o;const l=document.createElement("div");l.append(r),console.log(t[e].msg),n.append(l);const s=document.createElement("p");s.innerText=t[e].msg,l.appendChild(s)}})).catch((e=>console.log(e)));
//# sourceMappingURL=home.3b43b115.js.map
