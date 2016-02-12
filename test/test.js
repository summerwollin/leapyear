var code = require('../main');
var expect = require('chai').expect;

describe("leapYear", function() {
  it("returns true if divisible by 4", function() {
    expect(code.leapYear(2016)).to.equal(true)
  })
  it("returns false if divisible by 100 and not 400", function() {
    expect(code.leapYear(1800)).to.equal(false)
  })
})
