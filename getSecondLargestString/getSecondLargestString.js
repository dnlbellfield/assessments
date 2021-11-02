/*
input: array of strings
goal: find second largest string in array
Other considerations: Assume there are no ties.
['larry', 'dan', 'quinault', 'gordana'] ==> 'gordana'









previous: remove the longest string, then identify and return the longest string available

Summary A : Find second largest string in two passes. 
'two pass' strategy (sense of the method)

Computational Outline:
Create largestString and set it to ‘’.
Create secondLargestString and set it to ‘’.
For each string in stringArray: go through stringArray to find largestString
  If string.length > largestString.length:
    largestString = string;
For each string in stringArray: go through stringArray to find secondLargestString
  If string.length > secondLargestString.length and string is not largestString:
    secondLongestString = string;
Return secondLongestString.

Is every piece unambiguous?
Is every piece true?
Is every piece possible?
Do these steps always lead to a correct result for all valid inputs?
Is every piece necessary to execute the strategy?


notes:
deleting is clearer in prev 
Tamara's Rank 
1. no mention of number of passes in previous summary (line 15) (3/5)
2. second longest mentioned in newer summary (line 17) (4/5)
3. 'remove' could be misleading remove vs remove from consideration (3/5)




   
   
   notes: 
   wordy, too much information in outline
   not sure if summary and outline are consistent 
   added more confusion with 'results' notes 
   summary wording is not clear

   group notes:
   better representation/ labels in summary
   (formerly second longest)
   line 23
   explore alt main ideas


Summary B:   time: O(n) space: O(n) (I think)
Compare all string lengths and store the two largest / longest. Return the second longest string stored.

Computational Outline:
Create twoLargestStrings and set it to ['' , ''].
For each string in array:
  If string.length > twoLargestStrings[1].length:
    twoLargestStrings[0] = twoLargestStrings[1].
    twoLargestStrings[1] = string.
  Else if string.length > twoLargestStrings[0].length:
    twoLargestStrings[0] = string.
Return twoLargestStrings[0].



results* / notes:
currentString = inputArray[i].
if currentString.length > twoLargestStrings[1].length:
  twoLargestStrings[0] = twoLargestStrings[1].
  twoLargestStrings[1] = currentString.
else if currentString.length > twoLargestStrings[0].length:
  twoLargestStrings[0] = currentString;



Summary C:   time: O(nlogn) space: O(n) (I think)
Sort the input array by string length, return second longest string.

Computational Outline:
Create stringArrayCopy and set it to a copy of the input array.
Sort stringArrayCopy by string length. 
Return second to last element in stringArrayCopy.

* Sorting notes: (sort in ascending order)
Sort stringArrayCopy with (a, b)
  if a.length < b.length:
    return -1.
  else: 
    return 1.



Summary A : Find second largest string in two passes.   'two pass' strategy (sense of the method)

Computational Outline:
Create largestString and set it to ‘’.
Create secondLargestString and set it to ‘’.
For each string in stringArray: go through stringArray to find largestString
  If string.length > largestString.length:
    largestString = string;
For each string in stringArray: go through stringArray to find secondLargestString
  If string.length > secondLargestString.length and string is not largestString:
    secondLongestString = string;
Return secondLongestString.
*/





// Implementation A:  
function getSecondLargestString(stringArray) {

  var largestString = '';
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > largestString.length) {
      largestString = stringArray[i];
    }
  }

  var secondLargestString = '';
  for (var i = 0; i < stringArray.length; i++) {
      if (stringArray[i].length > secondLargestString.length
        && stringArray[i] !== largestString) {
        secondLargestString = stringArray[i];
      }
  }
  return secondLargestString;
}










// Implementation A:  no spaces 
function getSecondLargestString(stringArray) {
  var largestString = '';
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > largestString.length) {
      largestString = stringArray[i];
    }
  }
  var secondLargestString = '';
  for (var i = 0; i < stringArray.length; i++) {
      if (stringArray[i].length > secondLargestString.length
        && stringArray[i] !== largestString) {
        secondLargestString = stringArray[i];
      }
  }
  return secondLargestString;
}



/*
Summary B:   time: O(n) space: O(n) (I think)
Compare all string lengths and store the two largest / longest. Return the second longest string stored.

Computational Outline:
Create twoLargestStrings and set it to ['' , ''].
For each string in array:
  If string.length > twoLargestStrings[1].length:
    twoLargestStrings[0] = twoLargestStrings[1].
    twoLargestStrings[1] = string.
  Else if string.length > twoLargestStrings[0].length:
    twoLargestStrings[0] = string.
Return twoLargestStrings[0].
*/


// B 
//time: O(n) space: O(n)
function getSecondLargestString(stringArray) {
  var twoLargestStrings  = ['', '']

  for ( var i = 0; i < stringArray.length; i++) {
    var currentString = stringArray[i];

    if (currentString.length > twoLargestStrings[1].length) {
      twoLargestStrings[0] = twoLargestStrings[1];
      twoLargestStrings[1] = currentString;
    } else if (currentString.length > twoLargestStrings[0].length) {
      twoLargestStrings[0] = currentString;
    }
  }
  return twoLargestStrings[0];
}














// B 
//time: O(n) space: O(n)
function getSecondLargestString(stringArray) {
  var largestString = '';
  var secondLargestString = '';

  for ( var i = 0; i < stringArray.length; i++) {
    var currentString = stringArray[i];

    if (currentString.length > largestString.length) {
      secondLargestString = largestString;
      largestString = currentString;
    } else if (currentString.length > secondLargestString.length) {
      secondLargestString = currentString;
    }
  }
  return secondLargestString;
}




/*
Summary C:   time: O(nlogn) space: O(n) (I think)
Sort the input array by string length, return second longest string.

Computational Outline:
Create stringArrayCopy and set it to a copy of the input array.
Sort stringArrayCopy by string length. 
Return second to last element in stringArrayCopy.
*/



// C
//time: O(nlogn) space: O(n)
function getSecondLargestString(stringArray) {
  var stringArrayCopy = stringArray.slice();

  stringArrayCopy.sort(function(a,b) { 
    if (a.length < b.length) {
      return -1;
    } else {
      return 1;
    }
  });

  return stringArrayCopy[stringArrayCopy.length - 2];

}


// C
//time: O(nlogn) space: O(n)
function getSecondLargestString(stringArray) {
  var stringArrayCopy = stringArray.slice();

  stringArrayCopy.sort(function(a,b) { 
    return a.length - b.length;
  });

  return stringArrayCopy[stringArrayCopy.length - 2];

}