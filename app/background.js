chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}, (e) => {
        const url = e[0].url;
        chrome.runtime.sendNativeMessage("com.mosugi.app.mshare", {service: "notes", text: url}, function (response) {
            if (chrome.runtime.lastError) {
                console.log("ERROR: " + chrome.runtime.lastError.message);
            } else {
                console.log("Messaging host say: ", response);
            }
        })
    });
});
