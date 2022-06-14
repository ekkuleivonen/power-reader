import {replaceNode } from "./bionic-algorithm";
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
paragraphs.forEach((paragraph) => {
    //split paragraphs into nodes
    const originalParagraphNodes = [...paragraph.childNodes];
    originalParagraphNodes.forEach((node, idx) => {
        if (node === null) return node;
        if (node.nodeName !== "#text") return node;
        //replace text nodes with bionic content
        const newChildNode = replaceNode(node);
        return paragraph.replaceChild(newChildNode, paragraph.childNodes[idx]);
    });
});
