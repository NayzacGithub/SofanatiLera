const l=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};l();const d="https://diyarpower.com/prices.php",a=document.getElementById("app");fetch(d).then(o=>o.json()).then(o=>{o.forEach(r=>{a.innerHTML+=`<div class="my-4 mx-auto max-w-lg border rounded-xl bg-white">
    <h1 class="font-bold text-2xl py-2 px-4"><span class="text-green-500">${r.name}</span> ${r.ar_name}</h1>
    <div class="grid grid-cols-2 text-xl text-center gap-4 py-2 px-5 font-semibold">
      <div class="ask bg-gray-50 shadow-inner py-2 rounded-lg border">
        <span class="text-gray-600">\u0634\u0631\u0627\u0621</span> ${r.ask}
      </div>
      <div class="bid bg-gray-50 shadow-inner py-2 rounded-lg border">
        <span class="text-gray-600">\u0628\u064A\u0639</span> ${r.bid}
      </div>
    </div>
  </div>`})});
