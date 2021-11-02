function findPair(integerArray, targetSum) {
  var amountOfPossiblePairs = Math.floor((integerArray.length) / 2);
  var integerOccurrenceMap = {};
  var pairArray = [];
  
  for (var i = 0; i < integerArray.length; i++) {
    // if integerArray[i] key has not been defined, set its value to 0. Else, increment the value by 1.
    if (integerOccurrenceMap[integerArray[i]] === undefined) {
      integerOccurrenceMap[integerArray[i]] = 0;
    } else {
      integerOccurrenceMap[integerArray[i]]++;
    }
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    // neededInteger must be in integerOccurrenceMap 
    // and the current amountOfPossiblePairs must be greater than zero
    if (neededInteger in integerOccurrenceMap
      && amountOfPossiblePairs > 0) {
        // if currentInteger = neededInteger, ex: currentInteger = 1, and neededInteger = 1
        // # of occurences of integerOccurrenceMap[currentInteger] must be greater than 0
        if (neededInteger === currentInteger 
          && integerOccurrenceMap[currentInteger] > 0) {
            pairArray.push([currentInteger, neededInteger]);
            // reduce number of posssible pairs left 
            amountOfPossiblePairs--;
            // decrease the integerOccurrenceMap[currentInteger]'s # of occurences. 
            integerOccurrenceMap[currentInteger]--;

        } else if (neededInteger !== currentInteger
          && integerOccurrenceMap[currentInteger] !== -1) {
          pairArray.push([currentInteger, neededInteger]);
          amountOfPossiblePairs--;
          integerOccurrenceMap[neededInteger]--;
        }
    } 
  }
  return pairArray;
}