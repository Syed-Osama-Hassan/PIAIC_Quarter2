calculateAge('Sep 01, 1979');
calculateAge('Aug 09, 1986');

function calculateAge(date)
{
    var d1 = new Date(date);
    var d2 = new Date('March 31, 2021');
    
    var year = d1.getFullYear();
    var currentYear = d2.getFullYear();
    var currentMonth = d2.getMonth();

    document.write("You are " + (currentYear - year - 1) + " years, " +
     (currentMonth + 1) + " month and " + d2.getDate() + " days old<br>");
}