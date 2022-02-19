const { a, b, c, d } = require('../../src/data-types/example')

describe('Example', () => {

  it('upperCaseHello is HELLO', () => {
    expect(a).toEqual('HELLO')
  })

  it('secondCharacterOfDog is o', () => {
    expect(b).toEqual('o')
  })

  it('numberOfVowels is 5', () => {
    expect(c).toEqual(5)
  })

  it('numOneMultipliedByNumTwo is 200', () => {
    expect(d).toEqual(200)
  })

})
