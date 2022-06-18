const plugin = "reader_mode";

chrome.runtime.onMessage.addListener(
  (request: { name: string; value: boolean }, sender, sendResponse) => {
    if (request.value === true && request.name === plugin) {
      enableScript();
      sendResponse({ msg: `${plugin} enabled` });
    }
    if (request.value === false && request.name === plugin) {
      disableScript();
      sendResponse({ msg: `${plugin} disabled` });
    }
    return true;
  }
);

const enableScript = () => {
  alert(`${plugin} running`);
};

const disableScript = () => {
  alert(`${plugin} stopping`);
};
