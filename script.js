// Assignment Code
var generateBtn = document.querySelector("#generate");

// different arrays -
var specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?',
  ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChars = [];
  
// function to fill uppercase array from lower case array
function fillUpperCaseArray() {
  for (i=0; i<lowerCaseChars.length; i++) {
    upperCaseChars.push(lowerCaseChars[i].toUpperCase());
  }
}
// call fillUpperCaseArray to fillup uppercase array
fillUpperCaseArray();

// console.log(specialChars);
// console.log(numberChars);
// console.log(lowerCaseChars);
// console.log(upperCaseChars);

// variable for password options, with some default values
var pwdOptions = {
  pwdLen: 8,
  specialChars: false,
  numberChars: false,
  lowerCaseChars: false,
  upperCaseChars: false
};
// get password option keys in an array
var keys = Object.keys(pwdOptions);


// show selected options at the bottom 
function showOptions() {
  optionStr="Chosen Options: Length " + pwdOptions.pwdLen.toString();
  if (pwdOptions.lowerCaseChars) {
    optionStr += ", LowerCase";
  }
  if (pwdOptions.upperCaseChars) {
    optionStr += ", UpperCase";
  }
  if (pwdOptions.specialChars) {
    optionStr += ", Special Characters";
  }
  if (pwdOptions.numberChars) {
    optionStr += ", Numbers";
  }
  return optionStr;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var optionText = document.querySelector("#options");

  passwordText.value = generatePassword();
  if (password != "test") {
    optionText.innerHTML = showOptions();
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);