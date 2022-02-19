const AgedBrie = require('../src/items/agedbrie');

describe('AgedBrie', () => {
  let agedBrie;

  it('DAY 0 => DAY 0 Entry is - Name: Aged Brie; SellIn:2; Quality:0', () => {
    agedBrie = new AgedBrie(2, 0);
    expected = ['Aged Brie', 2, 0];
    result = new Array(agedBrie.name, agedBrie.sellIn, agedBrie.quality);
    expect(result).toEqual(expected);
  });
  it('DAY 1 => DAY 0 Entry is - Name: Aged Brie; SellIn:2; Quality:0', () => {
    agedBrie = new AgedBrie(2, 0);
    agedBrie.updateQuality();
    expected = ['Aged Brie', 1, 1];
    result = new Array(agedBrie.name, agedBrie.sellIn, agedBrie.quality);
    expect(result).toEqual(expected);
  });
  it('DAY 2 => DAY 0 Entry is - Name: Aged Brie; SellIn:2; Quality:0', () => {
    agedBrie = new AgedBrie(2, 0);
    agedBrie.updateQuality();
    agedBrie.updateQuality();
    expected = ['Aged Brie', 0, 2];
    result = new Array(agedBrie.name, agedBrie.sellIn, agedBrie.quality);
    expect(result).toEqual(expected);
  });
});
