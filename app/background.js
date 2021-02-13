chrome.browserAction.onClicked.addListener(() => {
    chrome.runtime.sendNativeMessage("com.mosugi.app.mshare", {});
    // chrome.tabs.getSelected(null, function (tab) {
    //   console.log(tab.url);
    // });
});
