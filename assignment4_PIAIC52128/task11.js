var sum = 0;
document.write("<strong>Input: \t Output:</strong> <br>");

for(var j = 0; j < 3; j++)
{
    var number = prompt("Enter a number");
    sum = 0;

    for(var i = 0; i < number.length; i++)
    {
        sum += parseInt(number[i]);
    }

    document.write(number + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
     + sum / number.length + "<br>");
}