function containsSameElements(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (!array1.includes(array2[i]) || Number.isNaN(array1[i]) === true) {
      return false;
    }
  }
  return true;
}
// time O(n^2)
// space O(1)

/*

containsSameElements([1, 2, 'a'], ['a', 2, 1]);
true

var oneObject = {};
containsSameElements([1, 2, 'a', oneObject], [oneObject, 'a', 2, 1]);
true

containsSameElements([1,2], [2,1]);
true

*/