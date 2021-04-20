/* 
  If we are given an array of integers, can you return an output array such that each corresponding input's elements returns the product of the input array except itself?

  This can be hard to explain, so let's take an array: [1, 2, 4, 16]

  What we want to return is [128, 64, 32, 8]. This is because 2 x 4 x 16 = 128, 1 x 4 x 16 = 64, 1 x 2 x 16 = 32, and 1 x 2 x 4 = 8. At each index, we ignore the number at that index and multiply the rest.

  In other words, output[i] is equal to the product of all the elements in the array other than input[i].

  Can you solve this in O(n) time without division?

  Constraints:

      Length of the array will be <= 100000
      The array can be empty
      The array will only contain non zero positive values
      The answer for each index will fit in the integer range
      Expected time complexity : O(n)
      Expected space complexity : O(n)
*/

//  [1, 2, 3, 4]
function productExceptSelf(array) {
  // create left and right multiplication arrays
  const left = new Array(array.length);
  const right = new Array(array.length);
  const productArray = new Array(array.length);

  // iterate the array and populate the left array. Each slot in the array represents the product of all the previous elements multiplied by the current element
  for (let i = 0; i < array.length; i++) {
    if (i === 0) left[i] = 1 * array[i];
    else {
      left[i] = array[i] * left[i - 1];
    }
  }

  // do the same for the right array. Each slot represents the product of all the following elements multiplied by the current element
  for (let j = array.length - 1; j >= 0; j--) {
    if (j === array.length - 1) right[j] = 1 * array[j];
    else {
      right[j] = array[j] * right[j + 1];
    }
  }

  // iterate the array again and now multiply the corresponding left and right elements
  for (let k = 0; k < productArray.length; k++) {
    if (k === 0) productArray[k] = right[k + 1];
    else if (k === array.length - 1) productArray[k] = left[k - 1];
    else productArray[k] = left[k - 1] * right[k + 1];
  }

  return productArray;
}

console.log(productExceptSelf([1, 2, 3, 4]));
