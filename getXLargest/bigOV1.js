// carl style       
function getXLargest(array, x) { //  space: + 2 (vars- array, x )
  var copyOfArray = array.slice(); // time: o(n)  space: + 1 

  copyOfArray.sort(function(a, b) { // time: o(n) space: + 2 (vars 'a','b' )
    return a - b; // time: o(1) 
  });

  return copyOfArray.slice(-x); // time: o(n) 

}
// identify the operations, lines 3, 5, 6, 9
// add operations / drop constants? 
// o(n) + ( o(n) + o(1) )+ o(n), ---> 3n + 1 ---> o(n) ? (i think this is wrong)

// time: o(n)
// space: 5 not sure array,x, copyOfArray, a, b

// reason I think  line 3 is O(n) :
// the code is using a native method on the array, so the time complexity of the operation is linear ?

// meeting answer o(n^2) when using insertion sort 
// built in method is O (n log n)