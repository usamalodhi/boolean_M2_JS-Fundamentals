// TODO: Write your function in this file

"use strict";

// The function should return an array containing all the numbers from lower to upper, including lower and upper themselves
// - with the following exceptions:

function fizzBuzz(lower, upper) {
  //array of lower to upper (inclusive)
  const array = Array(upper - lower + 1)
    .fill() //static elements
    .map((_, i) => lower + i); //elements in array lower -> upper
  //FizzBuzz logic
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0 && array[i] !== 0)
      array[i] = "Fizz";
    if (array[i] % 5 === 0 && array[i] % 3 !== 0 && array[i] !== 0)
      array[i] = "Buzz";
    if (array[i] % 15 === 0 && array[i] > 0) array[i] = "FizzBuzz";
  }
  return array;
}

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz;
