/* 
  You're given a string of random alphanumerical characters with a length between 0 and 1000.

  Write a method to return the first character in the string that does not repeat itself later on.

  firstNonRepeat('asdfsdafdasfjdfsafnnunl') should return 'j'

  Constraints

      The given string can be empty
      The string will only contain lowercase/uppercase alphabets and numerals
      Expected time complexity : O(n)
      Expected space complexity : O(A) where A is the number of ASCII characters

*/

function firstNonRepeat(string) {
  // check if string is empty
  if (string.length === 0) return '';

  // create a map to store the characters and their appeareance count
  const charMap = new Map();

  // iterate the string
  for (let i = 0; i < string.length; i++) {
    // check if the char is already in the map
    if (charMap.has(string[i])) {
      // if it is, add +1 to its count
      charMap.set(string[i], charMap.get(string[i]) + 1);
    } else {
      // if not, add it and set it's index
      charMap.set(string[i], 1);
    }
  }

  // traverse the map and return the first element with count of 1
  for (const [key, value] of charMap.entries()) {
    if (value === 1) return key;
  }

  return undefined;
}

console.log(firstNonRepeat('asdfsdafdasfjdfsafnnunl'));
