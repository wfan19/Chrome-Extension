window.addEventListener ("load", myMain, true);

function myMain(evt)
{
    document.body.innerHTML = "";
    var text = document.createElement("h");
    var tNode  = document.createTextNode("GO WORK"); //text will eventually be customizable
    text.appendChild(tNode);
    document.body.appendChild(text);
    text.style.fontSize = "60px";
    text.style.fontFamily = "Sans Serif"
}

/*
function removeCSS (file)
{
    
}
*/
