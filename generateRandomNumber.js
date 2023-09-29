// Define the delay in milliseconds (3 seconds)
var delay = 3000;

// Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

// Function to display countdown messages
function displayCountdown() {
  var remainingTime = delay / 1000; // Convert delay to seconds
  var countdownInterval = setInterval(function() {
    console.log("Time remaining: " + remainingTime + " seconds");
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(countdownInterval); // Stop the countdown
      var randomNumber = generateRandomNumber();
      console.log("Random Number Generated: " + randomNumber);
    }
  }, 1000); // Update every 1 second
}

// Call the function to display countdown and generate a random number
displayCountdown();
