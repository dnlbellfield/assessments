function containsSameElements(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  var array1MappedElements = {};
  // loop over array1 and map it's elements. 
  for (var i = 0; i < array1.length; i++) {
    // If the element has not been mapped, map it as a key
    // and add the element *wrapped in an array* as the key's value.
    // Otherwise, push the element to the array that exists in the map.
    if (!array1MappedElements[array1[i]]) {
      array1MappedElements[array1[i]] = [array1[i]];
    } else {
      array1MappedElements[array1[i]].push(array1[i]);
    }
  }
  for (var i = 0; i < array2.length; i++) {
    if (!array1MappedElements[array2[i]] || isNaN(Number(array2[i]))) {
      return false;
    } else if (!(array1MappedElements[array2[i]].includes(array2[i]))) {
      return false;
    }
  }
}