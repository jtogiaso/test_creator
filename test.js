var expect = require("chai").expect;
let api_controller = require("./app/controllers/api_controller.js");

describe("Score Calculator", function() {
  it("Should return a 2 decimal fixed number less than or equal to 100, like a score for a test", function() {
    expect(api_controller.calculate_score(
      [
        {
          correct_answer: false
        },
        {
          correct_answer: true
        },
        {
          correct_answer: false
        },
        {
          correct_answer: true
        },
        {
          correct_answer: true
        },
        {
          correct_answer: false
        }

      ]
    )).to.equal(50.00);
  });

  it("should throw when not passed a correctly formatted array", function() {
    expect(function() {
      multiply({not: "sense", corrext: "4"});
    }).to.throw(Error);
  });
});
