(()=>{"use strict";const e=document.getElementById("title");e&&(e.innerText=`${e.innerText} v.01`);const t=document.getElementById("highlights"),n=document.getElementById("reader_mode"),d=document.getElementById("highlights_all"),c=(document.getElementsByTagName("input"),e=>{const t=e.target,n=t.checked;return((e,t)=>{chrome.tabs.query({currentWindow:!0,active:!0},(n=>{const d=n[0];chrome.tabs.sendMessage(d.id,{toggle:e,value:t})}))})(t.name,n)});t&&n&&d&&(t.addEventListener("change",c),n.addEventListener("change",c),d.addEventListener("change",c))})();