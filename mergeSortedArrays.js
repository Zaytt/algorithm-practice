// this function does not modify the original arrays
function mergeSortedArrays1(array1, array2) {
  // first we create an empty array where the sorted elements will be
  const sortedArray = [];

  // then we create two indexes to keep track of each array
  let index1 = 0;
  let index2 = 0;

  // Traverse both the arrays as long as one of them still has items to traverse
  while (index1 < array1.length && index2 < array2.length) {
    // compare the array values and if one of them is lower, add it to the sortedArray
    // increase the index for that array
    if (array1[index1] < array2[index2]) {
      sortedArray.push(array1[index1]);
      index1++;
    } else {
      sortedArray.push(array2[index2]);
      index2++;
    }
  }

  // Eventually one array will be fully traversed,
  // in that case add the remaining elements from the other array
  if (index1 >= array1.length) {
    sortedArray.push(...array2.slice(index2));
  }
  if (index2 >= array2.length) {
    sortedArray.push(...array1.slice(index1));
  }

  return sortedArray;
}

// This function modifies the original arrays
function mergeSortedArrays2(a, b) {
  // first create an empty array
  const sortedArray = [];

  // then do a while loop as long as a or b have any length
  // we will be using the shift method. this method removes the
  // first element of an array and returns it. therefor we only need to check for the elements
  // at [0] as they will always be different once we shift the array
  while (a.length && b.length) {
    if (a[0] < b[0]) {
      sortedArray.push(a.shift());
    } else {
      sortedArray.push(b.shift());
    }
  }

  // eventually one array will have no more elements. In that case we will push the remaining
  // elements from the other array into the combined array
  if (a.length) {
    sortedArray.push(...a);
  } else {
    sortedArray.push(...b);
  }

  return sortedArray;
}

const array1 = [1, 3, 5, 7, 9, 11, 13];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(mergeSortedArrays1(array1, array2));
console.log(mergeSortedArrays2(array1, array2));
