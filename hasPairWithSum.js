// build a function that returns whether any summed pair of numbers contained in a given array are equal to a provided number

function hasPairWithSum(array, sum) {
  // Create a map to store the complements to the sum of a given number
  const complementMap = new Map();

  // Traverse the array
  for (let index = 0; index < array.length; index++) {
    // Check if the complement for the current value is already on the map
    if (complementMap.has(sum - array[index])) {
      // if it is, return true
      return true;
    } else {
      // if not, add the current value to the map
      complementMap.set(array[index], 1);
    }
  }

  // if no complement was found, return false
  return false;
}

const testArray = [1, 3, 5, 6, 2, 8];

console.log(hasPairWithSum(testArray, 10));
