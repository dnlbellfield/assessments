// sort twice and then compare elements (2)
function containsSameElements(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  
  var sorted1 = array1.slice();
  var sorted2 = array2.slice();

  sorted1.sort(function (a, b) {
    if (typeof a === 'object') {
        a = JSON.stringify(a);
      }
    if (typeof a === 'string') {
      return - 1;
    } else { 
      return 1;
    }
  });

  sorted2.sort(function (a, b) {
    if (typeof a === 'object') {
      a = JSON.stringify(a);
    }
  if (typeof a === 'string') {
    return - 1;
  } else { 
    return 1;
  }
  });

  sorted1.sort()
  sorted2.sort()
  
  for (var i = 0; i < array1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return false;
    }
  }
  return true;
}
/*
Example: containsSameElements([“10”, 3, ‘a’, 10, “3"], [‘a’, 10, “3”, “10", 3]);

Call sort on both arrays. Pass a callback function to sort().
The callback function decides that strings should be sorted first (sorted before integers).
This results in strings being placed at the front of the array and integers are placed in the back.
Both arrays are sorted like this: [‘string’, ‘string’, ‘string’, integer, integer].
Next, sort both arrays one more time. No callback function is necessary. 
Both arrays are sorted like this: [“10”, 10, “3", 3, “a”].
Next compare sorted1[i] and sorted2[i].
containsSameElements will return ‘true’.
 */