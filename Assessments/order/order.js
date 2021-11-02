/*
Strategy:

Secret word: upward

Daniel's version:

Start at the beginning of the array.
For each integer in the array except for the last integer, compare the current integer to the next integer in the array.
If the current integer is greater than the next integer, return ‘false’.
If the current integer is never greater than the next integer, return 'true'.

Gordon's edits:

For each integer in the array except the last:
  If the current integer is greater than the next one, return false.
Return true.

*/

function isInAscendingOrder(integerArray) {
  for (var i = 0; i < integerArray.length - 1; i++) {
    if (integerArray[i] > integerArray[i + 1]) {
      return false;
    }
  }
  return true;
}


/* 
Can you think of a better name than arrayOfIntegers?
options: 
integers (not that descriptive)
array (basic, array of what?)
inputArray (does not include the contents of the array)
integersList (more descriptive than integers and array)
integersArray (more descriptive)
my pick - integerArray (an array for integers, clearest option?) 



Why did I choose this strategy? 
I tried to keep my strategy simple and not overthink the problem. First I thought about what it meant for an array of integers to be in ascending order. I wanted to think of a simple way of getting to the heart of the problem. I thought about comparing two integers to see if the order between the two was ascending. I thought about the implications of one integer being greater than or less than the other. If the first integer was less than the next integer (2nd integer in array) then that was a good start, we had ascending integers. If the first integer (current integer) was greater than the second integer (next integer) then the integers were not in ascending order and I would need the isInAscendingOrder function to return ‘false’.  Next I thought about how I could traverse the input array and compare integers. First was figuring out what constitutes an ascending array. Next was figuring out how to traverse the array and then figuring out the comparison logic and handling the implications of one integer being less than or greater than the other. Lastly, what does the function need to return? If the current integer is never greater than the next integer, return 'true'.


Problem solving notes:

Why are you traversing the array?
We need to compare the current integer (arrayOfIntegers[i])  and the next integer in the array (arrayOfIntegers[i + 1]) in order to determine which integer is greater. This is crucial information. If the value of the current integer is greater than the next integer in the array then we know that our input array 'arrayOfIntegers' is not in ascending order. At that point our function should return 'false',  letting the user know the input array is not in ascending order.

How would you traverse the array?
Go through the arrayOfIntegers array and visit each integer except the last. Do this to avoid comparing undefined values. If the for loop's condition is 
(var i = 0; i < arrayOfIntegers.length; i++)
then we would be making a weird comparison when i = arrayOfIntegers.length.  We would be comparing arrayOfIntegers[i] (a real integer) to arrayOfIntegers[i + 1] ( an undefined value).  I don't like that behavior. To prevent comparing an undefined value we need the for loop's condition to be
(var i = 0; i < arrayOfIntegers.length -  1; i++) 

testing different for loops in the console:
I ran isInAscendingOrder([0, 1]); in the console with both for loop conditions. Both implementations returned the correct result, true, but I feel more comfortable with (var i = 0; i < arrayOfIntegers.length - 1; i++)  and I feel less comfortable with (var i = 0; i < arrayOfIntegers.length; i++)  because of the undefined comparison. 

example for loop condition: (var i = 0; i < arrayOfIntegers.length; i++)
example input: isInAscendingOrder([0, 1]) --- (start with small test inputs)
when i = 0 the comparison is  0 > 1 ? The answer is false. a desired result. Our if statment does not run the statement block.
when i = 1 the comparison is  1 > undefined ? The answer is false but I'm not satisfied with this result. 
Even though (1 > undefined === false) is true I just don't like the comparison. 


side note:
If the current integer is never greater than the next integer, return 'true'. If the current integer is never greater than the next integer then that means that the input array is in acending order. 


rewrites: using left and right instead of current integer and next integer

Start at the beginning of the array.
For each integer in the array except for the last integer, compare the left integer to the right integer.
If the left integer is greater than the right integer, return ‘false’.
If the left integer is never greater than the right integer, return 'true'.

Is using left and right clearer than using current and next? Not sure.

original strategy (less holistic):
Start at the beginning of the array and compare the current integer to the next integer in the array. 
If the current integer is greater than the next integer, return ‘false’.
Otherwise, let the current integer assume the position of the next integer.
For each integer in the array except for the last integer, compare the current integer to the next integer in the array.
If the current integer is never greater than the next integer, return 'true'. 


old strategy rewrites:
If the current integer is greater than the next integer, return ‘false’.....

option 1 a:
Otherwise, let current integer assume the position of the next integer.
For each integer in the array except for the last integer, compare the current integer to the next integer in the array.
option 1 b:
Otherwise, the current integer assumes the position of the next integer.
For each integer in the array except for the last integer, compare the current integer to the next integer in the array.

option 2:
Otherwise, for each integer in the array except for the last integer, compare the current integer to the next integer. 

option 3:
Otherwise, update current integer by moving one spot to the right.
Do this for each integer in the array except for the last integer.

option 4:
Otherwise, do this for each integer in the array except for the last integer.

*/