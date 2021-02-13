chrome.browserAction.onClicked.addListener(() => {
    //TODO remove
    let url = "https://yahoo.co.jp";
    chrome.tabs.query({active: true, currentWindow: true}, (e) => {
        url = e[0].url;
        console.log(url);
    });
    chrome.runtime.sendNativeMessage("com.mosugi.app.mshare", {service: "notes", url: url}, function (response) {
        if (chrome.runtime.lastError) {
            console.log("ERROR: " + chrome.runtime.lastError.message);
        } else {
            console.log("Messaging host say: ", response);
        }
    })
});
