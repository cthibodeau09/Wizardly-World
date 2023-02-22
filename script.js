// Assignment code here


// Get references to the #generate element / variables
var generateBtn = document.querySelector("#generate");
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numericChars = '1234567890';
var symbolChars = "`~@#$%^&*()_-+={}[]|\/?':;,.";
var passwordLength = ""


// Prompt for how many characters the user would like in the password
function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?");

  while(passwordLength <=8 || passwordLength >=128) {
    alert("The password length must be between 8 and 128 characters");
    var passwordLength = prompt("How long would you like your password to be?");
  }
}


// password prompts 
// 1. enter length of password 8 <= 128 
// 2. ask for character types 
//    Confirm whether or not to include 
//      A. Lowercase
//      B. Uppercase
//      C. Numeric
//      D. Special characters
// 3. Prompt should be validated and a password should be generated that matches criteria 
// 4. Password is either displayed  in an alert or written on the page 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

