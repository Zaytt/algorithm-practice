/* 
  Given an array, return another array with just the ordered unique elements from the given array. In other words, you're removing any duplicates.

  Note: Order needs to be preserved, so no sorting should be done. And the order should be maintained with the first occurrence of the element in the given array.

  let arr = [3, 5, 6, 9, 9, 4, 3, 12]
  uniques(arr);
  Correct: [3, 5, 6, 9, 4, 12]
  But this is incorrect: [5, 6, 9, 4, 3, 12]

  arr = [13, 5, 3, 5, 8, 13, 14, 5, 9]
  uniques(arr);
  Correct: [13, 5, 3, 8, 14, 9]
  Incorrect: [3, 5, 8, 13, 14, 9]

  Constraints

      Length of the array <= 100000
      The values in the array between -1000000000 and 1000000000
      Expected time complexity: O(n)
      Expected space complexity: O(n)
*/

function removeDuplicatesFromArray(array) {
  // Use a set
  const set = new Set();
  // iterate the array
  array.forEach((element) => {
    // add each element to the set
    // the nature is that only one of each element can be held in the set
    // therefore, any subsequent add to the set of the same element will be noop
    set.add(element);
    
  });
  // return the set
  return Array.from(set.values());
}

console.log(removeDuplicatesFromArray([13, 5, 3, 5, 8, 13, 14, 5, 9]));
