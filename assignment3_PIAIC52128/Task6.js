var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

for(var i = 0; i < 3; i++)
{
    document.write(i+1 + o[i+1] + " choice is " + aCities[i]  + "<br>");
}