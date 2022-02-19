const LibraryCatalogue = require("../src/LibraryCatalogue.js")

describe("LibraryCatalogue", () => {
  let catalogue, book
  beforeEach(() => {
    catalogue = new LibraryCatalogue()
    book = jasmine.createSpyObj("book", ["checkIn", "checkOut"])
  })

  describe("#constructor", () => {
    it('starts with an empty list', () => {
      expect(catalogue.items).toEqual([])
    })
  })

  describe('#addToStock', () => {
    it('adds an item to the item list', () => {
      catalogue.addToStock(book)
      expect(catalogue.items.includes(book)).toEqual(true)
    })
  })

  describe ('#checkOut', () => {
    it('checks out an item in stock', () => {
      catalogue.addToStock(book)
      catalogue.checkOut(book)
      expect(book.checkOut).toHaveBeenCalled()
    })

    it('raises an error if an item is not in stock', () => {
      expect(() => catalogue.checkOut(book)).toThrowError('item is not available')
    })
  })

  describe ('#checkIn', () => {
    it('checks in an item', () => {
      catalogue.addToStock(book)
      catalogue.checkIn(book)
      expect(book.checkIn).toHaveBeenCalled()
    })

    it('raises an error if an item is not in stock', () => {
      expect(() => catalogue.checkIn(book)).toThrowError('item is not available')
    })
  })
})
