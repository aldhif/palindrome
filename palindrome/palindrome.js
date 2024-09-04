const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const resultTextP = document.getElementById('result-text');


function palindromeCheck() {
  const inputValue = textInput.value.trim();
  
  //Check if the input is empty
  if (inputValue === '') {
    alert('Please input a value');
    return;
  }

//Function to check if the string is a palindrome
function isPalindrome(str) {
  const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedInput = cleanedString.split('').reverse().join('');
  return cleanedString === reversedInput;
}

//Check if the input is palindrome
if (isPalindrome(inputValue)) {
  resultTextP.textContent = `${inputValue} is a palindrome`;
} else {
  resultTextP.textContent = `${inputValue} is not a palindrome`;
}

//Show the result div
resultDiv.style.display = 'block';
};

checkBtn.addEventListener('click', palindromeCheck);