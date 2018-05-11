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
  console.log(tabs[0].url);
  chrome.tabs.executeScript({
    file:
      'content_script.js'
  });



  /*
    if((date.getSeconds()+60*date.getMinutes()+3600*date.getHours()) > (0 * 3600) //initial time
            && (date.getSeconds()+60*date.getMinutes()+3600*date.getHours()) < (24 * 3600)) //ending time, all times in Millitary time
    {
      console.log("test");
      console.log(tabs);
        for(var i = 0; i < tabs.length; i++) //loops through all tabs found with youtube URL and changes them.
        {
            console.log(i);
            console.log(tabs[i].url);

            var tab = tabs[i];

            tab.body.innerHTML = "";
            var text = tab.createElement("div");
            var tNode  = tab.createTextNode("GO WORK"); //text will eventually be customizable
            text.appendChild(tNode);
            tab.body.appendChild(text);
            text.style.fontSize = "60px";
            text.style.fontFamily = "Sans Serif"

            text.style.marginTop = "-100px";
            text.style.position = "absolute";
            text.style.textAlign = "center";
            text.style.top = "50%";
            text.style.left = "0";
            text.style.width = "100%";
        }
    }
    */
}
