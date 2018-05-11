console.log("Content Script Loaded");


    if((date.getSeconds()+60*date.getMinutes()+3600*date.getHours()) > (0 * 3600)
            && (date.getSeconds()+60*date.getMinutes()+3600*date.getHours()) < (24 * 3600))
    {
        var tab = tabs[0];
        console.log("testing 1234");

        /*
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
        */

        /*
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
        */
    }