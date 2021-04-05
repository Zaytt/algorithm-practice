/* 
  Given an integer num, write a method to determine if it is a power of 3.
  Expected space complexity : O(logn)
  Expected time complexity : O(1)
*/

function isPowerOfThree(num) {
  // declare a divResult variable
  let divResult = num;
  // do a loop, dividing divResult by 3 each pass
  do {
    divResult /= 3;
    // if divResult is one, return true
    if (divResult === 1) return true;
    // if divResult is not a multiple of 3, then return false
    if (divResult % 3 !== 0) return false;
    // if divResult is multiple of 3, keep looping
  } while (divResult % 3 === 0);

  return false;
}

console.log(isPowerOfThree(27));
