// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var upppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = '1234567890';
var symbols = '!@#$%^&*()_+<>:"{}|[]\;';
var fill = '';
// ask what they want in it 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // math.floor.random
  // for loop


  passwordText.value = password;

}
function generatePassword() {
  var length = prompt("How long would you like your password to be?");
  if (length < 8 || length > 128) {
    alert ("please choose a number between 8 and 128!");
  }
  var qSymbols = confirm("Would you like symbols included?");
  var qUpper = confirm("would you like Uppercase Characters?");
  var qLower = confirm("Would you like lowercase letters included?");
  var qNumber = confirm("would you like numbers included?")
  if (qSymbols === true){
    fill += symbols
  }
  if (qUpper === true){
    fill += upppercase
  }
  if (qLower === true) {
    fill += lowercase
  }
  if (qNumber === true) {
    fill += numbers
  }

  var keep = '';
 // make if statements for all questions 
  for (var i = 0; i < length; i++) {
 var randomIndex = Math.floor(Math.random()*fill.length)
 var randomChar = fill[randomIndex]
 keep += randomChar
  }
  return keep 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
