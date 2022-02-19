const Item = require('./item');

class DefaultItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  updateQuality() {
    this.sellIn -= 1;
    this.quality = Math.max(
      this.sellIn >= 0 ? this.quality - 1 : this.quality - 2,
      0
    );
  }
}

module.exports = DefaultItem;
