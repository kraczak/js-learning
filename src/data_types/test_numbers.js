'use strict';


describe("randomNumber", function () {

    it("Returns a number between min and max", function () {
        let min = 1;
        let max = 10;
        let result = randomNumber(min, max);
        assert.isTrue(result >= min && result <= max);
    });

    it("Returns a number between min and max with expected mean", function () {
        let min = 1;
        let max = 10;
        let result = 0;
        let n = 1e4;

        for (let i = 0; i < n; i++) {
            result += randomNumber(min, max);
        }
        let expected = ((min + max) / 2).toFixed(2)
        assert.equal(+expected, (min + max) / 2);
    });

});


describe("randomInt", function () {

    it("Returns a number between min and max", function () {
        let min = 1;
        let max = 10;
        let result = randomInt(min, max);
        assert.isTrue(result >= min && result <= max);
        assert.isTrue(result === Math.floor(result));
    });

    it("Returns a number between min and max with expected mean", function () {
        let min = 1;
        let max = 10;
        let result = 0;
        let n = 1e4;

        for (let i = 0; i < n; i++) {
            result += randomNumber(min, max);
        }
        let expected = ((min + max) / 2).toFixed(2)
        assert.equal(+expected, (min + max) / 2);
    });

});