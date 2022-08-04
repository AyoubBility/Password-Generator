// Assignment Code
var char_lenth = 8;
var choice = [];
var lower_case = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper_case = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special_char = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "|", "?"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var correct_answers = user_question_prompts();

  if(correct_answers){
    var gen_password = generatePassword();
    passwordText.value = gen_password;
  } else {
    passwordText.value = "";
  }
}

function generatePassword(){
  var password = "";
  for(var i = 0; i < char_lenth; i++){
    var randomized = Math.floor(Math.random() * choice.length);
    password = password + choice[randomized];
  }
  return password;
}

function user_question_prompts(){
  choice = [];
  char_lenth = parseInt(prompt("How many characters do you want in your password? (8 - 128)"));

  if(isNaN(char_lenth)){
    alert("Character lenth must be a number.\nTry again. (8 - 128)")
    return false;
  } else if(char_lenth < 8){
    alert("Character lenth is lower than 8.\nTry again. (8 - 128)")
    return false;
  } else if(char_lenth > 128){
    alert("Character lenth is greater than 128.\nTry again. (8 - 128)")
    return false;
  }

  if(confirm("Would you like any lowercase characters in your password?")){
    choice = choice.concat(lower_case);
  }

  if(confirm("Would you like any uppercase characters in your password?")){
    choice = choice.concat(upper_case);
  }

  if(confirm("Would you like any numbers in your password?")){
    choice = choice.concat(numbers);
  }

  if(confirm("Would you like any special characters in your password?")){
    choice = choice.concat(special_char);
  }
  return true;
}

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
