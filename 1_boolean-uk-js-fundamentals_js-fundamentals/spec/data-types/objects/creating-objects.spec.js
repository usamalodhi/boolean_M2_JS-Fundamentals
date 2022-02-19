const answers = require('../../../src/data-types/objects/creating-objects.js')

describe('Creating Objects:', () => {
  it('Person should be an object with the name "Jane"', () => {
    expect(answers.person.name).toEqual('Jane')
  })

  it('Person should be an object with the age 32', () => {
    expect(answers.person.age).toEqual(32)
  })

  it('Computer should be an object with the form "laptop"', () => {
    expect(answers.computer.form).toEqual("laptop")
  })

  it('Computer.specs should be an object with a memory "16GB" and storage "1TB"', () => {
    expect(answers.computer.specs).toEqual({memory: "16GB", storage: "1TB"})
  })
})
