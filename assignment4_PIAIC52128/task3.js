var check = /([A-Za-z])([0-9])/g;
var password = prompt("Enter password");

if(password.match(check) && password.length >= 8)
{
    document.write("Qualify");
}
else
{
    password = prompt("Enter a valid passord for character code A-Z, a-z, and 0-9");
}