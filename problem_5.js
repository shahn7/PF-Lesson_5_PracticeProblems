function numSorter() {

//Prompt for the numbers
var x = prompt("What is the value of the first number?");
var y = prompt("What is the value of the second number?");
var z = prompt("What is the value of the thrid number?");

//Convert prompted numbers to intergers
var num1 = parseInt(x);
var num2 = parseInt(y);
var num3 = parseInt(z);

//If Statement that arranges the numbers from smallest to largest
if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    document.write(num1 + ", " + num2 + ", " + num3);
  } else if (num3 <= num2) {
    document.write(num1 + ", " + num3 + ", " + num2);}
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    document.write(num2 + ", " + num1 + ", " + num3);
  } else if (num3 <= num1) {
    document.write(num2 + ", " + num3 + ", " + num1);} 
} else if (num3 <= num1 && num3 <= num2) {
  if (num1 <= num1) {
    document.write(num3 + ", " + num1 + ", " + num2);
  } else if (num3 <= num1) {
    document.write(num3 + ", " + num2 + ", " + num1);}
} else {
	alert("Something went wrong, please try again");
}

}