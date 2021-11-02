/*
strategy:

look through the list of integers
take the first integer and consider it the current integer
find the difference between the current integer and targetSum
check the list to see if the needed integer exists  
if the needed integer exists, move the pair of the current integer and the needed integer into a new list
continue checking for any possible pairs that equal targetSum
return the new list of pairs

/*
Psuedo code:

function findPairTwist(integerArray, targetSum) {
  make an array for storing found pairs.
  look through the integerArray.
  let currentInteger be the first integer in the list.
  calculate the difference between the targetSum and the current integer to get the neededInteger.
    look through the integerArray 
    if neededInteger exists in the list
    add [currentInteger, neededInteger] to the foundPairs array 
    
  return foundPairArray;    
} 

*/

function findPairTwist(integerArray, targetSum) {
  var foundPairArray = [];
  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;

    for (var j = i + 1; j < integerArray.length; j++) {
      if (integerArray[j] === neededInteger) {
        foundPairArray.push([currentInteger, neededInteger]);
      } 
    }
  }
  return foundPairArray;
} 
