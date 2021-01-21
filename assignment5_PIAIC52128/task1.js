document.write("Examples: <br><br>");
document.write("factorial(8) --------------------->" + factorial(8) + "<br>");
document.write("factorial(8) --------------------->" + factorial(5) + "<br>");
document.write("factorial(8) --------------------->" + factorial(9) + "<br>");


function factorial(n)
{
    if(n <= 1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n-1);
    }
}