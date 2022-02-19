const Basket = require('../src/Basket.js');

describe('Basket', () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
  });
  it('checking contents of basket', () => {
    //setup
    const expected = [];
    //execute
    basket.basket;
    const emptybasket = basket.basket;
    //verify
    expect(emptybasket).toEqual(expected);
  });
  it('Add one item to basket', () => {
    //setup
    const expected = [
      {
        sku: 'BGLO',
        price: 0.49,
        name: 'item',
        variant: 'Onion',
      },
    ];
    //execute
    basket.addItemToBasket('Onion');
    const result = basket.basket;
    //verify
    expect(result).toEqual(expected);
  });
  it('Add two items to basket', () => {
    //setup
    const expected = [
      {
        sku: 'BGLO',
        price: 0.49,
        name: 'item',
        variant: 'Onion',
      },
      {
        sku: 'BGLP',
        price: 0.39,
        name: 'item',
        variant: 'Plain',
      },
    ];
    //execute
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Plain');
    const result = basket.basket;
    //verify
    expect(result).toEqual(expected);
  });
  it('Remove one item from basket', () => {
    //setup
    const expected = [
      {
        sku: 'BGLP',
        price: 0.39,
        name: 'item',
        variant: 'Plain',
      },
    ];
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Blueberry');
    //execute
    basket.removeitemFromBasket('Blueberry');
    const result = basket.basket;
    //verify
    expect(result).toEqual(expected);
  });
  it('Remove multiple items from basket', () => {
    //setup
    const expected = [
      {
        sku: 'BGLB',
        price: 0.49,
        name: 'item',
        variant: 'Blueberry',
      },
    ];
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Garlic');
    basket.addItemToBasket('Blueberry');
    //execute
    basket.removeitemFromBasket('Onion');
    basket.removeitemFromBasket('Plain');
    basket.removeitemFromBasket('Garlic');
    const result = basket.basket;
    //verify
    expect(result).toEqual(expected);
  });
  it('Add one item then remove it returns empty', () => {
    //setup
    const expected = [];
    //execute
    basket.addItemToBasket('Blueberry');
    basket.removeitemFromBasket('Blueberry');
    const result = basket.basket;
    //verify
    expect(result).toEqual(expected);
  });
  it('Adding items to a full basket returns error', () => {
    //setup
    basket.addItemToBasket('Blueberry');
    basket.addItemToBasket('Garlic');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    //execute
    const result = basket.addItemToBasket('Asiago');
    //verify
    expect(result).toEqual('Basket is full!');
  });
  it('overfilling my basket results in a full basket', () => {
    //setup
    const expected = [
      {
        sku: 'BGLS',
        price: 0.49,
        name: 'item',
        variant: 'Sesame',
      },
      {
        sku: 'BGLA',
        price: 0.99,
        name: 'item',
        variant: 'Asiago',
      },
      {
        sku: 'BGLG',
        price: 0.99,
        name: 'item',
        variant: 'Garlic',
      },
      {
        sku: 'BGLW',
        price: 0.99,
        name: 'item',
        variant: 'Whole Wheat',
      },
      {
        sku: 'BGLP',
        price: 0.39,
        name: 'item',
        variant: 'Plain',
      },
    ];
    basket.addItemToBasket('Sesame');
    basket.addItemToBasket('Asiago');
    basket.addItemToBasket('Garlic');
    basket.addItemToBasket('Whole Wheat');
    basket.addItemToBasket('Plain');
    //execute
    basket.addItemToBasket('Blueberry'); // blueberry should not be added to basket.
    const result = basket.basket;
    //verify
    expect(result).toEqual(expected);
    expect(basket.basket.length).toEqual(5);
  });
  it('Adding two of the same item to my basket', () => {
    //setup
    const expected = [
      {
        sku: 'BGLB',
        price: 0.49,
        name: 'item',
        variant: 'Blueberry',
      },
      {
        sku: 'BGLB',
        price: 0.49,
        name: 'item',
        variant: 'Blueberry',
      },
    ];
    //execute
    basket.addItemToBasket('Blueberry');
    basket.addItemToBasket('Blueberry');
    const result = basket.basket;
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove a item that doesn't exist returns an error.", () => {
    //setup
    basket.addItemToBasket('Plain');
    //execute
    const result = basket.removeitemFromBasket('Onion');
    //verify
    expect(result).toEqual("Onion item doesn't exist");
  });
  it('Manager increasing the size of basket', () => {
    //setup
    const expected = 15;
    basket.setBasketSize('large');
    //execute
    const result = basket.basketSize;
    //verify
    expect(result).toEqual(expected);
  });
});
