/*
Copy and sort input list from least to greatest.
Go through sorted array, considering two pairs at a time, 
  in order to find all the distinct pairs with smallest difference.
For each integer in the sorted list, starting with second integer:
  Calculate the difference of current integer with its left and right neighbors.
  Compare the differences of the left and right:
    If left difference is the smallest yet, 
      or, if left and right differences are equal and smallest yet,
        create `results` and set it to left pair. Then go to next integer in the list      
    If right difference is the smallest yet, 
      create `results` and set it to right pair. Then skip an integer in the list.
    If an additional pair is found, and it's a right-side pair, 
      add pair to `results` and skip an integer in the list.
*/