/* 
  Write a method that moves all zeros in an array to its end.
  Should be O(n)
  Example: [1, 0, 2, 0, 4, 0] returns [1, 2, 4, 0, 0, 0] 
*/

function zeroesToTheEnd(array) {
  // filter the non zero elements
  const newArray = array.filter((element) => element !== 0);
  console.log(newArray);

  while (newArray.length < array.length) newArray.push(0);

  return newArray;
}

console.log(zeroesToTheEnd([1, 0, 2, 0, 3, 0]));

function zeroesToTheEnd2(array) {
  let insertIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[insertIndex++] = array[i];
    }
  }

  while (insertIndex < array.length) {
    array[insertIndex++] = 0;
  }

  return array;
}

console.log(zeroesToTheEnd2([1, 0, 2, 0, 3, 0]));
