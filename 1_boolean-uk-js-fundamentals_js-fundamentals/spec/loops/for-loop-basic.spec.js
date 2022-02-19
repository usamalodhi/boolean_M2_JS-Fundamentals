const { a, b, c, d } = require('../../src/loops/for-loop-basic')

describe('For Loop Basic:', () => {
  it('numsZeroToThree should contain numbers zero to three', () => {
    expect(a).toEqual([0,1,2,3])
  })

  it('numsFiveToTen should contain numbers from 5 to 10', () => {
    expect(b).toEqual([5,6,7,8,9,10])
  })

  it('evenNums should contain 0,2,4,6', () => {
    expect(c).toEqual([0,2,4,6])
  })

  it('countdown should contain 3,2,1,0', () => {
    expect(d).toEqual([3,2,1,0])
  })
})
