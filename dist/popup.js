(()=>{"use strict";const e=document.getElementById("title");e&&(e.innerText=`${e.innerText} v.0.01`);const n={},t=()=>{Object.keys(n).forEach((e=>{document.getElementById(e).checked=n[e]}))};chrome.storage.sync.get(["plugin_options"],(e=>{Object.assign(n,e.plugin_options),t()})),chrome.storage.onChanged.addListener(((e,o)=>{"sync"===o&&e.plugin_options?.newValue&&(Object.assign(n,e.plugin_options.newValue),t())}));const o=document.getElementById("plugin-form");o&&o.addEventListener("change",(e=>{const t=e.target,o=t.checked,s=t.name;n[s]=o,chrome.storage.sync.set({plugin_options:n})}))})();