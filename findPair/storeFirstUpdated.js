function findPair(integerArray, targetSum) {
  var integerOccurrenceMap = {};
  var pairArray = [];
  
  for (var i = 0; i < integerArray.length; i++) {
    if (integerOccurrenceMap[integerArray[i]] === undefined) {
      integerOccurrenceMap[integerArray[i]] = 1;
    } else {
      integerOccurrenceMap[integerArray[i]]++;
    }
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    if (neededInteger in integerOccurrenceMap) {
      if (neededInteger === currentInteger) {
        if (integerOccurrenceMap[currentInteger] > 1) {
            pairArray.push([currentInteger, neededInteger]);
            integerOccurrenceMap[currentInteger]--;
            integerOccurrenceMap[neededInteger]--;
        } 
      } else if (neededInteger !== currentInteger
        && integerOccurrenceMap[currentInteger] > 0 
        && integerOccurrenceMap[neededInteger] > 0) {
          pairArray.push([currentInteger, neededInteger]);
          integerOccurrenceMap[currentInteger]--;
          integerOccurrenceMap[neededInteger]--;
      }
    } 
  }
  return pairArray;
}