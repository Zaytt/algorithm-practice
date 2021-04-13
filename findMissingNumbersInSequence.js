/* 
  We're given an array of continuous numbers that should increment sequentially by 1, which just means that we expect a sequence like:

  [1, 2, 3, 4, 5, 6, 7]

  However, we notice that there are some missing numbers in the sequence.

  [1, 2, 4, 5, 7]

  Can you write a method missingNumbers that takes an array of continuous numbers and returns the missing integers?

  missingNumbers([1, 2, 4, 7]);
  [3, 6]

  Constraints

    Length of the array <= 100000
    The array will always contain non negative integers (including 0)
    Expected time complexity : O(n)
    Expected space complexity : O(1)
*/

function findMissingNumbers(numbers) {
  // create an array to store the missing numbers
  const missingNumbers = [];
  // iterate the array
  for (let i = 1; i < numbers.length; i++) {
    // if difference between array[i] and array[i-1] > 1, call getInBetweenNumbers() and add the result to the missing numbers array
    if (numbers[i] - numbers[i - 1] > 1) {
      missingNumbers.push(...getInBetweenNumbers(numbers[i - 1], numbers[i]));
    }
  }

  // return the missing numbers array
  return missingNumbers;
}

function getInBetweenNumbers(lowerBound, upperBound) {
  const numbersInBetween = [];
  let difference = upperBound - lowerBound;
  while (difference - 1) {
    numbersInBetween.push(++lowerBound);
    difference--;
  }
  return numbersInBetween;
}

console.log(findMissingNumbers([1, 2, 4, 5, 7]));
