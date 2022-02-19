// This function should return true if num is greater
// than or equal to lower AND less than or equal to upper.
// Implement this with a single condition.
function isInRange(num, lower, upper) {
  return num >= lower && num <= upper ? true : false;
}

// This function should return true if the passed string is equal
// to "Hello" or "Goodbye". Implement this with a single
// if statement.
function isHelloOrGoodbye(val1) {
  return (val1 === "Hello") | (val1 === "Goodbye") ? true : false;
}

// This function should return a string that describes the provided age value. The
// table below shows for each range of age values what string should be returned.
//
// For example, if an age of 3 is provided to the function, "Toddler" should be
// returned.
//
// Input   Output
// 0      | Baby
// 1-4    | Toddler
// 5-12   | Child
// 13-19  | Teenager
// 20+    | Adult
function getAgeDescription(age) {
  if (isNaN(age)) return "age is not a number";
  if (age === 0) return "Baby";
  if (age >= 1 && age <= 4) return "Toddler";
  if (age >= 5 && age <= 12) return "Child";
  if (age >= 13 && age <= 19) return "Teenager";
  return "Adult";
}

module.exports = {
  a: isInRange,
  b: isHelloOrGoodbye,
  c: getAgeDescription,
};
