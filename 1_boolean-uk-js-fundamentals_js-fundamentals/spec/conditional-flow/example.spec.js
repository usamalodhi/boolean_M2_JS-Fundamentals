const example = require('../../src/conditional-flow/example.js')

describe("example", () => {
  it("19 returns true", () => {
    expect(example(19)).toEqual(true)
  })
  it("18 returns true", () => {
    expect(example(18)).toEqual(true)
  })
  it("17 returns false", () => {
    expect(example(17)).toEqual(false)
  })
})
