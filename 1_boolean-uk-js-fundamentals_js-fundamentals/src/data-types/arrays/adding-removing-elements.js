// do not edit this section
const cities = ["London", "Shanghai", "New York", "Delhi", "Kuala Lumpur"];
const names = [];
const numbers = [1, 2, 3];
const colours = ["Red", "Blue", "Yellow"];
const keys = ["q", "w", "e", "r", "t", "y"];
const countries = ["Bolivia", "Jordan", "Greenland"];
const fruits = ["Apple", "Orange", "Pear"];

// TODO: write code to pass the tests

// Edit this code to add 'Fred' to the names array
names.push("Fred");

// Edit this code to add 4 to the end of the numbers array
numbers.push(4);

// Edit this code to add 'Rio' to the start of the cities array
cities.unshift("Rio");

// Use an array method to remove the first item from colours
colours.splice(0, 1);

// Use an array method to remove the last item from keys
keys.pop();

// Use an array method to remove 'Jordon' from the countries array
countries.splice(1, 1);

// use an array method to remove the last item from the fruits array and store the value in the pear variable
const pear = fruits.pop();

// Do not edit this exported object
module.exports = {
  a: names,
  b: numbers,
  c: cities,
  d: colours,
  e: keys,
  f: countries,
  g: fruits,
  h: pear,
};
