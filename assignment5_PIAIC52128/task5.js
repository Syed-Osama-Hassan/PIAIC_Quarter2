var input = parseInt(prompt("Enter amount to withdraw?"));
var hundred = 0;
var fifty = 0;
var ten = 0;

while(input > 0)
{
    if(input >= 100)
    {
        input = input - 100;
        hundred++;
    }
    else if(input < 100 && input >= 50)
    {
        input = input - 50;
        fifty++;
    }
    else if(input < 50 && input >= 10)
    {
        input = input - 10;
        ten++;
    }
}

document.write("You will have " + hundred + " hundred note(s) " + fifty + " fifty note(s) " + ten
 + " ten note(s).")