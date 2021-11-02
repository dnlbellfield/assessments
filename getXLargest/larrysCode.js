function getXLargestOnePass(inputArray, x) {
  var savedIntsArray = new Array(x);
  var savedIntsMaxIndex = x - 1;

  // Select each item in array starting at index 0.
  for (var i = 0; i < inputArray.length; i ++) {
  
    // Find a slot (or no slot found) to place the selected item.
    for (var j = savedIntsMaxIndex; j >= 0; j--) {
      if (savedIntsArray[j] === undefined || 
        inputArray[i] >= savedIntsArray[j]) {
       
        // Found slot for placement now shift items left to place this element.
        for (var k = 0; k < j; k++) {
          savedIntsArray[k] = savedIntsArray[k + 1];
        }
      
        // Place element in the slot.
        savedIntsArray[j] = inputArray[i];
        break;
      }
    }
  }

  return savedIntsArray;
}