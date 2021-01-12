var A = [20, 53, 78, 4, 91, 12];
document.write("Before Sorting: " + A + "<br>");
var smallest = A[0];

for(var i = 0; i < A.length - 1; i++)
{
    for(var j = i + 1; j < A.length; j++)
    {
        if(A[j] < A[i])
        {
            var temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }
}

document.write("After Sorting: " + A);