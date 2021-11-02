function findPair(integerArray, targetSum) {
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
    if (neededInteger in integerOccurrenceMap) {
        // if currentInteger = neededInteger, ex: currentInteger = 1, and neededInteger = 1
        // # of occurences of integerOccurrenceMap[currentInteger] must be greater than 0
        if (neededInteger === currentInteger 
          && integerOccurrenceMap[currentInteger] > 0) {
            pairArray.push([currentInteger, neededInteger]);
            // decrease the integerOccurrenceMap[currentInteger]'s # of occurences. 
            integerOccurrenceMap[currentInteger]--;

        } else if (neededInteger !== currentInteger
          && integerOccurrenceMap[currentInteger] !== -1) {
          pairArray.push([currentInteger, neededInteger]);
          integerOccurrenceMap[neededInteger]--;
        }
    } 
  }
  return pairArray;
}