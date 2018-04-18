window.addEventListener ("load", myMain, true);

var date = new Date();

console.log(date.getSeconds()+60*date.getMinutes()+3600*date.getHours());

function myMain(evt)
{
    if((date.getSeconds()+60*date.getMinutes()+3600*date.getHours()) > (2 * 3600)
        && (date.getSeconds()+60*date.getMinutes()+3600*date.getHours()) < (23 * 3600))
    {
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
}
