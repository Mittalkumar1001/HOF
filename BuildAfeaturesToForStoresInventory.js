// Sample object with items and their prices in USD
const itemsInUSD = {
    item1: 10,  // 10 USD
    item2: 20,  // 20 USD
    item3: 30   // 30 USD
  };
  
  // Exchange rate from USD to INR
  const exchangeRate = 80;
  
  // Function to convert USD to INR
  const convertToINR = (usdPrice) => usdPrice * exchangeRate;
  
  // Use the map function to create a new object with prices in INR
  const itemsInINR = Object.keys(itemsInUSD).map((item) => ({
    [item]: convertToINR(itemsInUSD[item])
  }));
  
  // Convert the array of objects into a single object
  const itemsInINRObject = Object.assign({}, ...itemsInINR);
  
  // Display the converted prices in INR
  console.log(itemsInINRObject);
  