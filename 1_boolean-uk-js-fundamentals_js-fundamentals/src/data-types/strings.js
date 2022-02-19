// do not edit these lines
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const firstName = "Jane";
const secondName = "Smith";

// TODO: Update the code using Javascript string operations and the variables above so that the tests pass.

// Set this variable to firstName and secondName concatenated
const fullName = firstName + " " + secondName;

// Set this variable to the 10th character of the alphabet variable
const tenthCharacterOfAlphabet = alphabet.charAt(9);

// Set this variable by calling a method on the alphabet variable to transform it to lower case
const lowerCaseAlphabet = alphabet.toLowerCase();

// Set this variable by using a property on the alphabet variable to get it's length
const numberOfLettersInAlphabet = alphabet.length;

// do not edit the exported object.
module.exports = {
  a: fullName,
  b: tenthCharacterOfAlphabet,
  c: lowerCaseAlphabet,
  d: numberOfLettersInAlphabet,
};
