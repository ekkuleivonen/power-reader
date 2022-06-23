const getCurrentTab = async () => {
  const [currentTab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  return currentTab;
};

const disablePlugin = (
  currentTab: chrome.tabs.Tab,
  request: { name: string; value: boolean }
) => {
  if (!currentTab.id) return;
  return chrome.tabs.sendMessage(currentTab.id, request, (response) => {
    console.log("script response: ", response.msg);
  });
};

const enablePlugin = (
  currentTab: chrome.tabs.Tab,
  request: { name: string; value: boolean },
  scriptLocation: string
) => {
  if (!currentTab.id) return;
  return chrome.scripting
    .executeScript({
      target: { tabId: currentTab.id },
      files: [scriptLocation],
    })
    .then((injectedScript) => {
      //And then giving the script the green light via a message
      if (!currentTab.id) return;
      chrome.tabs.sendMessage(currentTab.id, request, (response) => {
        console.log("script response: ", response.msg);
      });
    });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const toggleReaderMode = async (request: { name: string; value: boolean }) => {
  //We find the browser tab where the user is currently
  const currentTab = await getCurrentTab();
  //Already active reader mode can be disabled via a message to the script
  if (request.value === false) return disablePlugin(currentTab, request);
  //Enabling script by injecting to active tab, and giving green light to execute
  return enablePlugin(currentTab, request, "dist/reader-mode.js");
};

const toggleHighlights = async (request: { name: string; value: boolean }) => {
  //We find the browser tab where the user is currently
  const currentTab = await getCurrentTab();
  //Already active reader mode can be disabled via a message to the script
  if (request.value === false) return disablePlugin(currentTab, request);
  //Enabling script by injecting to active tab, and giving green light to execute
  return enablePlugin(currentTab, request, "dist/highlight.js");
};

const toggleKeyboardShortCuts = async (request: {
  name: string;
  value: boolean;
}) => {
  //We find the browser tab where the user is currently
  const currentTab = await getCurrentTab();
  //Already active reader mode can be disabled via a message to the script
  if (request.value === false) return disablePlugin(currentTab, request);
  //Enabling script by injecting to active tab, and giving green light to execute
  return enablePlugin(currentTab, request, "dist/shortcuts.js");
};

const togglePlugins = (pluginOptions: {
  highlights: boolean;

  reader_mode: boolean;
  shortcuts: boolean;
}) => {
  toggleHighlights({ name: "highlights", value: pluginOptions.highlights });
  toggleReaderMode({ name: "reader_mode", value: pluginOptions.reader_mode });
  toggleKeyboardShortCuts({
    name: "shortcuts",
    value: pluginOptions.shortcuts,
  });
};

const handleHotkey = () => {
  //
};

export { togglePlugins, handleHotkey };
