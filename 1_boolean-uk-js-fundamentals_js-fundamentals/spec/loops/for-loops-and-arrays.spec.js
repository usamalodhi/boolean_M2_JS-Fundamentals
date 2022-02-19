const { a, b, c, d, e } = require('../../src/loops/for-loop-and-arrays')

describe('For Loops and Arrays:', () => {
  it('sum of nums should be 43', () => {
    expect(a).toEqual(43)
  })

  it('doubledNums should be 2,6,24,10,2,12,8,2,20', () => {
    expect(b).toEqual([2,6,24,10,2,12,8,2,20])
  })

  it('word should be "Hello"', () => {
    expect(c).toEqual('Hello')
  })

  it('everySecondNum should be 3,5,6,1', () => {
    expect(d).toEqual([3,5,6,1])
  })

  it('numsReversed should be 10,1,4,6,1,5,12,3,1', () => {
    expect(e).toEqual([10,1,4,6,1,5,12,3,1])
  })
})
