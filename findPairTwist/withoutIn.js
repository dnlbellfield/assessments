function findTargetSumPairs (integerArray, targetSum) {
  var validIntegerPairs = [];
  var integerQtyMap = {};

  for (var i = 0; i < integerArray.length; i++) {
    if (integerArray[i] in integerQtyMap) {
      integerQtyMap[integerArray[i]]++;
    } else {
      integerQtyMap[integerArray[i]] = 1;
    }
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var integerNeeded = targetSum - currentInteger;

    if (integerQtyMap[currentInteger] > 0) {  
      integerQtyMap[currentInteger]--;
      if (integerQtyMap[integerNeeded] > 0) {
        integerQtyMap[integerNeeded]--;
        validIntegerPairs.push([currentInteger, integerNeeded]);
      } else {
        integerQtyMap[integerNeeded]++;  
      }
    }
  }
  
  return validIntegerPairs;
}


// new approach: check if the first item (currentInt) is available in storage, 
// update qty count,  look for second item (integerNeeded),
// update qty count, then add pair to a new list,

// old approach: check for items (currentInteger, integerNeeded) in storage, 
// then add pair to the list, then update qty count.