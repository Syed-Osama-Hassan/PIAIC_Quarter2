var input, inputSplit, number, decimalPlaces;

document.write("Input: \t &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Output: <br>");

for(var i = 0; i < 3; i++)
{
    input = prompt("Enter a number to round and enter decimal places (e.g. 16.251, 2)");
    inputSplit = input.split(",");
    number = parseFloat(inputSplit[0]);
    decimalPlaces = parseInt(inputSplit[1]);
    document.write(input + " ---> " + number.toFixed(decimalPlaces) + "<br>");
}