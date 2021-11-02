function findPairs(integerArray, targetSum) {
  var amountOfPossiblePairs = Math.floor((integerArray.length) / 2);
  var integerLookupTable = {};
  var pairArray = [];
  var numberOfTimesThePairOccurs = 0;
  integerArray.sort();
  
  for (var i = 0; i < integerArray.length; i++) {
    integerLookupTable[integerArray[i]] = true;
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
   
    if ( integerLookupTable[neededInteger]
      && amountOfPossiblePairs > 0) {
        pairArray.push([currentInteger, neededInteger]);
        amountOfPossiblePairs--;
    } else {
      amountOfPossiblePairs--;
    }
  }
  return pairArray;
}


