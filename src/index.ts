import { runBionic } from "./bionic-algorithm";
import {wordExtract} from  "./extractors";
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

//Map each paragraph to to a HTML collection of bionic words
paragraphs.map((paragraph) => {
    //split paragraphs into nodes
    const originalParagraphNodes = [...paragraph.childNodes];
    //send each node to bionic algo (this returns a  modified paragraph HTML)
    const newParagraph = originalParagraphNodes.map(node => {
        if (node === null) return node;
        if ( node.nodeName !== "#text") return node;
        return runBionic(node, paragraph);
    });
    //replace HTML Element with a the HTML collection
    console.log("New paragraph: ", newParagraph);
    return newParagraph;
});
