/*
Strategy 2: sort array, compare sum of first and last numbers to target number,
and remove either the first/last number

sort the integers in the list in ascending order.
look at the list from two positions, a left postion and a right postion.
add the integers at the left postion and a right postion and call it currentSum.
compare currentSum to targetSum.
if the sums are equal,
return the values of the left postion and a right postion.
continue checking...
if the sums are never equal, return an empty array. 

Psuedo code:

function findPairSort(integerArray, targetSum) {
  sort the integerArray
  loop through the sorted integerArray 
    let i be the current left position
    loop through the sorted integerArray
      let j be the current right position
      let currentSum be the sum of the integers at the current left position and the current right position
      compare currentSum to targetSum
      if currentSum is equal to targetSum
        return the integers at the first and last position of integerArray
      else 
        continue loop

  return an empty array;
}
*/

function findPairSort(integerArray, targetSum) {
  integerArray.sort();
  for (var i = 0; i < integerArray.length - 1; i++) {
    var leftPointerInteger = integerArray[i];
    for (var j = integerArray.length - 1; j > 0; j--) {
      var rightPointerInteger = integerArray[j];
      var currentSum = leftPointerInteger + rightPointerInteger;
      if (currentSum === targetSum) {
        return [leftPointerInteger, rightPointerInteger];
      } 
    }
  }
  return [];
}


