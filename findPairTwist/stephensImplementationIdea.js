/*
use select parts of Stephen's implementation 

strategy:
look through the list of integers
For each element in the `integerArray`.
Find the `neededInteger` to sum up to targetSum.
check the list to see if the needed integer exists  
if the needed integer exists and passes conditions, 
move the pair of the current integer and the needed integer into a new list
continue checking for any possible pairs that equal targetSum
return the new list of pairs
/*
Psuedo code:
function findPairTwist(integerArray, targetSum) {
  make an array for storing pairs.
  make an object for storing integers as keys
  store the integers from the list in the storage object.
  look through the integerArray.
  let currentInteger be the first integer in the list.
  
  look through the integerArray 
  identify the neededInteger by calculating the difference between the targetSum and the current integer.
    if neededInteger exists in the list
      and currentInteger is not neededInteger
        add [currentInteger, neededInteger] to the foundPairs array 
        delete object[currentInteger]
    
  return foundPairArray;    
} 
*/

function findUniquePairs(integerArray, targetSum) {
  var integerStorage = {};
  var pairArray = [];

  for (var i = 0; i < integerArray.length; i++) {
    integerStorage[integerArray[i]] = true;
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    if (neededInteger in integerStorage
      && currentInteger !== neededInteger) {
        pairArray.push([currentInteger, neededInteger]);
        delete integerStorage[currentInteger];
        // the line below is not necessary 
        // delete integerStorage[neededInteger]; 
    }
  }
  return pairArray;
}