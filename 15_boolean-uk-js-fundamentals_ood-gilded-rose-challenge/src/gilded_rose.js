const SULFURASITEM = 'Sulfuras, Hand of Ragnaros';
const AGEDBRIEITEM = 'Aged Brie';
const BACKSTAGEPASSITEM = 'Backstage passes to a TAFKAL80ETC concert';
const CONJUREDITEM = 'Conjured Mana Cake';

const {
  AgedBrie,
  BackstagePass,
  LegendaryItem,
  ConjuredItem,
  DefaultItem,
  Item,
} = require('./items/itemsexport');

class Shop {
  constructor(items = []) {
    this.items = items.map((item) => {
      if (item.name === SULFURASITEM) {
        return new LegendaryItem(item.sellIn);
      }
      if (item.name === AGEDBRIEITEM) {
        return new AgedBrie(item.sellIn, item.quality);
      }
      if (item.name === BACKSTAGEPASSITEM) {
        return new BackstagePass(item.sellIn, item.quality);
      }
      if (item.name === CONJUREDITEM) {
        return new ConjuredItem(item.sellIn, item.quality);
      }
      {
        return new DefaultItem(item.name, item.sellIn, item.quality);
      }
    });
  }

  updateQualityAll() {
    this.items.forEach((item) => item.updateQuality());
    return this.items;
  }
}

module.exports = {
  Shop,
  SULFURASITEM,
  AGEDBRIEITEM,
  BACKSTAGEPASSITEM,
  CONJUREDITEM,
};
