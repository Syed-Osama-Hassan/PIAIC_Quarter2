var input = parseInt(prompt("Enter a positive number"));

if(input < 0)
{
    document.write("Invalid number");
}

var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
, "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"
, "eighteen", "nineteen"];

var tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty"
, "ninety"];

var numStr = input.toString();

if(input === 0)
{
    document.write(0);
}

if(input < 20)
{
    document.write(ones[input]);
}

if(input > 19 && input < 100)
{
    document.write(tens[numStr[0]] + " " + ones[numStr[1]]);
}

if(input > 100 && input < 1000)
{
    document.write(ones[numStr[0]] + " hundred and ");
    var num = parseInt(numStr[1] + numStr[2]);
    if(num < 20)
    {
        document.write(ones[num]);
    }
    else
    {
        document.write(tens[numStr[1]] + " " + ones[numStr[2]]);
    }
}