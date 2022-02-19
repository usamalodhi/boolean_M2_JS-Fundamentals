# FizzBuzz

## Setup

1. Fork this repository to your GitHub account
2. Clone your forked repository to your machine
3. Change directory into the project.
4. Install the project dependencies

```sh
$ npm install
```

## Requirements

Inside the `src/fizzbuzz.js` file write a function that accepts 2 numbers, `lower` and `upper`. 

The function should return an `array` containing all the numbers from `lower` to `upper`, including `lower` and `upper` themselves - with the following exceptions:

* Where a number is a multiple of three (3, 6, 9, etc.) 
the array should contain the string `Fizz` instead of the number. 
* Where a number is a multiple of five (5, 10, etc.) 
the array should contain `Buzz` instead of of the number. 
* For numbers which are multiples of both three and five (15, 30, etc.) the array should contain the string `FizzBuzz` instead of the number.

## Testing
A test has already been created for your function inside
`spec/fizzbuzz.spec.js`. You should not need to modify this file. You can run the tests using npx:

```sh
$ npx jasmine spec/fizzbuzz.spec.js
```

You can focus on passing one test at a time by implementing your function step by step. When all the tests pass, you know your function is complete. You can look at the test cases in the `spec/fizzbuzz.spec.js` file, but you should not change any of the code.