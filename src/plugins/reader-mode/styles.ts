const styleTextElement = (element: HTMLElement): HTMLElement => {
  element.style.color = "white";
  element.style.fontFamily = "sans-serif";
  //h1
  if (element.tagName === "H1") {
    element.style.fontSize = "3em";
    element.style.fontWeight = "600";
  }
  //h2
  if (element.tagName === "H2") {
    element.style.fontSize = "2em";
    element.style.fontWeight = "600";
  }
  //h3
  if (element.tagName === "H3") {
    element.style.fontSize = "1.5em";
    element.style.fontWeight = "400";
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

const deStyleChildNodes = (element: HTMLElement): HTMLElement | true => {
  //console.log(element.getElementsByTagName("a"));
  const children: NodeListOf<HTMLElement> = element.querySelectorAll("*");
  if (children.length < 1) return element;
  return styleChildren(children);
};

const styleChildren = (children: NodeListOf<HTMLElement>): true => {
  children.forEach((child) => {
    if (child.tagName !== "A") return child;
    child.className = "";
    child.id = "";
    child.style.color = "orange";
  });
  return true;
};

export { styleTextElement, deStyleChildNodes };
