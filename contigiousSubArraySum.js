/*
  Given an array of numbers, return true if there is a subarray that sums up to a certain number n.

  A subarray is a contiguous subset of the array. For example the subarray of [1,2,3,4,5] is [1,2,3] or [3,4,5] or [2,3,4] etc.

  const arr = [1, 2, 3], sum = 5
  subarraySum(arr, sum)
  true
  [2, 3] sum up to 5

  const arr = [11, 21, 4], sum = 9
  subarraySum(arr, sum)
  false
  no subarrays sums up to 9

  In the above examples, [2, 3] sum up to 5 so we return true. On the other hand, no subarray in [11, 21, 4] can sum up to 9.

  Constraints:
    Length of the array <= 100000
    The values in the array will be between 0 and 1000000000
    The target sum n will be between 0 and 1000000000
    The array can be empty
    Expected time complexity : O(n)
    Expected space complexity : O(n)
*/

function contigiousSubArraySum(array, targetSum) {
  // create a sum variable, initialized at 0
  let subArray = [];
  let index = 0;
  // iterate the array
  while (index <= array.length) {
    // Calculate the subarray sum
    let sum = sumArray(subArray);

    // if it is equal to the target sum, return true
    if (sum === targetSum) return true;

    // if the sum value is > than the required sum, shift the array
    if (sum > targetSum) subArray.shift();
    else {
      // add the current value to the sum
      subArray.push(array[index]);
      // increase index
      index++;
    }
  }
  // else return false
  return false;
}

function sumArray(array) {
  return array.reduce((sum, current) => sum + current, 0);
}

console.log(contigiousSubArraySum([1, 1, 3, 5, 8], 11));
