function getXLargestXLoop(array, x) { //time:  space: + 2 (array, x))
  var results = []; // time:  o(1) , space:  + 1
  var copyOfArray = []; // time: o(1),  space: + 1

  for (var i = 0; i < array.length; i++) { // time: o(n), space: + 1
    copyOfArray[i] = array[i]; // time: o(1), space: + 1
  }

  for (var i = 0; i < x; i++) { // time: o(x)? space:  O(x)
    var currentLargest = Number.NEGATIVE_INFINITY; // time: o(1), space: + 1
    for (var j = 0; j < copyOfArray.length; j++) { // time:  o(n), space:  + 1
      if (copyOfArray[j] > currentLargest) { // time: o(1), space: + 1
        currentLargest = copyOfArray[j]; // time: o(1), space: + 1
      }
    }
    results.unshift(currentLargest); // time: o(n), space: ?
    var indexOfLargestNumber = copyOfArray.indexOf(currentLargest); // time: o(n), space: + 1
    copyOfArray.splice(indexOfLargestNumber,1); // time: o(n), space: ?
  }
   return results; // time: o(1), space: + 1?
}




// time: O(1) + O(1) + O(n) + O(1) + O(x) * O(n) + O(1) + O(1) + O(n) + O(n) + O(n) + O(1)
// time:  O(x) * O(n) = ? O(xn) or ?

// space: O(xn) or O(n^2)

// more notes

function getXLargestXLoop(array, x) { //time:  space: + 2 (array, x))
  var results = []; // time:  o(1) , space:  + 1
  var copyOfArray = []; // time: o(1),  space: + 1

  for (var i = 0; i < array.length; i++) { // time: o(n), space: + 1
    copyOfArray[i] = array[i]; // time: o(1), space: + 1
  }

  for (var i = 0; i < x; i++) { // time: o(x)? space:  O(x)
    var currentLargest = Number.NEGATIVE_INFINITY; // time: o(1), space: + 1
    for (var j = 0; j < copyOfArray.length; j++) { // time:  o(n), space:  + 1
      if (copyOfArray[j] > currentLargest) { // time: o(1), space: + 1
        currentLargest = copyOfArray[j]; // time: o(1), space: + 1
      }
    }
    results.unshift(currentLargest); // time: o(n), space: ?
    var indexOfLargestNumber = copyOfArray.indexOf(currentLargest); // time: o(n), space: + 1
    copyOfArray.splice(indexOfLargestNumber,1); // time: o(n), space: ?
  }
   return results; // time: o(1), space: + 1?
}


// time: is it O(nx)
// space: O(n)