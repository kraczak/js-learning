'use strict';


describe("advancedFunctions", function () {

    context('Recursion and stack', function () {
        context('recursivePow', function () {
            it('recursivePow(5, -2) = 1/25', function () {
                assert.closeTo(recursivePow(5, -2), 1 / 25, 0.01);
            });

            it('recursivePow(10, 0) = 1', function () {
                assert.equal(recursivePow(10, 0), 1);
            });

            it('recursivePow(10, 1) = 10', function () {
                assert.equal(recursivePow(10, 1), 10);
            });

            it('recursivePow(5, 5) = 3125', function () {
                assert.equal(recursivePow(5, 5), 3125);
            });
        });

        context('recursiveSumSalary', function () {
            it('recursiveSumSalary(obj) = 7700', function () {
                let company = {
                    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600}],
                    development: {
                        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
                        internals: [{name: 'Jack', salary: 1300}]
                    }
                };
                let salariesSum = recursiveSumSalaries(company);
                const expected = 7700;
                assert.equal(salariesSum, expected);
            });
        });
        context('Tasks', function () {
            context('sumTo', function () {
                it('recursive sumTo(1) = 1', function () {
                    assert.equal(sumTo(1), 1);
                });

                it('recursive sumTo(0) = 0', function () {
                    assert.equal(sumTo(0), 0);
                });

                it('recursive sumTo(6) = 21', function () {
                    assert.equal(sumTo(6), 21);
                });

                it('recursive sumTo(100) = 5050', function () {
                    assert.equal(sumTo(100), 5050);
                });

                it('recursive mathSumTo(1) = 1', function () {
                    assert.equal(mathSumTo(1), 1);
                });

                it('recursive mathSumTo(0) = 0', function () {
                    assert.equal(mathSumTo(0), 0);
                });

                it('recursive mathSumTo(6) = 21', function () {
                    assert.equal(mathSumTo(6), 21);
                });

                it('recursive mathSumTo(100) = 5050', function () {
                    assert.equal(mathSumTo(100), 5050);
                });
            });

            context('factorial', function () {
                it('factorial(0) = 1', function () {
                    assert.equal(factorial(0), 1);
                });
                it('factorial(1) = 1', function () {
                    assert.equal(factorial(1), 1);
                });
                it('factorial(5) = 120', function () {
                    assert.equal(factorial(5), 120);
                });
            });
            context('fibonacci', function () {
                it('fibonacci(0) = 0', function () {
                    assert.equal(fibonacci(0), 0);
                });
                it('fibonacci(1) = 1', function () {
                    assert.equal(fibonacci(1), 1);
                });
                it('fibonacci(3) = 2', function () {
                    assert.equal(fibonacci(3), 2);
                });
                it('fibonacci(7) = 13', function () {
                    assert.equal(fibonacci(7), 13);
                });

            });
            context('single-linked list', function () {
                it('single-linked list transformed to array - recursive', function(){
                    let list = {
                        value: 1,
                        next: {
                            value: 2,
                            next: {
                                value: 3,
                                next: {
                                    value: 4,
                                    next: null
                                }
                            }
                        }
                    };
                    const expected = [1, 2, 3, 4];
                    assert.deepEqual(listToArray(list), expected);
                });

                it('single-linked list transformed to array - loop based', function(){
                    let list = {
                        value: 1,
                        next: {
                            value: 2,
                            next: {
                                value: 3,
                                next: {
                                    value: 4,
                                    next: null
                                }
                            }
                        }
                    };
                    const expected = [1, 2, 3, 4];
                    assert.deepEqual(listToArrayLoop(list), expected);
                });


                it('reversed single-linked list transformed to array - recursive', function(){
                    let list = {
                        value: 1,
                        next: {
                            value: 2,
                            next: {
                                value: 3,
                                next: {
                                    value: 4,
                                    next: null
                                }
                            }
                        }
                    };
                    const expected = [4, 3, 2, 1];
                    assert.deepEqual(reverseListToArray(list), expected);
                });

                it('reversed single-linked list transformed to array - loop based', function(){
                    let list = {
                        value: 1,
                        next: {
                            value: 2,
                            next: {
                                value: 3,
                                next: {
                                    value: 4,
                                    next: null
                                }
                            }
                        }
                    };
                    const expected = [4, 3, 2, 1];
                    assert.deepEqual(reversedListToArrayLoop(list), expected);
                });
            });


        });


    });

    context('Variable scope, closure', function () {
        it('sum(1)(2) = 3', () => {
           assert.equal(sum(1)(2), 3);
        });

        it('sum(5)(-1) = 4', () => {
            assert.equal(sum(5)(-1), 4);
        });

        it('sumV2(1)(2) = 3', () => {
            assert.equal(sumV2(1)(2), 3);
        });

        it('sumV2(5)(-1) = 4', () => {
            assert.equal(sumV2(5)(-1), 4);
        });

        it('inBetween(3, 4) leaves only [3, 4]', () => {
            let arr = [1, 2, 3, 4, 5];
            let expected = [3, 4];
            assert.deepEqual(arr.filter(inBetween(3, 4)), expected);
        });

        it('inBetween(3, 6) leaves only [3, 4, 5, 6]', () => {
            let arr = [1, 2, 3, 4, 5, 6, 7];
            let expected = [3, 4, 5, 6];
            assert.deepEqual(arr.filter(inBetween(3, 6)), expected);
        });

        it('inBetweenV2(3, 4) leaves only [3, 4]', () => {
            let arr = [1, 2, 3, 4, 5];
            let expected = [3, 4];
            assert.deepEqual(arr.filter(inBetweenV2(3, 4)), expected);
        });

        it('inBetweenV2(3, 6) leaves only [3, 4, 5, 6]', () => {
            let arr = [1, 2, 3, 4, 5, 6, 7];
            let expected = [3, 4, 5, 6];
            assert.deepEqual(arr.filter(inBetweenV2(3, 6)), expected);
        });

        it('inArray([1, 2, 10]) leaves only [1, 2, 10, 10]', () => {
            let arr = [1, 2, 3, 4, 5, 6, 7, 10, 10];
            let filter = [1, 2, 10];
            let expected = [1, 2, 10, 10];
            assert.deepEqual(arr.filter(inArray(filter)), expected);
        });

        it('inArrayV2([1, 2, 10]) leaves only [1, 2, 10, 10]', () => {
            let arr = [1, 2, 3, 4, 5, 6, 7, 10, 10];
            let filter = [1, 2, 10];
            let expected = [1, 2, 10, 10];
            assert.deepEqual(arr.filter(inArrayV2(filter)), expected);
        });


    });

    context('The old "var"', function () {

    });

    context('Global object', function () {

    });

    context('Function object, NFE', function () {

    });

    context('The "new Function" syntax', function () {

    });

    context('Scheduling: setTimeout and setInterval', function () {

    });

    context('Decorators and forwarding, call/apply', function () {

    });

    context('Function binding', function () {

    });

    context('Arrow functions revisited', function () {

    });


});