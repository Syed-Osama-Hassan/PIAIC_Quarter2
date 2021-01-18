var inputNum = Number(prompt("Enter a positive number"));

if(inputNum < 0)
{
    document.write("Invalid number. Please enter a positive number");
}
else
{
    document.write("Number: ", inputNum + "<br>");
    document.write("Round off value: ", Math.round(inputNum) + "<br>");
    document.write("Floor Value: ", Math.floor(inputNum) + "<br>");
    document.write("Ceil Value: ", Math.ceil(inputNum) + "<br>");
}