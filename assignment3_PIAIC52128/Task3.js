var colors = ["Red", "Yellow"];
document.write("Array after Initialization: " + colors + "<br>");

var color = prompt("Enter color name to add in the beginning?");
colors.unshift(color);
document.write("Array after adding color in the beginning: " + colors + "<br>");

color = prompt("Enter color name to add at the end?");
colors.push(color);
document.write("Array after adding color at the end: " + colors + "<br>");

//Adding two more colors in the beginning of array
colors.unshift("Cyan", "Purple");
document.write("Array after adding two more colors in the beginning: " + colors + "<br>");

//Deleting first color in array
colors.shift();
document.write("Array after deleting first color: " + colors + "<br>");

//Deleting last color in array
colors.pop();
document.write("Array after deleting last color: " + colors + "<br>");

//Adding color at user entered index
var index = parseInt(prompt("Enter index number to add a color?"));
color = prompt("Enter color name");
colors.splice(index, 0, color);
document.write("Array after adding color at specified index: " + colors + "<br>");

//Deleting user entered serires of colors 
index = parseInt(prompt("Enter starting index number to delete color?"));
index1 = parseInt(prompt("Enter how many colors you want to delete?"));
colors.splice(index, index1);
document.write("Array after deleting colors: " + colors + "<br>");

