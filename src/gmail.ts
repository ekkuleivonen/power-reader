const gmailWebClient = () => {
    const paragraphs = [
        ...(document.getElementsByTagName(
            "p"
        ) as HTMLCollectionOf<HTMLElement>),
    ];
    return paragraphs;
};

export { gmailWebClient };
