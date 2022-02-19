const answers = require('../../../src/data-types/objects/object-keys.js')

describe('Objects Keys:', () => {
  it('name should be equal to the book name', () => {
    expect(answers.name).toEqual('Clean Code')
  })

  it('ISBN 10 should be equal to the book\'s ISBN 10 number', () => {
    expect(answers.isbn10).toEqual('9780132350884')
  })

  it('Book category should be Programming', () => {
    expect(answers.book.category).toEqual('Programming')
  })

  it('Book pages should be 464', () => {
    expect(answers.book.pages).toEqual(464)
  })

  it('Book ISBN 13 should be 978-0132350884', () => {
    expect(answers.book.isbn.isbn13).toEqual('978-0132350884')
  })

  it('Book should not contain the dimensions key - it should be deleted', () => {
    expect(answers.book.dimensions).not.toBeDefined()
  })

  it('Book should not contain the asin key - it should be deleted', () => {
    expect(answers.book.isbn.asin).not.toBeDefined()
  })
})
