const { a } = require('../../src/conditional-flow/boolean-conditions')

describe("Boolean conditions getResult:", () => {
  it("Returns 'Well done, you passed!' with true", () => {
    expect(a(true)).toEqual('Well done, you passed!')
  })
  it("Returns 'Sorry, try again' with false", () => {
    expect(a(false)).toEqual('Sorry, try again')
  })
})
