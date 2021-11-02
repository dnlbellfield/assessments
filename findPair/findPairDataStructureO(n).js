/*
Strategy 3: Put integers into a different data structure and search for needed number there. 

Look at the list of integers. 
Put every integer in storage. 
Take the first integer from the list and call it currentInteger.
Subtract currentInteger from target sum to find the integer needed. 
Check if integer needed is in storage.
If integer needed is in storage, return the pair [currentInteger, integer needed], if not - continue checking.
If integer needed is never found in storage, return an empty pair. 

Psuedo code:

function findPair(integerArray, targetSum) {
  create object for storage.
  loop integerArray.length times.
    let object[key] be integerArray[i]].
  loop integerArray.length - 1 times.
   let currentInteger be integerArray[j];
   let neededInteger be targetSum - currentInteger.
   if neededInteger is in object for storage
      return [currentInteger, neededInteger];
}

*/


function findPair(integerArray, targetSum) {
  var integerLookUpTable = {};
  for (var i = 0; i < integerArray.length; i++) {
    integerLookUpTable[integerArray[i]] = true;
  }
  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    if (neededInteger in integerLookUpTable) {
      if ( neededInteger !== currentInteger) {
        return [currentInteger, neededInteger];
      }
    }
  }
  return [];
}



function findPair(integerArray, targetSum) {
  var integerLookUpTable = {};
  for (var i = 0; i < integerArray.length; i++) {
    integerLookUpTable[integerArray[i]] = i;
  }
  for (var i = 0; i < integerArray.length - 1; i++) {
    var currentInteger = integerArray[i];
    var neededInteger = targetSum - currentInteger;
    if (neededInteger in integerLookUpTable) {
      if ( integerLookUpTable[neededInteger] !== i) {
        return [currentInteger, neededInteger];
      }
    }
  }
  return [];
}

 


// trace:
// [1,3,6,7]
// targetSum = 8
//
// [1,3,6,7] => [1,3,6,7]
//  *
// [1,3,6,7]
// 8 - 1 = 7      
// is 7 in [1,3,6,7] ?
//            *
// YES [1,3,6,7]
// return [1,7]