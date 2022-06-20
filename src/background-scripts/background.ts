import { togglePlugins } from "./plugin-toggles";

const pluginOptions = {
  highlights: false,
  reader_mode: false,
  shortcuts: false,
};

//INIT PLUGIN OPTIONS UPON INSTALL
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["plugin_options"], (result) => {
    if (result.plugin_options) {
      //assing options to cache
      console.log("Existing options: ", result.plugin_options);
      Object.assign(pluginOptions, result.plugin_options);
    } else {
      //create plugin options in storage
      console.log("Creating initial plugin options...");
      chrome.storage.sync.set({ plugin_options: pluginOptions });
    }
  });
});
///////////////////////////////////////////////////////////////////////

//LISTEN FOR CHANGES IN PLUGIN OPTIONS
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.plugin_options?.newValue) {
    Object.assign(pluginOptions, changes.plugin_options.newValue);
    //Toggle plugins based on user's plugin options
    togglePlugins(pluginOptions);
  }
});

// TOGGLE PLUGINS UPON PAGE LOAD
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status == "complete") {
    //Toggle plugins based on user's plugin options
    togglePlugins(pluginOptions);
  }
});
