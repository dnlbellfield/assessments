/*
strategy: 

sort the list of integers from least to greatest
set shortest distance to the difference between the first two integers
add first two integers to a closest integer list
for each integer that is followed by an integer, 
  find the distance between the two integers
  if current distance is shorter than the shortest distance 
    replace the pair in the closest integers list 
    set shortest distance to current distance
return the closestInteger list

*/

function findClosestIntegers(integerArray) {
  var closestIntegers = [];

  // sort the list of integers from least to greatest
  integerArray.sort(function(a,b) { 
    return a - b;
  });

  // set shortest distance to the difference between the first two integers
  var shortestDistance = integerArray[1] - integerArray[0];
  
  // add the pair to a closest integer list
  closestIntegers.push([integerArray[0], integerArray[1]]);

  // for each integer that is followed by an integer, 
  // find the distance between the two integers
  for (var i = 1; i < integerArray.length - 1; i++) {
    var currentInteger = integerArray[i];
    var nextInteger = integerArray[i + 1];
    var currentDistance = nextInteger - currentInteger;

    // if current distance is shorter than the shortest distance 
    if (currentDistance < shortestDistance) {
      // replace the pair in the closest integers list 
      closestIntegers[0] = [currentInteger,nextInteger];
      // set shortest distance to current distance
      shortestDistance = currentDistance;
    }
  }
  // return the closest integer list
  return closestIntegers;
}

// no comments 

function findClosestIntegers(integerArray) {
  var closestIntegers = [];
  integerArray.sort(function(a,b) { 
    return a - b;
  });

  var shortestDistance = integerArray[1] - integerArray[0];
  closestIntegers.push([integerArray[0], integerArray[1]]);

  for (var i = 1; i < integerArray.length - 1; i++) {
    var currentInteger = integerArray[i];
    var nextInteger = integerArray[i + 1];
    var currentDistance = nextInteger - currentInteger;

    if (currentDistance < shortestDistance) {
      closestIntegers[0] = [currentInteger,nextInteger];
      shortestDistance = currentDistance;
    }
  }

  return closestIntegers;
}


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