/* You are given a string that contains alphabetical characters (a - z, A - Z) and some other characters ($, !, etc.). For example, one input may be:

'sea!$hells3'

Can you reverse only the alphabetical ones?

reverseOnlyAlphabetical('sea!$hells3');
 ->'sll!$ehaes3' 
*/

// This solution uses two extra arrays and iterates through the array twice
function reverseOnlyAlphabetical(string) {
  // create alphabet array
  let lettersArray = [];
  // create solution array
  let solutionArray = [];

  // iterate through string
  for (let i = 0; i < string.length; i++) {
    // push letters to alphabet array, omit numbers, symbols, etc
    let charCode = string.charAt(i);
    if (isLetter(charCode)) {
      lettersArray.push(string.charAt(i));
    }
  }

  // iterate string again
  for (let i = 0; i < string.length; i++) {
    // if letter, push last element of alphabet array into solution array
    if (isLetter(string.charAt(i))) {
      solutionArray.push(lettersArray.pop());
    } else {
      // else, push symbol into solution array
      solutionArray.push(string.charAt(i));
    }
  }

  // join solution array and return

  return solutionArray.join('');
}

function isLetter(char) {
  let charCode = char.charCodeAt(0);
  return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}

const testString = 'ABC123!DEF456';

console.log(reverseOnlyAlphabetical(testString));

// this solution iterates the array only once
function reverseOnlyAlphabetical2(string) {
  const stringArray = string.split('');
  // iterate array from two sides
  let lowIndex = 0;
  let highIndex = string.length - 1;

  while (lowIndex < highIndex) {
    if (isLetter(stringArray[lowIndex]) && isLetter(stringArray[highIndex])) {
      // if the two pointed elements are letters, swap them.
      let temp = stringArray[lowIndex];
      stringArray[lowIndex] = stringArray[highIndex];
      stringArray[highIndex] = temp;

      // increase low and decrease high index
      lowIndex++;
      highIndex--;
    } else {
      // else, increase/decrease the indexes
      if (!isLetter(stringArray[lowIndex])) lowIndex++;
      if (!isLetter(stringArray[highIndex])) highIndex--;
    }
  }

  return stringArray.join('');
}

console.log(reverseOnlyAlphabetical2(testString));
