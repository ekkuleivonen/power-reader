//version
const title: HTMLElement | null = document.getElementById("title");
const version: string = "v.0.01";
if (title) title.innerText = `${title.innerText} ${version}`;
///////////////////////////////////////////////////////////////////////

// In-page cache of the user's options
const pluginOptions: any = {};

const updateUI = () => {
  Object.keys(pluginOptions).forEach((key) => {
    const checkBox = document.getElementById(key as string) as HTMLInputElement;
    checkBox.checked = pluginOptions[key];
  });
};

// Initialize the form with the user's option settings
chrome.storage.sync.get(["plugin_options"], (result) => {
  Object.assign(pluginOptions, result.plugin_options);
  updateUI();
});

// Listen for changes in the options and update UI
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.plugin_options?.newValue) {
    Object.assign(pluginOptions, changes.plugin_options.newValue);
    updateUI();
  }
});

// Send Toggle updates to background script
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
};

if (pluginForm) {
  pluginForm.addEventListener("change", handleToggle);
}
