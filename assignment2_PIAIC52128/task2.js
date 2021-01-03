var color = prompt("Enter color of traffic signal");

if(color.localeCompare("Red") == 0)
{
    alert("Must Stop");
}
else if(color.localeCompare("Yellow") == 0)
{
    alert("Ready to move");
}
else if(color.localeCompare("Green") == 0)
{
    alert("Move now");
}