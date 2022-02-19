const { a, b } = require('../../src/variables/assignment.js')

describe("Variable Assignment:", () => {
  it("firstNumber is 20", () => {
    expect(a).toEqual(20)
  })

  it("secondNumber is 42", () => {
    expect(b).toEqual(42)
  })
})
