/* 
store-as-you go strategy:

declare a map for storage
for each integer in the list 
find the needed Integer (targetSum - currentInteger)
if neededInteger is in storage
  add the  currentInteger and neededInteger pair to a new list
else 
  store currentInteger in map
return the list of pairs 





store-as-you go pseudocode:

create a integerOccurrenceMap
create a foundPairArray

for each integer in the list
calculate the integerNeeded
if integerNeeded in integerOccurrenceMap
  add pair to foundPairArray
  delete integerNeeded from map;
else store the pair in integerOccurrenceMap 
return the foundPairArray.


*/


// store-as-you go implementation: 

function findPair(integerArray, targetSum) {
  var integerOccurrenceMap = {};
  var foundPairArray = [];

  for (var i = 0; i < integerArray.length; i++) {
    var currentInteger = integerArray[i];
    var integerNeeded = targetSum - currentInteger;

    if (integerNeeded in integerOccurrenceMap) {
      foundPairArray.push([currentInteger, integerNeeded]);
      delete integerOccurrenceMap[integerNeeded];
    } else {
      integerOccurrenceMap[currentInteger] = true;
    }
  } 
  return foundPairArray;  
}
