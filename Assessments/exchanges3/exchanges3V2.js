function shiftArrayElements(array) {
  var elementStorage = {};
  var lastArrayElement = array[array.length - 1];
  // store the values of the array elements as the key and value in the elementStorage map. 
  for (var i = 0; i < array.length; i++) {
    elementStorage[i] = array[i];
  }
  // reassign the array values, using the elementStorage map
  for (var i = 0; i < array.length; i++) {
    array[i] = elementStorage[i - 1];
  }
  array[0] = lastArrayElement;
  return array; 

}
