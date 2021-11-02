/*
store first strategy:

declare a map to store integers
for each integer in integerArray, store the integer in a map

for each integer in integerArray
  find the integer needed  (targetSum - currentInteger)
  if integer needed is in map (storage)
    add pair to a new list 
    remove the pair from further consideration 
return list of pairs


store first pseudocode:

function findPair(integerArray, targetSum) {
  var integerOccurrenceMap = {};
  var pairArray = [];
  
  for (var i = 0; i < integerArray.length; i++) {
    if (integerOccurrenceMap[integerArray[i]] === undefined) {
      integerOccurrenceMap[integerArray[i]] = 0;
    } else {
      integerOccurrenceMap[integerArray[i]]++;
    }
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    if (neededInteger in integerOccurrenceMap) {
      if (neededInteger === currentInteger 
          && integerOccurrenceMap[currentInteger] > 0) {
            pairArray.push([currentInteger, neededInteger]);
            integerOccurrenceMap[currentInteger]--;
            integerOccurrenceMap[neededInteger]--;
        } else if (neededInteger !== currentInteger
          && integerOccurrenceMap[currentInteger] !== -1) {
            pairArray.push([currentInteger, neededInteger]);
            integerOccurrenceMap[currentInteger]--;
            integerOccurrenceMap[neededInteger]--;
        }
    } 
  }
  return pairArray;
}

*/

function findPair(integerArray, targetSum) {
  var integerOccurrenceMap = {};
  var pairArray = [];
  
  for (var i = 0; i < integerArray.length; i++) {
    if (integerOccurrenceMap[integerArray[i]] === undefined) {
      integerOccurrenceMap[integerArray[i]] = 0;
    } else {
      integerOccurrenceMap[integerArray[i]]++;
    }
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    if (neededInteger in integerOccurrenceMap) {
      if (neededInteger === currentInteger 
          && integerOccurrenceMap[currentInteger] > 0) {
            pairArray.push([currentInteger, neededInteger]);
            integerOccurrenceMap[currentInteger]--;
            integerOccurrenceMap[neededInteger]--;
        } else if (neededInteger !== currentInteger
          && integerOccurrenceMap[currentInteger] !== -1) {
            pairArray.push([currentInteger, neededInteger]);
            integerOccurrenceMap[currentInteger]--;
            integerOccurrenceMap[neededInteger]--;
        }
    } 
  }
  return pairArray;
}




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

