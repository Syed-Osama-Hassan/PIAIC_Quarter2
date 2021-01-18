var value, dice;
for(var i = 0; i < 10; i++)
{
    value = (Math.random() * 6) + 1;
    dice = Math.floor(value);
    document.write("random dice value: ", dice + "<br>");
}