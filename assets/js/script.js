// steps
// pick to customize or not
// pick customizations, need at least 1
// generate a password that meets selected criteria
// display password
// Assignment code here

// array for selected criteria
var selectedCriteria = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  alert("Please answer the following prompts to choose which criteria you would like for your password.");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
};

// Generate a password
var generatePassword = function() {
  // prompt for password length
  var promptPassLength = prompt("How long would you like your password to be? Input a value between 8 and 128");
  console.log(promptPassLength);
  // check for false values
  if (!promptPassLength || promptPassLength < 8 || promptPassLength > 128 || isNaN(promptPassLength)) {
  alert("Please input a valid length.");
  // rerun generatePassword
  generatePassword();
  } else {
    promptCriteria();
  }
};

var promptCriteria = function () {
  var confirmUpper = confirm("Would you like to include Uppercase letters?");
  console.log(confirmUpper);

  var confirmNumeric = confirm("Would you like to include numbers?");
  console.log(confirmNumeric);

  var confirmSpecial = confirm("Would you like to include special characters?");
  console.log(confirmSpecial);

  
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
