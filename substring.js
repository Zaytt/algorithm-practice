/* 
  How would you write a function to detect a substring in a string?

  If the substring can be found in the string, return the index at which it starts. Otherwise, return -1.

  function detectSubstring(str, subStr) {
    return -1;
  }

  Important-- do not use the native String class's built-in substring or substr method. This exercise is to understand the underlying implementation of that method.
*/

function detectSubstring(str, subStr) {
  let index = -1;
  // create an index for the subString
  let current = 0;
  // traverse the string
  for (let i = 0; i < str.length; i++) {
    // check if the current letter is the same letter as the one pointed by the subString index
    if (str.charAt(i) === subStr.charAt(current)) {
      // if so, increase current and set index
      current++;
      // if the index has some value, keep it, otherwise assign it the current value of i
      index = index === -1 ? i : index;
      // if current has already checked the whole subStr, break out of the loop
      if (current >= subStr.length) break;
    } else {
      // if not, reset both current and index
      current = 0;
      index = -1;
    }
  }

  return index;
}

console.log(detectSubstring('Hola Ivan', 'G'));
