document.write(palindrome("madam") + "<br>");
document.write(palindrome("Tibit") + "<br>");
document.write(palindrome("osama") + "<br>");
document.write(palindrome("Saas") + "<br>");

function palindrome(str)
{
    var foreword = str;
    var backword = "";

    for(var i = 0; i < str.length; i++)
    {
        backword += str[str.length -1 - i];
    }
    
    if(foreword.toLowerCase() === backword.toLowerCase())
    {
        return "Palindrome";
    }
    else
    {
        return "Not a palindrome";
    }
}