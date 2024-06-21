//Triggers when browser has committed to loading a webpage
//Starts early for the sake of removing ad asap

chrome.webNavigation.onCommitted.addListener((tab) => {
//Prevents Script from running when other frames load
    if (tab.frameId == 0) {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//Get the URL
            const url = tabs[0].url;
            const parsedUrl = url.replace("https://", "")
                .replace("https://", "")
        })
    }
})