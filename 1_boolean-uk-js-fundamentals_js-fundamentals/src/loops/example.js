// do not edit this section
const nums = []
const nums2 = [10, 3, 6, 2, 16, 20]
const nums3 = []

// TODO: Write a for loop to populate the nums array with the values 1 to 5
for (let i = 1; i < 6; i++) {
  nums.push(i)
}

// TODO: Write a for loop to add the all but the last number of nums to the nums2 array
for (let i = 0; i < nums2.length - 1; i++) {
  nums3.push(nums2[i])
}

module.exports = {
  a: nums,
  b: nums3
}
