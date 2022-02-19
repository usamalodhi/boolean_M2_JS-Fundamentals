const {a, b, c} = require('../../src/conditional-flow/numeric-conditions')

describe("Numeric Conditions isArrayEmpty:", () => {
  it("[] is empty", () => {
    expect(a([])).toEqual(true)
  })
  it("[1] is not empty", () => {
    expect(a([1])).toEqual(false)
  })

  it("['hello', 'Ed'] is not empty", () => {
    expect(a(['hello', 'Ed'])).toEqual(false)
  })
})

describe("Numeric conditions isGreaterThan:", () => {
  it("3 is greater than 2", () => {
    expect(b(3, 2)).toEqual(true)
  })

  it("0 is not greater than 10", () => {
    expect(b(0, 10)).toEqual(false)
  })

  it("42 is not greater than 42", () => {
    expect(b(42, 42)).toEqual(false)
  })

  it("-1 is greater than -3", () => {
    expect(b(-1, -3)).toEqual(true)
  })
})

describe("Numeric Conditions findLowest:", () => {
  it("1 is lowest in [10, 8, 4, 1, 8]", () => {
    expect(c([10, 8, 4, 1, 8])).toEqual(1)
  })

  it("-10 is lowest in [0, 0, -10]", () => {
    expect(c([0, 0, -10])).toEqual(-10)
  })

  it("100 is lowest in [100,100,100,100]", () => {
    expect(c([100, 100, 100])).toEqual(100)
  })
})