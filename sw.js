if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),d={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Ct8mNgVG.js",revision:null},{url:"assets/index-DfQNYx2s.css",revision:null},{url:"assets/index-DXTGtMZ3.css",revision:null},{url:"assets/index-Z7jYcbeO.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"be3893395d492a39ff2c79edad4ad7ea"},{url:"favicon.png",revision:"8e753dceb10e5bf3bb67f00b6a597011"},{url:"manifest.webmanifest",revision:"90c25245574f0c4619b5dad9164b310c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
// Click and open notification
self.addEventListener('notificationclick', function(event) {
    // var notificationURL = event.notification.data.url;
    // clients.openWindow('https://timer.safiullin.io');
    clients.focus();
    // return clients.openWindow(notificationURL).then(function(client){
    //     client.navigate(notificationURL);
    // });
    event.notification.close();
}, false);
