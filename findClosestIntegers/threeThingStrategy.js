/*

strategy:

sort the integers from least to greatest
go through the list and look at the three adjacent integers at a time (left, middle, and right)
  determine the 'shortest distance' between the three integers

  if the distance between the left and the middle is less than or equal to the middle and right,
  set the left and middle integer difference as the 'shortest distance' and set 'closest integers' to the pair 
  save a reference to the 'last integer included', and set it to to the middle integer
  then move your position to the right by two integers

  if the distance between the left and the middle is greater than the middle and right,
  set the middle and right integer difference as the 'shortest distance' and set 'closest integers' to the pair 
  save a reference to the 'last integer included', and set it to to the right integer
  then move your position to the right by two integers

  on future iterations,
  if a (left, middle) pair contains 'last integer included' do not consider that pair (to avoid duplicates) 
  consider the (middle, right) pair if its difference is less than 'the shortest distance' 

  return the 'closest integers' list 


simplified strategy:

  sort the integers from least to greatest
  go through the list and look at three adjacent integers at a time (left, middle, and right)
    create a list for ‘closest integers’ and set it to the the pair with the smallest distance
    if both pairs have the same distance, choose the (left, middle) pair,
      on future iterations only add pairs of integers  
      if the distance between candidate integers is the same as the current shortest distance and 
      if the the distance between integers is shorter and  the integer has not already been used, 
      then reset the ‘closest integers’ list to the new pair and also set shortest distance to the current shortest distance
  return the list of ‘closest integers’ 

*/

function closestIntegers(integerArray) {
  var sortedArray = integerArray.slice();
  // sort the integers from least to greatest
  sortedArray.sort(function(a,b) { 
    return a - b;
  });
  var shortestDistance = Infinity;
  
  for (var i = 0; i < sortedArray.length - 1; i++) {
    var leftInteger = sortedArray[i];
    var middleInteger = sortedArray[i + 1];
    var rightInteger = sortedArray[i + 2];
    var leftMiddleDistance = middleInteger - leftInteger;
    var middleRightDistance = rightInteger - middleInteger; 
    
    // edge case check if rightInteger === undefined
    if (rightInteger === undefined) {
      if (leftMiddleDistance === shortestDistance 
        && lastIntegerIncluded !== leftInteger) {
        closestIntegers.push([leftInteger, middleInteger]);
      } else if (leftMiddleDistance < shortestDistance) {
        closestIntegers = [[leftInteger, middleInteger]];
      }
    }
    // if the distance between the left and the middle is less than or equal to the middle and right,
    if (leftMiddleDistance <= middleRightDistance) {
      if (lastIntegerIncluded === undefined) {
        // set the left and middle integer difference as the 'shortest distance' and set 'closest integers' to the pair
        shortestDistance = leftMiddleDistance;
        var closestIntegers = [[leftInteger,middleInteger]];
        // save a reference to the 'last integer included', and set it to to the middle integer
        var lastIntegerIncluded = middleInteger;
      } else {
        if (lastIntegerIncluded !== leftInteger) {
          shortestDistance = leftMiddleDistance;
          closestIntegers.push([leftInteger, middleInteger]);
          i++;
        }
      } // if the distance between the left and the middle is greater than the middle and right,
    } else if (leftMiddleDistance > middleRightDistance) {
      if (lastIntegerIncluded === undefined) {
        // set the middle and right integer difference as the 'shortest distance' and set 'closest integers' to the pair
        shortestDistance = middleRightDistance;
        var closestIntegers = [[middleInteger,rightInteger]];
        // save a reference to the 'last integer included', and set it to to the right integer
        var lastIntegerIncluded = rightInteger;
        // then move to the right
        i++;
      } else if (lastIntegerIncluded !== middleInteger) {
        shortestDistance = middleRightDistance;
        closestIntegers.push([middleInteger,rightInteger]);
        // save a reference to the 'last integer included', and set it to to the right integer
        var lastIntegerIncluded = rightInteger;
        // then move to the right
        i++;
      }
    }
  }
  return closestIntegers;
}


/*

trace:

  [4, 6, 7, 8, 9] ==> [[6,7], [8,9]]

   *--*--*
  [4, 6, 7, 8, 9]

  left = 4
  middle = 6
  right = 7

  left and middle difference = 2
  right and middle difference = 1

  set shortestDistance = 1
  set 'closest integers' = [middle, right]
  'closest integers' = [[6,7]]
  'last integer included' = 7 (right integer) 

  --- next iteration ---
         *--*--*
  [4, 6, 7, 8, 9]

  left = 7
  middle = 8
  right = 9

  left and middle difference = 1
  right and middle difference = 1

  shortestDistance = 1

  if a pair contains 'last integer included' do not consider that pair (avoid duplicates)
  the pair [7,8] (left, middle) should not be considered becasue the left integer 7 is the 'last integer included'

  consider the (middle, right) pair if its difference is less than 'the shortest distance' 
  [8,9] (middle, right) --- right and middle difference = 1

  since the difference of [8,9] is equal to  'shortest distance' which is the difference of [6,7] 
  we can add [8,9] to our closest integers list

  'closest integers' = [[6,7], [8,9]]

  [4, 6, 7, 8, 9] ==> [[6,7], [8,9]]

  end

 */


/*

example inputs and results from console:

closestIntegers([0,1,3,5,6])
0: (2) [0, 1]
1: (2) [5, 6]


closestIntegers([0,1,2,3,4,5])
0: (2) [0, 1]
1: (2) [2, 3]
2: (2) [4, 5]


closestIntegers([4,6,7,8,9])
0: (2) [6, 7]
1: (2) [8, 9]


closestIntegers([4,5,7,8,9])
0: (2) [4, 5]
1: (2) [7, 8]

*/