const { a, b, c, d, e, f } = require('../../src/conditional-flow/string-conditions')

describe("String Conditions isHello:", () => {
  it("Returns false with 'goodbye'", () => {
    expect(a("goodbye")).toEqual(false)
  })
  it("Returns true with 'Hello'", () => {
    expect(a("Hello")).toEqual(true)
  })
})

describe("String Conditions isNotHello:", () => {
  it("Returns true with 'goodbye'", () => {
    expect(b("goodbye")).toEqual(true)
  })
  it("Returns false with 'Hello'", () => {
    expect(b("Hello")).toEqual(false)
  })
})

describe("String Conditions isLongerThan:", () => {
  it("'Mike' is longer than 'Ed'", () => {
    expect(c("Mike", "Ed")).toEqual(true)
  })
  it("'Mike' is not longer than 'Lewis'", () => {
    expect(c("Mike", "Lewis")).toEqual(false)
  })
  it("'Mike' is not longer than 'Mike'", () => {
    expect(c("Mike", "Mike")).toEqual(false)
  })
})

describe("String Conditions hasOddNumberVowels:", () => {
  it("'Alex' does not have odd number vowels", () => {
    expect(d("Alex")).toEqual(false)
  })
  it("'Mo' does have odd number vowels", () => {
    expect(d("Mo")).toEqual(true)
  })
  it("'Joanna' does have odd number vowels", () => {
    expect(d("Joanna")).toEqual(true)
  })
  it("'Maggie Smith' does not have odd number vowels", () => {
    expect(d("Maggie Smith")).toEqual(false)
  })
})

describe("String conditions getMiddleLetter:", () => {
  it("'Alex' returns 'le'", () => {
    expect(e("Alex")).toEqual('le')
  })
  it("'Edward' returns 'wa'", () => {
    expect(e("Edward")).toEqual('wa')
  })
  it("'Kayla' returns 'y'", () => {
    expect(e("Kayla")).toEqual('y')
  })
  it("'Tom' returns 'o'", () => {
    expect(e("Tom")).toEqual('o')
  })
})

describe('String conditions seasonForMonth:', () => {
  it('January is Winter', () => {
    expect(f('January')).toEqual('Winter')
  })
  it('February is Winter', () => {
    expect(f('February')).toEqual('Winter')
  })
  it('March is Spring', () => {
    expect(f('March')).toEqual('Spring')
  })
  it('April is Spring', () => {
    expect(f('April')).toEqual('Spring')
  })
  it('May is Spring', () => {
    expect(f('May')).toEqual('Spring')
  })
  it('June is Summer', () => {
    expect(f('June')).toEqual('Summer')
  })
  it('July is Summer', () => {
    expect(f('July')).toEqual('Summer')
  })
  it('August is Summer', () => {
    expect(f('August')).toEqual('Summer')
  })
  it('September is Autumn', () => {
    expect(f('September')).toEqual('Autumn')
  })
  it('October is Autumn', () => {
    expect(f('October')).toEqual('Autumn')
  })
  it('November is Autumn', () => {
    expect(f('November')).toEqual('Autumn')
  })
  it('December is Winter', () => {
    expect(f('December')).toEqual('Winter')
  })
  it('Marchprilvember is empty', () => {
    expect(f('Marchprilvember')).toEqual('')
  })
})

