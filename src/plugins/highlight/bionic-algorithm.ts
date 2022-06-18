export {highlightWords,deHighlightWords};

const replaceNode = (node: ChildNode): HTMLSpanElement | ChildNode =>{
    if (node.textContent === null) return node;
    const newNode: HTMLSpanElement = document.createElement("span");
    const words: string[] = node.textContent.split(" ").filter(word => word!=="" && word !== "\n");
    const HTMLstring: string = spannifyChild(words);
    newNode.innerHTML = HTMLstring;
    return newNode;
};

const spannifyChild = (words : string[]): string =>{
    let HTMLstring: string = "";
    words.forEach(word =>{
        const biometricWord = runBio(word);
        const spannifiedWord = `<span> ${runBio(word)} </span>`;
        HTMLstring += spannifiedWord;
    });
    return HTMLstring;
};

const runBio = (word: string): string =>{
    var hasNumber = /\d/;
    if(hasNumber.test(word))return word;   
    let biometricWord = "";
    const characters: string[] = word.split("");
    switch (characters.length) {
        case 0:
            biometricWord = word;
            break;
        case 1:
            biometricWord = `<span style="font-weight: bold;"> ${word} </span>`;
            break;
        case 2:
            biometricWord = `<span style="font-weight: bold;"> ${word} </span>`;
            break;
        case 3:
            biometricWord = `<span style="font-weight: bold;"> ${word} </span>`;
            break;
        default:
            let bold = "";
            let notBold = "";
            for (let i = 0; i < characters.length; i++){
                if (i < characters.length/2){
                    bold += characters[i];
                }else{
                    notBold += characters[i];
                }
            }
            biometricWord = `<span style="font-weight: bold;"> ${bold}</span>${notBold} `;
            break;
    }
    return biometricWord;
};

const highlightWords = (paragraphs: HTMLElement[]) => {
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
};

const deHighlightWords = () => {
    location.reload();

};



