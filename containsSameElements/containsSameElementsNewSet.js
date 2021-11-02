function containsSameElements(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  var array1Set = new Set();
  for (var i = 0; i < array1.length; i++) {
    if (!array1Set.has(array1[i])) {
      array1Set.add([array1[i]]); 
    } else {
      array1Set.add([array1[i]].push(array1[i]));
    }
  }
  for (var i = 0; i < array2.length; i++) {
    for (let item of array1Set) {
      if (!array2[i] === item) {
        return false;
      }
    }
    // if (!(array1Set.has(array2[i])) || (Number.isNaN(array2[i]) === true)) {
    //   return false;
    // } else if (!array1Set.array2[i].includes(array2[i])) {
    //   return false;
    // }
  }
  return true;
}