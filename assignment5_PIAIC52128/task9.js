addWeek(3);
addWeek(10);

function addWeek(week)
{
    var date = new Date();
    var getDate = date.getDate() + (week * 7);
    date.setDate(getDate);
    document.write(date + "<br>");
}