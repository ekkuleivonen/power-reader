(()=>{"use strict";var e={880:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createReaderModal=t.findTextContent=void 0,t.findTextContent=()=>{const e=[...document.body.getElementsByTagName("*")].filter((e=>"P"===e.tagName||"H1"===e.tagName||"H2"===e.tagName||"H3"===e.tagName));return e.forEach((e=>{e.className="",e.id="",n(e)})),e},t.createReaderModal=()=>{const e=document.createElement("div");o(e);const t=document.createElement("div");return a(t),document.body.append(e),e.append(t),t};const a=e=>(e.style.boxSizing="border-box",e.style.marginTop="50px",e.style.width="75%",e.style.padding="10%",e.style.backgroundColor="#252525",e.style.boxShadow="0px 0px 100px rgba(0, 0, 0, 0.5)",e),o=e=>(e.style.position="absolute",e.style.display="flex",e.style.justifyContent="center",e.style.zIndex="1000000",e.style.top="0",e.style.left="0",e.style.width="100vw",e.style.minHeight="100vh",e.style.backgroundColor="#444444",e),n=e=>(e.style.color="white",e.style.fontFamily="sans-serif","H1"===e.tagName&&(e.style.fontSize="3em"),"H2"===e.tagName&&(e.style.fontSize="2em"),"H3"===e.tagName&&(e.style.fontSize="1.5em"),"P"===e.tagName&&(e.style.fontSize="1em",e.style.fontWeight="200",e.style.letterSpacing="0.03em",e.style.lineHeight="1.75em"),e)}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,a),s.exports}(()=>{const e=a(880),t="reader_mode";chrome.runtime.onMessage.addListener(((e,a,s)=>(!0===e.value&&e.name===t&&(o(),s({msg:`${t} enabled`})),!1===e.value&&e.name===t&&(n(),s({msg:`${t} disabled`})),!0)));const o=()=>{const t=(0,e.findTextContent)(),a=(0,e.createReaderModal)();t.forEach((e=>a.append(e)))},n=()=>{location.reload()}})()})();