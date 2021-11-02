// You need to figure out how many students passed a recent exam.
// You're given a set of n grades ranging 
// from 0 (worst score) to 100 (perfect). 
// A student must score at least 50 to pass.

// Generate at least one reasonable strategy. For each one, include the following:

// Summary
// Computational outline
// Pros/cons
// If there are multiple strategies, 
// make a recommendation that might help someone choose between them.

// Summary: Record number of grades greater than or equal to 50.

// Computational Outline:
// Create numberOfPassingStudents and set it to 0.
// For each student grade in grades:
//   If student grade >= 50:
//     Increase numberOfPassingStudents by 1.
// Return numberOfPassingStudents.

// Pro: You only need to track the number of grades of 50 or greater once with one variable, a counter. 











/*
summary v1: The recommended strategy.
Go through the set of grades (the studentGradeArray) and keep track 
of the number of students with grades of 50 or greater.
Return the results (the number of students with grades of 50 or greater).


Computational Outline:
Create studentsWithGrades50OrGreater and set it to 0.
For each student grade in studentGradeArray:
  If student grade >= 50:
    Increase studentsWithGrades50OrGreater by 1.
Return studentsWithGrades50OrGreater.

Pro: You only need to track the number of grades of 50 or greater once with one variable, a counter. 
No additional math or processing is required. After going through the array once 
you can return the counters count / value.




summary v2: (unnecessary steps included - not recommended)
Go through the set of grades (the studentGradeArray) and keep track 
of the number of students with grades below 50. 
Subtract the total number of grades in the set from the number of grades below 50 
to get the number of students who passed the recent exam.


Computational Outline:
Create studentsWithGradesBelow50 and set it to 0.
For each grade in studentGradeArray:
  If studentGrade < 50:
    Increase studentsWithGradesBelow50 by 1.
Create numberOfPassingStudents and set it to (studentGradeArray.length - studentsWithGradesBelow50).  
Return studentsWithGrades50OrGreater.

Con: This has unnecessary steps added. You need to track the number of grades below 50 with a counter, 
then you need to calculate between the total number of grades and studentsWithGradesBelow50 and store the
result in a new variable, numberOfPassingStudents.
Only after extra processing will you get the final result, numberOfPassingStudents. There is extra work being done in this approach. v1 gets the numberOfPassingStudents with less processing. 

recommendation: v1 - This approach is clear and straight forward. v2 is not as succinct 
and requires more work to get the same results as v1. 
It is easier to get the number of students who passed the recent exam with v1.

*/








// summary v1: The recommended strategy.
// Go through the set of grades and keep track 
// of the number of students with grades of 50 or greater.
// Return the results (the number of students with grades of 50 or greater).


// Computational Outline:
// Create studentsWithGrades50OrGreater and set it to 0.
// For each grade in studentGradeArray:
//   If studentGrade >= 50:
//     Increase studentsWithGrades50OrGreater by 1.
// Return studentsWithGrades50OrGreater.

// Pro: You only need to track the number of grades of 50 or greater once with a counter, 
// no additional math or processing is required. You can return the counters count / value.

// summary v2:
// Go through the set of grades and keep track 
// of the number of students with grades below 50. 
// Subtract the number of grades below 50 from the total number of grades in the set
// to get the number of students who passed the recent exam.


// Computational Outline:
// Create studentsWithGradesBelow50 and set it to 0.
// For each grade in studentGradeArray:
//   If studentGrade < 50:
//     Increase studentsWithGradesBelow50 by 1.
// Create numberOfPassingStudents and set it to (studentGradeArray.length - studentsWithGradesBelow50).  
// Return studentsWithGrades50OrGreater.

// Con: You  need to track the number of grades below 50 with a counter, 
// then you need to calculate between the total number of grades and studentsWithGradesBelow50 and set the
// result in a new variable, numberOfPassingStudents.
// Only after  extra processing will you get the final result, numberOfPassingStudents.

// recommendation: v1 - This approach is clear and straight forward. v2 is not as succinct.
// It is easier to get the number of students who passed the recent exam with v1.


function numberOfPassingStudents(studentGradeArray) {
  var studentsWithGradesBelow50 = 0;
  for (var i = 0; i < studentGradeArray.length; i++) {
    var studentGrade = studentGradeArray[i];
    if (studentGrade < 50) {
      studentsWithGradesBelow50++;
    }
  }
  var numberOfPassingStudents = studentGradeArray.length - studentsWithGradesBelow50;
  return numberOfPassingStudents;
}