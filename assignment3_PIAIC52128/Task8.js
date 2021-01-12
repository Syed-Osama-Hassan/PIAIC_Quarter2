document.write("a. Counting: ");

//Counting 
for(var i = 0; i < 15; i++)
{
    if(i+1 < 15)
    document.write(i+1 + ", ");
    else
    document.write(i+1);
}
document.write("<br>");
document.write("b. Reverse counting: ");

//Reverse Counting
for(var j = 10; j > 0; j--)
{
    if(j > 1)
    document.write(j + ",");
    else
    document.write(j);
}

document.write("<br>");
document.write("C. Even: ");

//Even numbers
for(var ii = 0; ii <= 20 ; ii++)
{
    if(ii % 2 == 0 && ii < 20)
    {
        document.write(ii + ", ");
    }
    else if(ii % 2 == 0 && ii == 20)
    {
        document.write(ii);
    }
}

document.write("<br>");
document.write("d. Odd: ");

//Odd numbers
for(var ii = 0; ii <= 20 ; ii++)
{
    if(ii % 2 != 0 && ii < 19)
    {
        document.write(ii + ", ");
    }
    else if(ii % 2 != 0 && ii == 19)
    {
        document.write(ii);
    }
}

document.write("<br>");
document.write("e. Series: ");

for(var jj = 1; jj <= 10 ; jj++)
{
    if(jj < 10)
    {
        document.write(jj * 2 + "k, ");
    }
    else
    {
        document.write(jj * 2 + "k");
    }
}