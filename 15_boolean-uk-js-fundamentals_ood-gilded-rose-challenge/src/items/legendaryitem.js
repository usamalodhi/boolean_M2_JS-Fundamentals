const Item = require('./item');

class LegendaryItem extends Item {
  constructor(sellIn) {
    super('Sulfuras, Hand of Ragnaros', sellIn, 80);
    this.sellIn = sellIn;
  }

  updateQuality() {
    this.sellIn = this.sellIn;
    this.quality = 80;
  }
}

module.exports = LegendaryItem;
