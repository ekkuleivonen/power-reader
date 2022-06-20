import { highlightWords, deHighlightWords } from "./bionic-algorithm";
import { defaultWebclient } from "./default";
import { gmailWebClient } from "./gmail";

//Find text content in the best way suited for the website
const currentUrl: string = window.location.href;
const getTextContent = (currentUrl: string): HTMLElement[] => {
  if (currentUrl.includes("https://mail.google")) return gmailWebClient();
  return defaultWebclient();
};
const paragraphs: HTMLElement[] = getTextContent(currentUrl);
localStorage.setItem("original_content", JSON.stringify(paragraphs));

chrome.runtime.onMessage.addListener(
  (request: { name: string; value: boolean }, sender, sendResponse) => {
    //Setting status in chrome.storage
    //chrome.storage.sync.set(request);
    if (request.value === true && request.name === "highlights") {
      highlightWords(paragraphs);
      sendResponse({ msg: "highlights enabled" });
    }
    if (request.value === false && request.name === "highlights") {
      deHighlightWords();
      sendResponse({ msg: "highlights disabled" });
    }
    return true;
  }
);
