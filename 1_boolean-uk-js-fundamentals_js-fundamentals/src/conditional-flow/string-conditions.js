// This function should return true if the passed string is equal to "Hello"
function isHello(val1) {
  return val1 === "Hello" ? true : false;
}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello(val1) {
  return !isHello(val1) ? true : false;
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan(val1, val2) {
  return val1.length > val2.length ? true : false;
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels(val1) {
  const count = val1.match(/[aeiou]/gi).length;
  return count % 2 !== 0 ? true : false;
}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter(val1) {
  const strLength = val1.length;
  const strLengthHalf = strLength / 2;
  const even = strLength % 2 === 0 ? true : false;
  if (even) {
    result = val1.substring(strLengthHalf - 1, strLengthHalf + 1);
    return result;
  }
  if (!even) {
    result = val1.charAt(Math.floor(strLengthHalf));
    return result;
  }
}

// This function should return the name of the season for the provided
// month name. For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
function seasonForMonth(monthName) {
  const validMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (!validMonths.includes(monthName)) {
    return "";
  }

  // Dec-Feb
  const winterMonths = ["December", "January", "February"];
  if (winterMonths.includes(monthName)) return "Winter";
  // Mar-May
  if (validMonths.slice(2, 5).includes(monthName)) return "Spring";
  // Jun-Aug
  if (validMonths.slice(5, 8).includes(monthName)) return "Summer";
  // Sep-Nov
  if (validMonths.slice(8, 11).includes(monthName)) return "Autumn";
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth,
};
