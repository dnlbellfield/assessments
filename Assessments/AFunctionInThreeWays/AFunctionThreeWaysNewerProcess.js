https://replit.com/@watchandcode/00Methodology-09-01-Three-Ways-DanielBellfield?from=notifications#index.js
// Recursive
function getIthElementRecursive(i) {
  if (i === 1) {
    return 1;
  } else {
    return getIthElementRecursive(i - 1) + 3;
  }
}

// Iterative strategy description: 
// Initialize results and set it to 1.
// Add 3 to results (input - 1) times. 
// Return results. 

// Iterative strategy summary: 
// Calculate the ith element based on the input. wrong
// new summary: add 3 to results ( i - 1) times 

// Iterative Computational Outline:  
// create results and set it to 1
// Do the following (i - 1) times:
//   Add 3 to results.
// Return results.


// Iterative
function getIthElementIterative(i) {
  var results = 1;
  for (var j = 1; j < i; j++) {
    results += 3;
  }
  return results;
}

// Formulaic
function getIthElementFormulaic(i) {
  return 1 + 3 * (i - 1);
}

module.exports = {
  getIthElementRecursive: getIthElementRecursive,
  getIthElementIterative: getIthElementIterative,
  getIthElementFormulaic: getIthElementFormulaic
};