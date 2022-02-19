const {a, b} = require('../../src/loops/example.js')

describe("For Loops", () => {
  it("makeArray array from 1 to 5", () => {
    expect(a).toEqual([1,2,3,4,5])
  })

  it("nums3 should equal 10, 3, 6, 2, 16", () => {
    expect(b).toEqual([10,3,6,2,16])
  })
})
