// Assignment code here
// input for num of characters 
// input for special characters
// input for nums
// input for lowercase
// input for uppercase 
// gather user input on password

// Get references to the #generate element

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var Upper = ["A","B","C", "D", "H", "I", "J", "k", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var confirmLength = prompt("How many characters would you like your in your password?")

  if (confirmLength <=7 || confirmLength > 128) {
    alert("Password lenght must be between 8-128 characters restart");
    var confirmLength = prompt("How many characters would you like your password?");
  }

  var confimSpecialCharacter= confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter= confirm("Click OK to confirm if you like to inculde numeric characters");
  var confirmUpperCase= confirm("Click OK to confirm if you would like to include uppercase characters");
  var confirmLowerCase= confirm("Click OK to confirm if you would like to include lowercase characters");
  
  var options =[]
  if (confimSpecialCharacter){
    options = options.concat(specialChar)
  }
  if (confirmNumericCharacter){
    options = options.concat(number)
  }
  if(confirmUpperCase){
    options = options.concat(Upper)
  }
  if (confirmLowerCase){
    options = options.concat(Lower)
  }
  var password = ''
  for (i =0; i<confirmLength; i++){
    password +=options [Math.floor(Math.random()* options.length)]
  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);