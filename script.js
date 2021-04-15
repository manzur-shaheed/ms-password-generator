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


// randomizer
function getRandomChar(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

// generate password from options
function generatePasswordFromOptions() {
  var charBean = [];
  var chosenCharTypeBean = [];
  var pwd = [];
  var newPosition = 0
  var password = "test";

  // add charater sets based on selected options
  // console.log(pwdOptions);
  for (i=1; i<keys.length; i++) {
    if (pwdOptions[keys[i]]) {
      charBean = charBean.concat(eval(keys[i]));
      // console.log(keys[i], charBean);
      chosenCharTypeBean.push(getRandomChar(eval(keys[i])))
    }
  }
  console.log(chosenCharTypeBean);

  // fill in pwd array with random character from interested character set
  for (i=0; i<pwdOptions.pwdLen; i++) {
    pwd[i] = getRandomChar(charBean);
  }

  // insert characters from chosenCharTypeBean into random position in pwd
  for (i=0; i<chosenCharTypeBean.length; i++) {
    pwd[i] = chosenCharTypeBean[i];
  }
  
  // verify length of generated password
  if (pwd.length == pwdOptions.pwdLen) {
    password = pwd.join('');
  }

  // finally return password
  return password;
}


// function for character options
function generatePassword() {
  var password = "test";
  var answer = false;

  // prompt for password length, also no point proceeding further
  // if password length is not in the range
  if (getPasswordLength()) {
    // prompt for options, iterate from 1 to len(keys), exclude 0 as 
    // that is pwd length and already covered above
    oneOptionSelected = false;
    for (i=1; i<keys.length; i++) {
      // console.log(keys[i]);
      answer = getPasswordCharOptions(keys[i]);
      oneOptionSelected = oneOptionSelected || answer;
    }
    
    // user must select one character type option
    if (oneOptionSelected) {
      // generate password
      password = generatePasswordFromOptions();
    }
    else {
      alert("You must select at least one of the prompted character types.")
    }
  }
  return password;
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