function palindromeProblem() {
function palindrome(myString) {
  // Sets all characters in the myString parameter to lowercase
  var removeChar = myString.replace(/[^A-Z0-9]/ig,"").toLowerCase();
  
  // Reverses the string
  var checkPalindrome = removeChar.split('').reverse().join('');

  // Checks if the 2 variables are equal
  if(removeChar === checkPalindrome)
  {
    document.write(myString + " is a Palindrome.");
  } else {
    document.write(myString + " is not a Palindrome.");
  }
}

palindrome(prompt("Please enter a phrase"));

}