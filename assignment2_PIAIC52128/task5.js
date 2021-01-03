var secretNumber = 4;
var number = parseInt(prompt("Enter a number between 1-10"));

if(number === secretNumber)
{
    alert("Bingo! Correct answer");
}
else if(++secretNumber === number)
{
    alert("Close enough to the correct answer");
}