var pi = 22/7;
var radius = Number(prompt("Enter radius?"));
calcCircumference(radius);
calcArea(radius);

function calcCircumference(r)
{
    var circumference = 2 * pi * r;
    document.write("The circumference is ", circumference + "<br>");
}

function calcArea(r)
{
    var area = pi * Math.pow(r, r);
    document.write("The area is ", area + "<br>");
}