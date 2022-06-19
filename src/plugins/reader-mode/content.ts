export { findTextContent, createReaderModal };

const findTextContent = (): HTMLElement[] => {
  // get all tags from page
  const allContent = [
    ...document.body.getElementsByTagName("*"),
  ] as HTMLElement[];
  //choose which content to display on the reader mode div
  const mainContent: HTMLElement[] = allContent.filter(
    (element) =>
      element.tagName === "P" ||
      element.tagName === "H1" ||
      element.tagName === "H2" ||
      element.tagName === "H3"
  );
  mainContent.forEach((element) => {
    element.className = "";
    element.id = "";
    styleTextElement(element);
    //TODO: remove a tag styling in child elementss
  });

  return mainContent;
};

const createReaderModal = (): HTMLDivElement => {
  const modal = document.createElement("div");
  styleModal(modal);

  const modalInner = document.createElement("div");
  styleModalInner(modalInner);

  document.body.append(modal);
  modal.append(modalInner);
  return modalInner;
};

const styleModalInner = (modalInner: HTMLDivElement): HTMLDivElement => {
  modalInner.style.boxSizing = "border-box";
  modalInner.style.marginTop = "50px";
  modalInner.style.width = "75%";
  modalInner.style.padding = "10%";
  modalInner.style.backgroundColor = "#252525";
  modalInner.style.boxShadow = "0px 0px 100px rgba(0, 0, 0, 0.5)";
  return modalInner;
};

const styleModal = (modal: HTMLDivElement): HTMLDivElement => {
  modal.style.position = "absolute";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.zIndex = "1000000";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100vw";
  modal.style.minHeight = "100vh";
  modal.style.backgroundColor = "#444444";
  return modal;
};

const styleTextElement = (element: HTMLElement): HTMLElement => {
  element.style.color = "white";
  element.style.fontFamily = "sans-serif";
  //h1
  if (element.tagName === "H1") {
    element.style.fontSize = "3em";
  }
  //h2
  if (element.tagName === "H2") {
    element.style.fontSize = "2em";
  }
  //h3
  if (element.tagName === "H3") {
    element.style.fontSize = "1.5em";
  }
  //p
  if (element.tagName === "P") {
    element.style.fontSize = "1em";
    element.style.fontWeight = "200";
    element.style.letterSpacing = "0.03em";
    element.style.lineHeight = "1.75em";
  }
  return element;
};
