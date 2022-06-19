import {
  toggleHighlights,
  toggleReaderMode,
  toggleKeyboardShortCuts,
} from "./plugin-toggles";

//listen for messages from popup.js (extenstion ui)
//1. message to toggle reader mode on/off
//2. message to toggle highlights on/off
chrome.runtime.onMessage.addListener(
  (request: { name: string; value: boolean }, sender, sendResponse) => {
    switch (request.name) {
      case "highlights":
        toggleHighlights(request);
        break;
      case "highlights_all":
        console.log("highlights_all");
        break;
      case "reader_mode":
        toggleReaderMode(request);
        break;
      case "shortcuts":
        toggleKeyboardShortCuts(request);
        break;
    }
  }
);

//Inject needed scripts to the tab upon page load
chrome.webNavigation.onCompleted.addListener(() => {
  toggleHighlights({ name: "highlights_init", value: true }); // will check if user has auto-highlights enabled before injection
  //toggleKeyboardShortCuts({ name: "shortcuts_init", value: true }); // will check if user has shortcuts enabled before injection
});
