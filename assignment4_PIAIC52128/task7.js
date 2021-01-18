var str = "The quick brown fox jumps over the lazy dog";
document.write("Text: ", str + "<br>");

//Finding occurence(s)
var words = str.split(" ");
var count = 0;

for(var i = 0; i < words.length; i++)
{
    if(words[i].toLowerCase() == "the")
    {
        count++;
    }
}

document.write("There are " + count + " occurrence(s) of word 'the'");