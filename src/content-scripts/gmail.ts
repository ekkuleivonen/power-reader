const gmailWebClient = () => {
    const paragraphs = [...(document.body.getElementsByTagName(
        "h1"
    ) as HTMLCollectionOf<HTMLElement>), ...(document.body.getElementsByTagName(
        "h2"
    ) as HTMLCollectionOf<HTMLElement>), ...(document.body.getElementsByTagName(
        "h3"
    ) as HTMLCollectionOf<HTMLElement>), ...(document.body.getElementsByTagName(
        "h4"
    ) as HTMLCollectionOf<HTMLElement>), ...(document.body.getElementsByTagName(
        "h5"
    ) as HTMLCollectionOf<HTMLElement>), ...(document.body.getElementsByTagName(
        "p"
    ) as HTMLCollectionOf<HTMLElement>),
    ...(document.body.getElementsByTagName(
        "div"
    ) as HTMLCollectionOf<HTMLElement>)
    ];
    return paragraphs;
};

export { gmailWebClient };
