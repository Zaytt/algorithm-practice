/*
We're provided a positive integer num. Can you write a method to repeatedly add all of its digits until the result has only one digit?

Here's an example: if the input was 49, we'd go through the following steps:

start with 49
4 + 9 = 13

move onto 13
1 + 3 = 4

We would then return 4.
*/

function sumDigits(number) {
  let answer = number;
  // iterate array and sum it
  do {
    // convert number to string
    let numberString = answer.toString();
    // convert string to array
    let numberArray = numberString.split('');

    answer = numberArray.reduce((sum, current) => sum + Number(current), 0);
    // repeat until number is < 10
  } while (answer > 9);

  return answer;
}

console.log(sumDigits(66));
