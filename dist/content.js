(()=>{"use strict";var e={75:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deHighlightWords=t.highlightWords=void 0;const l=e=>{if(/\d/.test(e))return e;let t="";const l=e.split("");switch(l.length){case 0:t=e;break;case 1:case 2:case 3:t=`<span style="font-weight: bold;"> ${e} </span>`;break;default:let o="",n="";for(let e=0;e<l.length;e++)e<l.length/2?o+=l[e]:n+=l[e];t=`<span style="font-weight: bold;"> ${o}</span>${n} `}return t};t.highlightWords=e=>{e.forEach((e=>{[...e.childNodes].forEach(((t,o)=>{if(null===t)return t;if("#text"!==t.nodeName)return t;const n=(e=>{if(null===e.textContent)return e;const t=document.createElement("span"),o=(e=>{let t="";return e.forEach((e=>{l(e);const o=`<span> ${l(e)} </span>`;t+=o})),t})(e.textContent.split(" ").filter((e=>""!==e&&"\n"!==e)));return t.innerHTML=o,t})(t);return e.replaceChild(n,e.childNodes[o])}))}))},t.deHighlightWords=()=>{location.reload()}},310:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defaultWebclient=void 0,t.defaultWebclient=()=>[...document.body.getElementsByTagName("p"),...document.body.getElementsByTagName("div")]},793:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gmailWebClient=void 0;const l=()=>{let e=[...document.body.getElementsByClassName("gs")];return window.addEventListener("load",(function(){l()})),console.log(e),e};t.gmailWebClient=l}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,l),i.exports}(()=>{const e=l(75),t=l(310),o=l(793);console.log("You are using power-reader v1");const n=window.location.href.includes("https://mail.google")?(0,o.gmailWebClient)():(0,t.defaultWebclient)();localStorage.setItem("original_content",JSON.stringify(n)),chrome.runtime.onMessage.addListener(((t,l,o)=>{if("highlights"===t.toggle||"highlights_all"===t.toggle)return(t=>"highlights"!==t.toggle&&"highlights_all"!==t.toggle||!0!==t.value?"highlights"!==t.toggle&&"highlights_all"!==t.toggle||!1!==t.value?void 0:(0,e.deHighlightWords)():(0,e.highlightWords)(n))(t)}))})()})();