var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to XYZ Bakery. What do you want to order?");

var index = A.indexOf(order, 0);

if(index != -1)
document.write(A[index] + " is available at index " + index + " in our bakery");
else
document.write("We are sorry. " + order + " is not available in our bakery");