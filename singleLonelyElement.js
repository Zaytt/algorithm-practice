/* 
  In a given array of numbers, one element will show up once and the others will each show up twice. Can you find the number that only appears once in O(n) linear time? Bonus points if you can do it in O(1) space as well.
*/

function findLonelyElement(array) {
  // create map to count the elements
  const countMap = new Map();
  // traverse array
  array.forEach((element) => {
    // add element to map or add to its count if already in map
    if (countMap.has(element)) {
      countMap.set(element, countMap.get(element) + 1);
    } else {
      countMap.set(element, 1);
    }
  });

  // find the element with only one entry
  let lonelyElement = undefined;

  countMap.forEach((value, key) => {
    if (value === 1) lonelyElement = key;
  });

  // return that element
  return lonelyElement;
}

const array = [1, 5, 2, 2, 3, 3, 4, 4, 5];

console.log(findLonelyElement(array));
