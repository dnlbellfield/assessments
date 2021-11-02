function findUniquePairs(integerArray, targetSum) {
  var integerLookupTable = {};
  var pairArray = [];

  for (var i = 0; i < integerArray.length; i++) {
    integerLookupTable[integerArray[i]] = true;
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    if (neededInteger in integerLookupTable
      && currentInteger !== neededInteger) {
        pairArray.push([currentInteger, neededInteger]);
        delete integerLookupTable[currentInteger];
    }

  }
  return pairArray;
}


