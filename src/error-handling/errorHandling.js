'use strict';


describe("classes", function () {

    context('Error handling "try...catch"', () => {
        it("error does not occured, then it is not caught", function () {
            try {} catch(err) {
                assert.isTrue(false, "error occurred");
            }
        });

        it("error occurred and was successfully caught", function () {
            try {
                throw TypeError("I am an error in matrix");
            } catch(err) {
                assert.isTrue(err instanceof TypeError);
                assert.isTrue({}.toString.call(err) === `[object Error]`);
            }
        });

        it("try...catch does not work for async functions", function () {
            try {
                asyncError()
            } catch(err) {
                assert.isTrue(false, "error occurred");
            }
        });

        it("error object has name, message, stack", function () {
            let message = "I am an error in matrix";

            try {
                throw new TypeError(message);
            } catch(err) {
                assert.equal(err.name, 'TypeError')
                assert.equal(err.message, message)
            }
        });

        it("rethrow not known errors", function () {
            let a;
            let throwMe = (err) => {
                try {
                    throw err;
                } catch(err) {
                    if (err instanceof TypeError) {
                        assert.isTrue(true);
                        return;
                    }
                    throw err;
                } finally {
                    a = 10;
                }
            }

            assert.throw(() => throwMe(new SyntaxError('lol')), SyntaxError);
            assert.equal(a, 10);
        });

        it("finally is run before return in try..[here]..catch", function () {
            let a;
            let throwMe = (err) => {
                try { return 1; } catch(err) {} finally { return 2; }
            }
            assert.equal(throwMe(), 2);
        });

    });


    context('Custom errors, extending Error', () => {
        class ValidationError extends Error {
            constructor(message) {
                super(message);
                this.name = "ValidationError";
            }
        }

        function throwValidationError() {
            throw new ValidationError("Whooops!");
        }

        it("ValidationError extends Error instanceof Error", function () {
            try {
                throwValidationError();
            } catch (err) {
                assert.isTrue(err instanceof Error);
                assert.isTrue(err instanceof ValidationError);
                assert.equal(err.name, "ValidationError");
                assert.equal(err.message, "Whooops!");
            }
        });
    });


});

