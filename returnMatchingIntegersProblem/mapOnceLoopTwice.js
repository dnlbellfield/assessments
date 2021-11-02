// look at each integer in the first list and note the number of time it appears in a unique map.
// look at each integer in the second list and note the number of time it appears in a unique map.
// check if any integers from the first list exist in the second map.
// if a match found, add the integer to a new list for matching integers.
// update the number of times an integer appears.
// return list of matching integers.

function returnMatchingIntegers(firstIntegerArray, secondIntegerArray) {
  var firstIntegerArrayMap = {};
  var secondIntegerArrayMap = {};
  var matchingIntegerArray = [];

  // look at each integer in the first list and note the number of time it appears in a unique map.
  for (var i = 0; i < firstIntegerArray.length; i++) {
    if (firstIntegerArray[i] in firstIntegerArrayMap) {
      firstIntegerArrayMap[firstIntegerArray[i]]++;
    } else {
      firstIntegerArrayMap[firstIntegerArray[i]] = 1;
    }
  }

  // look at each integer in the second list and note the number of time it appears in a unique map.
  for (var i = 0; i < secondIntegerArray.length; i++) {
    if (secondIntegerArray[i] in secondIntegerArrayMap) {
      secondIntegerArrayMap[secondIntegerArray[i]]++;
    } else {
      secondIntegerArrayMap[secondIntegerArray[i]] = 1;
    }
  }

  // check if any integers from the first list exist in the second map.
  for (var i = 0; i < firstIntegerArray.length; i++) {
    var currentInteger = firstIntegerArray[i];
    if (currentInteger in secondIntegerArrayMap
      && firstIntegerArrayMap[currentInteger] > 0 &&
      secondIntegerArrayMap[currentInteger] > 0) {
      // if a match found, add the integer to a new list for matching integers.
      matchingIntegerArray.push(currentInteger);
      // update the number of times an integer appears.
      firstIntegerArrayMap[currentInteger]--;
      secondIntegerArrayMap[currentInteger]--;
    }
  }
  // return list of matching integers.
  return matchingIntegerArray;

}