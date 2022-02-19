// Note: you shouldn't need to change anything in this file.
const Basket = require('../src/Basket')

describe('Basket', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })
  // ---TEST 1-4: createBasketOfSize ---
  // ---TEST 1---
  it('createBasketOfSize: input is string', () => {
    const ErrInputTypeBasketSize = 'You have not entered a number or number < 0'
    basket.createBasketOfSize('hello')
    expect(basket.createBasketOfSize('hello')).toEqual(ErrInputTypeBasketSize)
  })
  // ---TEST 2---
  beforeEach(() => {
    basket = new Basket()
  })
  it('createBasketOfSize: number < 0', () => {
    const ErrInputTypeBasketSize = 'You have not entered a number or number < 0'
    basket.createBasketOfSize(-1)
    expect(basket.createBasketOfSize(-1)).toEqual(ErrInputTypeBasketSize)
  })
  // ---TEST 3---
  beforeEach(() => {
    basket = new Basket()
  })
  it('createBasketOfSize: input 1', () => {
    basket.createBasketOfSize(1)
    expect(basket.createBasketOfSize(1)).toEqual([undefined])
  })
  // ---TEST 4---
  beforeEach(() => {
    basket = new Basket()
  })
  it('createBasketOfSize: input 2', () => {
    basket.createBasketOfSize(2)
    expect(basket.createBasketOfSize(2)).toEqual([undefined, undefined])
  })
  // ---TEST 5-6: selectItems: shopper selects one item at a time from STOCK for consideration to add to basket ---
  // ---TEST 5---
  beforeEach(() => {
    basket = new Basket()
  })
  it('selectItems: item at index 0', () => {
    const expected = [
      { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' },
    ]
    const actualResult = basket.selectItems(0)
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 6---
  beforeEach(() => {
    basket = new Basket()
  })
  it('selectItems: item at index 1', () => {
    const expected = [
      { sku: 'BGLP', price: '0.39', name: 'Bagel', variant: 'Plain' },
    ]
    const actualResult = basket.selectItems(1)
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 7-8: Part 1: As a member of the public I'd like to add an item to my basket
  // ---TEST 7---
  beforeEach(() => {
    basket = new Basket()
  })
  it('addItemToBasket: add one item to basket with one capacity', () => {
    const expected = [
      { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' },
    ]
    basket.createBasketOfSize(1)
    basket.selectItems(0)
    const actualResult = basket.addItemToBasket()
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 8---
  beforeEach(() => {
    basket = new Basket()
  })
  it('addItemToBasket: add two items to basket with three capacity', () => {
    const expected = [
      { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain',
      },
      undefined,
    ]
    basket.createBasketOfSize(3)
    basket.selectItems(0)
    basket.selectItems(1)
    const actualResult = basket.addItemToBasket()
    expect(actualResult).toEqual(expected)
  })
  //   ---TEST 9-13: Part 1: As a member of the public I'd like to remove an item from my basket
  // ---TEST 9-13 Part 2 As a member of the public I'd like to know if I try to remove an item that doesn't exist in my basket
  // ---TEST 9---
  beforeEach(() => {
    basket = new Basket()
  })
  it('removeItemFromBasket(item): remove item[0] from basket which contains item[0]', () => {
    const expected = [undefined]
    basket.createBasketOfSize(1)
    basket.selectItems(0)
    basket.addItemToBasket()
    const actualResult = basket.removeItemFromBasket({
      sku: 'BGLO',
    })
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 10---
  // ---TEST 10 A: the removeItemFromBasket function should still leave basket with whose id is not supplied to function to remain---
  beforeEach(() => {
    basket = new Basket()
  })
  it('removeItemFromBasket(item): remove item[1] from basket which contains item[0]', () => {
    const expected = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion',
      },
    ]
    basket.createBasketOfSize(1)
    basket.selectItems(0)
    basket.addItemToBasket()
    basket.removeItemFromBasket({
      sku: 'BGLP',
    })
    const actualResult = basket.shoppingBasket
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 10 B: the removeItemFromBasket function should throw message for removal of item that doesn't exist in basket---
  beforeEach(() => {
    basket = new Basket()
  })
  it('removeItemFromBasket(item): remove item[1] from basket which contains item[0]', () => {
    const message = 'You cannot remove an item that does not exist'
    const expected = message
    basket.createBasketOfSize(1)
    basket.selectItems(0)
    basket.addItemToBasket()
    const actualResult = basket.removeItemFromBasket({
      sku: 'BGLP',
    })
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 11---
  beforeEach(() => {
    basket = new Basket()
  })
  it('removeItemFromBasket(item): remove item[1] from basket which contains item[0] item[1]', () => {
    const expected = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion',
      },
      undefined,
    ]
    basket.createBasketOfSize(2)
    basket.selectItems(0)
    basket.selectItems(1)
    basket.addItemToBasket()
    basket.removeItemFromBasket({
      sku: 'BGLP',
    })
    const actualResult = basket.shoppingBasket
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 12---
  beforeEach(() => {
    basket = new Basket()
  })
  it('removeItemFromBasket(item): remove item[0] item[1] from basket which contains item[0] item[1]', () => {
    const expected = [undefined, undefined]
    basket.createBasketOfSize(2)
    basket.selectItems(0)
    basket.selectItems(1)
    basket.addItemToBasket()
    basket.removeItemFromBasket({
      sku: 'BGLP',
    })
    basket.removeItemFromBasket({
      sku: 'BGLO',
    })
    const actualResult = basket.shoppingBasket
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 13---
  beforeEach(() => {
    basket = new Basket()
  })
  it('removeItemFromBasket(item): remove item[0] item[2] from basket which contains item[2] item [1] => expect [undefined, item1]', () => {
    const expected = [
      undefined,
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain',
      },
    ]
    basket.createBasketOfSize(2)
    basket.selectItems(2)
    basket.selectItems(1)
    basket.addItemToBasket()
    basket.removeItemFromBasket({
      sku: 'BGLO',
    })
    basket.removeItemFromBasket({
      sku: 'BGLE',
    })
    const actualResult = basket.shoppingBasket
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 14: As a member of the public, I’d like to see the price of each item before I add it to my basket.
  // ---TEST 14---
  beforeEach(() => {
    basket = new Basket()
  })
  it('alertPriceOfItemBeforeBasket(item): item[0]', () => {
    const expected = '0.49'
    const actualResult = basket.alertPriceOfItemBeforeBasket('BGLO')
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 15: As a member of the public,I'd like to know the total sum of the bagels in my basket
  beforeEach(() => {
    basket = new Basket()
  })
  it('alertPriceOfItemBeforeBasket(item): item[0]', () => {
    const expected = 8.97
    basket.createBasketOfSize(3)
    basket.selectItems(6)
    basket.selectItems(5)
    basket.selectItems(4)
    basket.addItemToBasket()
    const actualResult = basket.alertPriceOfBasket()
    expect(actualResult).toEqual(expected)
  })

  // ---TEST 16 - basket capacity within remaining space
  it('alertPriceOfItemBeforeBasket(item): item[0]', () => {
    const expected = 'successful: space remaining 0'
    basket.createBasketOfSize(1)
    basket.selectItems(0)
    basket.addItemToBasket()
    const actualResult = basket.alertBasketCapacityStatus()
    expect(actualResult).toEqual(expected)
  })
  // ---TEST 17 - basket capacity within remaining space
  it('alertPriceOfItemBeforeBasket(item): item[0]', () => {
    const expected = 'rejected by 1 more items'
    basket.createBasketOfSize(1)
    basket.selectItems(0)
    basket.selectItems(1)
    basket.addItemToBasket()
    const actualResult = basket.alertBasketCapacityStatus()
    expect(actualResult).toEqual(expected)
  })
})
