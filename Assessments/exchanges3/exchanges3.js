function shiftArrayElements(array) {
  var lastArrayElement = array[array.length - 1];
  for (var i = array.length - 1; i >= 1; i--) {
    var leftElementCopy = array[i - 1];
    array[i] = leftElementCopy;
  }
  array[0] = lastArrayElement;
  return array; 
}

/*

Rewrite with ‘copy’
 
Create lastArrayElement and set it to the last array element.
Starting at last array element create leftElementCopy and set it to the element to the left of the current element.
Set the current element to leftElementCopy.
Do this for each element except the element at the beginning of the array.
Set the first array element to lastArrayElement.
Return the array.

inputArray = ['b', 'c', 'a'];

Starting at last array element 
            *
['b', 'c', 'a'];

create leftElementCopy and set it to the element to the left of the current element.
       <----*
['b', 'c', 'a'];      ('leftElementCopy' = 'c')
       *

Set the current element to leftElementCopy.
            *
['b', 'c', 'c'];      ( 'a' is set to 'c')

Do this for each element except the element at the beginning of the array.

Create leftElementCopy and set it to the element to the left of the current element.

  <----*   
['b', 'c', 'c'];  (current element is 'c' inputArray[1], 'leftElementCopy' = 'b')
  *

Set the current element to leftElementCopy.
       *
['b', 'b', 'c'];     ( 'c' is set to 'b')
  *

now we stop because we are at the beginning of the array.

the inputArray would look like this ['b', 'b', 'c'];

ready for the next operation in my strategy...



*/