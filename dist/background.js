(()=>{"use strict";var e={357:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toggleKeyboardShortCuts=t.toggleHighlights=t.toggleReaderMode=void 0;const s=async()=>{const[e]=await chrome.tabs.query({active:!0,currentWindow:!0});return e},r=(e,t)=>{if(e.id)return chrome.tabs.sendMessage(e.id,t,(e=>{console.log(e.msg)}))},o=(e,t,s)=>{if(e.id)return chrome.scripting.executeScript({target:{tabId:e.id},files:[s]}).then((s=>{e.id&&chrome.tabs.sendMessage(e.id,t,(e=>{console.log(e.msg)}))}))};t.toggleReaderMode=async e=>{const t=await s();return!1===e.value?r(t,e):o(t,e,"dist/reader-mode.js")},t.toggleHighlights=async e=>{const t=await s();return!1===e.value?r(t,e):o(t,e,"dist/highlight.js")},t.toggleKeyboardShortCuts=async e=>{const t=await s();return!1===e.value?r(t,e):o(t,e,"dist/shortcuts.js")}}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,s),i.exports}(()=>{const e=s(357);chrome.runtime.onMessage.addListener(((t,s,r)=>{switch(t.name){case"highlights":(0,e.toggleHighlights)(t);break;case"highlights_all":console.log("highlights_all");break;case"reader_mode":(0,e.toggleReaderMode)(t)}})),chrome.webNavigation.onCompleted.addListener((()=>{(0,e.toggleHighlights)({name:"highlights_init",value:!0})}))})()})();