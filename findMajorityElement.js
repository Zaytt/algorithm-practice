/*
  Could you find the majority element? A majority is defined as "the greater part, or more than half, of the total. It is a subset of a set consisting of more than half of the set's elements."
*/

function findMayorityElement(array) {
  // Create map to keep track of the element counts
  const map = new Map();
  // Traverse array
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // Check if element is already in map
    // sum one to its count if it is
    if (map.has(element)) map.set(element, map.get(element) + 1);
    // add it if not
    else map.set(element, 1);
    // Check if its count is over half of the array length
    if (map.get(element) > Math.floor(array.length / 2)) return element;
  }

  // return undefined if no element has the majority.
  return undefined;
}

const array = [1, 4, 2, 4, 4, 3, 4, 1, 1, 1, 1, 1, 1];

console.log(findMayorityElement(array));
