import { findTextContent, createReaderModal } from "./content";
const plugin = "reader_mode";

chrome.runtime.onMessage.addListener(
  (request: { name: string; value: boolean }, sender, sendResponse) => {
    if (request.value === true && request.name === plugin) {
      enableReaderMode();
      sendResponse({ msg: `${plugin} enabled` });
    }
    if (request.value === false && request.name === plugin) {
      disableReaderMode();
      sendResponse({ msg: `${plugin} disabled` });
    }
    return true;
  }
);

const enableReaderMode = () => {
  //get the text content from our original page
  const mainContent = findTextContent();
  //create reader mode modal
  const readerModal = createReaderModal();
  //append the text content to modal
  mainContent.forEach((element) => readerModal.append(element));
  //TODO: set toggle value in UI
};

//close modal
const disableReaderMode = () => {
  location.reload();
  //TODO: set toggle value in UI
};
