var firstNumber = parseInt(prompt("Enter first number"));
var secondNumber = parseInt(prompt("Enter second number"));
var operation = prompt("Enter Operation");
var result;

document.write("<h1>Calculator</h1> <br> <br>");
document.write("First Number : " + firstNumber + "<br>");
document.write("SecondNumber : " + secondNumber + "<br>");
document.write("Operation : " + operation + "<br>");
document.write("Statement : " + firstNumber + " " + operation + " " + secondNumber + "<br><br>");

if(operation.localeCompare("+") == 0)
{
    result = firstNumber + secondNumber;
}
else if(operation.localeCompare("-") == 0)
{
    result = firstNumber - secondNumber;
}
else if(operation.localeCompare("*") == 0)
{
    result = firstNumber * secondNumber;
}
else if(operation.localeCompare("/") == 0)
{
    result = firstNumber / secondNumber;
}
else if(operation.localeCompare("%") == 0)
{
    result = firstNumber % secondNumber;
}

document.write("Result : " + result);
