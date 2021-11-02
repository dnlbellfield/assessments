/*
strategy: sort and subtract, Richard S. twist: [10,11,12] ==> [10,11] no repeating numbers

sort the list of integers from least to greatest
set shortest distance to the difference between the first two integers
add first two integers to a closest integer list
for each integer after the first integer, 
  find the distance between the two integers
  if current distance is shorter than or equal to the shortest distance 
    add the current pair to the list 
  if current distance is shorter than shortest distance 
    replace the pair in the closest integers list 
    set shortest distance to current distance
return the closestInteger list

*/
/*

 gordons strategy 
Create sortedIntegers and set to a sorted copy of the integers given.
Create smallestDifference and set to infinity.

For each pair from left to right:
If currentDifference > smallestDifference:
	Do nothing.
If currentDifference < smallestDifference:
	Set smallestDifference to currentDifference.
	Set result to currentPair.
If currentDifference === smallestDifference:
	If numbers in this pair haven’t been added,
add pair to results.

Return results.
*/
function findMultipleClosestIntegers(integerArray) {
  var sortedIntegerArray = integerArray.slice();
  // sort the list of integers from least to greatest
  sortedIntegerArray.sort(function(a,b) { 
    return a - b;
  });

  // set shortest distance to the difference between the first two integers
  var shortestDistance = sortedIntegerArray[1] - sortedIntegerArray[0];
  
  // add the pair to a closest integer list
  var closestIntegers = [[sortedIntegerArray[0], sortedIntegerArray[1]]];

  // for each integer after the first integer, 
  // find the distance between the two integers
  for (var i = 1; i < sortedIntegerArray.length - 1; i++) {
    var currentInteger = sortedIntegerArray[i];
    var nextInteger = sortedIntegerArray[i + 1];
    var currentDistance = nextInteger - currentInteger;

    // if current distance is equal to the shortest distance 
    if (currentDistance === shortestDistance) {
      // and currentInteger is not the last integer added to closestIntegers array
      var lastIntegerAdded = closestIntegers[[closestIntegers.length -1]][1];
      if (lastIntegerAdded !== currentInteger ) {
        // add the current pair to the list 
        closestIntegers.push([currentInteger,nextInteger]);
        // update the variable
        lastIntegerAdded = nextInteger;
      }
      // if current distance is shorter than shortest distance 
    } else if (currentDistance < shortestDistance) {
      // replace the pair in the closest integers list 
      closestIntegers[0] = [currentInteger,nextInteger];
      closestIntegers.length = 1;
      // set shortest distance to current distance
      shortestDistance = currentDistance;
    }
  }
  // return the closest integer list
  return closestIntegers;
}

// no comments and empty closestInteger 
function findMultipleClosestIntegers(integerArray) {
  var closestIntegers = [];
  var sortedIntegerArray = integerArray.slice();
  sortedIntegerArray.sort(function(a,b) { 
    return a - b;
  });

  var shortestDistance = sortedIntegerArray[1] - sortedIntegerArray[0];
  closestIntegers.push([sortedIntegerArray[0], sortedIntegerArray[1]]);

  for (var i = 1; i < sortedIntegerArray.length - 1; i++) {
    var currentInteger = sortedIntegerArray[i];
    var nextInteger = sortedIntegerArray[i + 1];
    var currentDistance = nextInteger - currentInteger;

    if (currentDistance === shortestDistance) {
      var lastIntegerAdded = closestIntegers[[closestIntegers.length -1]][1];
      if (lastIntegerAdded !== currentInteger ) {
        closestIntegers.push([currentInteger,nextInteger]);
        lastIntegerAdded = nextInteger;
      }
    } else if (currentDistance < shortestDistance) {
      closestIntegers[0] = [currentInteger,nextInteger];
      closestIntegers.length = 1;
      shortestDistance = currentDistance;
    }
  }

  return closestIntegers;
}

// findMultipleClosestIntegers([4, 2, 6, 3, 1, 5])
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) [1, 2]
// 1: (2) [3, 4]
// 2: (2) [5, 6]

[7, 4, 3, 9, 5]
// sort the integers
/*  */
[3, 4, 5, 7, 9]
// for each integer that is followed by an integer, 
// find the distance between the two integers
[3, 4] // the distance between these two integers is 1.
// add the pair to a closest integers list
// if there is a shorter distance between the two integers
// replace the pair to a closest integers list
closestInteger = [3 , 4]
    /*  */
[3, 4, 5, 7, 9] // [4, 5] same distance as [3, 4] no change
      /*  */
[3, 4, 5, 7, 9] // not closer
         /*  */
[3, 4, 5, 7, 9] // not closer
// return the closestInteger list 
[3 , 4]