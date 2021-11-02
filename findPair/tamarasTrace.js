function closestIntegers(integers) {
  // Copy and sort input list from least to greatest.
  var sortedIntegers = integers.slice();
  sortedIntegers.sort(function(a,b){ return a-b;});
  var shortestDistance = Infinity;
  // Go through sorted array, considering two pairs at a time
  // For each integer in the sorted list, starting with second integer
  for (var i = 1; i < sortedIntegers.length - 1; i++) {
    var leftInteger = sortedIntegers[i - 1];
    var middleInteger = sortedIntegers[i];
    var rightInteger = sortedIntegers[i + 1];
    // Calculate the difference of current integer with its left and right neighbors.
    var leftPairDifference = middleInteger - leftInteger;
    var rightPairDifference = rightInteger - middleInteger; 
    // Compare the differences of the left and right:
    // If left difference is the smallest yet
    if ((leftPairDifference < rightPairDifference) && (leftPairDifference < rightPairDifference) < shortestDistance ) {
      var results = [[leftInteger, middleInteger]];
      shortestDistance = leftPairDifference;
    }  
    // or, if left and right differences are equal and smallest yet,
    if (leftPairDifference === rightPairDifference < shortestDistance ) {
      var results = [[leftInteger, middleInteger]];
      shortestDistance = leftPairDifference;
    // If right difference is the smallest yet, 
    //   create `results` and set it to right pair. Then skip an integer in the list.
    } else if (rightPairDifference < shortestDistance) {
      var results = [[middleInteger, rightInteger]];
      shortestDistance = rightPairDifference;
      i++;
      // improv
      // If an additional pair is found, and it's a right-side pair, and equal to shortestDistance
      // add pair to `results` and skip an integer in the list.
    } else if (rightPairDifference === shortestDistance) {
      results.push([middleInteger,rightInteger]);
      shortestDistance = rightPairDifference;
      i++;
    }
  }
  return results;
} 

/* 

Copy and sort input list from least to greatest.
Go through sorted array, considering two pairs at a time, 
  in order to find all the distinct pairs with smallest difference.
For each integer in the sorted list, starting with second integer:
  Calculate the difference of current integer with its left and right neighbors.
  Compare the differences of the left and right:
    If left difference is the smallest yet, 
      or, if left and right differences are equal and smallest yet,
        create `results` and set it to left pair. Then go to next integer in the list      
    If right difference is the smallest yet, 
      create `results` and set it to right pair. Then skip an integer in the list.
    If an additional pair is found, and it's a right-side pair, 
      add pair to `results` and skip an integer in the list.


IntegersArray: [100, 200, 250, 275, 375] ==> Expectation: [[250, 275]]

Copy and sort input list from least to greatest.
[100, 200, 250, 275, 375] (already sorted)

Go through sorted array, considering two pairs at a time,
in order to find all the distinct pairs with smallest difference.

For each integer in the sorted list, starting with second integer:
Calculate the difference of current integer with its left and right neighbors.
 
   100 |  50
 *-----*-----*
[100, 200, 250, 275, 375]

Compare the differences of the left and right:

100 > 50 (the difference of the right pair is smaller than the left)

(skip) If left difference is the smallest yet,  (skip)
(skip) or, if left and right differences are equal and smallest yet,(skip)
(skip) create `results` and set it to left pair. Then go to next integer in the list (skip)

If right difference is the smallest yet, 

smallest yet = infinity  
50 (the difference of the right pair) is smaller than infinity

create `results` and set it to right pair. Then skip an integer in the list.

results = [200, 250];

If an additional pair is found, and it's a right-side pair, 
add pair to `results` and skip an integer in the list.

( additional pair has not been found yet - continue iteration)

Calculate the difference of current integer with its left and right neighbors.

             25   | 100
           *-----*-----*
[100, 200, 250, 275, 375]

Compare the differences of the left and right:

25 < 100 (the difference of the left pair is smaller than the right)

If left difference is the smallest yet,  
or, if left and right differences are equal and smallest yet,
create `results` and set it to left pair. Then go to next integer in the list

the difference of the integers in the left pair is the smallest yet
results = [250, 275];

results = [250, 275]; (difference is 25)


closestIntegers([2, 4, 6, 8, 9, 10, 11])
0: (2) [8, 9]
1: (2) [10, 11]

closestIntegers([100, 200, 250, 275, 375])
0: (2) [250, 275

closestIntegers([4, 6, 7, 8, 9]) // 6,7 8,9
0: (2) [6, 7]
1: (2) [8, 9]

closestIntegers([1, 3, 7, 8, 9]) // 7,8
0: (2) [7, 8]

closestIntegers([2, 4, 7, 9]) // 2,4 7,9
0: (2) [2, 4]
1: (2) [7, 9]

closestIntegers([4, 6, 8, 10]) // 4,6  8,10
0: (2) [4, 6]
1: (2) [6, 8]
*/

// no comments 
// function closestIntegers(integers) {
//   var sortedIntegers = integers.slice();
//   sortedIntegers.sort(function(a,b){ return a-b;});
//   var shortestDistance = Infinity;

//   for (var i = 1; i < sortedIntegers.length - 1; i++) {
//     var leftInteger = sortedIntegers[i - 1];
//     var middleInteger = sortedIntegers[i];
//     var rightInteger = sortedIntegers[i + 1];
//     var leftPairDifference = middleInteger - leftInteger;
//     var rightPairDifference = rightInteger - middleInteger; 
   
//     if (leftPairDifference < rightPairDifference) {
//       var results = [[leftInteger, middleInteger]];
//       shortestDistance = leftPairDifference;
//     }  
//     if (leftPairDifference && rightPairDifference < shortestDistance) {
//       var results = [[leftInteger, middleInteger]];
//       shortestDistance = leftPairDifference;
//     } else if (rightPairDifference < shortestDistance) {
//       var results = [[middleInteger, rightInteger]];
//       shortestDistance = rightPairDifference;
//       i++;
//     } else if (rightPairDifference === shortestDistance) {
//       results.push([middleInteger,rightInteger]);
//       shortestDistance = rightPairDifference;
//       i++;
//     }
//   }
//   return results;
// }