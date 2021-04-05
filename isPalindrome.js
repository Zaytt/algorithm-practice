/*Given a string str, can you write a method that will return True if is a palindrome and False if it is not?*/

function isPalindrome(string) {
  // turn string to lowercase
  const lowercaseString = string.toLowerCase();
  // filter out special characters
  const filteredArray = lowercaseString.split('').filter((element) => /[a-z]/.test(element));
  // traverse array
  // declare two indexes, one at the beginning of string, the other at the end
  for (let i = 0, j = filteredArray.length - 1; i < j; i++, j--) {
    // compare the two strings
    if (filteredArray[i] !== filteredArray[j]) {
      // if they are equal, continue, if they are not, return false
      return false;
    }
    // increase/decrease the indexes
  }

  return true;
}

console.log(isPalindrome('Anita lava la tina'));
