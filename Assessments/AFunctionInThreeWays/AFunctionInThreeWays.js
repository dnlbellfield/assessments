https://replit.com/@watchandcode/00Methodology-09-01-Three-Ways-DanielBellfield?from=notifications#index.js
// Recursive
function getIthElementRecursive(i) {
  if (i === 1) {
    return 1;
  } else {
    return getIthElementRecursive(i - 1) + 3;
  }
}

// Iterative strategy description : 
// Create integer and set it to i.
// Create results and set it to 1.
// Create counter and set it to 1.
// Do the following when counter is less than integer:
//   Add 3 to results.
//   Increase counter by 1.
// Return results.  

// Iterative strategy summary: 
// Initialize results and set it to 1
// Add 3 to results (input - 1) times. 
// Return results.

// Things in my strategy not included in my summary:
// 1. Create integer and set it to i.
// In my summary input is 'i'. 'create integer' is not in my summary.

// 2. explicity creating 'counter' is not in my summary. 
// '(input - 1) times' is the count/ number of operations instead of using a counter.

//3. Also 'Do the following when counter is less than integer' does not appear in my summary.




// self assessment: My strategy feels like a set of instructions or a recipe. I’m not sure how much it negatively affects my strategy. I want a reader to be able to apply my strategy and write a working function. Is every piece necessary? I don’t need to create the variable ‘integer’. I could just use ‘i’ and I would not be sacrificing any clarity. Losing clarity is a concern of mine. I have a hard time self assessing my work. Looking over my strategy I believe every piece is true and possible.  I am also about 80% confident my steps always lead to a correct result for all valid inputs. I tested the getIthElementIterative function in the debugger and the strategy works. My strategy seems verbose. I like my summary, ’ Initialize results to 1.  Add 3 to results (i - 1) times.'  I think  Initialize results to 1 and add 3 to results (input - 1) times is more succinct than my current strategy. I think my strategy is too wordy. I have a habit of writing my strategy like a recipe instead of capturing the spirit of the strategy and putting it into words. I'm not able to express my strategy succinctly. 


// Iterative
function getIthElementIterative(i) {
  var integer = i;
  var results = 1;
  for (var counter = 1; counter < integer; counter++) {
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