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