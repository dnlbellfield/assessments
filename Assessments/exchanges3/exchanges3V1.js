function shiftArrayElements(array) {
  var copiedArray = array.slice();
  var lastArrayElement = array[array.length - 1];
  for (var i = 1; i < array.length; i++) {
    array[i] = copiedArray[i - 1];
  }
  array[0] = lastArrayElement;
  return array; 

}