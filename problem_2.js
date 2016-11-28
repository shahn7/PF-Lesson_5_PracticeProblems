function stringRemover() {

//Prompt for a string or phrase
var string1 = prompt("Please enter a string (ex: abc123abc123): ");

//Prompt for a portion of the string to 
var rmString = prompt("Enter a portion of the string the you want to be removed: ");

document.write("The string that you entered is: " + string1);
document.write("</br>")

document.write("The string that was removed is: " + rmString);
document.write("<br>");

document.write("The result is: " + string1.split(rmString).join(""));

}