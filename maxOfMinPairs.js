/* 
  We have an array of length 2 * n (even length) that consists of random integers.

  [1, 3, 2, 6, 5, 4]

  We are asked to create pairs out of these integers, like such:

  [[1, 3], [2, 6], [5, 4]]

  How can we divide up the pairs such that the sum of smaller integers in each pair is maximized? 

  Here's an example input: [3, 4, 2, 5]. The return value is 6 because the maximum sum of pairs is 6 = min(2, 3) + min(4, 5).

  Note that negative numbers may also be included.
  Constraints

      Length of the array <= 100000
      The values will always contain integer values between -1000 and 1000
      The final answer will always fit in the integer value
      Expected time complexity : O(nlogn)
      Expected space complexity : O(1)
*/

function maxOfMinPairs(numbers) {
  // create sum variable
  let sum = 0;
  // create copy of numbers array
  const array = [...numbers];
  // order the array
  array.sort((a, b) => a - b);
  // iterate numbers
  for (let i = 0; i < array.length; i += 2) {
    // sum odd numbers
    sum += array[i];
  }
  // return sum
  return sum;
}

const testArray = [3, 4, 2, 5, 1, 6];

console.log(maxOfMinPairs(testArray));
