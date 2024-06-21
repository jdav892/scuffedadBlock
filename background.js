//Triggers when browser has committed to loading a webpage
//Starts early for the sake of removing ad asap

chrome.webNavigation.onCommitted.addListener((tab) => {
//Prevents Script from running when other frames load
    if (tab.frameId == 0) {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            //Get the URL
            const url = tabs[0].url;
            const parsedUrl = url.replace("https://", "")
            //Remove protocol and subdomain from URL
                .replace("https://", "")
                .replace("www.", "")
            
                //Remove path and queries, only want base domain
            const domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == - 1 ? parsedUrl.length : parsedUrl.indexOf('/'))
            .slice(0, parsedUrl.indexOf('?') == - 1 ? parsedUrl.length : parsedUrl.indexOf('?'));

            try {
                if (domain.length < 1 || domain === null || domain === undefined){
                    return;
                }else if(domain == "linkedin.com"){
                    return;
                }
            }catch (err) {
                throw err;
            }
        });
    }
});

const runLinkedinScript = () => {
//Inject script from file into page
    chrome.tabs.executeScript({
        file: 'linkedin.js'
    });
    return true;
}