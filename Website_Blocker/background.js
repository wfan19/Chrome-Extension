console.log("Loaded extension");

var date = new Date();

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) 
{
  if (changeInfo.status == 'complete' && tab.active) 
  {
    var date = new Date();
    console.log("Page loaded");
    console.log(date.getSeconds()+60*date.getMinutes()+3600*date.getHours());
    chrome.tabs.query({url:"*://www.youtube.com/*"}, myMain)
  }
})

function myMain(tabs)
{
  if(tabs.length != 0)
  {
    console.log(tabs);
    console.log(tabs[0].url);
    chrome.tabs.executeScript(tabs[0].id, {
      file:
        'content_script.js',
    });
    console.log("content script executed..?")
  }
  else
    console.log("No matching tabs");
}
