const DefaultItem = require('../src/items/defaultitem');

describe('DefaultItem', () => {
  let defaultItem;

  it('DAY 0 => DAY 0 Entry is: +5 Dexterity Vest, 10, 20', () => {
    defaultItem = new DefaultItem('+5 Dexterity Vest', 10, 20);
    expected = ['+5 Dexterity Vest', 10, 20];
    result = new Array(
      defaultItem.name,
      defaultItem.sellIn,
      defaultItem.quality
    );
    expect(result).toEqual(expected);
  });
  it('DAY 1 => DAY 0 Entry is: +5 Dexterity Vest, 10, 20', () => {
    defaultItem = new DefaultItem('+5 Dexterity Vest', 10, 20);
    defaultItem.updateQuality();
    expected = ['+5 Dexterity Vest', 9, 19];
    result = new Array(
      defaultItem.name,
      defaultItem.sellIn,
      defaultItem.quality
    );
    expect(result).toEqual(expected);
  });
  it('DAY 2 => DAY 0 Entry is: +5 Dexterity Vest, 10, 20', () => {
    defaultItem = new DefaultItem('+5 Dexterity Vest', 10, 20);
    defaultItem.updateQuality();
    defaultItem.updateQuality();
    expected = ['+5 Dexterity Vest', 8, 18];
    result = new Array(
      defaultItem.name,
      defaultItem.sellIn,
      defaultItem.quality
    );
    expect(result).toEqual(expected);
  });
});
