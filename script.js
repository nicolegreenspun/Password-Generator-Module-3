// Assignment code here


  // Create a function to generate password
  var generatePassword = function() {
    console.log("generatePassword function is running");


// Prompt user for password length
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  console.log(length);

  
  // Check if user input is a number
  if (isNaN(length)) {
    alert("Password length must be a number");
    return;
  }

  // Check if user input is between 8 and 128
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }


  // Prompt user for character types
  var lowercase= confirm("Click OK to confirm including lowercase characters");
  var uppercase = confirm("Click OK to confirm including uppercase characters");
  var numeric = confirm("Click OK to confirm including numeric characters");
  var special = confirm("Click OK to confirm including special characters");
  
  // Check if user selects at least one character type
 
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type");
    return;
  }


  // Create character arrays

  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Create character pool

  var charPool = "";
  if (lowercase) {
    charPool += lowercaseChar;
  }
  if (uppercase) {
    charPool += uppercaseChar;
  }
  if (numeric) {
    charPool += numericChar;
  }
  if (special) {
    charPool += specialChar;
  }


  // Generate password

  var password = "";
  for (var i = 0; i < length; i++) {
    password += charPool.charAt(Math.floor(Math.random() * charPool.length));
  }
  return password;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);