document.write("Mirror array for mirror([0,5,6,7]) is " + mirror([0,5,6,7]) + "<br>");
document.write("Mirror array for mirror([1,2,3,4]) is " + mirror([1,2,3,4]) + "<br>");

function mirror(arr)
{
    var length = arr.length;
    for(var i = 0; i < length; i++)
    {
        arr[length + i] = arr[length - 1 - i];
    }

    return arr;
}