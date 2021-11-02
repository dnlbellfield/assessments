// other conditional 
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
    // updated version. older version is at bottom of the page
    if (integerNeeded in integerQtyMap) {
      if (integerQtyMap[integerNeeded] > 0) {
        integerQtyMap[integerNeeded]--;
        if (integerQtyMap[currentInteger] > 0) {
          integerQtyMap[currentInteger]--;
          validIntegerPairs.push([currentInteger, integerNeeded]);
        }
      } else {
        integerQtyMap[integerNeeded]++;
      }
    }
  }

  return validIntegerPairs;
}






// // if theyre the same number
// integerQtyMap[integerNeeded] > 1

// // if current and needed are not the same 
// integerQtyMap[integerNeeded] > 0 && integerQtyMap[currentInteger] > 0

// //pseudocode
// if (integerNeeded in integerQtyMap) {
//   if ((integerQtyMap[integerNeeded] > 1) || (integerQtyMap[integerNeeded] > 0 && integerQtyMap[currentInteger] > 0)) {
//     validIntegerPairs.push([currentInteger, integerNeeded]);
//           integerQtyMap[currentInteger]--;
//           integerQtyMap[integerNeeded]--;
//   }
// }

/*

// old function with the 'weird' look ahead idea 


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
        // bad idea: if currentInteger === integerNeeded, trick the next if statement
        // into thinking that only one count integerQtyMap[integerNeeded] exists
      if (currentInteger === integerNeeded) {
        integerQtyMap[integerNeeded]--;
      }
      if (integerQtyMap[integerNeeded] >= 1 && integerQtyMap[currentInteger] >= 1) {
          validIntegerPairs.push([currentInteger, integerNeeded]);
          integerQtyMap[currentInteger]--;
          integerQtyMap[integerNeeded]--;   
          if (currentInteger === integerNeeded) {
        // then add one count of integerQtyMap[integerNeeded] back after processing 
        // integerQtyMap[integerNeeded] >= 1 && integerQtyMap[currentInteger] >= 1
            integerQtyMap[integerNeeded]++;
          }
      }
    }
  }
  return validIntegerPairs;
}
*/