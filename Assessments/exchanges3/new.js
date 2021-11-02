function shiftArrayElements(array) {
  var lastArrayElement = array[array.length - 1];
  for (var i = array.length - 1; i > 0; i--) {
    var elementToCopy = array[i - 1];
    var elementHolder = array[i];
    array[i] = elementToCopy;
    array[i - 1] = elementHolder;
  }
  return array; 
}