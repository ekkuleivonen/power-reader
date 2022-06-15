import {highlightWords, deHighlightWords } from "./bionic-algorithm";
import { defaultWebclient } from "./default";
import { gmailWebClient } from "./gmail";
/////////////////////////////////////////////////////////////////////////////////
const version: number = 1;
const welcomeMessage: string = `You are using power-reader v${version}`;
console.log(welcomeMessage);
////////////////////////////////////////////////////////////////////////////////

//Find text content in the best way suited for the website
const currentUrl: string = window.location.href;
const getTextContent = (currentUrl: string): HTMLElement[] => {
    if (currentUrl.includes("https://mail.google")) return gmailWebClient();
    return defaultWebclient();
};
const paragraphs: HTMLElement[] = getTextContent(currentUrl);
localStorage.setItem("original_content", JSON.stringify(paragraphs));

//toggle highlights
const toggleHighlights = (msg:{toggle:string, value:boolean}) => {
    if ((msg.toggle === "highlights" || msg.toggle === "highlights_all") && msg.value === true) return highlightWords(paragraphs); //turn on
    if ((msg.toggle === "highlights" || msg.toggle === "highlights_all") && msg.value === false) return deHighlightWords();//turn off
    

};
//TODO: check local storage for all pages selection????

//talk with popup and bg scripts
chrome.runtime.onMessage.addListener((msg:{toggle:string, value:boolean}, sender, response) => {
    if (msg.toggle === "highlights" || msg.toggle === "highlights_all") return toggleHighlights(msg);
    //if (msg.toggle === "reader_mode") return toggleReaderMode(msg);
});
