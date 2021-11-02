function moveLast(array, x) {
 
  var lastElementPosition = array.length - 1;
  var lastElement = array[lastElementPosition];
  var finalPosition = lastElementPosition - x;
  // starting from lastElementPosition (move left)
  for (var i = lastElementPosition; i >= finalPosition; i--) {
    array[i + 1] = array[i];
  } 
   
  // starting from lastElementPosition - 1, (move left)
  for (var i = lastElementPosition - 1; i >= finalPosition; i--) {
    array[i + 1] = array[i];
  } 

  // starting from finalPosition, moving right
  for (var i = finalPosition; i <= lastElementPosition; i++) {
    
  }
  array[finalPosition] = lastElement;
  return array;
}
function moveLastLast(array, x) {
 
  var lastElementPosition = array.length - 1;
  var lastElement = array[lastElementPosition];
  var finalPosition = lastElementPosition - x;
  // starting from lastElementPosition (move left)
  for (var i = lastElementPosition; i > finalPosition; i--) {
    array[i + 1] = array[i];
  } 
  
  array[finalPosition] = lastElement;
  return array;
}

function moveLastSecondToLast(array, x) {
 
  var lastElementPosition = array.length - 1;
  var lastElement = array[lastElementPosition];
  var finalPosition = lastElementPosition - x;
  
  // starting from the second to last element, (move left)
  // why start at the second to last element? 
  // Knowing the last element in the array needs an updated value, I want to look at the first element to move to the right. 
  // I want to update the value of the last element in the array. I will update the value of the last element in the array using the value of the element to its left ==> array[i + 1] = array[i]. 
  // I start at the second to last position array[array.length - 2] so that I can use the value at array[array.length - 2]  to update the value of  last element ==> array[array.length - 1]
  // Repeat array[i + 1] = array[i] x times while moving right (back of array) to left (front of array). 

  // knowing the last position in the array needs an updated value, I look at the first element to move to the right. 
  // The second to last element position can be found by subtracting 2 from array.length. secondToLastElementPosition = array.length - 2;  

  // Thats why I started at array.length - 2 (the second to last element in the array) 
  // Because  0 < x < array.length, the smallest integer x can be is 1.
  // That means that at the last element will be moved least one place in the array.
  
  for (var i = lastElementPosition - 1; i >= finalPosition; i--) {
    array[i + 1] = array[i];
  } 

  array[finalPosition] = lastElement;
  return array;
}

function moveLastFinalPosition(array, x) {
 
  var lastElementPosition = array.length - 1;
  var lastElement = array[lastElementPosition];
  var finalPosition = lastElementPosition - x;

  // starting from finalPosition, moving right
  for (var i = finalPosition; i < lastElementPosition; i++) {
    array[i + 1] = array[i];
  }
  array[finalPosition] = lastElement;
  return array;
}