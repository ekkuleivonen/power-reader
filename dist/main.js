(()=>{"use strict";var e={281:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.runBionic=void 0,t.runBionic=(e,t)=>{if(console.log(t.innerHTML),null===e.textContent)return t;const n=e.textContent.split(" ").filter((e=>""!==e&&"\n"!==e));return console.log("Filtered words: ",n),n.forEach((e=>{const n=`<span style='font-weight: bold;'>${e}</span>`;console.log("REPLACING ",e,"WITH ",n),t.innerHTML=t.innerHTML.replaceAll(e,n)})),t}},183:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defaultWebclient=void 0,t.defaultWebclient=()=>[...document.body.getElementsByTagName("p"),...document.body.getElementsByTagName("div")]},217:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gmailWebClient=void 0,t.gmailWebClient=()=>[...document.body.getElementsByTagName("h1"),...document.body.getElementsByTagName("h2"),...document.body.getElementsByTagName("h3"),...document.body.getElementsByTagName("h4"),...document.body.getElementsByTagName("h5"),...document.body.getElementsByTagName("p"),...document.body.getElementsByTagName("div")]}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{const e=n(281),t=n(183),o=n(217);console.log("You are using power-reader v1");(window.location.href.includes("https://mail.google")?(0,o.gmailWebClient)():(0,t.defaultWebclient)()).map((t=>{const n=[...t.childNodes].map((n=>null===n||"#text"!==n.nodeName?n:(0,e.runBionic)(n,t)));return console.log("New paragraph: ",n),n}))})()})();