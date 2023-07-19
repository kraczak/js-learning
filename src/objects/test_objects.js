'use strict';

describe("isEmpty", function () {
    it("Returns true for an empty object", function () {
        assert.isTrue(isEmpty({}));
    });

    it("Returns false for a non-empty object", function () {
        assert.isFalse(isEmpty({name: "John"}));
    });

    it("Returns false for an object with undefined field", function () {
        assert.isFalse(isEmpty({name: undefined}));
    });
});
describe("sumObjectProperties", function () {
    it("Returns the sum of all object properties", function () {
        assert.equal(sumObjectProperties({a: 1, b: 2, c: 3}), 6);
    });

    it("Returns 0 for an empty object", function () {
        assert.equal(sumObjectProperties({}), 0);
    });

    it("Returns 1 for an object with undefined field", function () {
        assert.equal(sumObjectProperties({a: undefined, b: 1}), 1);
    });

    it("Returns 1 for an object with null field", function () {
        assert.equal(sumObjectProperties({a: null, b: 1}), 1);
    });
});


describe("multipleNumeric", function () {
    it("Returns the sum of all object properties", function () {
        assert.deepEqual(multipleNumeric({a: 1, b: 2, c: 3}), {a: 2, b: 4, c: 6});
    });

    it("Empty object is not modified", function () {
        assert.deepEqual(multipleNumeric({}), {});
    });

    it("undefined is not multiplied", function () {
        assert.deepEqual(multipleNumeric({a: undefined, b: 1}), {a: undefined, b: 2});
    });

    it("null is not multiplied", function () {
        assert.deepEqual(multipleNumeric({a: null, b: 1}), {a: null, b: 2});
    });

    it("string is not multiplied", function () {
        assert.deepEqual(multipleNumeric({a: 'null', b: 1}), {a: 'null', b: 2});
    });
});

describe('calculator', function () {

    context('when 2 and 3 entered', function () {
        beforeEach(function () {
            sinon.stub(window, "prompt");

            prompt.onCall(0).returns("2");
            prompt.onCall(1).returns("3");

            calculator.read();
        });

        afterEach(function () {
            prompt.restore();
        });

        it("reads numbers 2 and 3", function () {
            assert.equal(calculator.first, 2);
            assert.equal(calculator.second, 3);
        });

        it('the sum is 5', function () {
            assert.equal(calculator.sum(), 5)
        });

        it('the multiplication is 6', function () {
            assert.equal(calculator.mul(), 6)
        });
    })
});


describe('NewCalculator', function () {
    let calculator;
    context('when 2 and 3 entered', function () {
        beforeEach(function () {
            sinon.stub(window, "prompt");

            prompt.onCall(0).returns("2");
            prompt.onCall(1).returns("3");

            calculator = new Calculator();
            calculator.read();
        });

        afterEach(function () {
            prompt.restore();
        });

        it("reads numbers 2 and 3", function () {
            assert.equal(calculator.first, 2);
            assert.equal(calculator.second, 3);
        });

        it('the sum is 5', function () {
            assert.equal(calculator.sum(), 5)
        });

        it('the multiplication is 6', function () {
            assert.equal(calculator.mul(), 6)
        });
    })
});


describe('ladder', function () {

    before(function () {
        sinon.stub(window, "alert");
    });

    beforeEach(function () {
        ladder.step = 0;
    });

    after(function () {
        sinon.restore();
    });

    it('up one step', function () {
        ladder.up();
        assert.equal(ladder.step, 1)
    });

    it('down one step', function () {
        ladder.down();
        assert.equal(ladder.step, -1)
    });

    it('ladder multiple steps up', function () {
        ladder.up().up().up();
        assert.equal(ladder.step, 3)
    });

    it('ladder multiple steps down', function () {
        ladder.down().down().down();
        assert.equal(ladder.step, -3)
    });

    it('ladder showStep() should call alert', function () {
        ladder.showStep();
        assert(alert.called);
    });

    it('ladder multiple steps up and down and showStep should return this', function () {
        ladder.down().up().showStep().down().showStep().up();
        assert.equal(ladder.step, 0)
    });

});


describe("Accumulator", function () {
    let accumulator;
    let fakeRead = (value) => {
        prompt.returns(value);
        accumulator.read();
    }

    before(function () {
        sinon.stub(window, "prompt");
    });

    beforeEach(function () {
        accumulator = new Accumulator(5);
    });

    after(function () {
        sinon.restore();
    });

    it("initial value is 5", function () {
        assert.equal(accumulator.value, 5);
    });

    it("after reading 0, the value is 5", function () {
        fakeRead("0");
        assert.equal(accumulator.value, 5);
    });

    it("after reading 1, the value is 6", function () {
        fakeRead("1");
        assert.equal(accumulator.value, 6);
    });

    it("after reading -2, the value is 7", function () {
        fakeRead("-2");
        assert.equal(accumulator.value, 3);
    });
});