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