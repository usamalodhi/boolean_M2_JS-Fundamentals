const example = require('../../../src/data-types/arrays/example.js')

describe("Arrays example", () => {
  it("Array Example'", () => {
    expect(example.a).toEqual("This is the first item")
    expect(example.b).toEqual("This is the second item")
    expect(example.c).toEqual(2)
    expect(example.d).toEqual([1,2,3])
    expect(example.e).toEqual(["a","b","c","d"])
    expect(example.f).toEqual([100, 101, 102])
  })
})
