function findPair(integerArray, targetSum) {
  var amountOfPossiblePairs = Math.floor((integerArray.length) / 2);
  var integerAndOccurrenceLookupTable = {};
  var pairArray = [];
  integerArray.sort();
  
  for (var i = 0; i < integerArray.length; i++) {
    // if integerArray[i] key has not been defined, set its value to 0. Else, increment the value by 1.
    if (integerAndOccurrenceLookupTable[integerArray[i]] === undefined) {
      integerAndOccurrenceLookupTable[integerArray[i]] = 0;
    } else {
      integerAndOccurrenceLookupTable[integerArray[i]]++;
    }
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    // neededInteger must be in integerAndOccurrenceLookupTable 
    // and the current amountOfPossiblePairs must be greater than zero
    if (neededInteger in integerAndOccurrenceLookupTable
      && amountOfPossiblePairs > 0) {
        // if currentInteger = neededInteger, ex: currentInteger = 1, and neededInteger = 1
        // # of occurences of integerAndOccurrenceLookupTable[currentInteger] must be greater than 0
        if (neededInteger === currentInteger 
          && integerAndOccurrenceLookupTable[currentInteger] > 0) {
            pairArray.push([currentInteger, neededInteger]);
            // reduce number of posssible pairs left 
            amountOfPossiblePairs--;
            // decrease the integerAndOccurrenceLookupTable[currentInteger]'s # of occurences. 
            integerAndOccurrenceLookupTable[currentInteger]--;

        } else if (neededInteger !== currentInteger) {
          pairArray.push([currentInteger, neededInteger]);
          amountOfPossiblePairs--;
          integerAndOccurrenceLookupTable[currentInteger]--;
        }
    } 
  }
  return pairArray;
}


// pseudocode 
/*
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
  return pairArr
*/