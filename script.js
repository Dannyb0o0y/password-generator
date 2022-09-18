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

document.querySelector('.inputRange').addEventListener('input', updateValue);
document.getElementById('characterAmountNumber').addEventListener('input', updateValue);

function updateValue (e) {
  var sibling = e.target.previousElementSibling || e.target.nextElementSibling;
  sibling.value = e.target.value;
}
