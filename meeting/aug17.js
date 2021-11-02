// Iteration - Describing iterative logic
// what is the item that I want to do things to?
// what is the item that I want to iterate on? 
// what is the collection that im dealing with?
// what is the item, what is the collection , does order matter?


// Use pen and paper so that you have more freedom to express the problem.
// Use specific examples to make the problem concrete.
// Are there other approaches? What are all of the tradeoffs? Are they better in at least one way?
// What exactly makes something better or worse?
// What are all of the "knobs"? How can we turn them? How are they connected?

// what is a minor or major part of a problem (suppressing details)

// (1) Choose a strategy
// (2) Summary
// (3) Write a computational outline

// input: array of strings
// goal: find second largest string in array
// Other considerations: Assume there are no ties.


// ['larry', 'dan', 'quinault', 'gordana'] ==> 'gordana'









// Summary A    time: O(n) space: O(n)
// Identify and remove the current largest string, 
// then identify and return the largest string available. 

// Computational Outline:
// Create largestString and set it to ''.
// Create stringArrayCopy and set it to a copy of the input array.
// Go through stringArrayCopy:
  // Get largestString (the largest string).  
  // Remove largestString.
  // Set largestString to ''.
// Go through stringArrayCopy:
  // Get largestString.
// Return largestString.














// Summary B:   time: O(n) space: O(n)
// Compare all string lengths and store the two largest.

// Computational Outline:
// Create twoLargestStrings and set it to ['' , '']
//
// for each string in array:
//   record results*
// return twoLargestStrings[0]



// * results
// if (currentString.length > twoLargestStrings[1].length) {
//   twoLargestStrings[0] = twoLargestStrings[1];
//   twoLargestStrings[1] = currentString;
//   } else if (currentString.length > twoLargestStrings[0].length) {
//     twoLargestStrings[0] = currentString;
//   }











// Summary C:   time: O(nlogn) space: O(n)
// sort inputArray by length, return  second largest

// Computational Outline:
// Create stringArrayCopy and set it to a copy of the input array.
// Sort stringArrayCopy by string length. *
// Return stringArrayCopy[stringArrayCopy.length - 2]

// *
// arrayCopy.sort(function(a,b) { 
//   if (a.length < b.length) {
//     return -1;
//   } else {
//     return 1;
//   }
// })













// A
//time: O(n) space: O(n)
function getSecondLargestString(stringArray) {
  var largestString = '';
  var stringArrayCopy = stringArray.slice();
  
  for (var i = 0; i < stringArray.length; i++) {
    var currentString = stringArray[i];
    if (currentString.length > largestString.length) {
      largestString = currentString;
      var indexToRemove = i; 
    }
  }

  delete stringArrayCopy[indexToRemove];
  var largestString = '';
  for (var i = 0; i < stringArrayCopy.length; i++) {
    if ( i in stringArrayCopy) {
      var currentString = stringArray[i];
      if (currentString.length > largestString.length) {
        largestString = currentString;
      }
    }
  }
  return largestString;
}


// B 
//time: O(n) space: O(n)
function getSecondLargestString(stringArray) {
  var twoLargestStrings  = ['', '']

  for ( var i = 0; i < stringArray.length; i++) {
    var currentString = stringArray[i];

    if (currentString.length > twoLargestStrings[1].length) {
      twoLargestStrings[0] = twoLargestStrings[1];
      twoLargestStrings[1] = currentString;
    } else if (currentString.length > twoLargestStrings[0].length) {
      twoLargestStrings[0] = currentString;
    }
  }
  return twoLargestStrings[0];
}


// C
//time: O(nlogn) space: O(n)
function getSecondLargestString(stringArray) {
  var stringArrayCopy = stringArray.slice();

  stringArrayCopy.sort(function(a,b) { 
    if (a.length < b.length) {
      return -1;
    } else {
      return 1;
    }
  });

  return stringArrayCopy[stringArrayCopy.length - 2];

}
