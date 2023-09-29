// Function to validate LinkedIn profile URLs
function isValidLinkedInURL(url) {
    // Define a regular expression pattern for valid LinkedIn URLs
    const urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Use the test method to check if the input matches the pattern
    return urlPattern.test(url);
  }
  
  // Test cases
  const urls = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/mary_jones",
    "https://www.linkedin.com/in/jane-doe-123",
    "https://www.linkedin.com/in/super_long_username_with_more_than_30_characters",
    "https://www.linkedin.com/company/example",
    "https://www.linkedin.com/in/123_invalid_username",
  ];
  
  // Validate and print LinkedIn profile URLs
  for (const url of urls) {
    const isValid = isValidLinkedInURL(url);
    console.log(`Is "${url}" a valid LinkedIn profile URL? ${isValid ? "Yes" : "No"}`);
  }
  