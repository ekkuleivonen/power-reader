export { runBionic };

const runBionic = (node: ChildNode, paragraph: HTMLElement) => {
    if (node.textContent === null) return node;
    const originalWords:string[] = node.textContent.split(" ");
    const filteredWords = originalWords.filter(word => word!=="" && word !== "\n");
    console.log("Filtered words: ", filteredWords);
    //replace each word with a span element
    filteredWords.forEach(word => {
        console.log("NODE: ", node);
        //if (node.parentElement === null) return null;
        //highlight first letters (returns html string)
        //const modifiedWord = spannify(word);

        //check for , ; . ? ! "" * # etc...
        console.log("REPLACING ", word, "WITH ", `<span>${word} </span>`);
        const span = `<span style="color: hotpink; font-weight: bold;">${word} </span>`;
        paragraph.innerHTML = paragraph.innerHTML.replace(word,span);
    });
    return paragraph;
};

// const spannify = (word : string) : string=>{
//     const characters = word.split("");
//     let modifiedWord = "";
//     switch(characters.length) {
//         case 0:
//             modifiedWord = word;
//           break;
//         case 1:
//             modifiedWord = `<span style="color: hotpink; font-weight: bold;">${word} </span>`;
//           break;
//         case 2:
//             modifiedWord = `<span style="color: hotpink; font-weight: bold;">${word} </span>`;
//           break;
//         case 3:
//             modifiedWord = `<span style="color: hotpink; font-weight: bold;">${word} </span>`;
//           break;
//         default:
//             modifiedWord ="";
//       }
    
//     return modifiedWord;
// };


