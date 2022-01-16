// STEPS
// pick customizations, need at least 1
// generate a password that meets selected criteria
// display password

// array for selected criteria
var selectedCriteria = [];
// lowercase characters
var arrayLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// uppercase characters
var arrayUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// numbers
var arrayNum = ['0','1','2','3','4','5','6','7','8','9'];
// special characters
var arraySpecial = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','}','~'];

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
  // reset selectedCriteria for making another password
  selectedCriteria = [];
  // prompt for password length
  var promptPassLength = prompt("How long would you like your password to be? Input a value between 8 and 128");
  
  // check for false values
  if (!promptPassLength || promptPassLength < 8 || promptPassLength > 128 || isNaN(promptPassLength)) {
  alert("Please input a valid length.");
  // rerun generatePassword
  generatePassword();
  } else {
    // move to criteria confirmations
    confirmCriteria();
  }
  // array to store the new password
  var randomPass = [];
  // start generating characters 
  for (var i = 0; i < promptPassLength; i++) {
    // randomly select elements to add to the password
    randomChoice = selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
    // put each choice into the password array
    randomPass.push(randomChoice);
  }
  // make randomPass a string and return it to writePassword
  return randomPass.join('');
};

// confirm character types for the password
var confirmCriteria = function () {
  var confirmLower = confirm("Would you like to include lowercase letters?");
  if (confirmLower) {
    // validate choice
    var confirmChoice = confirm("Are you sure you want to add lowercase letters?");
    if (confirmChoice) {
      // if yes, add arrayLower to selectedCriteria
      selectedCriteria.push(...arrayLower);
    } else {
      alert("Lowercase letters will not be used in your password.");
    }
  } 
  
  var confirmUpper = confirm("Would you like to include uppercase letters?");
  // if yes, add arrayUpper to selectedCriteria
  if (confirmUpper) {
    confirmChoice = confirm("Are you sure you want to add uppercase letters?");
    if (confirmChoice) {
      selectedCriteria.push(...arrayUpper);
    } else {
      alert("Uppercase letters will not be used in your password.");
    }
  }
  
  var confirmNumeric = confirm("Would you like to include numbers?");
  // if yes, add arrayNum to selectedCriteria
  if (confirmNumeric) {
    confirmChoice = confirm("Are you sure you want to add numbers?");
    if (confirmChoice) {
      selectedCriteria.push(...arrayNum);
    } else {
      alert("Numbers will not be used in your password.");
    }
  }
  
  var confirmSpecial = confirm("Would you like to include special characters?");
  // if yes, add arraySpecial to selectedCriteria
  if (confirmSpecial) {
    confirmChoice = confirm("Are you sure you want to add special characters?");
    if (confirmChoice) {
      selectedCriteria.push(...arraySpecial);
    } else {
      alert("Special characters will not be used in your password.");
    }
  }

  // check to make sure at least 1 criteria was selected
  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert("Please choose at least one of the options for your password.");
    confirmCriteria();
  }
  console.log(selectedCriteria);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
