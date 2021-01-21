isWeekend('Oct 12, 2019');
isWeekend('Oct 09, 2019');


function isWeekend(date)
{
    var d = new Date(date);

    switch(d.getDay())
    {
        case 0:
        case 6:
            document.write("Its weekend <br>");
            break;
        case 1:
            document.write("Sorry! wait for 4 more days<br>");
            break;
        case 2:
            document.write("Sorry! wait for 3 more days<br>");
            break;
        case 3:
            document.write("Sorry! wait for 2 more days<br>");
            break;
        case 4:
            document.write("Sorry! wait for 1 more day<br>");
            break;
    }
}