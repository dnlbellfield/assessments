function containsSameElements(array1, array2) {
  var array1Set = new Set(array1);
  for (var i = 0; i < array1.length; i++) {
    if (!(array1Set.has(array2[i])) || Number.isNaN(array1[i]) === true) {
      return false;
    }
  }
  return true;
}

// time: O(n)
// space: 0(n) or O(1) ?


/*

containsSameElements([1,2], [2,1]);
true

containsSameElements([1,2], [2]);
false

containsSameElements([{},{}], [{},{}]);
false

var oneObject = {};
containsSameElements([1, 2, 'a', oneObject], [oneObject, 'a', 2, 1]);
true

containsSameElements([1, 2, 'a'], ['a', 2, 1]);
true

*/