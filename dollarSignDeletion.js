/*
  You're given an array of strings containing alphabetical characters and certain $ characters. A $ represents a DELETE action whereby the character before it is deleted.

  Each of these strings will be run through a method to operate on the $ DELETE action. We want to find out if the final string is the same for all of them. Let's take an example:

    const input = ["f$st", "st"]
    isDollarDeleteEqual(input);
    true
    true because both become "st"

  The input arrays can be of any size
  Every string has at least a single character
  The string will consist of dollar signs and lowercase alphabets
  Expected overall time complexity : O(n)
  Expected space complexity : O(n)
*/

function isDollarDeleteEqual(input) {
  // create an auxiliary array
  const array = [];
  const string = input[0];

  // iterate the array
  for (let i = 0; i < string.length; i++) {
    // if the current character and the next one are not '$', push it to the array
    if (string[i + 1] !== '$' && string[i] !== '$') {
      array.push(string[i]);
    }
  }

  // compare joined array to input
  return array.join('') === input[1];
}

console.log(isDollarDeleteEqual(['r$$a$tba$', 'tb']));
