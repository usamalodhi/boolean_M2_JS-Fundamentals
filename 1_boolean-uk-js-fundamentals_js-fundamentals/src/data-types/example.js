// do not edit these lines
const hello = 'hello'
const vowels = 'AEIOU'
const animal = 'dog'

const numOne = 20
const numTwo = 10

// TODO: Update the code below using string operations on the variables
// above so that the tests pass.
const upperCaseHello = hello.toUpperCase()
const secondCharacterOfDog = animal.charAt(1)
const howManyVowels = vowels.length

// TODO: Update the code below using numeric operators so that the tests
// pass
const numOneMultipliedByNumTwo = numOne * numTwo

// do not edit the exported object.
module.exports = {
  a: upperCaseHello,
  b: secondCharacterOfDog,
  c: howManyVowels,
  d: numOneMultipliedByNumTwo
}
