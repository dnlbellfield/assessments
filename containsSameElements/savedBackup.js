// /*
// 3 strategies - 5 implementations 
// Check if each element in array1 is in array2 (no methods) passes the 'compare multiple empty objects' test.
// Check if each element in array1 is in array2 (with array.includes) passes the 'compare multiple empty objects' test.
// Sort then compare  passes the 'compare multiple empty objects' test.
// map strategy fails the 'compare multiple empty objects' test.
// set passes the 'compare multiple empty objects' test.
// */
// // strategy: Check if each element in array1 is in array2.
// function containsSameElements(array1, array2) {
//   for (var i = 0; i < array1.length; i++) {
//     if (!array1.includes(array2[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// // time: O(n^2)
// // space: O(1)

// // strategy: Check if each element in array1 is in array2. (no built in methods)
// function containsSameElements(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false
//   }
//   var matchCount = 0;
//   for (var i = 0; i < array1.length; i++) {
//     var currentElement = array1[i];
//     for (var j = 0; j < array2.length; j++) {
//     var compareElement = array2[j]
//       if (currentElement === compareElement) {
//         matchCount++;
//         break;
//       }
//     } 
//     if (matchCount === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// // time: O(n^2)
// // space: O(1)


// // strategy: Sort both arrays and compare.
// function containsSameElements(array1, array2) {
//   array1.sort();
//   array2.sort();
//   for (var i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// // time: O(nlogn)
// // space: O(1)

// // strategy: Store array1 elements. Check if array2's elements are in storage. (set)
// function containsSameElements(array1, array2) {
//   var array1Set = new Set(array1);
//   for (var i = 0; i < array1.length; i++) {
//     if (!(array1Set.has(array2[i]))) {
//       return false;
//     }
//   }
//   return true;
// }

// // time: O(n)
// // space: 0(n) or O(1) ?


// // strategy: Store array1 elements. Check if array2's elements are in storage. (map)
// function containsSameElements(array1, array2) {
//   var array1ElementsMap = {};
//   for (var i = 0; i < array1.length; i++) {
//     array1ElementsMap[array1[i]] = true;
//   }
//   for (var i = 0; i < array1.length; i++) {
//     if (!(array2[i] in array1ElementsMap)) {
//       return false;
//     }
//   }
//   return true;
// }

// // time: O(n)
// // space: O(1)?
// /*
// test cases:
// containsSameElements([1,2], [2,1]);
// true
// containsSameElements([1,2], [2]);
// false
// containsSameElements([{},{}], [{},{}]);
// false
// var oneObject = {};
// containsSameElements([1, 2, 'a', oneObject], [oneObject, 'a', 2, 1]);
// true
// containsSameElements([1, 2, 'a'], ['a', 2, 1]);
// true
// Check if each element in array1 is in array2 ( no methods) passes the 'compare multiple empty objects' test.
// Check if each element in array1 is in array2 (with array.includes) passes the 'compare multiple empty objects' test.
// Sort then compare  passes the 'compare multiple empty objects' test.
// map strategy fails the 'compare multiple empty objects' test.
// set passes the 'compare multiple empty objects' test.
// */


// <script src="simpletest.js"></script> 
// <script>
// function containsSameElements(array1, array2) {
//   var array1Set = new Set(array1);
//   for (var i = 0; i < array1.length; i++) {
//     if (!(array1Set.has(array2[i]))) {
//       return false;
//     }
//   }
//   return true;
// }
// tests({
//   'compare integers': function() {
//     var result = containsSameElements([1,2], [2,1]);
//     eq(result, true);
//   },
//   'compare arrays of different lengths': function() {
//     var result = containsSameElements([1,2], [2]);
//     eq(result, false);
//   },
//   'compare strings, integers, and a saved object reference': function() {
//     var oneObject = {};
//     var result =  containsSameElements([1, 2, 'a', oneObject], [oneObject, 'a', 2, 1]);
//     eq(result, true);
//   },
//   'compare multiple empty objects': function() {
//     var result = containsSameElements([{},{}], [{},{}]);
//     eq(result, false);
//   }
// })
// </script>

// // simpletest.js file below

// /**
//  * Very simple in-browser unit-test library, with zero deps.
//  *
//  * Background turns green if all tests pass, otherwise red.
//  * View the JavaScript console to see failure reasons.
//  *
//  * Example:
//  *
//  *   adder.js (code under test)
//  *
//  *     function add(a, b) {
//  *       return a + b;
//  *     }
//  *
//  *   adder-test.html (tests - just open a browser to see results)
//  *
//  *     <script src="tinytest.js"></script>
//  *     <script>
//  *
//  *     tests({
//  *       '': function() {},
//  *       '': function() {},
//  *     });
//  *     </script>
//  *
//  * That's it. Stop using over complicated frameworks that get in your way.
//  *
//  * -Joe Walnes
//  * MIT License. See https://github.com/joewalnes/jstinytest/
//  */

//  var TinyTestHelper = {
//   renderStats: function (tests, failures) {
//       var numberOfTests = Object.keys(tests).length;
//               var successes = numberOfTests - failures;
//               var summaryString = 'Ran ' + numberOfTests + ' tests: '
//                                   + successes + ' successes, ' 
//                                   + failures + ' failures';

//               var summaryElement = document.createElement('h1');
//               summaryElement.textContent = summaryString;
//               document.body.appendChild(summaryElement);                 

//   }
// };

// var TinyTest = {

//   run: function(tests) {
//       var failures = 0;
//       for (var testName in tests) {
//           var testAction = tests[testName];
//           try {
//               testAction.apply(this);
//               console.log('%c' + testName , "color: green;");

//           } catch (e) {
//               failures++;
              
          
//               console.groupCollapsed('%c' + testName , "color: red;");
//               console.error(e.stack);
//               console.groupEnd();
//           }
//       }
//       setTimeout(function() { // Give document a chance to complete
//           if (window.document && document.body) {
//               document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
              
//               TinyTestHelper.renderStats(tests, failures);
//           }
//       }, 0);
//   },

//   fail: function(msg) {
//       throw new Error('fail(): ' + msg);
//   },

//   assert: function(value, msg) {
//       if (!value) {
//           throw new Error('assert(): ' + msg);
//       }
//   },

//   assertEquals: function(expected, actual) {
//       if (expected != actual) {
//           throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
//       }
//   },

//   assertStrictEquals: function(expected, actual) {
//       if (expected !== actual) {
//           throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
//       }
//   },

// };

// var fail               = TinyTest.fail.bind(TinyTest),
//   assert             = TinyTest.assert.bind(TinyTest),
//   assertEquals       = TinyTest.assertEquals.bind(TinyTest),
//   eq                 = TinyTest.assertEquals.bind(TinyTest), // alias for assertEquals
//   assertStrictEquals = TinyTest.assertStrictEquals.bind(TinyTest),
//   tests              = TinyTest.run.bind(TinyTest);