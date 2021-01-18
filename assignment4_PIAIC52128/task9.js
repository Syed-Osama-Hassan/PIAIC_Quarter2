var str = "<p><strong><em>Only print this</em></strong></p>";
document.write(str);
document.write("<strong>Output:</strong> <br>");

var output = "";
var tag = false;

for(var i = 0; i < str.length; i++)
{
    if(str[i] === "<")
    {
        tag = true;
    }

    if(!tag)
    {
        output += str[i];
    }

    if(str[i] === ">")
    {
        tag = false;
    }
}

document.write(output);