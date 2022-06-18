const gmailWebClient = () => {
    let paragraphs = [...(document.body.getElementsByClassName("gs") as HTMLCollectionOf<HTMLElement>)];
    window.addEventListener('load', function () {
        gmailWebClient();
      });
    
    console.log(paragraphs);
    return paragraphs;
};

export { gmailWebClient };
