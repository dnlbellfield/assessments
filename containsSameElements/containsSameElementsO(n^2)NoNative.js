function containsSameElements(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  var matchCount = 0;
  for (var i = 0; i < array1.length; i++) {
    var currentElement = array1[i];
    for (var j = 0; j < array2.length; j++) {
    var compareElement = array2[j]
      if (currentElement === compareElement) {
        matchCount++;
        break;
      }
    } 
  }
  if (matchCount < array1.length) {
      return false;
  }
  return true;
}