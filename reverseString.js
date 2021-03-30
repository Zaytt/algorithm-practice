const string = 'Ivan is an awesome programmer!';

function reverseString(string) {
  const reversedArray = Array(string.length);

  for (let i = 0, j = string.length - 1; i < string.length; i++, j--) {
    reversedArray[j] = string[i];
  }

  return reversedArray.join('');
}

console.log(reverseString(string));
