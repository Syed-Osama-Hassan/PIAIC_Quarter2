var number = Math.floor(Math.random() * 100) + 1;
console.log(number);
var play = false;
do
{
    guess();
    var userInput = prompt("Enter YES for play again and No for quit");

    if(userInput.toLowerCase() === 'yes')
    {
        play = true;
    }
    else
    {
        play = false;
    }
}
while(play === true);



function guess()
{  
    for(var i = 0; i < 3; i++)
    {
        var guess = parseInt(prompt("Guess: "));
        if(guess === number)
        {
            document.write("You are right, you won<br>");
            break;
        }
        else
        {
            document.write("Incorrect, Please try again<br>");
        }
    }
}