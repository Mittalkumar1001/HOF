// Define the input string
var input = "Hello, World!";

// Function to reverse the string
function reverseString(input) {
  return input.split('').reverse().join('');
}

// Function to reverse the string after a 2-second delay
function reverseAfterDelay() {
  setTimeout(function() {
    var reversedString = reverseString(input);
    console.log("Reversed String: " + reversedString);
  }, 4000); // 2-second delay (2000 milliseconds)
}

// Call the function to reverse after the delay
reverseAfterDelay();
