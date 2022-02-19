const Article = require('../src/Article.js')

describe("Article", () => {
  let article
  beforeEach(() => {
    article = new Article('My Lovely Book')
  })

  describe('#constructor', () => {
    it('has a title', () => {
      expect(article.title).toEqual('My Lovely Book')
    })

    it('is not on loan', () => {
      expect(article.isOnLoan()).toEqual(false)
    })
  })

  describe('#checkOut', () => {
    it ('sets the article to be on loan', () => {
      article.checkOut()
      expect(article.isOnLoan()).toEqual(true)
    })

    it ('raises an error if the article is already on loan', () => {
      article.checkOut()
      expect(() => article.checkOut()).toThrowError('item is currently on loan')
    })
  })

  describe('#checkIn', () => {
    it ('sets the article to not be on loan', () => {
      article.checkOut()
      article.checkIn()
      expect(article.isOnLoan()).toEqual(false)
    })

    it ('raises an error if the article is not on loan', () => {
      expect(() => article.checkIn()).toThrowError('item is not currently on loan')
    })
  })
})
