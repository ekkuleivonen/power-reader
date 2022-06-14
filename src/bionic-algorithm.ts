export {replaceNode};

const replaceNode = (node: ChildNode)=>{
    if (node.textContent === null) return node;
    const newNode = document.createElement("span");
    const words: string[] = node.textContent.split(" ").filter(word => word!=="" && word !== "\n");
    const HTMLstring: string = spannify(words);
    newNode.innerHTML = HTMLstring;
    return newNode;
};

const spannify = (words : string[]) : string=>{
    let HTMLstring = "";
    words.forEach(word =>{
        const span = `<span> ${word} </span>`;
        HTMLstring += span;
    });
    return HTMLstring;
};


