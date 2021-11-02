// given an array of integers
// return the two integers that are closest to each other.
// [10, 3, 13, 7, 0, 4, 6]
// only one answer [3,4]
// Richard S. twist: [10,11,12] ==> [10,11] no repeating numbers

// sort and subtract 
// one result strategy:

// sort the integers from least to greatest
// look at the first pair or integers and find the distance between them using subtraction. 
// add the pair to a list of closestIntegers
// for each pair of integers look for the shortest distance between two integers
// if the distance of the current is less than original pair or integers, 
// replace the the original pair in closestIntegers, with the2 'current pair'
// return the two integers that are closest to each other.

//trace 
[7, 3, 5, 2]
// sort the integers from least to greatest
[2, 3, 5, 7]
 /* */
[2, 3, 5, 7]
// note two numbers that are closest to each other
[2, 3] // distance is 1
// is there a distance shorter than the current distance? 
    /* */
 [2, 3, 5, 7]
// [3, 5] distance is 2, not shorter than 1
        /* */
 [2, 3, 5, 7]
// [5, 7] distance is 2, not shorter than 1
// return the two integers that are closest to each other.
[2, 3] 


// alt trace
[0, 8, 15, 9, 5]
// sort
 /*  */
[0, 5, 8, 9, 15]
// note the integers that are closest to each other
[0, 5] //  current shortest distance is 5 
// is there a distance shorter than the current distance? 
   /*  */
[0, 5, 8, 9, 15]
[5, 8] // current shortest distance is NOW  3 
      /*  */
[0, 5, 8, 9, 15]
[8, 9] // current shortest distance is NOW  1
                /*  */
      [0, 5, 8, 9, 15]
[9, 15]// the distance is 6, 6 is greater than 1, current shortest distance is still  1
// return the two integers that are closest to each other.
[8, 9]



function findClosestIntegers(integerArray) {
  var closestIntegers = [];
  // sort the integers from least to greatest
  integerArray.sort(function(a,b) { 
    return a - b});
  // find the distance between two integers by using subtraction. 
  var initialShortestDistance = integerArray[1] - integerArray[0];
  closestIntegers.push([integerArray[0], integerArray[1]]);

  for (var i = 1; i < integerArray.length - 1; i++) {
    var currentInteger = integerArray[i];
    var comparisonInteger = integerArray[i + 1];
    var currentShortestDistance = comparisonInteger - currentInteger;
    if (currentShortestDistance < initialShortestDistance) {
      //
      closestIntegers[0] = [currentInteger,comparisonInteger];
    }
  }
  // return the two integers that are closest to each other.
  return closestIntegers;
}

// sort and subtract 
// multiple result answer strategy:

// sort the integers from least to greatest
// set current shortest distance to the difference between the first two integers 
// add current closest integers to a new list
// continue looking for the shortest integer distance.
// return the list of integers that share a common shortest distance.

//trace 
[7, 3, 5, 2, 8]
// sort the integers from least to greatest
/*  */
[2, 3, 5, 7, 8]
// find the distance between two integers using subtraction. 
[2, 3]  // current shortest distance is 1 
// add current closest integers to a new list
// new list for closest integers ==> [2, 3]
    /*  */
[2, 3, 5, 7, 8]
// is there a distance shorter than or equal to the current distance? 
// [3, 5] the distance is 2, 2 is greater than 1, current shortest distance is still  1.
      /*  */
[2, 3, 5, 7, 8]
// [5, 7] the distance is 2, 2 is greater than 1, current shortest distance is still  1.
          /*  */
[2, 3, 5, 7, 8]
// [7, 8] the distance is 1, 1 is equal to 1, add current closest integers to a new list  
//  list for closest integers ==> [[2, 3], [7, 8]]
// [[2, 3], [7, 8]]


// sort and subtract 
// multiple result answer (no duplicates allowed) strategy:

// sort the integers from least to greatest
// find the distance between two integers using subtraction. 
// add current closest integers to a new list
// look for the shortest distance bewteen to integers.
// return the list of integers that share a common shortest distance.


function findClosestIntegers(integerArray) {
  var closestIntegers = [];
  integerArray.sort();
  var initialShortestDistance = integerArray[1] - integerArray[0];
  closestIntegers.push(integerArray[0], integerArray[1]);

  for (var i = 1; i < integerArray.length - 1; i++) {
    var currentInteger = integerArray[i];
    var comparisonInteger = integerArray[i + 1];
    var currentShortestDistance = comparisonInteger - currentInteger;
    if (currentShortestDistance < initialShortestDistance) {
      closestIntegers[i] = [currentInteger,comparisonInteger];
    }
  }
  return closestIntegers;
}

// for (var i = 0; i < 2; i++) {
//   var currentInteger = integerArray[i];
//   var comparisonInteger = integerArray[i + 1];
//   var initialShortestDistance = integerArray[1] - integerArray[0];
//   closestIntegers.push(currentInteger,comparisonInteger);
// }
// for (var i = 0; i < 2; i++) {
//   var currentInteger = integerArray[i];
//   var comparisonInteger = integerArray[i + 1];
//   var initialShortestDistance = comparisonInteger - currentInteger;
//   closestIntegers.push(currentInteger,comparisonInteger);
// }