var age = parseInt(prompt("Enter your age"));

var date = new Date();
var year = date.getFullYear();
var birthYear = year - age;
document.write("Your birth year is "+birthYear);