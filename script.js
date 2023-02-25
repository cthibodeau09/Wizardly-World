// Assignment code here


// Get references to the #generate element / variables
const generateBtn = document.querySelector("#generate");
const uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numericChars = ["1","2","3","4","5","6","7","8","9"];
const symbolChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">", "(", ")", "{", "}", "/",];



// Prompt for how many characters the user would like in the password
function generatePassword() {
  const passwordLength = window.prompt("How long would you like your password to be?");

  while(passwordLength <=8 || passwordLength >=128) {
    alert("The password length must be between 8 and 128 characters");
    // check prompt is valid, otherwise prompt the question again
    var passwordLength = window.prompt("How long would you like your password to be?");
  }

// confirmation of different variables in the password

const uppercaseSelection = window.confirm("Would you like to include uppercase letters in your password?"); // true
const characterSet = '';
if(characterSet.includes.uppercaseSelection){
  // add uppercase character to the set
  characterSet += uppercaseChars;
}
const lowercaseSelection = window.confirm("Would you like to include lowercase letters in your password?")
characterSet = '';
if(characterSet.includes.lowercaseSelection) {
  // add lowercase character to the setchanged 
  characterSet += lowercaseChars;
}
const numericSelection = window.confirm("Would you like numeric characters in your password?")
if(numericSelection) {
  // add numbers to the set
  characterSet += numericChars;
}
const symbolSelection = window.confirm("Would you like special characters in your password?")
if (symbolSelection) {
  // add symbols to the set
  characterSet += symbolChars;
} 


// select a random character passwordLength amount of times

  const randomPassword = ""
  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + characterSet(Math.floor(Math.random() * password.Length));
      console.log(randomPassword)
  }
  return randomPassword;
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

