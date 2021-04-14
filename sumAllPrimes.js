/* 
  You're given a number n. Can you write a method sumOfAllPrimes that finds all prime numbers smaller than or equal to n, and returns a sum of them?

  For example, we're given the number 15. All prime numbers smaller than 15 are:

  2, 3, 5, 7, 11, 13

  They sum up to 41, so sumOfAllPrimes(15) would return 41.

  Constraints:
    n will always be a non zero positive integer <= 100000
    Expected time complexity : O(nlogn)
    Expected space complexity : O(n)

*/

function sumAllPrimes(number) {
  let sum = 0;
  while (number > 1) {
    if (isPrime(number)) sum += number;

    number--;
  }

  return sum;
}

function isPrime(number) {
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    return false;
  }
  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        return false;
      }
    }

    return true;
  }
  return false;
}

console.log(sumAllPrimes(15));
