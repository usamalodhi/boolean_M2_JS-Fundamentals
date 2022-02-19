// do not edit this section
let count = 10;

// TODO: Declare the variable city so that the tests pass. Update the value
// of count so the tests pass.
count = 100;
const city = "Tokyo";

// do not edit below this line
let cityExport = "";
try {
  cityExport = city;
} catch (e) {}

module.exports = {
  a: count,
  b: city,
};
