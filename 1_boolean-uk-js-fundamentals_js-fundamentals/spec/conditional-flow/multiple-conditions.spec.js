const {a, b, c} = require('../../src/conditional-flow/multiple-conditions')

describe("Multiple Conditions isInRange:", () => {
  it("4 is between 1 and 6", () => {
    expect(a(4, 1, 6)).toEqual(true)
  })
  it("10 is not between 1 and 5", () => {
    expect(a(10, 1, 5)).toEqual(false)
  })
  it("10 is between 1 and 10", () => {
    expect(a(10, 1, 10)).toEqual(true)
  })
  it("8 is between 8 and 8", () => {
    expect(a(8, 8, 8)).toEqual(true)
  })
})

describe("Multiple Conditions isHelloOrGoodbye:", () => {
  it("'Hello' returns true", () => {
    expect(b('Hello')).toEqual(true)
  })

  it("'Hey!' returns false", () => {
    expect(b('Hey!')).toEqual(false)
  })

  it("'Goodbye' returns true", () => {
    expect(b('Goodbye')).toEqual(true)
  })
})
  
describe("Multiple Conditions getAgeDescription:", () => {
  it("0 is a Baby", () => {
    expect(c(0)).toEqual("Baby")
  })
  it("1-4 is a Toddler", () => {
    expect(c(1)).toEqual("Toddler")
    expect(c(2)).toEqual("Toddler")
    expect(c(3)).toEqual("Toddler")
    expect(c(4)).toEqual("Toddler")
  })
  it("5-12 is a Child", () => {
    expect(c(5)).toEqual("Child")
    expect(c(6)).toEqual("Child")
    expect(c(7)).toEqual("Child")
    expect(c(9)).toEqual("Child")
    expect(c(10)).toEqual("Child")
    expect(c(11)).toEqual("Child")
    expect(c(12)).toEqual("Child")
  })
  it("13-19 is a Teenager", () => {
    expect(c(13)).toEqual("Teenager")
    expect(c(14)).toEqual("Teenager")
    expect(c(15)).toEqual("Teenager")
    expect(c(16)).toEqual("Teenager")
    expect(c(17)).toEqual("Teenager")
    expect(c(18)).toEqual("Teenager")
    expect(c(19)).toEqual("Teenager")
  })
  it("20+ is an Adult", () => {
    expect(c(20)).toEqual("Adult")
    expect(c(25)).toEqual("Adult")
    expect(c(40)).toEqual("Adult")
  })

})
