// Implementation of Larry's pseudocode
function getXLargestV6(intArray, x) {
  var largestInts = [];
  for (var i = 0; i < x; i++) {
    largestInts[i] = -Infinity;
  }

  for (var i = 0; i < intArray.length; i++) {
    for (var j = 0; j < x; j++) {
      var insertionPoint = undefined;
      if (intArray[i] > largestInts[j]) {
    insertionPoint = j;
        for (var k = 0; k < insertionPoint; k++) {
          largestInts[k] = largestInts[k + 1];
        }
        largestInts[insertionPoint] = intArray[i];
        // break; // To avoid filling largestInts with intArray[0]
      }
    }
  }
  return largestInts;
}

function insertInPlace(resultsArray, sourceArray, insertionPoint) {
  for (var k = 0; k < insertionPoint; k++) {
    array[k] = array[k + 1];
  }
  array[insertionPoint] = sourceArray
}

// Given n = intArray.length and m = x:
// O(m) time to fill largestInts with initial values.
// O(n) time for i outer loop, O(m) for j inner loop plus k inner loop.
// So O(m + (n * m)) ==> O(m + nm) ==> O(nm) time.
// 
// Space O(m) for largestInts.