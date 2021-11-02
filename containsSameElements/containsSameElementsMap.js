function containsSameElements(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }
  var array1ElementMap = {};
  
  for (var i = 0; i < array1.length; i++) {
    if (!array1ElementMap.hasOwnProperty(array1[i])) {
      array1ElementMap[array1[i]] = [array1[i]];
    } else {
      array1ElementMap[array1[i]].push(array1[i]);
    }
  }

  for (var i = 0; i < array2.length; i++) {
    if (!(array2[i] in array1ElementMap || Number.isNaN(array1[i]) === true)) {
      return false;
    } else if (!array1ElementMap[array2[i]].includes(array2[i])){
      return false;
    }
  }
  return true;
}