/* Can you write a function that takes two arrays as inputs and returns to us their intersection? We can call the method intersection. Let's return the intersection of the two inputs in the form of an array. As a reminder, the definition of an intersection of two sets A and B is the set containing all elements of A that also belong to B (or equivalently, all elements of B that also belong to A). 

Example: 
const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

intersection(nums1, nums2);
-> [9, 4]
*/

function intersection(array1, array2) {
  const set = new Set();
  const intersectionSet = new Set();

  array1.forEach((element) => set.add(element));
  array2.forEach((element) => {
    if (set.has(element)) intersectionSet.add(element);
  });

  return [...intersectionSet];
}

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersection(nums1, nums2));

function intersection2(array1, array2) {
  const intersectionSet = new Set();

  array1.forEach((element) => {
    if (array2.includes(element)) intersectionSet.add(element);
  });

  return [...intersectionSet];
}

console.log(intersection2(nums1, nums2));
