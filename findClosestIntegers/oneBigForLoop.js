function findMultipleClosestIntegers(integerArray) {
  
  var sortedIntegerArray = integerArray.slice();
  sortedIntegerArray.sort(function(a,b) { 
    return a - b;
  });

  var shortestDistance = Infinity;

  for (var i = 0; i < sortedIntegerArray.length - 1; i++) {
    var currentInteger = sortedIntegerArray[i];
    var adjacentInteger = sortedIntegerArray[i + 1];
    var currentDistance = adjacentInteger - currentInteger;
    
    if (currentDistance < shortestDistance) {
      var closestIntegers = [[currentInteger,adjacentInteger]];
      shortestDistance = currentDistance;
    } else if (currentDistance === shortestDistance) {
      var lastIntegerAdded = closestIntegers[[closestIntegers.length -1]][1];
      if (lastIntegerAdded !== currentInteger ) {
        closestIntegers.push([currentInteger,adjacentInteger]);
      }
    }
  }

  return closestIntegers;
}
