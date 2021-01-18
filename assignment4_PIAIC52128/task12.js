var date = new Date();
var dateGet = date.getDate();

if(dateGet < 16)
{
    document.write("First fifteen days of the month<br>");
}
else
{
    document.write("Last days of the month<br>");
}
