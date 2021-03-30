function fizzBuzz(number) {
  let fizzBuzz = '';
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz += 'fizzbuzz';
    } else if (i % 3 === 0) {
      fizzBuzz += 'fizz';
    } else if (i % 5 === 0) {
      fizzBuzz += 'buzz';
    } else {
      fizzBuzz += i;
    }
  }

  return fizzBuzz;
}

console.log('ans:', fizzBuzz(15));
