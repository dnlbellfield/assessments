/*
Strategy 1: calculate needed number and iterate through array to find it (nested for loops)

Given a list of integers and a target sum.
Look through the list of integers starting from the left.
Take the first integer from the list and consider it currentInteger.
Get the difference between targetSum and currentInteger and call it targetInteger.
Check if targetInteger is in the list of integers.
If it is, return the pair currentInteger and targetInteger, if not - continue checking.
If all checks have been exhausted, return an empty array.  

Psuedo code:

function findPair(integerArray, targetSum) {
  loop through the integerArray.
  let currentInteger be the first integer from the list.
  let targetInteger be the difference between targetSum and currentInteger.
    loop integerArray.length - 1 times.
    if targetInteger is found
      return [currentInteger, targetInteger]
    
  return empty array;    
} 

*/

function findPair(integerArray, targetSum) {
  var foundPairArray = [];
  for (var i = 0; i < integerArray.length - 1; i++) {
    var currentInteger = integerArray[i];
    var targetInteger = targetSum - currentInteger;

    for (var j = i + 1; j < (Math.round(integerArray.length / 2) - 1 ); j++) {
      if (integerArray[j] === targetInteger) {
        foundPairArray.push([currentInteger, targetInteger]);
        currentInteger = 0;
        targetInteger = 0;
      } 
    }
  }
  foundPairArray;
} 

// strategy 1: calculate needed number 
// and iterate through array to find it (nested for loops)

// line 10 alternative: integerStorageTable[targetInteger.toString()]
// findPair([33,99,99,99,99,99,99,99,12], 45);
// (2) [33, 12]

// findPair([33,99,99,99,99,99,99,99,11], 45);
// []

// findPair([1,7,3], 8);
// (2) [1, 7]

// findPair([1,2,3,4,5], 7);
// (2) [2, 5]

// Write a function that accepts an array of distinct integers and a target sum. 
// If any two numbers in the array sum up to the target sum, return them in a new array 
// (the two numbers can be returned in any order).
//  If no two numbers sum up to the target sum, return an empty array. 
//  Assume that there will be either 0 or 1 pairs (i.e. you will either return 
//   an empty array or an array with two distinct integers).
