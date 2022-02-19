const DATA = require('../inventory.json')
const STOCK = DATA.inventory

class Basket {
  constructor() {
    this.selectedItemsContainer = []
    this.itemInBasketCounter = 0
    this.shoppingBasket = []
    this.totalPricesOfItemsInBasket = []
  }

  // Part 2 As a Bob's Bagels manager, create baskets with larger capacity when I need to.
  createBasketOfSize(basketSize) {
    const ErrInputTypeBasketSize = 'You have not entered a number or number < 0'
    if (typeof basketSize !== 'number' || basketSize <= 0) {
      return ErrInputTypeBasketSize
    }
    return (this.shoppingBasket = Array.apply(null, Array(basketSize)).map(
      function () {}
    ))
  }

  // select items from stock - helper function
  selectItems(itemAtIndex) {
    let selectedItemAtIndex = STOCK[itemAtIndex]
    this.selectedItemsContainer.push(selectedItemAtIndex)
    return this.selectedItemsContainer
  }

  // Part 1: As a member of the public I'd like to add an item to my basket
  addItemToBasket() {
    let basketPosCounter = 0
    let itemsCounter = 0
    do {
      if (this.shoppingBasket[basketPosCounter] === undefined) {
        this.shoppingBasket[basketPosCounter] =
          this.selectedItemsContainer[itemsCounter]
        itemsCounter += 1
      }
      basketPosCounter = basketPosCounter + 1
    } while (basketPosCounter < this.shoppingBasket.length)
    return this.shoppingBasket
  }

  // Part 1: As a member of the public I'd like to remove an item from my basket
  // Part 2 As a member of the public I'd like to know if I try to remove an item that doesn't exist in my basket
  removeItemFromBasket(item) {
    for (let i = 0; i < this.shoppingBasket.length; i++) {
      if (this.shoppingBasket[i].sku === item.sku) {
        delete this.shoppingBasket[i]
        this.shoppingBasket[i] = undefined
        return this.shoppingBasket
      }
    }
    const message = 'You cannot remove an item that does not exist'
    return message
  }

  // Part 3 As a member of the public, I’d like to see the price of each item before I add it to my basket.
  alertPriceOfItemBeforeBasket(item) {
    for (let product of STOCK) {
      if (product.sku === item) {
        return product.price
      }
    }
  }

  // Part 2 As a member of the public, know when basket full when trying to add an item beyond basket capacity.
  alertBasketCapacityStatus() {
    return this.shoppingBasket.length < this.selectedItemsContainer.length
      ? `rejected by ${
          this.selectedItemsContainer.length - this.shoppingBasket.length
        } more items`
      : `successful: space remaining ${
          this.shoppingBasket.length - this.selectedItemsContainer.length
        }`
  }

  // Part 3 As a member of the public,I'd like to know the total sum of the bagels in my basket
  alertPriceOfBasket() {
    // this.shoppingBasketTotalPrice = this.selectedItemsContainer
    this.shoppingBasketTotalPrice = this.shoppingBasket
      .map((item) => item.price)
      .map((item) => Number(item))
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return this.shoppingBasketTotalPrice.reduce(reducer)
  }
}

module.exports = Basket
