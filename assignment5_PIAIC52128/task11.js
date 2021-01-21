
document.write(isVowel('y') + "<br>");
document.write(isVowel('e') + "<br>");


function isVowel(str)
{
    var bool = false;
        
    switch(str.toLowerCase())
    {
        case 'a':
            bool = true;
            break;
        case 'e':
            bool = true;
            break;
        case 'i':
            bool = true;
            break;
        case 'o':
            bool = true;
            break;
        case 'u':
            bool = true;
            break;
    }
    return bool;
}
