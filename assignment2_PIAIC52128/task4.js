//Taking numbers and total marks from user and converting them to number
var subject1 = Number(prompt("Enter subject 1 marks"));
var subject2 = Number(prompt("Enter subject 2 marks"));
var subject3 = Number(prompt("Enter subject 3 marks"));
var totalMarks = Number(prompt("Enter total marks"));
var marksObtained = subject1 + subject2 + subject3;
var percentage = (marksObtained / totalMarks) * 100;
var grade, remarks;

document.write("<h1>Mark Sheet</h1><br><br>");
document.write("Total marks : " + totalMarks+"<br>");
document.write("Marks obtained : " +marksObtained+ "<br>");
document.write("Percentage : " +percentage+ "%<br>");

if(percentage >= 80)
{
    grade = "A-one";
    remarks = "Excellent";
}
else if(percentage >= 70)
{
    grade = "A";
    remarks = "Good";
}
else if(percentage >= 60)
{
    grade = "B";
    remarks = "You need to improve";
}
else if(percentage < 60)
{
    grade = "Fail";
    remarks = "Sorry";
}

document.write("Grade : " + grade+"<br>");
document.write("Remarks : " + remarks+"<br>");