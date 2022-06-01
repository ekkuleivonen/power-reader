import { runBionic } from "./bionic-algorithm";
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

console.log(paragraphs);

paragraphs.map((paragraph) => {
    const modifiedParagraph = runBionic(paragraph);
    return modifiedParagraph;
});
