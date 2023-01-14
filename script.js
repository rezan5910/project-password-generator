// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
let passwordOptions = { };
function getPasswordOptions() {

  while (true){
    passwordOptions.length = prompt('Enter the length of password you require (10-64 digits):');
    if (passwordOptions.length >=10 && passwordOptions.length <=64) {
      break;
    }else {
      alert(`You must enter a number between 10 and 64: `);
    }

  }
  
  passwordOptions.upperCase = confirm('Do you require your password to have upper case charachters?');
  passwordOptions.lowerCase = confirm('Do you require your password to have lower case charachters? ');
  passwordOptions.numChar = confirm('Do you require your password to have numbers?');
  passwordOptions.specialChar = confirm('Do you require your password to have special charachters?');
  
  return passwordOptions;
};
 
// console.log(passwordOptions)

// Function for getting a random element from an array

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random()*arr.length);
  console.log(arr[randomIndex])
  return arr[randomIndex]



}

// Function to generate password with user input




function generatePassword() {
  // making an array of all the selected options
  let mainArray = [];
  let generatedPassword = '';
  let passwordOptions = getPasswordOptions()
  if (passwordOptions.upperCase) {
    mainArray = mainArray.concat(upperCasedCharacters);
  }
  if (passwordOptions.lowerCase) {
    mainArray = mainArray.concat(lowerCasedCharacters);
  }
  if (passwordOptions.numChar) {
    mainArray = mainArray.concat(numericCharacters);
  }
  if (passwordOptions.specialChar) {
    mainArray = mainArray.concat(specialCharacters);
  }
  
  for (let i = 0;  i < passwordOptions.length; i++) {
    generatedPassword+=getRandom(mainArray);
  }
console.log(mainArray);  
// console.log(generatedPassword);
return  generatedPassword;

}
// console.log(mainArray);
// console.log(generatedPassword);
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


