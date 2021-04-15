/* 
  We're given an array of integers that looks like the following:

  [0, 1, 2, 3, 4, 5, 6, 7, 8]

  Let's imagine we're an assembly line and we decide to shift some workers around.

  Say we take our array, and rotate it at a random pivot so that the section after the pivot comes before. Let's put our pivot between 5 and 6:

  [6, 7, 8, 0, 1, 2, 3, 4, 5]

  See how it shifts?

  Can you find the smallest element in O(log n) time? Assume that there are no repeat numbers.

  Here are some other examples: given [4, 5, 1, 2, 3], we'd get 1.

  In the event that there's a missing number in the sequence like [6, 7, 8, 0, 1, 2, 3, 5] (where 4 isn't present), the output would still be 0.

  Constraints:

      Length of the array <= 100000
      The values in the array will be between -1000000000 and 1000000000
      Expected time complexity : O(log n)
      Expected space complexity : O(1)
*/

function findMinValueInRotatedArray(array) {
  // define, left, mid and right index
  let mid = Math.floor(array.length / 2);
  let left = 0;
  let right = array.length - 1;

  let found = false;
  let min;

  while (!found) {
    // check middle index, if it's previous number is larger, then it is the min
    if (array[mid] < array[mid - 1]) {
      min = array[mid];
      found = true;
    }
    // if its next number is smaller, then the index+1 is the min
    else if (array[mid + 1] < array[mid]) {
      min = array[mid + 1];
      found = true;
    } else {
      // if none of those conditions are met, then the min is elsewhere
      // if the middle element is smaller than the last element, then the min is in the left half
      if (array[mid] < array[right]) {
        right = mid - 1;
        mid = Math.floor((mid + left) / 2);
      } else {
        // else it is in the right half
        left = mid;
        mid = Math.floor((right + mid) / 2);
      }
    }
  }

  return min;
}

console.log(findMinValueInRotatedArray([4, 5, 6, 7, 8, 9, 0, 1, 2, 3]));
