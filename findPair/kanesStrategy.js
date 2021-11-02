/*
Strategy 2:

1. Sort the numbers into a list from least to greatest.
2. Create a pointer for smaller numbers and a pointer for larger numbers.
3. Attach the smaller pointer to the first number in the list, attach the larger pointer to the last number in the list.
4. Find the sum of the values referenced by the pointers, `currentSum`, and compare them to the target.
     If the currentSum is equal to the target, immediately return the values of both pointers in a list.
     If the currentSum is smaller than the target, move the smaller pointer to the next smallest number.
     If the currentSum is larger than the target, move the larger pointer to the next largest number.
5. Repeat step 4 as long as the smaller and larger pointers do not overlap.
6. If the pointers overlap and no pair has been found, give back an empty list.
*/

function findPair(integerArray, targetSum) {
  integerArray.sort()
  for (var i = 0; i < integerArray.length - 1; i++) {
    var smallerPointer = 0;
    var largerPointer = integerArray.length - 1;
    var currentSum = integerArray[smallerPointer] + integerArray[largerPointer];
    if (currentSum === targetSum) {
      return [integerArray[smallerPointer],integerArray[largerPointer]];
    } else if (currentSum < targetSum) {
      smallerPointer++;
    } else {
      largerPointer--;
    }
  }
  return [];
}
//    *
// [1,3,7] 
// target sum = 10

// 1 + 7 = 8     !== 10 false
// 3 + 7 = 10   10 === 10 true
// [3,7];

//    * *
// [1,2,3,7] 
// target sum = 5

// 1 + 7 = 8  8 > 5  
// 1 + 3 = 4  4 < 5
// 2 + 3 = 5  5 = 5
// [2,3]