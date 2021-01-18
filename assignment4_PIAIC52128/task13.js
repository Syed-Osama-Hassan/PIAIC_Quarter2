var currentDate = new Date();
document.write("Current Date: ",currentDate + "<br>");

var milliSeconds = currentDate.getTime();
document.write("Elapsed milliseconds since January 1, 1970: "
, milliSeconds + "<br>");

document.write("Elapsed minutes since January 1, 1970: "
, milliSeconds/ (1000 * 60) + "<br>");

