function shiftArrayElements(array) {
  var lastArrayElement = array[array.length - 1];
  for (var i = array.length - 1; i >= 1; i--) {
    var elementToShift = array[i - 1];
    array[i] = elementToShift;
  }
  array[0] = lastArrayElement;
  return array; 
}
/*
1. reposition a: (3/5) 50% confidence 
Start at the end of the array and reposition the element 
such that it assumes the element on the left. 
Do this for each element except the element at the beginning of the array.


inputArray = ['b', 'c', 'a'];

start at the end of the array. 'a' is the element at the end of the array.
            *
['b', 'c', 'a'];

and reposition the element such that it assumes the element on the left. 
       <----*
['b', 'c', 'a'];      ('c' is the element on the left)
       *

now reposition the element 
            *
['b', 'c', 'c'];

Do this for each element except the element at the beginning of the array.
  <----*   
['b', 'c', 'c'];  ('c', inputArray[1] is where our pointer is and 'b' is noe the element on the left)
  *

now reposition the element
       *
['b', 'b', 'c'];
  *

now we stop because our pointer is at the beginning of the array.
the inputArray would look like this ['b', 'b', 'c'];



*/