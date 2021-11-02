/*

Summary:
Repeatedly move 'currentSmallest' to its final place.

Outline V1:

length times:
  move 'currentSmallest' to its final place.


Outline V2:

for each integer i, from 0 to (n - 1):
  move ith 'currentSmallest' to array[i].





Move smallest elements to 'front'. 
We want the smallest integer to be moved to the first position of the array.
The next smallest integer should be moved to the second position of the array.
Repeating this process should sort an array in ascending order.

[1, 2, 3, 4, 5, 6]

find knobs available

array length = 6

 0  1  2  3  4  5   (index)
[1, 2, 3, 4, 5, 6]  (array elements)


define 'currentSmallest'
Initially it will be the 'global' smallest integer, then second smallest, 
then third smallest and so on.

How many iterations of 'currentSmallest' are there?  
n / array length vs array length - 1 / n - 1? 

'repeatedly' ==> length times 

Outline V1:

length times:
  move 'currentSmallest' to its final place.


Outline V2:

for each integer i, from 0 to (n - 1):
  move ith 'currentSmallest' to array[i].

 describe the iterative logic, what can you iterate over?  'integers'



        *
 [3, 1, 0, 2]
 find smallest, put it in its rightful place

 [0, _, _, _]

 find the next smallest integer 
     *  x
 [3, 1, 0, 2]

 [0, 1, _, _]

 find the next smallest integer 
     x  x  *
 [3, 1, 0, 2]

 [0, 1, 2, _]
 [0, 1, 2, 3] sorted in ascending order 

*/
// That said, we recommend you use interfaces over type
// aliases. Specifically, because you will get better error
// messages. If you hover over the following errors, you can
// see how TypeScript can provide terser and more focused
// messages when working with interfaces