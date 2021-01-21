
document.write("Vowel count: " +countVowel("A dog sat on the mat") + "<br>");


function countVowel(str)
{
    var count = 0;

    for(var i = 0; i < str.length; i++)
    {
        switch(str[i].toLowerCase())
        {
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break;
        }
    }
    return count;
}