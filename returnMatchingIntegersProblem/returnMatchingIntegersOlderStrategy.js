/*
Problem:

Given two arrays of integers, return an array with the integers that match,
i.e. have the same integer in both arrays.

Strategy:
look at both lists of integers. 
put every integer in storage. 
look through the first list and see if any integers exist in the map.
if a match found, add the integer to a new list for matching integers.
remove the matching integer from further consideration.
return list of matching integers.

*/

function returnMatchingIntegers(firstIntegerArray, secondIntegerArray) {
  var integerCountMap = {};
  var matchingIntegerArray = [];

  // store the integers from both lists in a map.
  for (var i = 0; i < firstIntegerArray.length; i++) {
    if (firstIntegerArray[i] in integerCountMap) {
      integerCountMap[firstIntegerArray[i]]++;
    } else {
      integerCountMap[firstIntegerArray[i]] = 1;
    }
  }

  // look through the first list and see if any integers exist in the map.
  for (var i = 0; i < secondIntegerArray.length; i++) {
    if (secondIntegerArray[i] in integerCountMap) {
      integerCountMap[secondIntegerArray[i]]++;
    } else {
      integerCountMap[secondIntegerArray[i]] = 1;
    }
  }

  for (var i = 0; i < firstIntegerArray.length; i++) {
    var currentInteger = firstIntegerArray[i]; 
    if (currentInteger in integerCountMap
      && integerCountMap[currentInteger] > 1) {
      // if a match found, add the integer to a new list for matching integers.
      matchingIntegerArray.push(currentInteger);
      // remove the matching integer from further consideration.
      integerCountMap[currentInteger]--;
      integerCountMap[currentInteger]--;
    }
  }
  // return list of matching integers.
  return matchingIntegerArray;

}

/*
returnMatchingIntegers([1, 1, 2], [1, 5, 7])
[1] returned correct result

returnMatchingIntegers([1, 1, 2], [1, 5, 7, 1])
[1,1] returned correct result

*/