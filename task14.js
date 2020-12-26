var a = 2, b = 1;

document.write("a is: " + --a + "<br>");
var result = a - --b;
document.write("a is:" + a + ", b is: " + b+", result is: " + result+ "<br>");
result = result + ++b;
document.write("a is:" + a + ", b is: " + b+", result is: " + result+ "<br>");

document.write("a is:" + a + ", b is: " + b+", result is: " + (result+ b--)+ "<br>");