var correctPassword = "12345js";
var password = prompt("Enter your password");

if(password === "")
{
    password = prompt("Please enter your password");
}

if(password.localeCompare(correctPassword) == 0)
{
    alert("Correct! The password you entered matches the original password");
}
else
{
    alert("Incorrect password");
}