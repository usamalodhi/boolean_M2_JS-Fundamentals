const AssertionList = require("../src/AssertionList.js")
const Equal = require("../src/Equal.js")
const Include = require("../src/Include.js")

fdescribe("AssertionList", () => {
  describe("#check()", () => {
    it("returns true when assertions are true", () => {
      const equalAssertion = new Equal(1, 1)
      const includeAssertion = new Include([1,2,3], 3)
      const assertionList = new AssertionList([equalAssertion, includeAssertion])

      expect(assertionList.checkAll()).toEqual(true)
    })

    it("returns false when at least 1 assertion is false", () => {
      const equalAssertion = new Equal(1, 2)
      const includeAssertion = new Include([1,2,3], 3)
      const assertionList = new AssertionList([equalAssertion, includeAssertion])

      expect(assertionList.checkAll()).toEqual(false)
    })
  })
})
