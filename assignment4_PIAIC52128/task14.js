var date = new Date();
document.write("Current Data: ", date + "<br>");
var hour = date.getHours() + 1;
date.setHours(hour);
document.write("1 hour later it was " + date);