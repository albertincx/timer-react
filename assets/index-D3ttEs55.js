var _=Object.defineProperty;var G=(e,s,t)=>s in e?_(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var m=(e,s,t)=>(G(e,typeof s!="symbol"?s+"":s,t),t);import{r as w,j as r,S as v}from"./index-CDEzBFSq.js";var z=Object.defineProperty,Q=(e,s,t)=>s in e?z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,a=(e,s,t)=>(Q(e,typeof s!="symbol"?s+"":s,t),t);const f=class{constructor(e){a(this,"mobileSelect"),a(this,"trigger"),a(this,"wheelList"),a(this,"sliderList"),a(this,"wheelsContain"),a(this,"panel"),a(this,"ensureBtn"),a(this,"cancelBtn"),a(this,"grayLayer"),a(this,"popUp"),a(this,"initPosition"),a(this,"initColWidth"),a(this,"wheelsData"),a(this,"displayJson"),a(this,"curValue"),a(this,"curIndexArr"),a(this,"isCascade"),a(this,"isJsonType"),a(this,"startY"),a(this,"moveEndY"),a(this,"moveY"),a(this,"preMoveY"),a(this,"offsetY"),a(this,"offsetSum"),a(this,"oversizeBorder"),a(this,"enableClickStatus"),a(this,"isPC"),a(this,"optionHeight"),a(this,"curDistance"),a(this,"cascadeJsonData"),a(this,"eventHandleMap"),a(this,"initDeepCount"),a(this,"config"),!f.checkRequiredConfig(e)||(this.config=Object.assign({},f.defaultConfig,e),this.wheelsData=e.wheels,this.isJsonType=!1,this.cascadeJsonData=[],this.displayJson=[],this.curValue=[],this.curIndexArr=[],this.isCascade=!1,this.startY,this.moveEndY,this.moveY,this.preMoveY,this.offsetY=0,this.offsetSum=0,this.oversizeBorder,this.curDistance=[],this.enableClickStatus=!1,this.isPC=!0,this.optionHeight=0,this.initPosition=e.position||[],this.initColWidth=e.colWidth||[],this.init())}init(){const{config:e}=this;if(this.isJsonType=f.checkDataType(this.wheelsData),this.renderComponent(this.wheelsData),!!this.checkTriggerAvailable()){if(this.wheelList=this.mobileSelect.getElementsByClassName("ms-wheel"),this.sliderList=this.mobileSelect.getElementsByClassName("ms-select-container"),this.panel=this.mobileSelect.querySelector(".ms-panel"),this.wheelsContain=this.mobileSelect.querySelector(".ms-wheels"),this.ensureBtn=this.mobileSelect.querySelector(".ms-ensure"),this.cancelBtn=this.mobileSelect.querySelector(".ms-cancel"),this.grayLayer=this.mobileSelect.querySelector(".ms-gray-layer"),this.popUp=this.mobileSelect.querySelector(".ms-content"),this.optionHeight=this.mobileSelect.querySelector("li").offsetHeight,e.initValue&&e.triggerDisplayValue&&(this.trigger.innerText=e.initValue),this.setStyle(e),this.isPC=f.checkIsPC(),this.isCascade=this.checkCascade(),this.isCascade&&this.initCascade(),e.initValue&&(this.initPosition=this.getPositionByValue()),this.initPosition.length<this.sliderList.length){const s=this.sliderList.length-this.initPosition.length;for(let t=0;t<s;t++)this.initPosition.push(0)}this.isCascade?this.initPosition.forEach((s,t)=>{this.checkRange(t,this.initPosition)}):this.setCurDistance(this.initPosition),this.eventHandleMap={cancelBtn:{event:"click",fn:()=>{var s,t,i,n;this.hide(),(t=(s=this.config).cancel)==null||t.call(s,this.curIndexArr,this.curValue,this),(n=(i=this.config).onCancel)==null||n.call(i,this.curValue,this.curIndexArr,this)}},ensureBtn:{event:"click",fn:()=>{var s,t,i,n;this.hide(),this.optionHeight||(this.optionHeight=this.mobileSelect.querySelector("li").offsetHeight);let o="";for(let l=0;l<this.wheelList.length;l++)l==this.wheelList.length-1?o+=this.getInnerText(l):o+=this.getInnerText(l)+this.config.connector;e.triggerDisplayValue&&(this.trigger.innerText=o),this.curIndexArr=this.getIndexArr(),this.curValue=this.getCurValue(),(t=(s=this.config).callback)==null||t.call(s,this.curIndexArr,this.curValue,this),(n=(i=this.config).onChange)==null||n.call(i,this.curValue,this.curIndexArr,this)}},trigger:{event:"click",fn:()=>{this.show()}},grayLayer:{event:"click",fn:()=>this.hide()},popUp:{event:"click",fn:s=>s.stopPropagation()},panel:{event:["touchstart","touchend","touchmove"],fn:s=>this.touch(s)}},this.isPC&&(this.eventHandleMap.panel.event=["mousedown","mousemove","mouseup"]),this.registerEvents("add"),this.fixRowStyle(),e.autoFocus&&this.show()}}static checkIsPC(){return!navigator.userAgent.toLowerCase().match(/ipad|iphone os|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/)}static checkDataType(e){var s,t;return typeof((t=(s=e[0])==null?void 0:s.data)==null?void 0:t[0])=="object"}static checkRequiredConfig(e){const s=f.REQUIRED_PARAMS;if(!e){const t=s.map(i=>`'${i}'`);return f.log("error",`missing required param ${t.join(" and ")}.`),!1}for(let t=0;t<s.length;t++){const i=s[t];if(!e[i])return f.log("error",`missing required param '${i}'.`),!1}return!0}static log(e,s){var t;(t=console[e])==null||t.call(console,`[mobile-select]: ${s}`)}checkTriggerAvailable(){const{config:e}=this;return this.trigger=e.trigger instanceof HTMLElement?e.trigger:document.querySelector(e.trigger),this.trigger?!0:(f.log("error","trigger HTMLElement does not found on your document."),!1)}getPositionByValue(){var e;const{keyMap:s,connector:t,initValue:i}=this.config,n=(i==null?void 0:i.split(t))||[];if(this.isJsonType){let o=(e=this.wheelsData[0])==null?void 0:e.data;return n.reduce((l,c)=>{var h;const d=o==null?void 0:o.findIndex(u=>u[s.value]==c);return l.push(d<0?0:d),o=(h=o[d])==null?void 0:h[s.childs],l},[])}return n.reduce((o,l,c)=>{var h,d;const u=(d=(h=this.wheelsData[c])==null?void 0:h.data)==null?void 0:d.findIndex(g=>g==l);return o.push(u<0?0:u),o},[])}setTitle(e){this.mobileSelect.querySelector(".ms-title").innerHTML=e}setStyle(e){if(e.ensureBtnColor&&(this.ensureBtn.style.color=e.ensureBtnColor),e.cancelBtnColor&&(this.cancelBtn.style.color=e.cancelBtnColor),e.titleColor){const s=this.mobileSelect.querySelector(".ms-title");s.style.color=e.titleColor}if(e.textColor&&(this.panel=this.mobileSelect.querySelector(".ms-panel"),this.panel.style.color=e.textColor),e.titleBgColor){const s=this.mobileSelect.querySelector(".ms-btn-bar");s.style.backgroundColor=e.titleBgColor}if(e.bgColor){this.panel=this.mobileSelect.querySelector(".ms-panel");const s=this.mobileSelect.querySelector(".ms-shadow-mask");this.panel.style.backgroundColor=e.bgColor,s.style.background="linear-gradient(to bottom, "+e.bgColor+", rgba(255, 255, 255, 0), "+e.bgColor+")"}if(typeof e.maskOpacity=="number"){const s=this.mobileSelect.querySelector(".ms-gray-layer");s.style.background="rgba(0, 0, 0, "+e.maskOpacity+")"}}show(){var e,s,t;this.mobileSelect.classList.add("ms-show"),(e=document.querySelector("body"))==null||e.classList.add("ms-show"),typeof this.config.onShow=="function"&&((t=(s=this.config).onShow)==null||t.call(s,this.curValue,this.curIndexArr,this))}hide(){var e,s,t;this.mobileSelect.classList.remove("ms-show"),(e=document.querySelector("body"))==null||e.classList.remove("ms-show"),typeof this.config.onHide=="function"&&((t=(s=this.config).onHide)==null||t.call(s,this.curValue,this.curIndexArr,this))}registerEvents(e){for(const[s,t]of Object.entries(this.eventHandleMap))typeof t.event=="string"?this[s][`${e}EventListener`](t.event,t.fn,{passive:!1}):t.event.forEach(i=>{this[s][`${e}EventListener`](i,t.fn,{passive:!1})})}destroy(){var e,s;this.registerEvents("remove"),(s=(e=this.mobileSelect)==null?void 0:e.parentNode)==null||s.removeChild(this.mobileSelect)}getOptionsHtmlStr(e){const{keyMap:s}=this.config;let t="";if(this.isJsonType)for(let i=0;i<e.length;i++){const n=e[i][s.id],o=e[i][s.value];t+=`<li data-id="${n}">${o}</li>`}else for(let i=0;i<e.length;i++)t+="<li>"+e[i]+"</li>";return t}renderComponent(e){this.mobileSelect=document.createElement("div"),this.mobileSelect.className="ms-mobile-select",this.mobileSelect.innerHTML=`<div class="ms-gray-layer"></div>
        <div class="ms-content">
          <div class="ms-btn-bar">
            <div class="ms-fix-width">
              <div class="ms-cancel">${this.config.cancelBtnText}</div>  
              <div class="ms-title">${this.config.title||""}</div>
              <div class="ms-ensure">${this.config.ensureBtnText}</div>
            </div>
          </div>
          <div class="ms-panel">
            <div class="ms-fix-width">
            <div class="ms-wheels"></div>
            <div class="ms-select-line"></div>
            <div class="ms-shadow-mask"></div>
          </div>
        </div>`,document.body.appendChild(this.mobileSelect);let s="";for(let t=0;t<e.length;t++)s+=`<div class="ms-wheel" data-index="${t}"><ul class="ms-select-container">`,s+=this.getOptionsHtmlStr(e[t].data),s+="</ul></div>";this.mobileSelect.querySelector(".ms-wheels").innerHTML=s}reRenderWheels(){const e=this.wheelList.length-this.displayJson.length;if(e>0)for(let s=0;s<e;s++)this.wheelsContain.removeChild(this.wheelList[this.wheelList.length-1]);for(let s=0;s<this.displayJson.length;s++)if(this.wheelList[s])this.sliderList[s].innerHTML=this.getOptionsHtmlStr(this.displayJson[s]);else{const t=document.createElement("div");t.className="ms-wheel",t.innerHTML=`<ul class="ms-select-container">${this.getOptionsHtmlStr(this.displayJson[s])}</ul>`,t.setAttribute("data-index",s.toString()),this.wheelsContain.appendChild(t)}}checkCascade(){var e;const{keyMap:s}=this.config;if(this.isJsonType){const t=this.wheelsData[0].data;for(let i=0;i<t.length;i++)if(s.childs in t[i]&&((e=t[i][s.childs])==null?void 0:e.length)>0)return this.cascadeJsonData=this.wheelsData[0].data,!0}return!1}initCascade(){this.displayJson.push(this.cascadeJsonData),this.initPosition.length>0?(this.initDeepCount=0,this.initCheckArrDeep(this.cascadeJsonData[this.initPosition[0]])):this.checkArrDeep(this.cascadeJsonData[0]),this.reRenderWheels()}initCheckArrDeep(e){if(e){const{keyMap:s}=this.config;if(s.childs in e&&e[s.childs].length>0){this.displayJson.push(e[s.childs]),this.initDeepCount++;const t=e[s.childs][this.initPosition[this.initDeepCount]];t?this.initCheckArrDeep(t):this.checkArrDeep(e[s.childs][0])}}}checkArrDeep(e){if(!e)return;const{keyMap:s}=this.config;s.childs in e&&e[s.childs].length>0&&(this.displayJson.push(e[s.childs]),this.checkArrDeep(e[s.childs][0]))}checkRange(e,s){var t;const i=this.displayJson.length-1-e,{keyMap:n}=this.config;for(let l=0;l<i;l++)this.displayJson.pop();let o;for(let l=0;l<=e;l++)o=l==0?this.cascadeJsonData[s[0]]:(t=o==null?void 0:o[n.childs])==null?void 0:t[s[l]];this.checkArrDeep(o),this.reRenderWheels(),this.fixRowStyle(),this.setCurDistance(this.resetPosition(e,s))}resetPosition(e,s){const t=[...s];let i;if(this.sliderList.length>s.length){i=this.sliderList.length-s.length;for(let n=0;n<i;n++)t.push(0)}else if(this.sliderList.length<s.length){i=s.length-this.sliderList.length;for(let n=0;n<i;n++)t.pop()}for(let n=e+1;n<t.length;n++)t[n]=0;return t}updateWheels(e){if(this.isCascade){if(this.cascadeJsonData=e,this.displayJson=[],this.initCascade(),this.initPosition.length<this.sliderList.length){const s=this.sliderList.length-this.initPosition.length;for(let t=0;t<s;t++)this.initPosition.push(0)}this.setCurDistance(this.initPosition),this.fixRowStyle()}}updateWheel(e,s){if(this.isCascade){f.log("error","'updateWheel()' not support cascade json data, please use 'updateWheels()' instead to update the whole data source");return}let t="";t+=this.getOptionsHtmlStr(s),this.wheelsData[e]=this.isJsonType?{data:s}:s,this.sliderList[e].innerHTML=t}fixRowStyle(){if(this.initColWidth.length&&this.initColWidth.length===this.wheelList.length){const s=this.initColWidth.reduce((t,i)=>t+i,0);this.initColWidth.forEach((t,i)=>{this.wheelList[i].style.width=(t/s*100).toFixed(2)+"%"});return}const e=(100/this.wheelList.length).toFixed(2);for(let s=0;s<this.wheelList.length;s++)this.wheelList[s].style.width=e+"%"}getIndex(e){return Math.round((2*this.optionHeight-e)/this.optionHeight)}getIndexArr(){const e=[];for(let s=0;s<this.curDistance.length;s++)e.push(this.getIndex(this.curDistance[s]));return e}getCurValue(){const e=[],s=this.getIndexArr(),{keyMap:t}=this.config;if(this.isCascade)for(let i=0;i<this.wheelList.length;i++){const n=this.displayJson[i][s[i]];n&&e.push({[t.id]:n[t.id],[t.value]:n[t.value]})}else if(this.isJsonType)for(let i=0;i<this.curDistance.length;i++)e.push(this.wheelsData[i].data[this.getIndex(this.curDistance[i])]);else for(let i=0;i<this.curDistance.length;i++)e.push(this.getInnerText(i));return e}getValue(){return this.curValue}calcDistance(e){return 2*this.optionHeight-e*this.optionHeight}setCurDistance(e){const s=[];for(let t=0;t<this.sliderList.length;t++)s.push(this.calcDistance(e[t])),this.movePosition(this.sliderList[t],s[t]);this.curDistance=s}fixPosition(e){return-(this.getIndex(e)-2)*this.optionHeight}movePosition(e,s){e.style.transform="translate3d(0,"+s+"px, 0)"}locatePosition(e,s){this.curDistance[e]=this.calcDistance(s),this.movePosition(this.sliderList[e],this.curDistance[e]),this.isCascade&&this.checkRange(e,this.getIndexArr())}updateCurDistance(e,s){this.curDistance[s]=parseInt(e.style.transform.split(",")[1])}getInnerText(e){var s;const t=this.sliderList[e].getElementsByTagName("li").length;let i=this.getIndex(this.curDistance[e]);return i>=t?i=t-1:i<0&&(i=0),((s=this.sliderList[e].getElementsByTagName("li")[i])==null?void 0:s.innerText)||""}touch(e){var s,t,i,n,o,l,c,h;const d=(e.composedPath&&e.composedPath()).find(S=>{var p;return(p=S.classList)==null?void 0:p.contains("ms-wheel")});if(!d)return;const u=d.firstChild,g=parseInt(d.getAttribute("data-index")||"0");switch(e.type){case"touchstart":case"mousedown":u.style.transition="none 0s ease-out",this.startY=Math.floor(e instanceof TouchEvent?e.touches[0].clientY:e.clientY),this.preMoveY=this.startY,e.type==="mousedown"&&(this.enableClickStatus=!0);break;case"touchmove":case"mousemove":if(e.preventDefault(),e.type==="mousemove"&&!this.enableClickStatus)break;this.moveY=Math.floor(e instanceof TouchEvent?e.touches[0].clientY:e.clientY),this.offsetY=(this.moveY-this.preMoveY)*this.config.scrollSpeed,this.updateCurDistance(u,g),this.curDistance[g]=this.curDistance[g]+this.offsetY,this.movePosition(u,this.curDistance[g]),this.preMoveY=this.moveY;break;case"touchend":case"mouseup":if(u.style.transition="transform 0.18s ease-out",this.moveEndY=Math.floor(e instanceof TouchEvent?e.changedTouches[0].clientY:e.clientY),this.offsetSum=this.moveEndY-this.startY,this.oversizeBorder=-(u.getElementsByTagName("li").length-3)*this.optionHeight,this.offsetSum==0){const S=Math.floor((window.innerHeight-this.moveEndY)/40);if(S!=2){const p=S-2,y=this.curDistance[g]+p*this.optionHeight;y<=2*this.optionHeight&&y>=this.oversizeBorder&&(this.curDistance[g]=y,this.movePosition(u,this.curDistance[g]),(t=(s=this.config).transitionEnd)==null||t.call(s,this.getIndexArr(),this.getCurValue(),this),(n=(i=this.config).onTransitionEnd)==null||n.call(i,this.getCurValue(),this.getIndexArr(),this))}}else this.updateCurDistance(u,g),this.curDistance[g]=this.fixPosition(this.curDistance[g]),this.curDistance[g]>2*this.optionHeight?this.curDistance[g]=2*this.optionHeight:this.curDistance[g]<this.oversizeBorder&&(this.curDistance[g]=this.oversizeBorder),this.movePosition(u,this.curDistance[g]),(l=(o=this.config).transitionEnd)==null||l.call(o,this.getIndexArr(),this.getCurValue(),this),(h=(c=this.config).onTransitionEnd)==null||h.call(c,this.getCurValue(),this.getIndexArr(),this);e.type==="mouseup"&&(this.enableClickStatus=!1),this.isCascade&&this.checkRange(g,this.getIndexArr());break}}};let b=f;a(b,"defaultConfig",{keyMap:{id:"id",value:"value",childs:"childs"},position:[],colWidth:[],title:"",connector:" ",ensureBtnText:"确认",cancelBtnText:"取消",triggerDisplayValue:!0,scrollSpeed:1}),a(b,"REQUIRED_PARAMS",["trigger","wheels"]);function K(e){const s=w.useRef(null);let t=w.useRef(null);return w.useEffect(()=>(console.log(" triggerDisplayValue: !props.children",!e.children),console.log("useEffect:实例化调用",t),t.current||(t.current=new b({...e.config,trigger:s.current,triggerDisplayValue:!e.children})),()=>{t==null||t.current.destroy(),t.current=null,console.log("销毁时调用",t)}),[]),r.jsx("div",{children:r.jsx("div",{className:"ms-default-trigger",ref:s,children:e.children||e.placeholder||"Please select an option.."})})}const E="timerHistory",L="subs",$="app_settings",M="app_scroll",A="POPUP_DISCUSS",I="POPUP_SETTINGS",H="POPUP_DEMO",X=/([0-9]+):([0-9]+):([0-9]+)[,.]([0-9]+)/g,Z=/([0-9]+):([0-9]+):([0-9]+)[,.]([0-9]+)/,F=/\n[0-9]{1,6}\n/,D=/\n[0-9]{1,6}?\s\n/,ee=/\r\n/,te=new RegExp("<(font|i)[^><]*>|<.(font|i)[^><]*>","g"),T="[^^]";function se(e){return e||F}function N(e){var n;const s=e.match(X);if(!s)return 0;const t=[];if(s.length){const o=new Date,l=(n=s[0].match(Z))==null?void 0:n.map(Number);l&&o.setHours(Number(l[1]),l[2],l[3],l[4]),t.push(o)}const i=new Date;return i.setHours(0,0,0,0),t.push(i),t[0].getTime()-t[1].getTime()}let P=0;const C=[F,D,ee];function B(e){let s=0;for(let t=0;t<C.length;t+=1)if(e.split(C[t]).length>1){s=t;break}return s}function ie(e,s){const t=N(e);let i="";for(let n=P;n<s.length;n+=1){const o=N(s[n]);if(t-o<500){P=n,i=s[n];break}}return i}function V(e){let s=e.bstr.split(`
`);return s=s.filter(t=>t.match("Dialogue: ")).map((t,i)=>{const n=t.split("Dialogue: ")[1].split(",");let[o,l,c,h,d,u,g,S,p,y]=n;return l.match(/^0:/)&&(l=`0${l}`),c.match(/^0:/)&&(c=`0${c}`),`
${i}
${l} --> ${c}
${y}
`}),s.join("")}const J=e=>e.replace(te,"");function ne(e){P=0;let[s,t]=e;s.filename.match(/\.ass$/)&&(s.bstr=V(s)),t.filename.match(/\.ass$/)&&(t.bstr=V(t));const i=B(s.bstr),n=B(t.bstr);s.bstr=J(s.bstr),t.bstr=J(t.bstr);let o=s.bstr.split(C[i]);C[i]&&(s.sep=`${C[i]}`);let l=t.bstr.split(C[n]);o.length===1&&(o=s.bstr.split(D)),l.length===1&&(o=t.bstr.split(D));const c=[];for(let d=0;d<o.length;d+=1)c.push(ie(o[d],l));const h={bstr:c.join(T),filename:t.filename,sep:T};return[s,h]}function R(e){let{sep:s}=e;return s&&s!==T&&(s=new RegExp(s.replace(/\//g,""))),e.bstr.split(se(s))}const x=()=>{let e=v.getJ(L)||[];return e||(e=[]),e},k=()=>v.getJ($)||{};function le(e){return""}function oe(e,s){const{voice:t,rate:i=1,volume:n=1,pitch:o=1}=k(),l=new SpeechSynthesisUtterance;l.text=`${e}`.replace(/\n/g,""),l.volume=parseFloat(String(n)),l.rate=parseFloat(String(i)),l.pitch=parseFloat(String(o)),window.speechSynthesis.speak(l)}const q=e=>{if(!e||!Array.isArray(e)||e.length===0)return{items:[],filenames:[]};const s=[e[0].filename];let t=[];if(e[0]&&(t=[R(e[0])]),e[1]){s.push(e[1].filename);const i=R(e[1]);t.push(i)}return{items:t,filenames:s}},re=(e,s=!1)=>{e.length>2&&(e=e.slice(0,2));let t=[],i="";for(let l=0;l<e.length;l+=1)e[l].bstr.trim()?t.push({bstr:e[l].bstr,filename:e[l].filename}):i="EMPTY";if(t.length){if(s){t=e;const l=x();l&&j(l,!0)}else t.length===2&&(t=ne(t));v.setJ(L,t)}const{items:n,filenames:o}=q([...t]);return s||j(t),{items:n,showStr:"",error:i,filenames:o}},j=(e,s=!1)=>{let t=v.getJ(E)||[],i=[],n=!1,o=!1;t.length?e.length>1&&(i=t.filter(l=>!Array.isArray(l)||l.length===0?!1:l[0].filename!==e[0].filename||l[0].filename!==e[1].filename),t.length!==i.length&&(n=!0)):e.length>1&&(i=[e],o=!0),s&&e.length>1&&!o&&(i=i.concat([e])),i.length&&(n||s)&&v.setJ(E,i)};function Y(e,s=!1){try{const t=speechSynthesis.getVoices(),i=document.getElementById("voice");if(!i)return;const n=document.createElement("option");if(n.value="",n.innerHTML="",i.appendChild(n),t&&s){const o=document.getElementById("msg");o&&(t.length?o.innerHTML+=` And <strong>has</strong> ${t.length} speech synthesis.`:o.innerHTML+=` But don't have any speech synthesis. We recommend using Google 
 <strong>Chrome / Chrome Mobile</strong> for this <strong>text-to-speech</strong>`)}t.forEach(function(o){const l=document.createElement("option");l.value=o.name,l.innerHTML=o.name,o.name===e&&(l.selected=!0),i.appendChild(l)})}catch{}}function O(e=""){const s=document.getElementById("msg");s&&("speechSynthesis"in window?s.innerHTML='Your browser <strong onclick="return tryToCopyLines()">supports</strong> speech synthesis.':(s.innerHTML='Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.',s.classList.add("not-supported"))),Y(e),window.speechSynthesis.onvoiceschanged=function(){Y(e,!0)}}window.tryToCopyLines=()=>{typeof window.availableVoicesTxt>"u"||navigator.clipboard.writeText(window.availableVoicesTxt)};const ae=({data:e,togglePopup:s,voiceSettingSave:t})=>{const{voice:i,error:n,volume:o,rate:l,pitch:c}=e,[h,d]=w.useState({voice:i,volume:o,rate:l,pitch:c});w.useEffect(()=>{O(i)},[]);const u=p=>{const{name:y,value:U}=p.target;d(W=>({...W,[y]:U}))},g=p=>{if(!(!i&&!h.voice))return t(h),p.preventDefault(),!1},S=p=>{t({...h,voice:""},!0),s(p,!1)};return console.log(h),r.jsx("div",{children:r.jsx("div",{className:"modal-window",children:r.jsxs("div",{children:[r.jsx("a",{href:"",title:"Close",className:"modal-close",onClick:p=>s(p,!1),children:"Close"}),r.jsx("h4",{children:"Web Speech Synthesis Demo"}),r.jsx("div",{children:r.jsxs("form",{onSubmit:()=>!1,id:"settings-form","data-voice":i,children:[r.jsxs("div",{id:"page-wrapper",children:[r.jsx("p",{id:"msg"}),r.jsxs("div",{className:"option",children:[r.jsx("label",{htmlFor:"voice",children:"Voice"})," ",r.jsx("select",{required:!0,name:"voice",id:"voice",value:h.voice||"",onChange:u})]}),r.jsxs("div",{className:"option",children:[r.jsx("label",{htmlFor:"volume",children:"Volume"}),r.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",name:"volume",id:"volume",value:h.volume,onChange:u})]}),r.jsxs("div",{className:"option",children:[r.jsx("label",{htmlFor:"rate",children:"Rate"}),r.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",name:"rate",id:"rate",value:h.rate,onChange:u})]}),r.jsxs("div",{className:"option",children:[r.jsx("label",{htmlFor:"pitch",children:"Pitch"}),r.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",name:"pitch",id:"pitch",value:h.pitch,onChange:u})]}),n?r.jsx("div",{color:"red",children:n}):null,r.jsxs("div",{className:"btn-wrap",children:[r.jsx("button",{className:"btn btn-primary",onClick:g,children:"Save"}),"  ",r.jsx("button",{className:"btn btn-danger",onClick:S,children:"Clear Settings"})]})]}),r.jsx("div",{children:r.jsx("a",{href:"",title:"Close",className:"modal-close bottom",onClick:p=>s(p,!1),children:"Close"})})]})})]})})})},he={SAME:"Files same, please upload different filename",EMPTY:"One of uploaded file has empty content, please upload another file"},ce=[{id:"1",value:"兰博基尼"},{id:"2",value:"劳斯莱斯",childs:[{id:"1",value:"曜影"},{id:"2",value:"幻影",childs:[{id:"1",value:"标准版"},{id:"2",value:"加长版"},{id:"3",value:"巅峰之旅"},{id:"4",value:"流光熠世"},{id:"5",value:"都会典藏版"}]},{id:"3",value:"古思特",childs:[{id:"1",value:"加长版"},{id:"2",value:"永恒之爱"},{id:"3",value:"英骥"},{id:"4",value:"阿尔卑斯典藏版"}]},{id:"4",value:"魅影",childs:[{id:"1",value:"标准版"},{id:"2",value:"Black Badge"}]}]},{id:"3",value:"宾利",childs:[{id:"1",value:"慕尚",childs:[{id:"1",value:"标准版"},{id:"2",value:"极致版"}]},{id:"2",value:"欧陆",childs:[{id:"1",value:"尊贵版"},{id:"2",value:"敞篷标准版"},{id:"3",value:"敞篷尊贵版"}]}]},{id:"4",value:"法拉利",childs:[{id:"1",value:"LaFerrari"},{id:"2",value:"法拉利488"},{id:"3",value:"GTC4Lusso"}]},{id:"5",value:"玛莎拉蒂",childs:[{id:"1",value:"总裁"},{id:"2",value:"玛莎拉蒂GT"},{id:"3",value:"Levante"}]}],de=()=>{w.useState("10:00");const e={wheels:[{data:ce}],onChange:(s,t,i)=>{console.log("callback",s,t,i)}};return r.jsx("div",{className:"App",children:r.jsx(K,{config:e})})};class me extends w.Component{constructor(t){super(t);m(this,"buttonPressTimer");m(this,"handleUpload",(t,i=!1)=>{let{filenames:n}=this.state;if(n.length===1&&t[0].filename===n[0]){this.setState({error:"SAME"});return}t.length===1&&n.length===1&&x()[0]&&(t=t.concat([...x()]));const o=re(t,i);i&&(o.modal=""),o.modal="",o.showPopupFiles=!1,this.setState(()=>({...o}))});m(this,"clear",()=>{const t=x();j(t,!0),v.rm(L),this.setState({filenames:[],items:[],showPopupFiles:!1,showStr:"",error:""})});m(this,"show",({target:t},i=!1)=>{if(t.tagName==="BUTTON")return;const n=t.dataset.ind,{items:o,isShown:l,ind:c}=this.state;let h=l;const[,d]=o;if(d[n]){h=n!==c||!h;let u="";h&&(u=d[n]),this.setState({showStr:u,ind:n,isShown:h},()=>{i&&this.tryToSpeak(u)()})}});m(this,"handleButtonRelease",()=>{this.buttonPressTimer&&clearTimeout(this.buttonPressTimer)});m(this,"handleScroll",()=>{v.set(M,window.scrollY)});m(this,"getStr",t=>{const i=t.split(/>\s[0-9]+:[0-9]+:[0-9]+[.,][0-9]+/);return i[1]&&(t=i[1]),t});m(this,"renderRow",(t,i)=>(t=this.getStr(t),t?r.jsx("div",{onTouchEnd:this.handleButtonRelease,onMouseDown:this.show,onMouseUp:this.handleButtonRelease,"data-ind":i,children:r.jsxs("div",{"data-ind":i,children:[t,r.jsx("span",{className:"tooltiptext",children:t?r.jsx("button",{"data-ind":this.state.showStr&&i,onClick:this.tryToSpeak(t),className:"icon speech-voice"}):null})]})},`${t}${i}`):null));m(this,"togglePopup",(t,i=!0)=>{t.preventDefault(),this.setState({showPopupFiles:i,modal:""})});m(this,"toggleDemo",t=>{if(this.state.modal===H)return this.togglePopup(t,!1);this.toggleModal(t,H)});m(this,"toggleModal",(t,i=A)=>{t.preventDefault(),this.setState({modal:i})});m(this,"closeModal",()=>{this.setState({modal:""})});m(this,"tryToSpeak",t=>i=>{const{voice:n,showStr:o,ind:l}=this.state;let c=!1;if(i&&i.target.dataset.ind&&l!==i.target.dataset.ind)return this.show({target:{tagName:"DIV",dataset:i.target.dataset}},!0);o&&(t=this.getStr(o),c=!0);const h=x(),d=le(h[c?1:0]);if(n||d)return oe(t);this.voiceSetting(i)});m(this,"voiceSetting",t=>{t&&t.preventDefault(),this.setState({modal:I})});m(this,"voiceSettingSave",(t,i=!1)=>{const{voice:n,rate:o,pitch:l,volume:c}=t;if(!i){if(this.state.voice===n||!n&&this.state.voice)return this.closeModal()}const h=k();v.setJ($,{...h,voice:n,rate:o,pitch:l,volume:c}),this.setState({modal:"",voice:n,rate:o,pitch:l,volume:c})});this.buttonPressTimer=void 0;const{items:i=[],filenames:n=[]}=q(x()),{voice:o,rate:l=1,volume:c=1,pitch:h=1}=k();this.state={showStr:"",ind:"",isShown:-1,error:"",filenames:n,items:i,showPopupFiles:!1,modal:"",voice:o,rate:l,volume:c,pitch:h}}componentDidMount(){const t=v.get(M,!1);O(),t&&window.scrollTo(0,t),window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){const{items:t,showStr:i,error:n,filenames:o,showPopupFiles:l,modal:c}=this.state,h=`folder${t.length?"-fill":""}`;return r.jsxs("div",{children:[c===A?r.jsx("div",{className:"modal-window",children:r.jsxs("div",{children:[r.jsx("a",{href:"",title:"Close",className:"modal-close",onClick:d=>this.togglePopup(d,!1),children:"Close"}),r.jsx("div",{children:r.jsx("a",{href:"",title:"Close",className:"modal-close bottom",onClick:d=>this.togglePopup(d,!1),children:"Close"})})]})}):null,i?r.jsx("div",{className:"tooltip1",children:r.jsx("span",{className:"tooltiptext",children:this.getStr(i)})}):null,r.jsx("div",{children:r.jsxs("div",{className:"buttons",children:[t.length===2?r.jsx("button",{className:`icon ${h}-icon`,onClick:this.togglePopup}):null,r.jsx("button",{className:"icon speech-voice-setting",onClick:this.voiceSetting})]})}),r.jsxs("div",{className:"lang-items",children:[t.length===1?r.jsxs("div",{className:"load-step",children:[n?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"alert alert-danger",children:he[n]}),r.jsx("br",{})]}):null,r.jsxs("div",{children:["1 File ",o[0],r.jsx("span",{className:"green",children:" loaded"})]}),r.jsxs("div",{children:["2 File ",r.jsx("span",{className:"gray",children:"not loaded"})]}),r.jsx("br",{}),r.jsx("div",{children:r.jsx("button",{className:"btn",onClick:this.clear,children:"Delete all"})})]}):null,t.length===2?t[0].map((d,u)=>this.renderRow(d,u)):null]}),c===I?r.jsx(ae,{data:this.state,togglePopup:this.togglePopup,voiceSettingSave:this.voiceSettingSave}):null,r.jsx(de,{})]})}}export{me as default};
