/*

1. populate the [integerLookupTable] 
2. calculate the neededInteger
3. search for neededInteger in [integerLookupTable] 
4. if pairs are found remove them from further consideration 
5. return pairs


findPairTwist([3,7,5,6,4],10);

pairArray = [];
[integerLookupTable] = {};

1. loop over integerArray
 * 
[3,7,5,6,4]

for each integer in the integerArray, store the current integer as a key in the [integerLookupTable] object


the first item in the integerArray is the number 3.
save 3 as a key in [integerLookupTable], set its value to true.
[integerLookupTable][3] = true;
continue populating the [integerLookupTable] with integers as keys 
[integerLookupTable] = { 3: true, 4: true, 5: true, 6: true,  7: true }


2. find the difference between targetSum and currentInteger and targetSum
[3] ==> 3 currentInteger
10 ==> targetSum 
10 - 3 = 7

 * 
[3,7,5,6,4] currentInteger = 3, neededInteger = 7 

3. is neededInteger in  [integerLookupTable] {3: true, 4: true, 5: true, 6: true,  7: true} ?
yes, {7: true} exists

put the pair currentInteger = 3, neededInteger = 7  in the pairArray
pairArray = [3,7];

we will continue searching for pairs that add up to targetSum
we want to avoid duplicate pairs existing in the pairArray

4. remove currentInteger ==> 3 from further consideration by removing 3 from [integerLookupTable]

{3: true, 4: true, 5: true, 6: true,  7: true} ==> {4: true, 5: true, 6: true,  7: true}

{4: true, 5: true, 6: true,  7: true}

continue looping through integerArray
   * 
[3,7,5,6,4]

*** new currentInteger *** 
  currentInteger = 7

  2. find the difference between targetSum and currentInteger and targetSum
 
     * 
  [3,7,5,6,4]
  [7] ==> currentInteger
  10 ==> targetSUm
  10 - 7 = 3

     * 
  [3,7,5,6,4] currentInteger = 7, neededInteger = 3

  3. is neededInteger 3 in  integerLookupTable {4: true, 5: true, 6: true,  7: true} ?
  no, {3: true} does not exist in {4: true, 5: true, 6: true,  7: true} (integerLookupTable)

  4. continue looping through integerArray
       * 
  [3,7,5,6,4]

  ...
  the pair [7,3] will not be added to the pairArray
  becuase we removed 3 from integerLookupTable
  only the pair [3,7] will be stored in pairArray

  [7,3] will not be considered an eligible pair 
  because {3: true} has been removed/ deleted from the integerLookupTable
  (neededInteger in integerStorage) will return false 
  the program will continue looping through integerArray
  and  currentInteger will be updated to the next value, 5

       * 
  [3,7,5,6,4]

  so our function found the pair [3,7] and removed [7,3] from further consideration 
  by deleting the currentInteger key from the integerLookupTable object.


*/