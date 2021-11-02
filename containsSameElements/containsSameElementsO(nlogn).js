function containsSameElements(array1, array2) {
  array1.sort();
  array2.sort();
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

// time O(nlogn)
// space O(1)

/*

var oneObject = {};
containsSameElements([1, 2, 'a', oneObject], [oneObject, 'a', 2, 1]);
true 

containsSameElements([1, 2, 'a'], ['a', 2, 1]);
true

containsSameElements([1,2], [1]);
false

containsSameElements([1,2], [2,1]);
true

*/