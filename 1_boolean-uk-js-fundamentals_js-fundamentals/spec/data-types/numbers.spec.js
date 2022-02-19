const { a, b, c, d, e, f } = require('../../src/data-types/numbers')

describe("Numbers:", () => {
  it("numOnePlusNumTwo is 24", () => {
    expect(a).toEqual(24)
  })

  it("numThreeTimesNumTwo is 512", () => {
    expect(b).toEqual(512)
  })

  it("numThreeDividedByNumOne is 4", () => {
    expect(c).toEqual(4)
  })

  it("numThreeMinusNumOne is 24", () => {
    expect(d).toEqual(24)
  })

  it("sum is 56", () => {
    expect(e).toEqual(56)
  })

  it("numBytes is 7", () => {
    expect(f).toEqual(7)
  })
})
