const BasketCalcs = require('../src/BasketCalculations.js');

const Basket = require('../src/Basket.js');

describe('Basket', () => {
  let basket;
  let basketcalcs;

  beforeEach(() => {
    basket = new Basket();
    basketcalcs = new BasketCalcs(basket);
  });

  it('Getting the price of one item in my basket.', () => {
    //setup
    const expected = 0.99;
    basket.addItemToBasket('Asiago');
    //execute
    const result = basketcalcs.getTotalOfBasket();
    //verify
    expect(result).toEqual(expected);
  });
  it('Getting the price of multiple items in my basket.', () => {
    //setup
    const expected = 0.39 + 0.49 + 0.49;
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Blueberry');
    basket.addItemToBasket('Sesame');
    basket.addItemToBasket('Asiago');
    basket.removeitemFromBasket('Asiago');
    //execute
    const result = basketcalcs.getTotalOfBasket();
    //verify
    expect(result).toEqual(expected);
  });
  it('Checking the price of a item before adding it to my basket.', () => {
    //setup
    const expected = {
      sku: 'BGLO',
      price: 0.49,
      name: 'item',
      variant: 'Onion',
    };
    //execute
    const result = basketcalcs.getItemPrice('Onion');
    //verify
    expect(result).toEqual(expected);
  });
  it('Special Offer: 6 Onion items should be £2.49', () => {
    //setup
    const expected = 2.49;
    basket.basketSize = 6;
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    //execute
    const result = basketcalcs.getTotalOfBasket();
    //verify
    expect(result).toEqual(expected);
  });
  it('Special Offer: 6 Everything items should be £2.49', () => {
    //setup
    const expected = 2.49;
    basket.basketSize = 6;
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    //execute
    const result = basketcalcs.getTotalOfBasket();
    //verify
    expect(result).toEqual(expected);
  });
  it('Special Offer: 12 Plain items should be £3.99', () => {
    //setup
    const expected = 3.99;
    basket.basketSize = 12;
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    basket.addItemToBasket('Plain');
    //execute
    const result = basketcalcs.getTotalOfBasket();
    //verify
    expect(result).toEqual(expected);
  });
  it('Special Offer (WET CODE TO CHECK MUTLIPLE DISCOUNTS): 24 plain items (7.98) + 12 Onion items (4.98) + 12 Everything items (4.98)', () => {
    //setup
    const expected = 7.98 + 4.98 + 4.98;
    basket.basketSize = 48;
    for (let i = 0; i < 24; i++) {
      basket.addItemToBasket('Plain');
    }
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Onion');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    basket.addItemToBasket('Everything');
    //execute
    const result = basketcalcs.getTotalOfBasket();
    //verify
    expect(result).toEqual(expected);
  });
});
