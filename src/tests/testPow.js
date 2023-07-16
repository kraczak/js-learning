'use strict';

describe("pow", function () {

    it("for non integer n the result is NaN", function() {
       assert.isNaN(pow(2, 1.5));
    });

    describe("raises 2 to different powers", function () {

        it("2 raised to power 3 is 8", function () {
            assert.equal(pow(2, 3), 8);
        });

        it("2 raised to power 0 is 1", function () {
            assert.equal(pow(2, 0), 1);
        });

        it("2 raised to power 2 is 2", function () {
            assert.equal(pow(2, 1), 2);
        });

        it("2 raised to power -2 is 1/4", function () {
            assert.equal(pow(2, -2), 1 / 4);
        });
    });

    describe("raises x to power 3", function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x < 5; x++) {
            makeTest(x);
        }
    });
});
