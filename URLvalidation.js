// Function to check if a URL is valid
function isValidURL(url) {
    // Define a regular expression pattern for valid URLs
    const urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
  
    // Use the test method to check if the input matches the pattern
    return urlPattern.test(url);
  }
  
  // Test cases
  const url1 = "http://www.example.com";
  const url2 = "https://subdomain.example.co.uk";
  const url3 = "ftp://invalid.url";
  
  console.log(`Is "${url1}" a valid URL? ${isValidURL(url1) ? "Yes" : "No"}`);
  console.log(`Is "${url2}" a valid URL? ${isValidURL(url2) ? "Yes" : "No"}`);
  console.log(`Is "${url3}" a valid URL? ${isValidURL(url3) ? "Yes" : "No"}`);
  