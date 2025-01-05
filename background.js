chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("zenn.dev")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["styles.css"]
    });
  } else {
    alert("この拡張機能は Zenn のページでのみ動作します。");
  }
});

