//version
const title: HTMLElement | null = document.getElementById("title");
const version: string = "v.01";
if (title) title.innerText = `${title.innerText} ${version}`;
///////////////////////////////////////////////////////////////////////

//talk with content script
const queryContentScript = (name: string, value: boolean) => {
    chrome.tabs.query({currentWindow:true, active:true}, tabs => {
        const activeTab:any = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {toggle:name, value:value});
    });
};
///////////////////////////////////////////////////////////////////////

//plugin toggles
const highLightToggle: HTMLInputElement | null = document.getElementById("highlights") as HTMLInputElement;
const readerModeToggle: HTMLInputElement | null = document.getElementById("reader_mode") as HTMLInputElement;
const highLightAllToggle: HTMLInputElement | null = document.getElementById("highlights_all") as HTMLInputElement;

const toggles = document.getElementsByTagName("input");

const handleToggle = (e:Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.checked;
    const name = target.name;
    return queryContentScript(name, value);
};

if (highLightToggle && readerModeToggle && highLightAllToggle) {
    highLightToggle.addEventListener("change", handleToggle);
    readerModeToggle.addEventListener("change", handleToggle);
    highLightAllToggle.addEventListener("change", handleToggle);
}
///////////////////////////////////////////////////////////////////////

