function containsSameElements(array1, array2) {
  var array1Map = new Map();
  for (var i = 0; i < array1.length; i++) {
    array1Map.set(array1[i], array1[i]);
  }
  for (var i = 0; i < array1.length; i++) {
    if (!(array1Map.has(array2[i])) || Number.isNaN(array1[i]) === true) {
      return false;
    }
  }
  return true;
}