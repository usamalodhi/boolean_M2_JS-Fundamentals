const { firstName, age } = require('../../src/variables/declaration.js')

describe("Variable Declaration:", () => {
  it("firstName is Jane", () => {
    expect(firstName).toEqual("Jane")
  })

  it("age is 35", () => {
    expect(age).toEqual(35)
  })
})
