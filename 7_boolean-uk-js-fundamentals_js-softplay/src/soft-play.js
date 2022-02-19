// do not change these lines

//pushing again - node js build failed

function reset() {
  adults = 0;
  children = 0;
}
counter = 0;
let adults = 0;
let children = 0;

function enter(numAdults, numChildren) {
  if (numAdults === 0) {
    return false;
  }
  if (numAdults >= numChildren) {
    adults += numAdults;
    children += numChildren;
    return true;
  }
}

function leave(numAdults, numChildren) {
  if (adults === 1 && children >= 1) {
    return false;
  }
  if (adults - numAdults < children - numChildren) {
    return false;
  }
  if (adults < numAdults || children < numChildren) {
    return false;
  }
  adults -= numAdults;
  children -= numChildren;
  return true;
}
function occupancy() {
  return { adults: adults, children: children };
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset,
};
