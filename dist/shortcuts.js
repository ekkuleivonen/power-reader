(()=>{"use strict";let e=!1,t=!1,o=!1,n=!1;const r=r=>{if(document.activeElement===document.body){switch(r.code){case"KeyH":"keydown"===r.type&&(e=!0),"keyup"===r.type&&(e=!1);break;case"KeyI":"keydown"===r.type&&(t=!0),"keyup"===r.type&&(t=!1);break;case"KeyR":"keydown"===r.type&&(o=!0),"keyup"===r.type&&(o=!1);break;case"KeyE":"keydown"===r.type&&(n=!0),"keyup"===r.type&&(n=!1)}return e&&t?(console.log("highlights shortcut"),void chrome.storage.sync.get(["highlights"],(function(e){return e.highlights?e.highlights?chrome.runtime.sendMessage({name:"highlights",value:!1}):void 0:chrome.runtime.sendMessage({name:"highlights",value:!0})}))):o&&n?(console.log("reader mode shortcut"),void chrome.storage.sync.get(["reader_mode"],(function(e){return e.reader_mode?e.reader_mode?chrome.runtime.sendMessage({name:"reader_mode",value:!1}):void 0:chrome.runtime.sendMessage({name:"reader_mode",value:!0})}))):void 0}};window.addEventListener("keydown",r),window.addEventListener("keyup",r)})();