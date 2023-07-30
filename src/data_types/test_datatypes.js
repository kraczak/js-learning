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


describe("slice", function () {

    it("slice without end returns whole string starting from the beginning", function () {
        let str = "Hello World";
        assert.equal(str.slice(1), str.slice(1, str.length));
    });
});


describe("checkSpam", function () {

    it("string contains ViAgRA", function () {
        let str = "buy ViAgRA now";
        assert.isTrue(checkSpam(str));
    });

    it("string contains xxxxx", function () {
        let str = "free xxxxx";
        assert.isTrue(checkSpam(str));
    });

    it("string does not contain variation of viagra nor xxx", function () {
        let str = "innocent rabbit";
        assert.isFalse(checkSpam(str));
    });
});


describe("truncate", function () {

    it("truncates too long string", function () {
        let str = "What I'd like to tell on this topic is:";
        let expected = "What I'd like to te...";
        let maxLength = 20;
        assert.equal(truncate(str, maxLength), expected);
    });

    it("does not change shorter string", function () {
        let str = "Hi everyone!";
        let expected = str;
        let maxLength = 20;
        assert.equal(truncate(str, maxLength), expected);
    });

});

describe("extractCurrencyValue", function () {

    it("extracts currency value from $120", function () {
        let str = "$120";
        let expected = 120;
        assert.equal(extractCurrencyValue(str), expected);
    });
});


describe("getMaxSubSum", function () {

    it("calculates 5 from [-1, 2, 3, -9]", function () {
        let arr = [-1, 2, 3, -9];
        let expected = 5;
        assert.equal(getMaxSubSum(arr), expected);
    });

    it("calculates 6 from [2, -1, 2, 3, -9]", function () {
        let arr = [2, -1, 2, 3, -9];
        let expected = 6;
        assert.equal(getMaxSubSum(arr), expected);
    });

    it("calculates 11 from [-1, 2, 3, -9, 11]", function () {
        let arr = [-1, 2, 3, -9, 11];
        let expected = 11;
        assert.equal(getMaxSubSum(arr), expected);
    });

    it("calculates 3 from [-2, -1, 1, 2]", function () {
        let arr = [-2, -1, 1, 2];
        let expected = 3;
        assert.equal(getMaxSubSum(arr), expected);
    });

    it("calculates 100 from [100, -9, 2, -3, 5]", function () {
        let arr = [100, -9, 2, -3, 5];
        let expected = 100;
        assert.equal(getMaxSubSum(arr), expected);
    });

    it("calculates 6 from [1, 2, 3]", function () {
        let arr = [1, 2, 3];
        let expected = 6;
        assert.equal(getMaxSubSum(arr), expected);
    });

});


