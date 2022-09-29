// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Initialize variables 
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let specialChar = "\"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  let characterSelect = "";
  let randomPW = "";
  let finalPassword = "";


  //ask for maximum number of characters in password
  let maxChar = prompt(`How long do you want your password to be? (Between 8 and 128 characters)`);
  if (maxChar < 8 || maxChar > 128) {
    alert(`You have to select a number between 8 amd 128 characters. Try again!`);
    // writePassword();
    return "Press the 'Generate' button again and make sure you choose between 8 and 128 characters";
  }
  

  // ask for lowercase letters and add to value seed
  let selectLowerCase = window.confirm(`Do you want to include lower case letters?\n(At least one will be included in the password.)`);
  if (selectLowerCase === true) {
    randomPW = randomPW + lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    characterSelect = characterSelect + lowerCase;
  }


  // ask for uppercase letters and add to value seed
  let selectUpperCase = window.confirm(`Do you want to include upper case letters?\n(At least one will be included in the password.)`);
  if (selectUpperCase === true) {
    randomPW = randomPW + upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    characterSelect = characterSelect + upperCase;
  }


  // ask for numbers and add to value seed
  let selectNumber = window.confirm(`Do you want to include numbers?\n(At least one will be included in the password.)`);
  if (selectNumber === true) {
    randomPW = randomPW + number.charAt(Math.floor(Math.random() * number.length));
    characterSelect = characterSelect + number;
  }


  // ask for special characters and add to value seed
  let selectSpecialChar = window.confirm(`Do you want to include special characters?\n(At least one will be included in the password.)`);
  if (selectSpecialChar === true) {
    randomPW = randomPW + specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    characterSelect = characterSelect + specialChar;
  }


  if (selectSpecialChar === false && selectNumber === false && selectLowerCase === false && selectUpperCase === false) {
    alert(`You have to select at least one option for the contents of your password. Try again!`);
    return "Press the 'Generate' button again and make sure you select at least one condition for the content of your password.";
  }


  // add finishLength variable since problems with for loop conditions
  finishLength = (maxChar - randomPW.length);
  //generate password characters
  // why doesn't i<maxChar - randomPW.length work? Stops after 3
  for (let i = 0; i < finishLength; i++) {
    randomPW = randomPW + characterSelect.charAt(Math.floor(Math.random() * characterSelect.length));
  }


  //fully randomize password characters
  let arrayPW = randomPW.split("");
  for (let i = 0; i < maxChar; i++) {
    finalPassword = finalPassword + (arrayPW.splice((Math.floor(Math.random() * arrayPW.length)), 1));
  }


  return finalPassword;
}

