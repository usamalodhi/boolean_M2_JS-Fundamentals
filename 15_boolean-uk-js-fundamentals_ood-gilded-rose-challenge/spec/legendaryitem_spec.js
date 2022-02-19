const LegendaryItem = require('../src/items/legendaryitem');

describe('LegendaryItem', () => {
  let legendaryItem;

  it('DAY 0 => DAY 0 Entry is - Name: Sulfuras, Hand of Ragnaros; SellIn:0; Quality:80', () => {
    legendaryItem = new LegendaryItem(0);
    expected = ['Sulfuras, Hand of Ragnaros', 0, 80];
    result = new Array(
      legendaryItem.name,
      legendaryItem.sellIn,
      legendaryItem.quality
    );
    expect(result).toEqual(expected);
  });
  it('DAY 1 => DAY 0 Entry is - Name: Sulfuras, Hand of Ragnaros; SellIn:0; Quality:80', () => {
    legendaryItem = new LegendaryItem(0);
    legendaryItem.updateQuality();
    expected = ['Sulfuras, Hand of Ragnaros', 0, 80];
    result = new Array(
      legendaryItem.name,
      legendaryItem.sellIn,
      legendaryItem.quality
    );
    expect(result).toEqual(expected);
  });
  it('DAY 2 => DAY 0 Entry is - Name: Sulfuras, Hand of Ragnaros; SellIn:0; Quality:80', () => {
    legendaryItem = new LegendaryItem(0);
    legendaryItem.updateQuality();
    legendaryItem.updateQuality();
    expected = ['Sulfuras, Hand of Ragnaros', 0, 80];
    result = new Array(
      legendaryItem.name,
      legendaryItem.sellIn,
      legendaryItem.quality
    );
    expect(result).toEqual(expected);
  });
});
