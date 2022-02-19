const fizzBuzz = require('../src/fizzbuzz.js')

describe("FizzBuzz", () => {  
  it("returns [1, 2] for (1, 2)", () => {
    expect(fizzBuzz(1,2)).toEqual([1,2])
  })

  it("returns ['Fizz', 52, 53, 'Fizz'] for (51, 54)", () => {
    expect(fizzBuzz(51,54)).toEqual(['Fizz', 52, 53, 'Fizz'])
  })

  it("returns [1, 2, 'Fizz'] for (1, 3)", () => {
    expect(fizzBuzz(1,3)).toEqual([1,2,'Fizz'])
  })

  it("returns ['Fizz', 'Buzz', 11, 'Fizz'] for (9, 12)", () => {
    expect(fizzBuzz(9,12)).toEqual(['Fizz','Buzz',11,'Fizz'])
  })

  it("returns [4, 'Buzz', 'Fizz'] for (4, 6)", () => {
    expect(fizzBuzz(4,6)).toEqual([4,'Buzz','Fizz'])
  })

  it("returns [13, 14, 'FizzBuzz'] for (13, 15)", () => {
    expect(fizzBuzz(13,15)).toEqual([13, 14,'FizzBuzz'])
  })
})