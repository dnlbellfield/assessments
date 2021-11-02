// TONY's altered code (I think)
// Break the algorithm/function into individual operations

function getXLargestByInsertion(inputArray, x) {  // space: + 2
  var resultsArray = [];                    // time: O(1), space: + 1 
  for (var i = 0; i < x; i++) {             // time: O(x), space: + 1 
    resultsArray.push(-Infinity);             // time: O(1), space: n units of memory? 
  }

  for (var j = 0; j < inputArray.length; j++) {    // time: O(n), space: + 1 
    if (inputArray[j] > resultsArray[0]) {           // time: O(1), space: + 1 
      resultsArray.push(inputArray[j]);              // time: O(1), space: n 

      resultsArray.sort(function (a, b) {            // time: O(n log n), space: + 2 
        return a - b;                                  // time: O(1), space: + 1? 
      });

      resultsArray.shift();                          // time: O(1), space: + n? 
    } 
  }

  return resultsArray;                             // time: O(1), space: + 1? 
}


// time: 1 + (x + 1) + n(1 + 1 + (n log n)(1) + 1) + 1
//            x    +   n(n log n)                    drop constants?
//                     n(n log n) ---> O(n^2)        n *  n log n's worst case performance?
// time:  O(n^2) 
//
// most expensive lines: 10 and 14  O(n) *  O(n log n ) ---> O(n^2)

// space: O(n) 
// depends on lines 7, 12, 14, 18 do these lines use n units of memory?
// If so I am guessing space = O(n) 


