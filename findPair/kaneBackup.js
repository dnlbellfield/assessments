// if else
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
      // If the integers are of the same value, check to make sure there are at least 2 'unused' integers in the map.
      // Otherwise, check to make sure is 1 of each integer. Then push them onto the array and decrement.
      if (integerNeeded === currentInteger) {
        if (integerQtyMap[integerNeeded] > 1) {
          validIntegerPairs.push([currentInteger, integerNeeded]);
          integerQtyMap[currentInteger]--;
          integerQtyMap[integerNeeded]--;
        }
      } else {
        if (integerQtyMap[integerNeeded] > 0 && integerQtyMap[currentInteger] > 0) {
          validIntegerPairs.push([currentInteger, integerNeeded]);
          integerQtyMap[currentInteger]--;
          integerQtyMap[integerNeeded]--;
        }
      }
    }
  }

  return validIntegerPairs;
}

