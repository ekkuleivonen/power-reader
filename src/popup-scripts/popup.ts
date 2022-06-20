//version
const title: HTMLElement | null = document.getElementById("title");
const version: string = "v.01";
if (title) title.innerText = `${title.innerText} ${version}`;
///////////////////////////////////////////////////////////////////////

// In-page cache of the user's options
const pluginOptions: any = {};

// Initialize the form with the user's option settings
chrome.storage.sync.get(["plugin_options"], function (result) {
  Object.assign(pluginOptions, result.plugin_options);
  Object.keys(pluginOptions).forEach((key) => {
    const checkBox = document.getElementById(key as string) as HTMLInputElement;
    checkBox.checked = pluginOptions[key];
  });
});

//SEND TOGGLE UPDATES TO BACKGROUND SCRIPT
const pluginForm: HTMLFormElement | null = document.getElementById(
  "plugin-form"
) as HTMLFormElement;

const handleToggle = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = target.checked;
  const name = target.name;
  //update cache
  pluginOptions[name] = value;
  chrome.storage.sync.set({ plugin_options: pluginOptions });
  //return chrome.runtime.sendMessage({ name: name, value: value });
};

//event listener on the form
if (pluginForm) {
  pluginForm.addEventListener("change", handleToggle);
}
///////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
