/*
  Assume we're given an unsorted array of numbers such as this:

  [ 2, 5, 1, 4, 9, 6, 3, 7 ]

  We are told that when this array is sorted, there is a series of n consecutive numbers. You are given a lower bound and an upper bound for this sequence.

  There is one consecutive number missing, and we need to find it.

  As an example, look at the below example. We're told that the lower bound is 1 and the upper bound is 9. The number that's missing in the unsorted series bounded by these two number is 8.

  const arr = [ 2, 5, 1, 4, 9, 6, 3, 7 ];
  const lowerBound = 1;
  const upperBound = 9;

  missingInUnsorted(arr, lowerBound, upperBound);
  8

  Here's the challenge-- can you find the missing number in O(n) time? Can you do it without sorting?
  Constraints

      Length of the array <= 10000
      The upper bound <= 10000
      The lower bound >= -10000
      Expected time complexity : O(n)
      Expected space complexity : O(1)
*/

function findMissingNumber(array, lowerBound, upperBound) {
  // calculate Triangular number for lowerBound-1 and for upperBound
  const triangularLower = calculateTriangularNumber(lowerBound - 1);
  const triangularUpper = calculateTriangularNumber(upperBound);
  // sum the array numbers between the bounds
  let sum = array.reduce((sum, current) => {
    if (current >= lowerBound && current <= upperBound) return sum + current;
    else return sum + 0;
  }, 0);
  // return difference between (triangularUpper - triangularLower) and sum
  return triangularUpper - triangularLower - sum;
}

function calculateTriangularNumber(n) {
  return (n * (n + 1)) / 2;
}

console.log(findMissingNumber([2, 5, 1, 4, 9, 6, 3, 7], 3, 9));
