/*

Input: Array of distinct integers

[1, 4, 2, 7, 9] => [[7, 9]]
[2, 8, 1, 4, 6 ] => [[2, 8], [4 ,6]]

return adjacent pair with the greatest sum


What is the problem statement?
Return the pair adjacent integers in the input array
that generate the greatest sum.

what is the essence of the problem?  
Add 2 integers. Compare pair sums, return largest pair sum.
(Add adjacents integers and compare pair sums)





**

Carl's summary: keep track as you go in one pass

My Summary:
Sum adjacent pairs of integers and record results.
Return the greatest sum recorded. 
 *or*
(Add adjacents integers, compare pair sums, return greatestPair)

Computational Outline:
greatestPair = [[]];
greatestPairSum = -Infinity;

for each adjacent integer pair:
  calculate currentPairSum (currentInt + nextInt)
  if currentPairSum is greatestPairSum
    add [currentInt, nextInt] to greatestPair
  otherwise currentPairSum > greatestPairSum
    greatestPair = [currentInt, nextInt]
    greatestPairSum = currentPairSum;
return greatestPair
*/





function greatestAdjacentPair(integerArray) {
  let greatestPair = [];
  let greatestPairSum = -Infinity;
  
  for (let i = 0; i < integerArray.length - 1; i++) {
    // calculate currentPairSum
    let currentInteger = integerArray[i];
    let nextInteger = integerArray[i + 1];
    let currentPairSum = currentInteger + nextInteger;
    // compare currentPairSum and greatestPairSum
    if (currentPairSum === greatestPairSum) {
      greatestPair.push([currentInteger, nextInteger]);
    } else if (currentPairSum > greatestPairSum) {
      greatestPair = [[currentInteger, nextInteger]];
      greatestPairSum = currentPairSum;
    }
  }
  return greatestPair;
}