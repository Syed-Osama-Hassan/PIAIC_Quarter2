var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];

for(var j = 0; j < a.length; j++)
{
    b.push(a[j]);
}

for(var i = 0; i < b.length; i++)
{
    if(result.indexOf(b[i]) == -1)
    {
        result.push(b[i]);
    }
}

document.write("Output: " + result);