describe("Array", function () {

    context("splice", function () {
        it("removes 2 from [-1, 2, 3, -9]", function () {
            let arr = [-1, 2, 3, -9];
            let expectedArr = [-1, 3, -9];
            let expectedReturn = [2];

            assert.deepEqual(arr.splice(1, 1), expectedReturn)
            assert.equal(expectedArr, expectedArr);
        });

        it("splice(0, 2, 1, -2) removes first 3 elements from [-1, 2, 3, -9]  and replace them with [1, -2] gives [1, -2, 3, -9]", function () {
            let arr = [-1, 2, 3, -9];
            let expectedArr = [1, 2, 3, -9];
            let expectedReturn = [-1, 2];

            assert.deepEqual(arr.splice(0, 2, 1, -2), expectedReturn)
            assert.equal(expectedArr, expectedArr);
        });

        it("splice can insert value at position 2 with splice(2, 0, value)", function () {
            let arr = ["I", "study", "JavaScript"];
            let addArr = ["complex", "language"];
            let expectedArr = ["I", "study", ...addArr, "JavaScript"];
            let expectedReturn = [];

            assert.deepEqual(arr.splice(2, 0, ...addArr), expectedReturn)
            assert.equal(expectedArr, expectedArr);
        });
    });

    context('indexOf and includes and returns index=0', function () {
        it('finds 1 in [1, 2, 3]', function () {
            let arr = [1, 2, 3];
            let wanted = 1;
            let expected = 0;
            assert.equal(arr.indexOf(wanted), expected);
        });

        it('includes finds 1 in [1, 2, 3] and returns true', function () {
            let arr = [1, 2, 3];
            let wanted = 1;
            let expected = true;
            assert.equal(arr.includes(wanted), expected);
        });

        it('finds null in [1, null, 3]', function () {
            let arr = [1, null, 3];
            let wanted = null;
            let expected = 1;
            assert.equal(arr.indexOf(wanted), expected);
        });

        it('indexOf does not find NaN', function () {
            let arr = [1, NaN, 3];
            let wanted = NaN;
            let expected = true;
            assert.equal(arr.includes(wanted), expected);
        });

        it('includes finds NaN', function () {
            let arr = [1, NaN, 3];
            let wanted = NaN;
            let expected = -1;
            assert.equal(arr.indexOf(wanted), expected);
        });

        it('includes finds null in [1, null, 3] and returns true', function () {
            let arr = [1, null, 3];
            let wanted = null;
            let expected = true;
            assert.equal(arr.includes(wanted), expected);
        });


        it('does not find 5 in [1, 2, 3] so returns -1', function () {
            let arr = [1, 2, 3];
            let wanted = 5;
            let expected = -1;
            assert.equal(arr.indexOf(wanted), expected);
        });

        it('[1, 2, 3] does not include 5 and returns false', function () {
            let arr = [1, 2, 3];
            let wanted = 5;
            let expected = false;
            assert.equal(arr.includes(wanted), expected);
        });

    });

    context('find', function () {
        it('finds first element greater that 3 in [1, 2, 3, 4, 5] and returns it', function () {
            let arr = [1, 2, 3, 4, 5];
            let expected = 4;
            let result = arr.find(item => item > 3);
            assert.equal(result, expected);
        });

        it('finds John in [{name: "John"}, {name: "Pete"}, {name: "Mary"}]', function () {
            let name = 'John';
            let users = [
                {id: 1, name: name},
                {id: 2, name: "Pete"},
                {id: 3, name: "Mary"}
            ];

            let user = users.find(item => item.name == name);
            assert.deepEqual(user, {id: 1, name: "John"});
        });

        it('does not find John in [{name: "Pete"}, {name: "Mary"}] so returns undefined', function () {
            let name = 'John';
            let users = [{name: "Pete"}, {name: "Mary"}];
            let expected = undefined;
            let user = users.find(item => item.name == name);
            assert.equal(user, expected);
        });
    });

    context('filter', function () {
        it('filters even numbers from [0, 1, 2, 3, 4, 5] and returns [0, 2, 4]', function () {
            let arr = Array.from(Array(6).keys());
            let expected = [0, 2, 4];
            let result = arr.filter(item => item % 2 == 0);
            assert.deepEqual(result, expected);
        });

        it('filters non Johns from list and returns only Johns', function () {
            let users = [
                {id: 1, name: "John"},
                {id: 2, name: "Pete"},
                {id: 3, name: "Mary"},
                {id: 4, name: "John"}
            ];
            let expected = [{id: 1, name: "John"}, {id: 4, name: "John"}]
            let result = users.filter(item => item.name == "John");
            assert.deepEqual(result, expected);
        });
    });

    context('map', function () {
        it('multiplies even numbers from [0, 1, 2, 3, 4, 5] and returns [0, 2, 4, 6, 8, 10]', function () {
            let arr = Array.from(Array(6).keys());
            let expected = [0, 2, 4, 6, 8, 10];
            let result = arr.map(item => 2 * item);
            assert.deepEqual(result, expected);
        });

        it('maps John to Joe and other names to Mama', function () {
            let users = [
                {id: 1, name: "John"},
                {id: 2, name: "Pete"},
                {id: 3, name: "Mary"},
                {id: 4, name: "John"}
            ];
            let expected = [
                {id: 1, name: "Joe"},
                {id: 2, name: "Mama"},
                {id: 3, name: "Mama"},
                {id: 4, name: "Joe"}
            ]
            let result = users.map(item => (item.name == "John") ? {id: item.id, name: "Joe"} : {
                id: item.id,
                name: "Mama"
            });
            assert.deepEqual(result, expected);
        });
    });

    context('sort', function () {
        it('sorts list in place [3, 2, 1, 0] is now [0, 1, 2, 3]', function () {
            let arr = Array.from(Array(4).keys());
            let expectedBefore = [3, 2, 1, 0];
            let expectedAfter = [0, 1, 2, 3];
            arr.reverse();
            assert.deepEqual(arr, expectedBefore);
            arr.sort();
            assert.deepEqual(arr, expectedAfter);
        });

        it('converts elements to string so [1, 2, 15] is sorted to [1, 15, 2]', function () {
            let arr = [1, 2, 15];
            let expected = [1, 15, 2];
            arr.sort();
            assert.deepEqual(arr, expected);
        });

        it('pass numeric comparison to sort numeric values', function () {
            let arr = [1, 2, 15];
            let expected = [1, 2, 15];
            arr.sort((a, b) => a - b);
            assert.deepEqual(arr, expected);
        });

    });

    context('reduce', function () {
        it('cumulative sum of [0, 1, 2, 3] is 6', function () {
            let arr = [0, 1, 2, 3];
            let result = arr.reduce((sum, current) => sum + current, 0);
            let expected = 6;
            assert.equal(result, expected);
        });

        it('Group by id', function () {
            let users = [
                {id: 'john', name: "John Smith", age: 20},
                {id: 'ann', name: "Ann Smith", age: 24},
                {id: 'pete', name: "Pete Peterson", age: 31},
            ];

            let usersById = groupById(users);
            let expected = {
                john: {id: 'john', name: "John Smith", age: 20},
                ann: {id: 'ann', name: "Ann Smith", age: 24},
                pete: {id: 'pete', name: "Pete Peterson", age: 31},
            };
            assert.deepEqual(usersById, expected);
        });

        it('Group by id works with empty object as well', function () {
            let users = [];

            let usersById = groupById(users);
            console.log(JSON.stringify(usersById, null, 2));
            let expected = {};
            assert.deepEqual(usersById, expected);
        });
    });

});

