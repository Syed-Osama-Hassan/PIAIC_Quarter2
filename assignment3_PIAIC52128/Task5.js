var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
document.write("Array: var arr1 = " + arr1 + "<br>");
var outputArr = [];

for(var i = 0; i < arr1.length; i++)
{
    if(outputArr.indexOf(arr1[i]) == -1)
    {
        outputArr.push(arr1[i]);
    }
}

document.write("Array output = " + outputArr + "<br>");