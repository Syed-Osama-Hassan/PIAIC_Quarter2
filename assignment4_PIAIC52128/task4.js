var regex = /\S+@+\S+\.+\S/g;
var email = prompt("Enter email");

if(email.match(regex))
{
    document.write("Email accepted!");
}
else
{
    document.write("Invalid email");
}