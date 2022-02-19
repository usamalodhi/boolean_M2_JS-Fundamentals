const {a, b} = require('../../src/demo/demo.js')

describe('Demo:', () => {
  it('numThree is 5', () => {
    expect(a).toEqual(5)
  })

  it('numOnePlusNumTwo is 12', () => {
    expect(b).toEqual(12)
  })
})
