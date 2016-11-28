function bitwiseProblem() {
	
var num1 = Number(prompt("What is the value of the first number?"));
var num2 = Number(prompt("What is the value of the second number?"));

function bitwiseAnd(x, y)
{
  return x & y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 & num2 = " + bitwiseAnd(num1, num2))
document.write("<br>")
document.write("<br>")

function bitwiseOr(x, y)
{
  return x | y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 | num2 = " + bitwiseOr(num1, num2))
document.write("<br>")
document.write("<br>")

function bitwiseXor(x, y)
{
  return x ^ y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 ^ num2 = " + bitwiseXor(num1, num2))
document.write("<br>")
document.write("<br>")

function bitwiseLeftShift(x, y)
{
  return x << y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 << num2 = " + bitwiseLeftShift(num1, num2))
document.write("<br>")
document.write("<br>")

function bitwiseRightShift(x, y)
{
  return x >> y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 >> num2 = " + bitwiseRightShift(num1, num2))
document.write("<br>")
document.write("<br>")
}