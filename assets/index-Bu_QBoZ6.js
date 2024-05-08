var Ft=Object.defineProperty;var Yt=(u,f,o)=>f in u?Ft(u,f,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[f]=o;var q=(u,f,o)=>(Yt(u,typeof f!="symbol"?f+"":f,o),o);import{r as ke,a as Ut,S as ve,j as m}from"./index-rFJZDvL9.js";var lt={exports:{}};(function(){var u={346:function(r,a,l){var d=l(81),g=l.n(d),h=l(645),p=l.n(h)()(g());p.push([r.id,`* {\r
   margin: 0;\r
   padding: 0;\r
   box-sizing: border-box;\r
   font-family: 'Roboto', sans-serif;\r
}\r
\r
button {\r
   border: none;\r
   background: transparent;\r
   cursor: pointer;\r
}\r
\r
input {\r
   border: none;\r
   background: transparent;\r
   cursor: pointer;\r
}\r
input:focus {\r
   outline: none;\r
}\r
\r
.react-ios-time-picker {\r
   margin-bottom: 50px;\r
   border-radius: 12px;\r
   overflow: hidden;\r
   box-shadow: 0 11px 15px #0005;\r
}\r
\r
.react-ios-time-picker-transition {\r
   animation: fade-in 150ms ease-out;\r
}\r
\r
@keyframes fade-in {\r
   0% {\r
      transform: translateY(150px);\r
      opacity: 0;\r
   }\r
   100% {\r
      transform: translateY(0);\r
      opacity: 1;\r
   }\r
}\r
\r
.react-ios-time-picker-container {\r
   display: flex;\r
   justify-content: center;\r
   position: relative;\r
   background-color: #1d1d1d;\r
   width: 220px;\r
   overflow: hidden;\r
   /* border-radius: 0 0 15px 17px; */\r
   padding: 20px 0;\r
   /* box-shadow: inset 0px 0px 5px 0px rgba(255, 159, 10, 0.5); */\r
   /* box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%),\r
    0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%); */\r
}\r
\r
.react-ios-time-picker-hour {\r
   position: relative;\r
   width: 50px;\r
   overflow: hidden;\r
   z-index: 100;\r
   margin-right: 5px;\r
}\r
\r
.react-ios-time-picker-minute {\r
   position: relative;\r
   width: 50px;\r
   overflow: hidden;\r
   z-index: 100;\r
   margin-left: 5px;\r
}\r
\r
.react-ios-time-picker-hour-format {\r
   position: relative;\r
   width: 40px;\r
   overflow: hidden;\r
   z-index: 100;\r
}\r
\r
.react-ios-time-picker-fast {\r
   transition: transform 700ms cubic-bezier(0.13, 0.67, 0.01, 0.94);\r
}\r
\r
.react-ios-time-picker-slow {\r
   transition: transform 600ms cubic-bezier(0.13, 0.67, 0.01, 0.94);\r
}\r
\r
.react-ios-time-picker-selected-overlay {\r
   position: absolute;\r
   border-radius: 6px;\r
   background-color: #2c2c2f;\r
   pointer-events: none;\r
   margin: 0 10px;\r
   left: 0;\r
   right: 0;\r
   z-index: 1;\r
   /* box-shadow: inset 0px 0px 2px 0px rgba(255, 159, 10, 0.3); */\r
}\r
\r
.react-ios-time-picker-top-shadow {\r
   position: absolute;\r
   top: 0;\r
   width: 100%;\r
   background: #0009;\r
   background: linear-gradient(180deg, #0009 0%, #1c1c1c 100%);\r
}\r
\r
.react-ios-time-picker-bottom-shadow {\r
   position: absolute;\r
   bottom: 0;\r
   width: 100%;\r
   background: #0009;\r
   background: linear-gradient(0deg, #0009 0%, hsla(0, 0%, 11%, 1) 100%);\r
}\r
\r
.react-ios-time-picker-cell-hour {\r
   width: 100%;\r
   text-align: center;\r
   display: flex;\r
   justify-content: end;\r
   align-items: center;\r
   user-select: none;\r
   transition: all 100ms linear;\r
}\r
.react-ios-time-picker-cell-minute {\r
   width: 100%;\r
   text-align: center;\r
   display: flex;\r
   justify-content: start;\r
   align-items: center;\r
   user-select: none;\r
   transition: all 100ms linear;\r
}\r
.react-ios-time-picker-cell-hour-format {\r
   width: 100%;\r
   text-align: center;\r
   display: flex;\r
   justify-content: end;\r
   align-items: center;\r
   user-select: none;\r
   transition: all 100ms linear;\r
}\r
\r
.react-ios-time-picker-cell-inner-hour {\r
   width: fit-content;\r
   height: 100%;\r
   transition: all 100ms linear;\r
   cursor: pointer;\r
   border-radius: 7px;\r
   line-height: 35px;\r
   text-align: center;\r
   display: flex;\r
   justify-content: end;\r
   align-items: center;\r
   font-size: 14px;\r
   color: #666;\r
   padding: 0 10px;\r
}\r
\r
.react-ios-time-picker-cell-inner-hour-format {\r
   width: fit-content;\r
   height: 100%;\r
   transition: all 100ms linear;\r
   cursor: pointer;\r
   border-radius: 7px;\r
   line-height: 35px;\r
   text-align: center;\r
   display: flex;\r
   justify-content: end;\r
   align-items: center;\r
   font-size: 14px;\r
   color: #6a6a6b;\r
   padding: 0 10px;\r
}\r
\r
.react-ios-time-picker-cell-inner-minute {\r
   width: fit-content;\r
   height: 100%;\r
   transition: all 100ms linear;\r
   cursor: pointer;\r
   border-radius: 7px;\r
   line-height: 35px;\r
   text-align: center;\r
   display: flex;\r
   justify-content: start;\r
   align-items: center;\r
   font-size: 14px;\r
   color: #6a6a6b;\r
   padding: 0 10px;\r
}\r
\r
.react-ios-time-picker-cell-inner-hour:hover,\r
.react-ios-time-picker-cell-inner-minute:hover,\r
.react-ios-time-picker-cell-inner-hour-format:hover {\r
   background-color: #ff9d0ac9;\r
   color: white;\r
}\r
\r
.react-ios-time-picker-cell-inner-selected {\r
   /* font-weight: 500; */\r
   color: #f7f7f7;\r
   font-size: 16px;\r
}\r
\r
.react-ios-time-picker-cell-inner-hour-format-selected {\r
   font-weight: 400;\r
   color: #f7f7f7;\r
}\r
\r
.react-ios-time-picker-btn-container {\r
   position: relative;\r
   display: flex;\r
   justify-content: space-between;\r
   background-color: #292929;\r
   border-bottom: 1px solid #333;\r
   z-index: 100;\r
}\r
\r
.react-ios-time-picker-btn {\r
   padding: 10px 15px;\r
   font-size: 13px;\r
   color: #fe9f06;\r
   transition: all 150ms linear;\r
   font-weight: 500;\r
   z-index: 1;\r
}\r
\r
.react-ios-time-picker-btn:hover {\r
   opacity: 0.6;\r
}\r
\r
.react-ios-time-picker-btn-cancel {\r
   font-size: 12px;\r
   font-weight: 300;\r
}\r
\r
.react-ios-time-picker-popup {\r
   position: fixed;\r
   top: 0;\r
   bottom: 0;\r
   left: 0;\r
   right: 0;\r
   display: flex;\r
   justify-content: center;\r
   align-items: flex-end;\r
   z-index: 99998;\r
}\r
\r
.react-ios-time-picker-popup-overlay {\r
   position: fixed;\r
   top: 0;\r
   bottom: 0;\r
   left: 0;\r
   right: 0;\r
}\r
\r
.react-ios-time-picker-input {\r
   cursor: text;\r
   padding: 5px 10px;\r
   border-radius: 5px;\r
   border: 1px solid #0005;\r
}\r
\r
.react-ios-time-picker-colon {\r
   display: flex;\r
   justify-content: center;\r
   align-items: center;\r
   height: 100%;\r
   color: #f7f7f7;\r
   position: relative;\r
   z-index: 100;\r
   font-weight: 600;\r
}\r
\r
.react-ios-time-picker-cell-inner-hidden {\r
   opacity: 0;\r
   visibility: hidden;\r
   pointer-events: none;\r
}\r
\r
.react-ios-time-picker-hour-format-transition {\r
   transition: transform 100ms ease-out;\r
}\r
`,""]),a.Z=p},645:function(r){r.exports=function(a){var l=[];return l.toString=function(){return this.map(function(d){var g="",h=d[5]!==void 0;return d[4]&&(g+="@supports (".concat(d[4],") {")),d[2]&&(g+="@media ".concat(d[2]," {")),h&&(g+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),g+=a(d),h&&(g+="}"),d[2]&&(g+="}"),d[4]&&(g+="}"),g}).join("")},l.i=function(d,g,h,p,b){typeof d=="string"&&(d=[[null,d,void 0]]);var C={};if(h)for(var T=0;T<this.length;T++){var U=this[T][0];U!=null&&(C[U]=!0)}for(var Z=0;Z<d.length;Z++){var E=[].concat(d[Z]);h&&C[E[0]]||(b!==void 0&&(E[5]===void 0||(E[1]="@layer".concat(E[5].length>0?" ".concat(E[5]):""," {").concat(E[1],"}")),E[5]=b),g&&(E[2]&&(E[1]="@media ".concat(E[2]," {").concat(E[1],"}")),E[2]=g),p&&(E[4]?(E[1]="@supports (".concat(E[4],") {").concat(E[1],"}"),E[4]=p):E[4]="".concat(p)),l.push(E))}},l}},81:function(r){r.exports=function(a){return a[1]}},703:function(r,a,l){var d=l(414);function g(){}function h(){}h.resetWarningCache=g,r.exports=function(){function p(T,U,Z,E,se,be){if(be!==d){var ye=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ye.name="Invariant Violation",ye}}function b(){return p}p.isRequired=p;var C={array:p,bigint:p,bool:p,func:p,number:p,object:p,string:p,symbol:p,any:p,arrayOf:b,element:p,elementType:p,instanceOf:b,node:p,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:h,resetWarningCache:g};return C.PropTypes=C,C}},697:function(r,a,l){r.exports=l(703)()},414:function(r){r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},379:function(r){var a=[];function l(h){for(var p=-1,b=0;b<a.length;b++)if(a[b].identifier===h){p=b;break}return p}function d(h,p){for(var b={},C=[],T=0;T<h.length;T++){var U=h[T],Z=p.base?U[0]+p.base:U[0],E=b[Z]||0,se="".concat(Z," ").concat(E);b[Z]=E+1;var be=l(se),ye={css:U[1],media:U[2],sourceMap:U[3],supports:U[4],layer:U[5]};if(be!==-1)a[be].references++,a[be].updater(ye);else{var Ee=g(ye,p);p.byIndex=T,a.splice(T,0,{identifier:se,updater:Ee,references:1})}C.push(se)}return C}function g(h,p){var b=p.domAPI(p);return b.update(h),function(C){if(C){if(C.css===h.css&&C.media===h.media&&C.sourceMap===h.sourceMap&&C.supports===h.supports&&C.layer===h.layer)return;b.update(h=C)}else b.remove()}}r.exports=function(h,p){var b=d(h=h||[],p=p||{});return function(C){C=C||[];for(var T=0;T<b.length;T++){var U=l(b[T]);a[U].references--}for(var Z=d(C,p),E=0;E<b.length;E++){var se=l(b[E]);a[se].references===0&&(a[se].updater(),a.splice(se,1))}b=Z}}},569:function(r){var a={};r.exports=function(l,d){var g=function(h){if(a[h]===void 0){var p=document.querySelector(h);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch{p=null}a[h]=p}return a[h]}(l);if(!g)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");g.appendChild(d)}},216:function(r){r.exports=function(a){var l=document.createElement("style");return a.setAttributes(l,a.attributes),a.insert(l,a.options),l}},565:function(r,a,l){r.exports=function(d){var g=l.nc;g&&d.setAttribute("nonce",g)}},795:function(r){r.exports=function(a){var l=a.insertStyleElement(a);return{update:function(d){(function(g,h,p){var b="";p.supports&&(b+="@supports (".concat(p.supports,") {")),p.media&&(b+="@media ".concat(p.media," {"));var C=p.layer!==void 0;C&&(b+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),b+=p.css,C&&(b+="}"),p.media&&(b+="}"),p.supports&&(b+="}");var T=p.sourceMap;T&&typeof btoa<"u"&&(b+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(T))))," */")),h.styleTagTransform(b,g,h.options)})(l,a,d)},remove:function(){(function(d){if(d.parentNode===null)return!1;d.parentNode.removeChild(d)})(l)}}}},589:function(r){r.exports=function(a,l){if(l.styleSheet)l.styleSheet.cssText=a;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(a))}}}},f={};function o(r){var a=f[r];if(a!==void 0)return a.exports;var l=f[r]={id:r,exports:{}};return u[r](l,l.exports,o),l.exports}o.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(a,{a}),a},o.d=function(r,a){for(var l in a)o.o(a,l)&&!o.o(r,l)&&Object.defineProperty(r,l,{enumerable:!0,get:a[l]})},o.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)},o.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.nc=void 0;var c={};(function(){o.r(c),o.d(c,{TimePicker:function(){return It}});var r=ke,a=o.n(r),l=Ut,d=o.n(l),g=o(697),h=o.n(g),p=!(typeof window>"u"||!window.document||!window.document.createElement),b=function(){function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();function C(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function T(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||typeof e!="object"&&typeof e!="function"?n:e}var U=function(n){function e(){return C(this,e),T(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(t,i):t.__proto__=i)}(e,n),b(e,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return p?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),d().createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),e}(a().Component);U.propTypes={children:h().node.isRequired,node:h().any};var Z=U,E=function(){function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();function se(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function be(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||typeof e!="object"&&typeof e!="function"?n:e}var ye=function(n){function e(){return se(this,e),be(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(t,i):t.__proto__=i)}(e,n),E(e,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(t){this.renderPortal()}},{key:"componentWillUnmount",value:function(){d().unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(t){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var i=this.props.children;typeof this.props.children.type=="function"&&(i=a().cloneElement(this.props.children)),this.portal=d().unstable_renderSubtreeIntoContainer(this,i,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),e}(a().Component),Ee=ye;ye.propTypes={children:h().node.isRequired,node:h().any};var dt=d().createPortal?Z:Ee;function _e(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,i)}return t}function Fe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(t),!0).forEach(function(i){mt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_e(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function mt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ne(n,e){return function(t){if(Array.isArray(t))return t}(n)||function(t,i){var s=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var S,k,w=[],v=!0,x=!1;try{for(s=s.call(t);!(v=(S=s.next()).done)&&(w.push(S.value),!i||w.length!==i);v=!0);}catch(M){x=!0,k=M}finally{try{v||s.return==null||s.return()}finally{if(x)throw k}}return w}}(n,e)||function(t,i){if(t){if(typeof t=="string")return Ye(t,i);var s=Object.prototype.toString.call(t).slice(8,-1);return s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set"?Array.from(t):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Ye(t,i):void 0}}(n,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Ye(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var ht=function(n){var e=n.height,t=(n.value,n.setValue,n.onAmPmChange,n.setHourFormat),i=n.hourFormat,s=[{number:"AM",translatedValue:(2*e).toString(),selected:!1},{number:"PM",translatedValue:e.toString(),selected:!1}],S=ne((0,r.useState)([{number:"AM",translatedValue:(2*e).toString(),selected:i.hourFormat==="AM"},{number:"PM",translatedValue:e.toString(),selected:i.hourFormat==="PM"}]),2),k=S[0],w=S[1],v=(0,r.useRef)(null),x=ne((0,r.useState)(null),2),M=x[0],V=x[1],X=ne((0,r.useState)(null),2),H=X[0],Q=X[1],R=ne((0,r.useState)(parseInt(k.filter(function(j){return j.selected===!0})[0].translatedValue)),2),I=R[0],P=R[1],F=ne((0,r.useState)(!1),2),$=F[0],L=F[1],z=ne((0,r.useState)(!1),2),B=z[0],D=z[1],W=ne((0,r.useState)(null),2),ae=W[0],J=W[1],G=ne((0,r.useState)(null),2),de=G[0],K=G[1],me=ne((0,r.useState)(null),2),le=(me[0],me[1]),he=ne((0,r.useState)(null),2),ee=(he[0],he[1]),ie=ne((0,r.useState)(null),2),te=(ie[0],ie[1]),ce=ne((0,r.useState)(null),2),ue=(ce[0],ce[1]),ge=function(j){L(!1),P(function(_){return _+M}),D(!0),K(performance.now()),performance.now()-ae<=100?ee("fast"):ee("slow"),te(M<0?"down":"up")};(0,r.useEffect)(function(){$&&(v.current.style.transform="translateY(".concat(I+M,"px)"))},[M]),(0,r.useEffect)(function(){if(B){le(de-ae);var j=Math.round(I/e)*e;j<e&&(j=e),j>2*e&&(j=2*e),v.current.style.transform="translateY(".concat(j,"px)"),P(j),V(0)}},[B]);var pe=function(j){M===0&&P(parseInt(j.target.dataset.translatedValue))};return a().createElement("div",{className:"react-ios-time-picker-hour-format",onMouseDown:function(j){D(!1),Q(j.clientY),L(!0),J(performance.now())},onMouseUp:ge,onMouseMove:function(j){V($?j.clientY-H:0)},onMouseLeave:function(j){L(!1),P(function(_){return _+M}),D(!0),K(performance.now()),te(M<0?"down":"up")},style:{height:5*e},onWheel:function(j){j.deltaY>0?I<=e&&P(function(_){return _+e}):I>=2*e&&P(function(_){return _-e})},onTouchStart:function(j){D(!1),Q(j.targetTouches[0].clientY),L(!0),J(performance.now())},onTouchMove:function(j){V($?j.targetTouches[0].clientY-H:0)},onTouchEnd:ge},a().createElement("div",{ref:v,className:"".concat(B&&"react-ios-time-picker-hour-format-transition"),onTransitionEnd:function(j){j.propertyName==="transform"&&[{number:"AM",translatedValue:(2*e).toString(),arrayNumber:0},{number:"PM",translatedValue:e.toString(),arrayNumber:1}].map(function(_){parseInt(_.translatedValue)===I&&(ue(_.arrayNumber),t({mount:!0,hourFormat:_.number}),w(function(){return s.map(function(fe){return fe.number==_.number&&fe.translatedValue==I?Fe(Fe({},fe),{},{selected:!0}):fe})}))})},style:{transform:"translateY(".concat(I,"px)")}},k.map(function(j,_){return a().createElement("div",{key:_,className:"react-ios-time-picker-cell-hour",style:{height:"".concat(e,"px")}},a().createElement("div",{className:"react-ios-time-picker-cell-inner-hour-format".concat(j.selected?" react-ios-time-picker-cell-inner-hour-format-selected":""),onClick:pe,"data-translated-value":j.translatedValue},j.number))})))},Se=function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:54,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:24,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=[{number:"00",translatedValue:(2*n).toString(),selected:!1},{number:"01",translatedValue:n.toString(),selected:!1}],s=[{number:"00",translatedValue:n.toString(),selected:!1,hidden:!0},{number:"01",translatedValue:n.toString(),selected:!1}],S=e===13?s:i,k=0,w=0;w<3;w++)for(var v=0;v<e;v++)w===0&&v<2||e===13&&v===0||(w!==1||v!==t?(v.toString().length===1?S.push({number:"0".concat(v.toString()),translatedValue:"-".concat(k),selected:!1}):S.push({number:v.toString(),translatedValue:"-".concat(k),selected:!1}),k+=n):(v.toString().length===1?S.push({number:"0".concat(v.toString()),translatedValue:"-".concat(k),selected:!0}):S.push({number:v.toString(),translatedValue:"-".concat(k),selected:!0}),k+=n));return S},Ue=function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:54,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:24,t=[{number:"00",translatedValue:(2*n).toString(),arrayNumber:0},{number:"01",translatedValue:n.toString(),arrayNumber:1}],i=0,s=0;s<3;s++)for(var S=0;S<e;S++)s===0&&S<2||e===13&&S===0||(S.toString().length===1?t.push({number:"0".concat(S.toString()),translatedValue:"-".concat(i),selected:!1}):t.push({number:S.toString(),translatedValue:"-".concat(i),selected:!1}),i+=n);return t};function Re(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,i)}return t}function Le(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Re(Object(t),!0).forEach(function(i){gt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Re(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function gt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function re(n,e){return function(t){if(Array.isArray(t))return t}(n)||function(t,i){var s=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var S,k,w=[],v=!0,x=!1;try{for(s=s.call(t);!(v=(S=s.next()).done)&&(w.push(S.value),!i||w.length!==i);v=!0);}catch(M){x=!0,k=M}finally{try{v||s.return==null||s.return()}finally{if(x)throw k}}return w}}(n,e)||function(t,i){if(t){if(typeof t=="string")return He(t,i);var s=Object.prototype.toString.call(t).slice(8,-1);return s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set"?Array.from(t):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?He(t,i):void 0}}(n,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function He(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var vt=function(n){var e=n.height,t=n.value,i=n.setValue,s=n.use12Hours,S=s?13:24,k=re((0,r.useState)(Se(e,S,parseInt(t.slice(0,2)))),2),w=k[0],v=k[1],x=(0,r.useRef)(null),M=re((0,r.useState)(null),2),V=M[0],X=M[1],H=re((0,r.useState)(null),2),Q=H[0],R=H[1],I=re((0,r.useState)(parseInt(Se(e,S,parseInt(t.slice(0,2))).filter(function(y){return y.number===t.slice(0,2)&&y.selected===!0})[0].translatedValue)),2),P=I[0],F=I[1],$=re((0,r.useState)(!1),2),L=$[0],z=$[1],B=re((0,r.useState)(!1),2),D=B[0],W=B[1],ae=re((0,r.useState)(null),2),J=ae[0],G=ae[1],de=re((0,r.useState)(null),2),K=de[0],me=de[1],le=re((0,r.useState)(null),2),he=(le[0],le[1]),ee=re((0,r.useState)(null),2),ie=ee[0],te=ee[1],ce=re((0,r.useState)(null),2),ue=ce[0],ge=ce[1],pe=re((0,r.useState)(null),2),j=(pe[0],pe[1]),_=function(y){z(!1),F(function(O){return O+V}),W(!0),me(performance.now()),performance.now()-J<=100?te("fast"):te("slow"),ge(V<0?"down":"up")};(0,r.useEffect)(function(){L&&(x.current.style.transform="translateY(".concat(P+V,"px)"))},[V]),(0,r.useEffect)(function(){if(D){if(he(K-J),K-J<=100&&V!==0){var y;ue==="down"?y=P-120/(K-J)*100:ue==="up"&&(y=P+120/(K-J)*100);var O=Math.round(y/e)*e;s?(O<-34*e&&(O=-34*e),O>e&&(O=e)):(O<-69*e&&(O=-69*e),O>2*e&&(O=2*e)),x.current.style.transform="translateY(".concat(O,"px)"),F(O)}if(K-J>100&&V!==0){var Y=Math.round(P/e)*e;s?(Y<-34*e&&(Y=-34*e),Y>e&&(Y=e)):(Y<-69*e&&(Y=-69*e),Y>2*e&&(Y=2*e)),x.current.style.transform="translateY(".concat(Y,"px)"),F(Y)}X(0)}},[D]);var fe=function(y){V===0&&F(parseInt(y.target.dataset.translatedValue))},N=D&&ie==="fast",A=D&&ie==="slow";return a().createElement("div",{className:"react-ios-time-picker-hour ".concat(s&&"react-ios-time-picker-hour-12hour-format"),onMouseDown:function(y){W(!1),R(y.clientY),z(!0),G(performance.now())},onMouseUp:_,onMouseMove:function(y){X(L?y.clientY-Q:0)},onMouseLeave:function(y){z(!1),F(function(O){return O+V}),W(!0),me(performance.now()),performance.now()-J<=100?te("fast"):te("slow"),ge(V<0?"down":"up")},style:{height:5*e},onWheel:function(y){s?y.deltaY>0?P<e&&F(function(O){return O+e}):P>-34*e&&F(function(O){return O-e}):y.deltaY>0?P<2*e&&F(function(O){return O+e}):P>-69*e&&F(function(O){return O-e})},onTouchStart:function(y){W(!1),R(y.targetTouches[0].clientY),z(!0),G(performance.now())},onTouchMove:function(y){X(L?y.targetTouches[0].clientY-Q:0)},onTouchEnd:_},a().createElement("div",{ref:x,className:"".concat(N===!0&&"react-ios-time-picker-fast"," ").concat(A===!0&&"react-ios-time-picker-slow"),onTransitionEnd:function(y){Ue(e,S).map(function(O){parseInt(O.translatedValue)===P&&(j(O.arrayNumber),i(function(Y){return"".concat(O.number,":").concat(Y.slice(3,6))}),v(function(){return Se(e,S).map(function(Y){return Y.number==O.number&&Y.translatedValue==P?Le(Le({},Y),{},{selected:!0}):Y})}))})},style:{transform:"translateY(".concat(P,"px)")}},w.map(function(y,O){return a().createElement("div",{key:O,className:"react-ios-time-picker-cell-hour",style:{height:"".concat(e,"px")}},a().createElement("div",{className:"react-ios-time-picker-cell-inner-hour".concat(y.selected?" react-ios-time-picker-cell-inner-selected":"").concat(y!=null&&y.hidden?" react-ios-time-picker-cell-inner-hidden":""),onClick:fe,"data-translated-value":y.translatedValue},y.number))})))};function $e(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,i)}return t}function ze(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$e(Object(t),!0).forEach(function(i){yt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):$e(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function yt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function oe(n,e){return function(t){if(Array.isArray(t))return t}(n)||function(t,i){var s=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var S,k,w=[],v=!0,x=!1;try{for(s=s.call(t);!(v=(S=s.next()).done)&&(w.push(S.value),!i||w.length!==i);v=!0);}catch(M){x=!0,k=M}finally{try{v||s.return==null||s.return()}finally{if(x)throw k}}return w}}(n,e)||function(t,i){if(t){if(typeof t=="string")return Be(t,i);var s=Object.prototype.toString.call(t).slice(8,-1);return s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set"?Array.from(t):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Be(t,i):void 0}}(n,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Be(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var bt=function(n){var e=n.height,t=n.value,i=n.setValue,s=oe((0,r.useState)(Se(e,60,parseInt(t.slice(3,6)))),2),S=s[0],k=s[1],w=(0,r.useRef)(null),v=oe((0,r.useState)(null),2),x=v[0],M=v[1],V=oe((0,r.useState)(null),2),X=V[0],H=V[1],Q=oe((0,r.useState)(parseInt(Se(e,60,parseInt(t.slice(3,6))).filter(function(N){return N.number===t.slice(3,6)&&N.selected===!0})[0].translatedValue)),2),R=Q[0],I=Q[1],P=oe((0,r.useState)(!1),2),F=P[0],$=P[1],L=oe((0,r.useState)(!1),2),z=L[0],B=L[1],D=oe((0,r.useState)(null),2),W=D[0],ae=D[1],J=oe((0,r.useState)(null),2),G=J[0],de=J[1],K=oe((0,r.useState)(null),2),me=(K[0],K[1]),le=oe((0,r.useState)(null),2),he=le[0],ee=le[1],ie=oe((0,r.useState)(null),2),te=ie[0],ce=ie[1],ue=oe((0,r.useState)(null),2),ge=(ue[0],ue[1]),pe=function(N){$(!1),I(function(A){return A+x}),B(!0),de(performance.now()),performance.now()-W<=100?ee("fast"):ee("slow"),ce(x<0?"down":"up")};(0,r.useEffect)(function(){F&&(w.current.style.transform="translateY(".concat(R+x,"px)"))},[x]),(0,r.useEffect)(function(){if(z){if(me(G-W),G-W<=100&&x!==0){var N;te==="down"?N=R-120/(G-W)*100:te==="up"&&(N=R+120/(G-W)*100);var A=Math.round(N/e)*e;A<-177*e&&(A=-177*e),A>2*e&&(A=2*e),w.current.style.transform="translateY(".concat(A,"px)"),I(A)}if(G-W>100&&x!==0){var y=Math.round(R/e)*e;y<-177*e&&(y=-177*e),y>2*e&&(y=2*e),w.current.style.transform="translateY(".concat(y,"px)"),I(y)}M(0)}},[z]);var j=function(N){x===0&&I(parseInt(N.target.dataset.translatedValue))},_=z&&he==="fast",fe=z&&he==="slow";return a().createElement("div",{className:"react-ios-time-picker-minute",onMouseDown:function(N){B(!1),H(N.clientY),$(!0),ae(performance.now())},onMouseUp:pe,onMouseMove:function(N){M(F?N.clientY-X:0)},onMouseLeave:function(N){$(!1),I(function(A){return A+x}),B(!0),de(performance.now()),performance.now()-W<=100?ee("fast"):ee("slow"),ce(x<0?"down":"up")},style:{height:5*e},onWheel:function(N){N.deltaY>0?R<2*e&&I(function(A){return A+e}):R>-177*e&&I(function(A){return A-e})},onTouchStart:function(N){B(!1),H(N.targetTouches[0].clientY),$(!0),ae(performance.now())},onTouchMove:function(N){M(F?N.targetTouches[0].clientY-X:0)},onTouchEnd:pe},a().createElement("div",{ref:w,className:"".concat(_===!0&&"react-ios-time-picker-fast"," ").concat(fe===!0&&"react-ios-time-picker-slow"),onTransitionEnd:function(N){Ue(e,60).map(function(A){parseInt(A.translatedValue)===R&&(ge(A.arrayNumber),i(function(y){return"".concat(y.slice(0,2),":").concat(A.number)}),k(function(){return Se(e,60).map(function(y){return y.number==A.number&&y.translatedValue==R?ze(ze({},y),{},{selected:!0}):y})}))})},style:{transform:"translateY(".concat(R,"px)")}},S.map(function(N,A){return a().createElement("div",{key:A,className:"react-ios-time-picker-cell-minute",style:{height:"".concat(e,"px")}},a().createElement("div",{className:"react-ios-time-picker-cell-inner-minute".concat(N.selected?" react-ios-time-picker-cell-inner-selected":""),onClick:j,"data-translated-value":N.translatedValue},N.number))})))};function We(n,e){return function(t){if(Array.isArray(t))return t}(n)||function(t,i){var s=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var S,k,w=[],v=!0,x=!1;try{for(s=s.call(t);!(v=(S=s.next()).done)&&(w.push(S.value),!i||w.length!==i);v=!0);}catch(M){x=!0,k=M}finally{try{v||s.return==null||s.return()}finally{if(x)throw k}}return w}}(n,e)||function(t,i){if(t){if(typeof t=="string")return qe(t,i);var s=Object.prototype.toString.call(t).slice(8,-1);return s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set"?Array.from(t):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?qe(t,i):void 0}}(n,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function qe(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var St=function(n){var e=n.pickerDefaultValue,t=n.initialValue,i=n.onChange,s=n.height,S=n.onSave,k=n.onCancel,w=n.cancelButtonText,v=n.saveButtonText,x=n.controllers,M=n.setInputValue,V=n.setIsOpen,X=n.seperator,H=n.use12Hours,Q=n.onAmPmChange,R=H?t.slice(0,5):t,I=We((0,r.useState)(t===null?e:R),2),P=I[0],F=I[1],$=We((0,r.useState)({mount:!1,hourFormat:t.slice(6,8)}),2),L=$[0],z=$[1];(0,r.useEffect)(function(){if(x===!1){var D=H?"".concat(P," ").concat(L.hourFormat):P;M(D),i(D)}},[P]),(0,r.useEffect)(function(){L.mount&&Q(L.hourFormat)},[L]);var B={height:s,value:P,setValue:F,controllers:x,use12Hours:H,onAmPmChange:Q,setHourFormat:z,hourFormat:L};return a().createElement("div",{className:"react-ios-time-picker  react-ios-time-picker-transition"},x&&a().createElement("div",{className:"react-ios-time-picker-btn-container"},a().createElement("button",{className:"react-ios-time-picker-btn react-ios-time-picker-btn-cancel",onClick:function(){k(),V(!1)}},w),a().createElement("button",{className:"react-ios-time-picker-btn",onClick:function(){var D=H?"".concat(P," ").concat(L.hourFormat):P;M(D),i(D),S(D),V(!1)}},v)),a().createElement("div",{className:"react-ios-time-picker-container",style:{height:"".concat(5*s+40,"px")}},a().createElement("div",{className:"react-ios-time-picker-selected-overlay",style:{top:"".concat(2*s+20,"px"),height:"".concat(s,"px")}}),a().createElement(vt,B),X&&a().createElement("div",{className:"react-ios-time-picker-colon"},":"),a().createElement(bt,B),H&&a().createElement(ht,B)))},xt=o(379),wt=o.n(xt),jt=o(795),kt=o.n(jt),Ot=o(569),Et=o.n(Ot),Pt=o(565),Tt=o.n(Pt),Nt=o(216),Ct=o.n(Nt),Mt=o(589),At=o.n(Mt),Oe=o(346),xe={};function Pe(n,e){return function(t){if(Array.isArray(t))return t}(n)||function(t,i){var s=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var S,k,w=[],v=!0,x=!1;try{for(s=s.call(t);!(v=(S=s.next()).done)&&(w.push(S.value),!i||w.length!==i);v=!0);}catch(M){x=!0,k=M}finally{try{v||s.return==null||s.return()}finally{if(x)throw k}}return w}}(n,e)||function(t,i){if(t){if(typeof t=="string")return Je(t,i);var s=Object.prototype.toString.call(t).slice(8,-1);return s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set"?Array.from(t):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Je(t,i):void 0}}(n,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Je(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}xe.styleTagTransform=At(),xe.setAttributes=Tt(),xe.insert=Et().bind(null,"head"),xe.domAPI=kt(),xe.insertStyleElement=Ct(),wt()(Oe.Z,xe),Oe.Z&&Oe.Z.locals&&Oe.Z.locals;var It=function(n){var e=n.value,t=e===void 0?null:e,i=n.cellHeight,s=i===void 0?28:i,S=n.placeHolder,k=S===void 0?"Select Time":S,w=n.pickerDefaultValue,v=w===void 0?"10:00":w,x=n.onChange,M=x===void 0?function(){}:x,V=n.onFocus,X=V===void 0?function(){}:V,H=n.onSave,Q=H===void 0?function(){}:H,R=n.onCancel,I=R===void 0?function(){}:R,P=n.disabled,F=P!==void 0&&P,$=n.isOpen,L=$!==void 0&&$,z=n.required,B=z!==void 0&&z,D=n.cancelButtonText,W=D===void 0?"Cancel":D,ae=n.saveButtonText,J=ae===void 0?"Save":ae,G=n.controllers,de=G===void 0||G,K=n.seperator,me=K===void 0||K,le=n.id,he=le===void 0?null:le,ee=n.use12Hours,ie=ee!==void 0&&ee,te=n.onAmPmChange,ce=te===void 0?function(){}:te,ue=n.name,ge=ue===void 0?null:ue,pe=n.onOpen,j=pe===void 0?function(){}:pe,_=n.popupClassName,fe=_===void 0?null:_,N=n.inputClassName,A=N===void 0?null:N,y=Pe((0,r.useState)(L),2),O=y[0],Y=y[1],Ze=Pe((0,r.useState)(s),2),Vt=Ze[0],Ge=(Ze[1],Pe((0,r.useState)(t),2)),Te=Ge[0],Dt=Ge[1],Ne=Te;t===null&&ie?Ne="".concat(v," AM"):t!==null||ie||(Ne=v);var _t={onChange:M,height:Vt,onSave:Q,onCancel:I,cancelButtonText:W,saveButtonText:J,controllers:de,setInputValue:Dt,setIsOpen:Y,seperator:me,use12Hours:ie,onAmPmChange:ce,initialValue:Ne,pickerDefaultValue:v};return a().createElement(a().Fragment,null,a().createElement("div",{className:"react-ios-time-picker-main",onClick:function(){Y(!O)}},a().createElement("input",{id:he,name:ge,className:"react-ios-time-picker-input ".concat(A||""),value:Te===null?"":Te,type:"text",placeholder:k,readOnly:!0,disabled:F,required:B,onFocus:function(){X(),j()}})),O&&!F&&a().createElement(dt,null,a().createElement("div",{className:"react-ios-time-picker-popup"},a().createElement("div",{className:"react-ios-time-picker-popup-overlay ".concat(fe||""),onClick:function(){return Y(!O)}}),a().createElement(St,_t))))}})(),lt.exports=c})();var Rt=lt.exports;const Ke="timerHistory",De="subs",ct="app_settings",Xe="app_scroll",Qe="POPUP_DISCUSS",et="POPUP_SETTINGS",tt="POPUP_DEMO",Lt=/([0-9]+):([0-9]+):([0-9]+)[,.]([0-9]+)/g,Ht=/([0-9]+):([0-9]+):([0-9]+)[,.]([0-9]+)/,ut=/\n[0-9]{1,6}\n/,Ce=/\n[0-9]{1,6}?\s\n/,$t=/\r\n/,zt=new RegExp("<(font|i)[^><]*>|<.(font|i)[^><]*>","g"),Me="[^^]";function Bt(u){return u||ut}function nt(u){var r;const f=u.match(Lt);if(!f)return 0;const o=[];if(f.length){const a=new Date,l=(r=f[0].match(Ht))==null?void 0:r.map(Number);l&&a.setHours(Number(l[1]),l[2],l[3],l[4]),o.push(a)}const c=new Date;return c.setHours(0,0,0,0),o.push(c),o[0].getTime()-o[1].getTime()}let Ae=0;const je=[ut,Ce,$t];function rt(u){let f=0;for(let o=0;o<je.length;o+=1)if(u.split(je[o]).length>1){f=o;break}return f}function Wt(u,f){const o=nt(u);let c="";for(let r=Ae;r<f.length;r+=1){const a=nt(f[r]);if(o-a<500){Ae=r,c=f[r];break}}return c}function ot(u){let f=u.bstr.split(`
`);return f=f.filter(o=>o.match("Dialogue: ")).map((o,c)=>{const r=o.split("Dialogue: ")[1].split(",");let[a,l,d,g,h,p,b,C,T,U]=r;return l.match(/^0:/)&&(l=`0${l}`),d.match(/^0:/)&&(d=`0${d}`),`
${c}
${l} --> ${d}
${U}
`}),f.join("")}const it=u=>u.replace(zt,"");function qt(u){Ae=0;let[f,o]=u;f.filename.match(/\.ass$/)&&(f.bstr=ot(f)),o.filename.match(/\.ass$/)&&(o.bstr=ot(o));const c=rt(f.bstr),r=rt(o.bstr);f.bstr=it(f.bstr),o.bstr=it(o.bstr);let a=f.bstr.split(je[c]);je[c]&&(f.sep=`${je[c]}`);let l=o.bstr.split(je[r]);a.length===1&&(a=f.bstr.split(Ce)),l.length===1&&(a=o.bstr.split(Ce));const d=[];for(let h=0;h<a.length;h+=1)d.push(Wt(a[h],l));const g={bstr:d.join(Me),filename:o.filename,sep:Me};return[f,g]}function at(u){let{sep:f}=u;return f&&f!==Me&&(f=new RegExp(f.replace(/\//g,""))),u.bstr.split(Bt(f))}const we=()=>{let u=ve.getJ(De)||[];return u||(u=[]),u},Ie=()=>ve.getJ(ct)||{};function Jt(u){return""}function Zt(u,f){const{voice:o,rate:c=1,volume:r=1,pitch:a=1}=Ie(),l=new SpeechSynthesisUtterance;l.text=`${u}`.replace(/\n/g,""),l.volume=parseFloat(String(r)),l.rate=parseFloat(String(c)),l.pitch=parseFloat(String(a)),window.speechSynthesis.speak(l)}const pt=u=>{if(!u||!Array.isArray(u)||u.length===0)return{items:[],filenames:[]};const f=[u[0].filename];let o=[];if(u[0]&&(o=[at(u[0])]),u[1]){f.push(u[1].filename);const c=at(u[1]);o.push(c)}return{items:o,filenames:f}},Gt=(u,f=!1)=>{u.length>2&&(u=u.slice(0,2));let o=[],c="";for(let l=0;l<u.length;l+=1)u[l].bstr.trim()?o.push({bstr:u[l].bstr,filename:u[l].filename}):c="EMPTY";if(o.length){if(f){o=u;const l=we();l&&Ve(l,!0)}else o.length===2&&(o=qt(o));ve.setJ(De,o)}const{items:r,filenames:a}=pt([...o]);return f||Ve(o),{items:r,showStr:"",error:c,filenames:a}},Ve=(u,f=!1)=>{let o=ve.getJ(Ke)||[],c=[],r=!1,a=!1;o.length?u.length>1&&(c=o.filter(l=>!Array.isArray(l)||l.length===0?!1:l[0].filename!==u[0].filename||l[0].filename!==u[1].filename),o.length!==c.length&&(r=!0)):u.length>1&&(c=[u],a=!0),f&&u.length>1&&!a&&(c=c.concat([u])),c.length&&(r||f)&&ve.setJ(Ke,c)};function st(u,f=!1){try{const o=speechSynthesis.getVoices(),c=document.getElementById("voice");if(!c)return;const r=document.createElement("option");if(r.value="",r.innerHTML="",c.appendChild(r),o&&f){const a=document.getElementById("msg");a&&(o.length?a.innerHTML+=` And <strong>has</strong> ${o.length} speech synthesis.`:a.innerHTML+=` But don't have any speech synthesis. We recommend using Google 
 <strong>Chrome / Chrome Mobile</strong> for this <strong>text-to-speech</strong>`)}o.forEach(function(a){const l=document.createElement("option");l.value=a.name,l.innerHTML=a.name,a.name===u&&(l.selected=!0),c.appendChild(l)})}catch{}}function ft(u=""){const f=document.getElementById("msg");f&&("speechSynthesis"in window?f.innerHTML='Your browser <strong onclick="return tryToCopyLines()">supports</strong> speech synthesis.':(f.innerHTML='Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.',f.classList.add("not-supported"))),st(u),window.speechSynthesis.onvoiceschanged=function(){st(u,!0)}}window.tryToCopyLines=()=>{typeof window.availableVoicesTxt>"u"||navigator.clipboard.writeText(window.availableVoicesTxt)};const Kt=({data:u,togglePopup:f,voiceSettingSave:o})=>{const{voice:c,error:r,volume:a,rate:l,pitch:d}=u,[g,h]=ke.useState({voice:c,volume:a,rate:l,pitch:d});ke.useEffect(()=>{ft(c)},[]);const p=T=>{const{name:U,value:Z}=T.target;h(E=>({...E,[U]:Z}))},b=T=>{if(!(!c&&!g.voice))return o(g),T.preventDefault(),!1},C=T=>{o({...g,voice:""},!0),f(T,!1)};return console.log(g),m.jsx("div",{children:m.jsx("div",{className:"modal-window",children:m.jsxs("div",{children:[m.jsx("a",{href:"",title:"Close",className:"modal-close",onClick:T=>f(T,!1),children:"Close"}),m.jsx("h4",{children:"Web Speech Synthesis Demo"}),m.jsx("div",{children:m.jsxs("form",{onSubmit:()=>!1,id:"settings-form","data-voice":c,children:[m.jsxs("div",{id:"page-wrapper",children:[m.jsx("p",{id:"msg"}),m.jsxs("div",{className:"option",children:[m.jsx("label",{htmlFor:"voice",children:"Voice"})," ",m.jsx("select",{required:!0,name:"voice",id:"voice",value:g.voice||"",onChange:p})]}),m.jsxs("div",{className:"option",children:[m.jsx("label",{htmlFor:"volume",children:"Volume"}),m.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",name:"volume",id:"volume",value:g.volume,onChange:p})]}),m.jsxs("div",{className:"option",children:[m.jsx("label",{htmlFor:"rate",children:"Rate"}),m.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",name:"rate",id:"rate",value:g.rate,onChange:p})]}),m.jsxs("div",{className:"option",children:[m.jsx("label",{htmlFor:"pitch",children:"Pitch"}),m.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",name:"pitch",id:"pitch",value:g.pitch,onChange:p})]}),r?m.jsx("div",{color:"red",children:r}):null,m.jsxs("div",{className:"btn-wrap",children:[m.jsx("button",{className:"btn btn-primary",onClick:b,children:"Save"}),"  ",m.jsx("button",{className:"btn btn-danger",onClick:C,children:"Clear Settings"})]})]}),m.jsx("div",{children:m.jsx("a",{href:"",title:"Close",className:"modal-close bottom",onClick:T=>f(T,!1),children:"Close"})})]})})]})})})},Xt={SAME:"Files same, please upload different filename",EMPTY:"One of uploaded file has empty content, please upload another file"},Qt=()=>{const[u,f]=ke.useState("10:00"),o=c=>{f(c)};return m.jsx("div",{children:m.jsx(Rt.TimePicker,{onChange:o,value:u})})};class nn extends ke.Component{constructor(o){super(o);q(this,"buttonPressTimer");q(this,"handleUpload",(o,c=!1)=>{let{filenames:r}=this.state;if(r.length===1&&o[0].filename===r[0]){this.setState({error:"SAME"});return}o.length===1&&r.length===1&&we()[0]&&(o=o.concat([...we()]));const a=Gt(o,c);c&&(a.modal=""),a.modal="",a.showPopupFiles=!1,this.setState(()=>({...a}))});q(this,"clear",()=>{const o=we();Ve(o,!0),ve.rm(De),this.setState({filenames:[],items:[],showPopupFiles:!1,showStr:"",error:""})});q(this,"show",({target:o},c=!1)=>{if(o.tagName==="BUTTON")return;const r=o.dataset.ind,{items:a,isShown:l,ind:d}=this.state;let g=l;const[,h]=a;if(h[r]){g=r!==d||!g;let p="";g&&(p=h[r]),this.setState({showStr:p,ind:r,isShown:g},()=>{c&&this.tryToSpeak(p)()})}});q(this,"handleButtonRelease",()=>{this.buttonPressTimer&&clearTimeout(this.buttonPressTimer)});q(this,"handleScroll",()=>{ve.set(Xe,window.scrollY)});q(this,"getStr",o=>{const c=o.split(/>\s[0-9]+:[0-9]+:[0-9]+[.,][0-9]+/);return c[1]&&(o=c[1]),o});q(this,"renderRow",(o,c)=>(o=this.getStr(o),o?m.jsx("div",{onTouchEnd:this.handleButtonRelease,onMouseDown:this.show,onMouseUp:this.handleButtonRelease,"data-ind":c,children:m.jsxs("div",{"data-ind":c,children:[o,m.jsx("span",{className:"tooltiptext",children:o?m.jsx("button",{"data-ind":this.state.showStr&&c,onClick:this.tryToSpeak(o),className:"icon speech-voice"}):null})]})},`${o}${c}`):null));q(this,"togglePopup",(o,c=!0)=>{o.preventDefault(),this.setState({showPopupFiles:c,modal:""})});q(this,"toggleDemo",o=>{if(this.state.modal===tt)return this.togglePopup(o,!1);this.toggleModal(o,tt)});q(this,"toggleModal",(o,c=Qe)=>{o.preventDefault(),this.setState({modal:c})});q(this,"closeModal",()=>{this.setState({modal:""})});q(this,"tryToSpeak",o=>c=>{const{voice:r,showStr:a,ind:l}=this.state;let d=!1;if(c&&c.target.dataset.ind&&l!==c.target.dataset.ind)return this.show({target:{tagName:"DIV",dataset:c.target.dataset}},!0);a&&(o=this.getStr(a),d=!0);const g=we(),h=Jt(g[d?1:0]);if(r||h)return Zt(o);this.voiceSetting(c)});q(this,"voiceSetting",o=>{o&&o.preventDefault(),this.setState({modal:et})});q(this,"voiceSettingSave",(o,c=!1)=>{const{voice:r,rate:a,pitch:l,volume:d}=o;if(!c){if(this.state.voice===r||!r&&this.state.voice)return this.closeModal()}const g=Ie();ve.setJ(ct,{...g,voice:r,rate:a,pitch:l,volume:d}),this.setState({modal:"",voice:r,rate:a,pitch:l,volume:d})});this.buttonPressTimer=void 0;const{items:c=[],filenames:r=[]}=pt(we()),{voice:a,rate:l=1,volume:d=1,pitch:g=1}=Ie();this.state={showStr:"",ind:"",isShown:-1,error:"",filenames:r,items:c,showPopupFiles:!1,modal:"",voice:a,rate:l,volume:d,pitch:g}}componentDidMount(){const o=ve.get(Xe,!1);ft(),o&&window.scrollTo(0,o),window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){const{items:o,showStr:c,error:r,filenames:a,showPopupFiles:l,modal:d}=this.state,g=`folder${o.length?"-fill":""}`;return m.jsxs("div",{children:[d===Qe?m.jsx("div",{className:"modal-window",children:m.jsxs("div",{children:[m.jsx("a",{href:"",title:"Close",className:"modal-close",onClick:h=>this.togglePopup(h,!1),children:"Close"}),m.jsx("div",{children:m.jsx("a",{href:"",title:"Close",className:"modal-close bottom",onClick:h=>this.togglePopup(h,!1),children:"Close"})})]})}):null,c?m.jsx("div",{className:"tooltip1",children:m.jsx("span",{className:"tooltiptext",children:this.getStr(c)})}):null,m.jsx("div",{children:m.jsxs("div",{className:"buttons",children:[o.length===2?m.jsx("button",{className:`icon ${g}-icon`,onClick:this.togglePopup}):null,m.jsx("button",{className:"icon speech-voice-setting",onClick:this.voiceSetting})]})}),m.jsxs("div",{className:"lang-items",children:[o.length===1?m.jsxs("div",{className:"load-step",children:[r?m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"alert alert-danger",children:Xt[r]}),m.jsx("br",{})]}):null,m.jsxs("div",{children:["1 File ",a[0],m.jsx("span",{className:"green",children:" loaded"})]}),m.jsxs("div",{children:["2 File ",m.jsx("span",{className:"gray",children:"not loaded"})]}),m.jsx("br",{}),m.jsx("div",{children:m.jsx("button",{className:"btn",onClick:this.clear,children:"Delete all"})})]}):null,o.length===2?o[0].map((h,p)=>this.renderRow(h,p)):null]}),d===et?m.jsx(Kt,{data:this.state,togglePopup:this.togglePopup,voiceSettingSave:this.voiceSettingSave}):null,m.jsx(Qt,{})]})}}export{nn as default};
