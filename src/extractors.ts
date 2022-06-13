
const wordExtract = (paragraph:HTMLElement) : (Node | string[] | null)[]=>{
    const originalNodes : NodeList = paragraph.childNodes;
    originalNodes.forEach(node => console.log("NODE: ", node, "NODETYPE: ", node.nodeType));
    const modifiedNodes = [...originalNodes].map(node => {
    if (node.nodeName !== "#text") return node;
    if ( node.nodeValue === null) return null;
    return node.nodeValue.split(" ");
    });
    return modifiedNodes;
}

export{wordExtract};