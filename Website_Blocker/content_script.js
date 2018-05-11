console.log("Content Script Loaded");

var date = new Date();

    if((date.getSeconds()+60*date.getMinutes()+3600*date.getHours()) > (0 * 3600)
            && (date.getSeconds()+60*date.getMinutes()+3600*date.getHours()) < (24 * 3600))
    {
        console.log("About to edit DOM");

        document.body.innerHTML = "";
        var text = document.createElement("div");
        var tNode  = document.createTextNode("GO WORK"); //text will eventually be customizable
        text.appendChild(tNode);
        document.body.appendChild(text);
        text.style.fontSize = "60px";
        text.style.fontFamily = "Sans Serif"

        text.style.marginTop = "-100px";
        text.style.position = "absolute";
        text.style.textAlign = "center";
        text.style.top = "50%";
        text.style.left = "0";
        text.style.width = "100%";
    }