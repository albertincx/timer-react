if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),u={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Ctzihel0.js",revision:null},{url:"assets/index-D6WJeheG.css",revision:null},{url:"assets/index-DpZZjDNw.css",revision:null},{url:"assets/index-DWZGkufB.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"8e3fa15f96d2e2b134df5b42c006e8ec"},{url:"favicon.png",revision:"8e753dceb10e5bf3bb67f00b6a597011"},{url:"manifest.webmanifest",revision:"90c25245574f0c4619b5dad9164b310c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
