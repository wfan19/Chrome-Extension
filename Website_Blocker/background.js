//copied from "Study buddy" Stack Overflow thread
// https://stackoverflow.com/questions/43889727/how-do-i-block-certain-websites-with-my-chrome-extension

console.log("Loaded extension");


function blockRequest(details) {
   return {cancel: true};
}

function updateFilters(urls) {
   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, 
    {
     urls: ["*://*.facebook.com/*", "*://*.facebook.net/*"]
    }, ['blocking']);
}

updateFilters();