describe('Tasks', function () {
    context('camelize', function () {
        it('camelize("background-color") == "backgroundColor"', function () {
            assert.equal(camelize("background-color"), "backgroundColor");
        });
        it('camelize("list-style-image") == "listStyleImage"', function () {
            assert.equal(camelize("list-style-image"), "listStyleImage");
        });
        it('camelize("-webkit-transition") == "WebkitTransition"', function () {
            assert.equal(camelize("-webkit-transition"), "WebkitTransition");
        });
    });

    context('camelizeV2', function () {
        it('camelize("background-color") == "backgroundColor"', function () {
            assert.equal(camelizeV2("background-color"), "backgroundColor");
        });
        it('camelize("list-style-image") == "listStyleImage"', function () {
            assert.equal(camelizeV2("list-style-image"), "listStyleImage");
        });
        it('camelize("-webkit-transition") == "WebkitTransition"', function () {
            assert.equal(camelizeV2("-webkit-transition"), "WebkitTransition");
        });
    });

    context('camelizeMap', function () {
        it('camelize("background-color") == "backgroundColor"', function () {
            assert.equal(camelizeMap("background-color"), "backgroundColor");
        });
        it('camelize("list-style-image") == "listStyleImage"', function () {
            assert.equal(camelizeMap("list-style-image"), "listStyleImage");
        });
        it('camelize("-webkit-transition") == "WebkitTransition"', function () {
            assert.equal(camelizeMap("-webkit-transition"), "WebkitTransition");
        });
    });

    context('filterRange', function () {
        it('[5, 3, 8, 1] with range(1, 4) filters to [3, 1]', function () {
            let arr = [5, 3, 8, 1];
            let expected = [3, 1];
            assert.deepEqual(filterRange(arr, 1, 4), expected);
        });

        it('does not change the array', function () {
            let arr = [5, 3, 8, 1];
            let expected = [5, 3, 8, 1];
            filterRange(arr, 1, 4)
            assert.deepEqual(arr, expected);
        });
    });

    context('filterRangeInPlace', function () {
        it('[5, 3, 8, 1] with range(1, 4) filters to [3, 1]', function () {
            let arr = [5, 3, 8, 1];
            let expected = [3, 1];
            filterRangeInPlace(arr, 1, 4)
            assert.deepEqual(arr, expected);
        });

        it('does change the array [5, 3, 8, 1] with range(1, 4) filters to [3, 1]', function () {
            let arr = [5, 3, 8, 1];
            let expected = [3, 1];
            filterRangeInPlace(arr, 1, 4)
            assert.deepEqual(arr, expected);
        });
    });

    context('sort', function () {
        it('desc order [5, 3, 8, 1] becomes [8, 5, 3, 1]', function () {
            let arr = [5, 3, 8, 1];
            let expected = [8, 5, 3, 1];
            arr.sort((a, b) => b - a);
            assert.deepEqual(arr, expected);
        });

        it('sortByAge', function () {
            let john = {name: "John", age: 25};
            let pete = {name: "Pete", age: 30};
            let mary = {name: "Mary", age: 28};

            let arr = [pete, john, mary];
            let expected = [john, mary, pete];
            arr.sort((a, b) => a.age - b.age);
            assert.deepEqual(arr, expected);
        });
    });

    context('copySorted', function () {
        it('[5, 3, 8, 1] is not changed but returns [1, 3, 5, 8]', function () {
            let arr = [5, 3, 8, 1];
            let arrExpected = [5, 3, 8, 1];
            let expected = [1, 3, 5, 8];
            let result = copySorted(arr);
            assert.deepEqual(result, expected);
            assert.deepEqual(arr, arrExpected);
        });
    });

    context('Calculator', function () {

        let calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });

        it('can add without adding addition method', function () {
            assert.equal(calculator.calculate('2+2'), 4)
        });

        it('can subtract without adding addition method', function () {
            assert.equal(calculator.calculate('2-3'), -1)
        });

        it('returns NaN if a or b is not numeric', function () {
            assert.isNaN(calculator.calculate('s-4'));
            assert.isNaN(calculator.calculate('4-s'));
        });

        it('returns NaN if result is not a number', function () {
            assert.isNaN(calculator.calculate('1/0'));
        });

        it('returns NaN if a or b is NaN', function () {
            assert.isNaN(calculator.calculate('NaN - 0'));
        });

        it('adds method of multiplication and can multiply', function () {
            let symbol = '*';
            let method = (a, b) => a * b;
            calculator.addMethod(symbol, method);
            assert.equal(calculator.methods[symbol], method);
            assert.equal(calculator.calculate('2*3'), 6);
        });
    });

    context('map', function () {
        it('map list of objects with name property to list of names', function () {
            let john = {name: "John", age: 25};
            let pete = {name: "Pete", age: 30};
            let mary = {name: "Mary", age: 28};

            let users = [john, pete, mary];
            let expected = ["John", "Pete", "Mary"];
            let result = users.map(user => user.name);
            assert.deepEqual(result, expected);
        });

        it('map list of objects with name and surname property to list of objects with full name property', function () {
            let john = {name: "John", surname: "Smith", id: 1};
            let pete = {name: "Pete", surname: "Hunt", id: 2};
            let mary = {name: "Mary", surname: "Key", id: 3};

            let users = [john, pete, mary];
            let expected = [
                {fullName: "John Smith", id: 1},
                {fullName: "Pete Hunt", id: 2},
                {fullName: "Mary Key", id: 3}

            ];
            let result = users.map(user => {
                return {fullName: `${user.name} ${user.surname}`, id: user.id}
            });
            assert.deepEqual(result, expected);
        });
    });
    context('shuffle an array', function () {

        it('shuffles and array', function () {
            let arr = [5, 11, 13, 217];
            let expected = arr.reduce((acc, x) => acc + x, 0) / arr.length;
            let result = arr.map(_ => 0);
            let n = 10000;
            for (let i = 0; i < n; i++) {
                shuffle(arr)
                for (let j = 0; j < arr.length; j++) {
                    result[j] += arr[j]
                }
            }
            result = result.map(x => x / n);

            result.map(x => assert.closeTo(x, expected, 0.05 * expected));
        });
    });

    context('reduce', function () {
        it('calculate average age', function () {
            let john = {name: "John", age: 25};
            let pete = {name: "Pete", age: 30};
            let mary = {name: "Mary", age: 29};

            let arr = [john, pete, mary];
            let expected = (25 + 30 + 29) / 3;
            let averageAge = arr.reduce((acc, user) => acc + user.age, 0) / arr.length
            assert.equal(averageAge, expected);
        });
    });


    context('unique strings from list', function () {
        it('returns unique strings', function () {
            let strings = ["Hare", "Krishna", "Hare", "Krishna",
                "Krishna", "Krishna", "Hare", "Hare", ":-O"
            ];
            let expected = ["Hare", "Krishna", ":-O"];
            let result = unique(strings);
            assert.deepEqual(result, expected);
        });

        it('returns unique strings using Set', function () {
            let strings = ["Hare", "Krishna", "Hare", "Krishna",
                "Krishna", "Krishna", "Hare", "Hare", ":-O"
            ];
            let expected = ["Hare", "Krishna", ":-O"];
            let result = [...new Set(expected)];
            assert.deepEqual(result, expected);
        });

        it('returns unique anagrams', function () {
            let strings = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
            let expected = ['PAN', 'hectares', 'era'];
            let map = new Map(
                strings.map(str => [str.toLowerCase().split('').sort().join(''), str])
            );
            let result = [...map.values()];
            assert.deepEqual(result, expected);

        });
    });

    context('Object.keys()', function () {
        it('calculate salaries for all employees', function () {
            let salaries = {
                "John": 100,
                "Pete": 300,
                "Mary": 250
            };
            let expected = 650;
            // method 1
            let sum = 0;
            for (let salary of Object.values(salaries)) {
                sum += salary;
            }
            assert.deepEqual(sum, expected);

            // method 2
            sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
            assert.deepEqual(sum, expected);
        });

        it('returns the number of properties in the object', function() {
            let user = {
                name: 'John',
                age: 30
            };
            let expected = 2;
            let result = Object.keys(user).length;
            assert.equal(result, expected);
        });

    });

    context('Destructing assignment', function () {
        it('destructs object into variables', function () {
            let user = { name: "John", years: 30 };
            let {name, years, isAdmin = false} = user;
            assert.equal(name, 'John');
            assert.equal(years, 30);
            assert.equal(isAdmin, false);
        });

        it('destructs object to get name of the guy who earns the most', function () {
            let salaries = {
                "John": 100,
                "Pete": 300,
                "Mary": 250
            };
            assert.equal(topSalary(salaries), 'Pete');
        });

        it('if empty object returns null', function () {
            let salaries = {};
            assert.equal(topSalary(salaries), null);
        });

    });

});