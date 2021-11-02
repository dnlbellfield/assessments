function isValid(inputString) {
  // set the initial pointer positions
  var left = 0;
  var right = inputString.length - 1;
    // if inputString[left] !== inputString[right] return false (you dont have to compare the center, its the center, it is equal to itself)
  while (left < right) {
    if (inputString[left] !== inputString[right]) {
      return false;
    } 
    left++;
    right--;
  }
  
  return true;
}

// strategy: compare the first and last characters, move inward 






