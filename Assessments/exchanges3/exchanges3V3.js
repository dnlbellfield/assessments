// function shiftArrayElements(array) {
//   var lastArrayElement = array[array.length - 1];

//   for (var i = array.length - 1; i > 0 ; i--) {
//     var originalPosition = i;
//     var newPosition = i - 1;
//     array[originalPosition] = array[newPosition];
//   }

//   array[0] = lastArrayElement;
//   return array; 

// }

function shiftArrayElements(array) {
  var lastArrayElement = array[array.length - 1];

  for (var i = array.length - 1; i > 0 ; i--) {
    var valueToShift = array[i - 1];
    array[i] = valueToShift;
  }

  array[0] = lastArrayElement;
  return array; 

}
