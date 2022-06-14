const defaultWebclient = () => {
    const paragraphs = [
    ...(document.body.getElementsByTagName(
            "p"
        ) as HTMLCollectionOf<HTMLElement>),
        ...(document.body.getElementsByTagName(
            "div"
        ) as HTMLCollectionOf<HTMLElement>)
    ];
    return paragraphs;
};

export { defaultWebclient };


