/*
  This is a classic and very common interview problem. Given an array of integers, return the indices of the two numbers in it that add up to a specific goal number.

  So let's say our 'goal' number was 10. Our numbers to sum to it would be 3 and 7, and we would return an array of indices 1 and 3 respectively.

  let arr = [1, 3, 6, 7, 9];
  let goal = 10;
  twoSum(arr, goal);
  [1, 3]

  You may assume that each input would have exactly one solution. Additionally, you may not use the same element twice towards the sum. This means if given [1, 3] and a goal of 2, you cannot use 1 twice and return its index twice as [0, 0].

  Here's the function signature to fill in:

  function twoSum(arr, goal) {
    return arr;
  }

  Constraints:
    Length of the array <= 100000
    The values of the array will be between -1000000000 and 1000000000
    The array can be empty
    The target sum will be between -1000000000 and 1000000000
    Expected time complexity : O(n)
    Expected space complexity : O(n)
*/

function twoSum(array, targetSum) {
  // create a map that will contain the possible complements in the array
  const complementMap = new Map();
  // iterate the array
  for (let i = 0; i < array.length; i++) {
    // check if the complement of the current number is in the map
    const complement = targetSum - array[i];
    if (complementMap.has(complement)) {
      // if it is, return the indexes
      return [complementMap.get(complement), i];
    } else {
      // else add the current value to the map
      complementMap.set(array[i], i);
    }
  }

  return [];
}

console.log(twoSum([1, 3, 6, 7, 9, 4, 6], 11));
