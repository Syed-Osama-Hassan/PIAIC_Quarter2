document.write("Area of rectangle by passing arguments as value is " + calculate_area(4, 2) + "<br>");
var width = 8;
var height = 6;
document.write("Area of rectangle by passing arguments as variables is " + calculate_area(width, height) + "<br>");



function calculate_area(width, height)
{
    return width * height;
}