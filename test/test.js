const assert = require('chai').assert;
const operations = require('../factorial');

// test factorial.js
describe("factorial", function() {

    it("3 factorial is 6", function() {
       assert.equal(operations.factorial(3), 6);
    });
   
    it("4 factorial is 24", function() {
       assert.equal(operations.factorial(4), 24);
    });
    it("6 factorial is 720", function() {
      assert.equal(operations.factorial(6), 720);
   });
   it("-2 factorial is NaN", function() {
      assert.equal(operations.factorial(-2), 'NaN');
   });
 });