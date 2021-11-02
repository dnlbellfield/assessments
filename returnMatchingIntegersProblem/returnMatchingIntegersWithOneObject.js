/*
Problem:

Given two arrays of integers, return an array with the integers that match,
i.e. have the same integer in both arrays.

Strategy:

look at the first list and note how many times an integer appears in a map.
go through the second list and look for integers that appear in the map.
if a match is found, add the integer to a new list for matching integers.
update the number of times an integer appears in a map.
return the list of matching integers.

*/

function returnMatchingIntegers(firstIntegerArray, secondIntegerArray) {
  // stores the integer count for firstIntegerArray
  var firstIntegerArrayCountMap = {};
  var commonIntegers = [];

  // look at the first list and note how many times an integer appears in a map.
  for (var i = 0; i < firstIntegerArray.length; i++) {
    if (firstIntegerArray[i] in firstIntegerArrayCountMap) {
      firstIntegerArrayCountMap[firstIntegerArray[i]]++;
    } else {
      firstIntegerArrayCountMap[firstIntegerArray[i]] = 1;
    }
  }

  // go through the second list and look for integers that appear in the firstIntegerArray map.
  for (var i = 0; i < secondIntegerArray.length; i++) {
    var currentInteger = secondIntegerArray[i]; 
    if (currentInteger in firstIntegerArrayCountMap
      && firstIntegerArrayCountMap[currentInteger] > 0) {
      // if a match is found, add the integer to a new list.
      commonIntegers.push(currentInteger);
      // update the number of times an integer appears in a map.
      firstIntegerArrayCountMap[currentInteger]--;
    }
  }
  // return the list of matching integers.
  return commonIntegers;

}

/*
returnMatchingIntegers([1, 1, 2], [1, 5, 7])
[1] returned correct result

returnMatchingIntegers([1, 1, 2], [1, 5, 7, 1])
[1,1] returned correct result

*/