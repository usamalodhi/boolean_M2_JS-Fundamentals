const answers = require('../../../src/data-types/objects/objects-and-arrays.js')

describe('Objects and Arrays:', () => {
  it('numberOfVoucherCodes should be 2', () => {
    expect(answers.numberOfVoucherCodes).toEqual(2)
  })

  it('firstVoucherCode should be AA-AA-A', () => {
    expect(answers.firstVoucherCode).toEqual("AA-AA-A")
  })

  it('The price of apples should be updated to 2', () => {
    expect(answers.basket.items[0].price).toEqual(2)
  })

  it('4 oranges priced at 0.75 should be added to the end of the items list', () => {
    expect(answers.basket.items[2]).toEqual({
      name: "Oranges",
      price: 0.75,
      quantity: 4
    })
  })
})
