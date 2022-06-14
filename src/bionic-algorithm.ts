export { runBionic };

const runBionic = (node: ChildNode, paragraph: HTMLElement):HTMLElement => {
    console.log(paragraph.innerHTML);
    if (node.textContent === null) return paragraph;
    const originalWords:string[] = node.textContent.split(" ");
    const filteredWords: string[] = originalWords.filter(word => word!=="" && word !== "\n");
    console.log("Filtered words: ", filteredWords);
    //replace each word with a span element
    filteredWords.forEach(word => {
        const modifiedWord = `<span style='font-weight: bold;'>${word}</span>`;
        console.log("REPLACING ", word, "WITH ", modifiedWord);
        paragraph.innerHTML = paragraph.innerHTML.replaceAll(word,modifiedWord);
    });
    return paragraph;
};

const spannify = (word : string) : string=>{
    const characters = word.split("");
    let modifiedWord = "";
    //check for , ; . ? ! "" * # etc...
    switch(characters.length) {
        case 0:
            modifiedWord = word;
          break;
        case 1:
            modifiedWord = `<span style="font-weight: bold;">${word} </span>`;
          break;
        case 2:
            modifiedWord = `<span style="font-weight: bold;">${word} </span>`;
          break;
        case 3:
            modifiedWord = `<span style="font-weight: bold;">${word} </span>`;
          break;
        default:
            let spanned = "";
            let notspanned = "";
            for (let i=0; i<characters.length; i++){
                if (i < characters.length/2) {
                    spanned = spanned += characters[i];
                } else {
                    notspanned += notspanned += characters[i];
                }
            }
            modifiedWord =`<span style="font-weight: bold;">${spanned}</span>${notspanned}`;
      }
    
    return modifiedWord;
};


