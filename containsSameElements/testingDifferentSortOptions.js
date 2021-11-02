// bad options 
// function containsSameElements(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false
//   }
  
//   var sorted1 = array1.slice();
//   var sorted2 = array2.slice();
//   sorted1.sort(function sortCallback (a,b) {
//     if (typeof a === 'string' && isNaN(Number(a)) === false) {
//       a = Number(a);
//     }
//     if (typeof b === 'string' && isNaN(Number(b)) === false) {
//       b = Number(b);
//     }
//     return a - b;
//   });
//   sorted2.sort(function sortCallback (a,b) {
//     if (typeof a === 'string' && isNaN(Number(a)) === false) {
//       a = Number(a);
//     }
//     if (typeof b === 'string' && isNaN(Number(b)) === false) {
//       b = Number(b);
//     }
//     return a - b;
//   });

//   for (var i = 0; i < array1.length; i++) {
//     if (sorted1[i] !== sorted2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// function sortCallback (a,b) {
//   if (typeof a === 'string' && isNaN(Number(sorted1[i])) === false) {
//     a = Number(a);
//   }
//   if (typeof b === 'string' && isNaN(Number(sorted2[i])) === false) {
//     b = Number(b);
//   }
//   return a - b;
// }

// function containsSameElements(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false
//   }
  
//   var sorted1 = array1.slice();
//   var sorted2 = array2.slice();
//   sorted1.sort(function sortCallback (a,b) {
//     var aChar = new String(a)
//     var charCodeA = aChar.charCodeAt(0);
//     var bChar = new String(b)
//     var charCodeB = bChar.charCodeAt(0);
//     return charCodeA - charCodeB;
//   });
//   sorted2.sort(function sortCallback (a,b) {
//     var aChar = new String(a)
//     var charCodeA = aChar.charCodeAt(0);
//     var bChar = new String(b)
//     var charCodeB = bChar.charCodeAt(0);
//     return charCodeA - charCodeB;
//   });

//   for (var i = 0; i < array1.length; i++) {
//     if (sorted1[i] !== sorted2[i]) {
//       return false;
//     }
//   }
//   return true;
// }