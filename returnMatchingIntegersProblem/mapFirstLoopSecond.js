/*

for every integer in the first list, store the integer count in a map.
for every integer in the second list, check if there is a common integer in the map.
if a match is found, add the integer to a new list for common integers.
decrease the integer count in the map.
return the list of common integers.

*/

function returnMatchingIntegers(firstIntegerArray, secondIntegerArray) {
  // stores the integer count for firstIntegerArray
  var firstIntegerArrayCountMap = {};
  var commonIntegers = [];

  // for every integer in the first list, store the integer count in a map.
  for (var i = 0; i < firstIntegerArray.length; i++) {
    if (firstIntegerArray[i] in firstIntegerArrayCountMap) {
      firstIntegerArrayCountMap[firstIntegerArray[i]]++;
    } else {
      firstIntegerArrayCountMap[firstIntegerArray[i]] = 1;
    }
  }

  // for every integer in the second list, check if there is a common integer in the map.
  for (var i = 0; i < secondIntegerArray.length; i++) {
    var currentInteger = secondIntegerArray[i]; 
    if (currentInteger in firstIntegerArrayCountMap
      && firstIntegerArrayCountMap[currentInteger] > 0) {
      // if a match is found, add the integer to a new list for common integers.
      commonIntegers.push(currentInteger);
      // decrease the integer count in the map.
      firstIntegerArrayCountMap[currentInteger]--;
    }
  }
  // return the list of common integers.
  return commonIntegers;

}