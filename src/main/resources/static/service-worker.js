if(!self.define){let s,n={};const e=(e,r)=>(e=new URL(e+".js",r).href,n[e]||new Promise((n=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=n,document.head.appendChild(s)}else s=e,importScripts(e),n()})).then((()=>{let s=n[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(r,l)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let o={};const u=s=>e(s,i),c={module:{uri:i},exports:o,require:u};n[i]=Promise.all(r.map((s=>c[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-a1f32f28"],(function(s){"use strict";s.setCacheNameDetails({prefix:"photo_front"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/css/327.d8691db5.css",revision:null},{url:"/css/493.13f91a8f.css",revision:null},{url:"/css/799.aa45a190.css",revision:null},{url:"/css/923.1ead2b1a.css",revision:null},{url:"/css/app.dc3cacea.css",revision:null},{url:"/css/chunk-vendors.cc083611.css",revision:null},{url:"/fonts/bootstrap-icons.02685dab.woff2",revision:null},{url:"/fonts/bootstrap-icons.8463cb1e.woff",revision:null},{url:"/img/top-bg.e5ebd218.jpg",revision:null},{url:"/index.html",revision:"3b73e9d0c46abd3b86973b5cbd36da2f"},{url:"/js/154.4b636643.js",revision:null},{url:"/js/327.a67df064.js",revision:null},{url:"/js/493.716b85b0.js",revision:null},{url:"/js/799.7989a56a.js",revision:null},{url:"/js/923.6845442c.js",revision:null},{url:"/js/app.d66fe235.js",revision:null},{url:"/js/chunk-vendors.3a4017ca.js",revision:null},{url:"/manifest.json",revision:"246fe3ed8051f9260bc288740573ebbf"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
