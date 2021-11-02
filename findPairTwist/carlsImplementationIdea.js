/* 
object with parts of Carl's implementation 

strategy:
look through the list of integers
for each element in the `integerArray`
find the `neededInteger` to sum up to targetSum
check the list to see if the neededInteger exists  
if the needed integer exists and passes conditions, 
move the pair of the current integer and the needed integer into a new list
continue checking for any possible pairs that equal targetSum
return the new list of pairs

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
      and currentInteger is larger than neededInteger
        add [currentInteger, neededInteger] to the foundPairs array 
    
  return foundPairArray;    
} 
*/
function findUniquePairs(integerArray, targetSum) {
  var integerLookupTable = {};
  var pairArray = [];

  for (var i = 0; i < integerArray.length; i++) {
    integerLookupTable[integerArray[i]] = true;
  }

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    if (neededInteger in integerLookupTable
      && currentInteger !== neededInteger 
      && currentInteger > neededInteger) {
        pairArray.push([currentInteger, neededInteger]);
    }
  }
  return pairArray;
}


