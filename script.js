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


// get password length
function getPasswordLength() {
  var pwdLen;

  pwdLen = parseInt(prompt("Password Length (8-128)?"));

  // check that user enters a number and not other alpha/special chars
  if (isNaN(pwdLen)) {
    alert("Only a number between 8 and 128 is allowed for Password length.");
    return false;
  }
  
  // verify that user entered number in [8-128]
  if (pwdLen < 8) {
    alert("Minimum length for password is 8 charaters");
    return false;    
  }
  if (pwdLen > 128) {
    alert("Maximum length for password is 128 charaters");
    return false;    
  }
  // if we came up to here then user entered correct length, update pwdOptions
  pwdOptions.pwdLen = pwdLen;
  return true;
}


// function to get pwd character option
function getPasswordCharOptions(charType) {
  var pwdCharPrompt = "Click OK to include ";
  var answer = false;

  if (charType == "specialChars") {
    pwdCharPrompt += "Special Characters.";
  }
  else if (charType == "numberChars") {
    pwdCharPrompt += "Numbers.";
  }
  else if (charType == "lowerCaseChars") {
    pwdCharPrompt += "lower Case Characters.";
  } 
  else if (charType == "upperCaseChars") {
    pwdCharPrompt += "UPPER Case Characters.";
  } 
  answer = confirm(pwdCharPrompt);
  pwdOptions[charType] = answer;
  // console.log(charType, answer);
  return answer;
}

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