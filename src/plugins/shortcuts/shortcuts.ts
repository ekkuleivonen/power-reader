//highlights shortcut
let char_h = false;
let char_i = false;
//reader mode shortcuts
let char_r = false;
let char_e = false;
////////////////////////////////////////////////////////////////////////

const highlightShortcut = () => {
  console.log("highlights shortcut");
  //check chrome store if plugin is active
  chrome.storage.sync.get(["highlights"], function (result) {
    // if already active --> turn off --> otherwise turn on
    if (!result.highlights)
      return chrome.runtime.sendMessage({ name: "highlights", value: true });
    if (result.highlights)
      return chrome.runtime.sendMessage({ name: "highlights", value: false });
  });
};

const readerModeShortcut = () => {
  console.log("reader mode shortcut");
  //check chrome store if plugin is active
  chrome.storage.sync.get(["reader_mode"], function (result) {
    // if already active --> turn off --> otherwise turn on
    if (!result.reader_mode)
      return chrome.runtime.sendMessage({ name: "reader_mode", value: true });
    if (result.reader_mode)
      return chrome.runtime.sendMessage({ name: "reader_mode", value: false });
  });
};

const keyboardShortcuts = (e: KeyboardEvent) => {
  //user cannot be typing within an input field etc...
  if (document.activeElement !== document.body) return;
  //look for shortcut keys pressed simuoltaneysly
  switch (e.code) {
    case "KeyH":
      if (e.type === "keydown") char_h = true;
      if (e.type === "keyup") char_h = false;
      break;
    case "KeyI":
      if (e.type === "keydown") char_i = true;
      if (e.type === "keyup") char_i = false;
      break;
    case "KeyR":
      if (e.type === "keydown") char_r = true;
      if (e.type === "keyup") char_r = false;
      break;
    case "KeyE":
      if (e.type === "keydown") char_e = true;
      if (e.type === "keyup") char_e = false;
      break;
  }

  if (char_h && char_i) return highlightShortcut();
  if (char_r && char_e) return readerModeShortcut();
};

window.addEventListener("keydown", keyboardShortcuts);
window.addEventListener("keyup", keyboardShortcuts);
