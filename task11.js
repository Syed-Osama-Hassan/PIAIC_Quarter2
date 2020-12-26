var celcius = 25;
var fahrenheit = 70;

var cToF = (celcius * 9 / 5) + 32;
var fToC = (fahrenheit - 32) * 5 / 9;

document.write(celcius + "<sup>o</sup>C is " + cToF +"<sup>o</sup>F<br>");
document.write(fahrenheit +"<sup>o</sup>F is " + fToC+"<sup>o</sup>C");