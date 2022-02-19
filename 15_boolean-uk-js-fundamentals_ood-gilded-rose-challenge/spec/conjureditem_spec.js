const ConjuredItem = require('../src/items/conjureditem');

describe('ConjuredItem', () => {
  let conjuredItem;

  it('DAY 0 => DAY 0 Entry is - Name: Aged Brie; SellIn:2; Quality:0', () => {
    conjuredItem = new ConjuredItem(3, 6);
    expected = ['Conjured Mana Cake', 3, 6];
    result = new Array(
      conjuredItem.name,
      conjuredItem.sellIn,
      conjuredItem.quality
    );
    expect(result).toEqual(expected);
  });
  it('DAY 1 => DAY 0 Entry is - Name: Aged Brie; SellIn:2; Quality:0', () => {
    conjuredItem = new ConjuredItem(3, 6);
    conjuredItem.updateQuality();
    expected = ['Conjured Mana Cake', 2, 4];
    result = new Array(
      conjuredItem.name,
      conjuredItem.sellIn,
      conjuredItem.quality
    );
    expect(result).toEqual(expected);
  });
  it('DAY 2 => DAY 0 Entry is - Name: Aged Brie; SellIn:2; Quality:0', () => {
    conjuredItem = new ConjuredItem(3, 6);
    conjuredItem.updateQuality();
    conjuredItem.updateQuality();
    expected = ['Conjured Mana Cake', 1, 2];
    result = new Array(
      conjuredItem.name,
      conjuredItem.sellIn,
      conjuredItem.quality
    );
    expect(result).toEqual(expected);
  });
});
