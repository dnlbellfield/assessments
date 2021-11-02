// twist - dont use (integerNeeded === currentInteger)

// old: check if both items are available in storage, if they are, 
// remove them from storage and put them in a new list

// new: check if the first item is available in storage,
//  if it is remove from storage 
// check the 2nd item, 
// if its in storage,
// remove them from storage and put them in a new list
// else put the 2nd item back

function findTargetSumPairs (integerArray, targetSum) {
  var validIntegerPairs = [];
  var integerQtyMap = {};

  for (var i = 0; i < integerArray.length; i++) {
    // If the current integer is in the map already, simply increment it.
    // Otherwise, insert it into the map and initialize the value to 1.
    if (integerArray[i] in integerQtyMap) {
      integerQtyMap[integerArray[i]]++;
    } else {
      integerQtyMap[integerArray[i]] = 1;
    }
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var integerNeeded = targetSum - currentInteger;

    if (integerNeeded in integerQtyMap) {
    // An integer can only be added to the validIntegerPairs array
    // if it's key value is greater than zero. 
      if (integerQtyMap[currentInteger] > 0) {  
      // the cost of adding currentInteger to validIntegerPairs is 'Qty: 1'. 
        integerQtyMap[currentInteger]--;
        //  is [integerNeeded] value is greater than zero
        if (integerQtyMap[integerNeeded] > 0) {
          integerQtyMap[integerNeeded]--;
        // new approach: check if the first item is available in storage,
        //  if it is remove from storage (add to array) 
        // check the 2nd item 
        // if its in storage,
        // remove them from storage and put them in a new list
        // else put the 2nd item back
                validIntegerPairs.push([currentInteger, integerNeeded]);
        } else {
          integerQtyMap[integerNeeded]++;  
        }
      }
    }
  }

  return validIntegerPairs;
}
