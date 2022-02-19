const BackstagePass = require('../src/items/backstagepass');

describe('BackstagePass', () => {
  let backstagePass;

  it('DAY 0 => DAY 0 Entry is - Backstage passes to a TAFKAL80ETC concert, 15, 20', () => {
    backstagePass = new BackstagePass(15, 20);
    expected = ['Backstage passes to a TAFKAL80ETC concert', 15, 20];
    result = new Array(
      backstagePass.name,
      backstagePass.sellIn,
      backstagePass.quality
    );
    expect(result).toEqual(expected);
  });
  it('DAY 1 => DAY 0 Entry is - Backstage passes to a TAFKAL80ETC concert, 15, 20', () => {
    backstagePass = new BackstagePass(15, 20);
    backstagePass.updateQuality();
    expected = ['Backstage passes to a TAFKAL80ETC concert', 14, 21];
    result = new Array(
      backstagePass.name,
      backstagePass.sellIn,
      backstagePass.quality
    );
    expect(result).toEqual(expected);
  });
  it('DAY 2 => DAY 0 Entry is - Backstage passes to a TAFKAL80ETC concert, 15, 20', () => {
    backstagePass = new BackstagePass(15, 20);
    backstagePass.updateQuality();
    backstagePass.updateQuality();
    expected = ['Backstage passes to a TAFKAL80ETC concert', 13, 22];
    result = new Array(
      backstagePass.name,
      backstagePass.sellIn,
      backstagePass.quality
    );
    expect(result).toEqual(expected);
  });
});
