const title: HTMLElement | null = document.getElementById("title");
const version: string = "v.01";
if (title) title.innerText = `${title.innerText} ${version}`;
console.log(title);