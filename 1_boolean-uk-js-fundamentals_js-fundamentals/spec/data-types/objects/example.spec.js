const { a, b, c } = require('../../../src/data-types/objects/example')

describe('Example', () => {
  it('city name is London', () => {
    expect(a.name).toEqual('London')
  })

  it('city population is 9000000', () => {
    expect(a.population).toEqual(9000000)
  })

  it('name is Jane', () => {
    expect(b).toEqual('Jane')
  })

  it('user.level is view-only', () => {
    expect(c.level).toEqual('view-only')
  })

  it('user.email is jane@gmail.com', () => {
    expect(c.email).toEqual('jane@gmail.com')
  })
})
