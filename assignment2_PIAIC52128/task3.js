var a = 4;

//This condition will run and execute the alert
if(++a === 5)
{
    alert("given condition for variable a is true");
}

var b = 82;

//This condition will not run
if(b++ === 83)
{
    alert("given condition for variable b is true");
}

var c = 12;
//This condition will not run
if(c++ === 13)
{
    alert("condition 1 is true");
}
//This condition will run and execute the alert
if(c === 13)
{
    alert("condition 2 is true");
}
//This condition will not run
if(++c < 14)
{
    alert("condition 3 is true");
}
//This condition will run and execute the alert
if(c === 14)
{
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

//This condition will run and execute the alert
if(totalCost === laborCost + materialCost)
{
    alert("The cost equals");
}

//This condition will run and execute the alert
if(true)
{
    alert("True");
}
//This condition will not run
if(false)
{
    alert("False");
}

//This condition will run and execute the alert
if("car" < "cat")
{
    alert("car is smaller than cat");
}