// define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function range(lower, upper) {
  return Array(upper - lower + 1)
    .fill()
    .map((_, idx) => lower + idx);
}

// define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function stringShout(str, num) {
  const exclamationMark = "!".repeat(num);
  return str.toUpperCase().concat(exclamationMark);
}

// change the exported value to be the name of the function you defined
module.exports = {
  a: range, // change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: stringShout, // change undefined to be the name of the function defined to return the string with exclamations (the second todo)
};
