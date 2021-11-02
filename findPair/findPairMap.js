function findPairMap(integerArray, targetSum) {
  var mapOfAvailableIntegers = new Map();
  for (var i = 0; i < integerArray.length; i++) {
    mapOfAvailableIntegers.set(integerArray[i], integerArray[i]);
  }
  for (var j = 0; j < integerArray.length - 1; j++) {
    var currentInteger = integerArray[j];
    var theIntegerNeeded = targetSum - currentInteger;
    if (mapOfAvailableIntegers.has(theIntegerNeeded)) {
      return [currentInteger, theIntegerNeeded];
    }
  }
  return [];
}
// Strategy
// Look at the list of integers. 
//   Put every integer in a map. 
// Take the first integer from the list and call it currentInteger.
// Subtract currentInteger from target sum to find the integer needed. 
// Check if integer needed is in the map.
// If integer needed is in the map, return the pair [currentInteger, integer needed], if not - continue checking.
// If integer needed is never in the map, return an empty pair. 