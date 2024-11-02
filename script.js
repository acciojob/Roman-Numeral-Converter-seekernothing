function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = '';
    let remaining = num;
    
    // Iterate through the symbols from largest to smallest
    for(let i = 0; i < Object.keys(obj).length - 1; i++) {
        const currentSymbol = obj[i][0];
        const currentValue = obj[i][1];
        const nextSymbol = obj[i + 1][0];
        const nextValue = obj[i + 1][1];
        
        // Handle subtractive notation
        if (remaining >= currentValue) {
            const count = Math.floor(remaining / currentValue);
            result += currentSymbol.repeat(count);
            remaining = remaining % currentValue;
        }
        
        // Check for subtractive combinations (like IV, IX, XL, etc.)
        const subtractiveValue = currentValue - nextValue;
        if (remaining >= subtractiveValue && 
            currentValue / nextValue <= 10) { // Only valid for certain combinations
            result += nextSymbol + currentSymbol;
            remaining -= subtractiveValue;
        }
    }
    
    // Handle remaining ones
    if (remaining > 0) {
        result += obj[6][0].repeat(remaining);
    }
    
    return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
