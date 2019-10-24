var request = require("request"),
     assert = require('assert'),
     base_url = "http://localhost:3000/";

var subjectUnderTest = require("../index.js");

// for BDD, TDD we are using mocha and sinon
describe("base test", function() {
  // The first test is to make sure our server is returning an HTTP status of 200
  describe("testing the Get/ endpoint", function() {
    // test 1
    it("should return the 200 status code", function(done) {
      request.get(base_url, function(error, response, body) {
        result = response.statusCode;
        // asserts
        assert.equal(200, result);
      });

      done();
    });

    // test 2
    it("should return  Hello World as body", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(body).toBe("Hello World");
        assert.equal("Hello World", body);
        
        done();
      });
    });
  });
});
