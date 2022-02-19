const {
  Shop,
  SULFURASITEM,
  AGEDBRIEITEM,
  BACKSTAGEPASSITEM,
  CONJUREDITEM,
} = require('../src/gilded_rose');

const Item = require('../src/items/item');

describe('Shop', () => {
  // Test 1: takes one item on day 0
  it('takes one default item on day 0', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)]);
    expected = ['+5 Dexterity Vest', 10, 20];
    result = new Array(
      gildedRose.items[0].name,
      gildedRose.items[0].sellIn,
      gildedRose.items[0].quality
    );
    expect(result).toEqual(expected);
  });
  // Test 2: takes two items on day 0
  it('takes two items on day 0', () => {
    const gildedRose = new Shop([
      new Item('+5 Dexterity Vest', 10, 20),
      new Item(AGEDBRIEITEM, 10, 20),
    ]);
    expected = ['+5 Dexterity Vest', 10, 20, 'Aged Brie', 10, 20];
    result = new Array(
      gildedRose.items[0].name,
      gildedRose.items[0].sellIn,
      gildedRose.items[0].quality,
      gildedRose.items[1].name,
      gildedRose.items[1].sellIn,
      gildedRose.items[1].quality
    );
    expect(result).toEqual(expected);
  });
  // Test 3: takes all items - go from day 0 to day 30 -
  it('takes all items - go from day 0 to day 30', () => {
    const gildedRose = new Shop([
      new Item('+5 Dexterity Vest', 10, 20),
      new Item(AGEDBRIEITEM, 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item(SULFURASITEM, 0, 80),
      new Item(SULFURASITEM, -1, 80),
      new Item(BACKSTAGEPASSITEM, 15, 20),
      new Item(BACKSTAGEPASSITEM, 10, 49),
      new Item(BACKSTAGEPASSITEM, 5, 49),
      new Item(CONJUREDITEM, 3, 6),
    ]);
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    expected = [
      '+5 Dexterity Vest',
      -20,
      0,
      AGEDBRIEITEM,
      -28,
      50,
      'Elixir of the Mongoose',
      -25,
      0,
      SULFURASITEM,
      0,
      80,
      SULFURASITEM,
      -1,
      80,
      BACKSTAGEPASSITEM,
      -15,
      0,
      BACKSTAGEPASSITEM,
      -20,
      0,
      BACKSTAGEPASSITEM,
      -25,
      0,
      CONJUREDITEM,
      -27,
      0,
    ];
    result = new Array(
      gildedRose.items[0].name,
      gildedRose.items[0].sellIn,
      gildedRose.items[0].quality,
      gildedRose.items[1].name,
      gildedRose.items[1].sellIn,
      gildedRose.items[1].quality,
      gildedRose.items[2].name,
      gildedRose.items[2].sellIn,
      gildedRose.items[2].quality,
      gildedRose.items[3].name,
      gildedRose.items[3].sellIn,
      gildedRose.items[3].quality,
      gildedRose.items[4].name,
      gildedRose.items[4].sellIn,
      gildedRose.items[4].quality,
      gildedRose.items[5].name,
      gildedRose.items[5].sellIn,
      gildedRose.items[5].quality,
      gildedRose.items[6].name,
      gildedRose.items[6].sellIn,
      gildedRose.items[6].quality,
      gildedRose.items[7].name,
      gildedRose.items[7].sellIn,
      gildedRose.items[7].quality,
      gildedRose.items[8].name,
      gildedRose.items[8].sellIn,
      gildedRose.items[8].quality
    );
    expect(result).toEqual(expected);
  });
  // Test 4: takes all items - go from day 0 to day 25
  it('takes all items - go from day 0 to day 25', () => {
    const gildedRose = new Shop([
      new Item('+5 Dexterity Vest', 10, 20),
      new Item(AGEDBRIEITEM, 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item(SULFURASITEM, 0, 80),
      new Item(SULFURASITEM, -1, 80),
      new Item(BACKSTAGEPASSITEM, 15, 20),
      new Item(BACKSTAGEPASSITEM, 10, 49),
      new Item(BACKSTAGEPASSITEM, 5, 49),
      new Item(CONJUREDITEM, 3, 6),
    ]);
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    expected = [
      '+5 Dexterity Vest',
      -15,
      0,
      AGEDBRIEITEM,
      -23,
      48,
      'Elixir of the Mongoose',
      -20,
      0,
      SULFURASITEM,
      0,
      80,
      SULFURASITEM,
      -1,
      80,
      BACKSTAGEPASSITEM,
      -10,
      0,
      BACKSTAGEPASSITEM,
      -15,
      0,
      BACKSTAGEPASSITEM,
      -20,
      0,
      CONJUREDITEM,
      -22,
      0,
    ];
    result = new Array(
      gildedRose.items[0].name,
      gildedRose.items[0].sellIn,
      gildedRose.items[0].quality,
      gildedRose.items[1].name,
      gildedRose.items[1].sellIn,
      gildedRose.items[1].quality,
      gildedRose.items[2].name,
      gildedRose.items[2].sellIn,
      gildedRose.items[2].quality,
      gildedRose.items[3].name,
      gildedRose.items[3].sellIn,
      gildedRose.items[3].quality,
      gildedRose.items[4].name,
      gildedRose.items[4].sellIn,
      gildedRose.items[4].quality,
      gildedRose.items[5].name,
      gildedRose.items[5].sellIn,
      gildedRose.items[5].quality,
      gildedRose.items[6].name,
      gildedRose.items[6].sellIn,
      gildedRose.items[6].quality,
      gildedRose.items[7].name,
      gildedRose.items[7].sellIn,
      gildedRose.items[7].quality,
      gildedRose.items[8].name,
      gildedRose.items[8].sellIn,
      gildedRose.items[8].quality
    );
    expect(result).toEqual(expected);
  });
  // Test 5: takes all items - go from day 0 to day 10
  it('takes all items - go from day 0 to day 10', () => {
    const gildedRose = new Shop([
      new Item('+5 Dexterity Vest', 10, 20),
      new Item(AGEDBRIEITEM, 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item(SULFURASITEM, 0, 80),
      new Item(SULFURASITEM, -1, 80),
      new Item(BACKSTAGEPASSITEM, 15, 20),
      new Item(BACKSTAGEPASSITEM, 10, 49),
      new Item(BACKSTAGEPASSITEM, 5, 49),
      new Item(CONJUREDITEM, 3, 6),
    ]);
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    gildedRose.updateQualityAll();
    expected = [
      '+5 Dexterity Vest',
      0,
      10,
      AGEDBRIEITEM,
      -8,
      18,
      'Elixir of the Mongoose',
      -5,
      0,
      SULFURASITEM,
      0,
      80,
      SULFURASITEM,
      -1,
      80,
      BACKSTAGEPASSITEM,
      5,
      37,
      BACKSTAGEPASSITEM,
      0,
      50,
      BACKSTAGEPASSITEM,
      -5,
      0,
      CONJUREDITEM,
      -7,
      0,
    ];
    result = new Array(
      gildedRose.items[0].name,
      gildedRose.items[0].sellIn,
      gildedRose.items[0].quality,
      gildedRose.items[1].name,
      gildedRose.items[1].sellIn,
      gildedRose.items[1].quality,
      gildedRose.items[2].name,
      gildedRose.items[2].sellIn,
      gildedRose.items[2].quality,
      gildedRose.items[3].name,
      gildedRose.items[3].sellIn,
      gildedRose.items[3].quality,
      gildedRose.items[4].name,
      gildedRose.items[4].sellIn,
      gildedRose.items[4].quality,
      gildedRose.items[5].name,
      gildedRose.items[5].sellIn,
      gildedRose.items[5].quality,
      gildedRose.items[6].name,
      gildedRose.items[6].sellIn,
      gildedRose.items[6].quality,
      gildedRose.items[7].name,
      gildedRose.items[7].sellIn,
      gildedRose.items[7].quality,
      gildedRose.items[8].name,
      gildedRose.items[8].sellIn,
      gildedRose.items[8].quality
    );
    expect(result).toEqual(expected);
  });
});
