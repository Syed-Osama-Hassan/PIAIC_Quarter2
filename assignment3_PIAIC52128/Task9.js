var A = [24, 53, 78, 91, 12];
var largest = A[0];
document.write("Array items: " + A + "<br>");
document.write("The largest number is " );
for(var i = 1; i < A.length; i++)
{
    if(A[i] > largest)
    {
        largest = A[i];
    }
}

document.write(largest);