var names = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];

for(var i = 0; i < names.length; i++)
{
    document.write("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + (scores[i]/500) * 100 + "%<br>");
}