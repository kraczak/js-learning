'use strict';


describe("propertyFlags", function () {

    context('Object properties configuration', function () {
        // we can define new property with Object.defineProperty(obj, propertyName, descriptor)
        // sets the value to test_name, but remaining property attributes to false, i.e. writable, enumerable, configurable
        // writable is if property is mutable - can its value be edited
        // enumerable is if it enumerated in a for of loop
        // configurable is if property can be deleted and those options can be modified

        it('Property descriptor returns object with value, writable, enumerable, configurable', () => {

            const obj = {test: 'test'};
            const descriptor = Object.getOwnPropertyDescriptor(obj, 'test');
            const expected = {
                value: "test",
                writable: true,
                enumerable: true,
                configurable: true
            };
            assert.deepEqual(descriptor, expected)
        });

        it('Property can be defined with Object.defineProperty with `false` values for not specified flags', () => {

            const obj = {};
            Object.defineProperty(obj, 'test', {value: 'test'});
            const descriptor = Object.getOwnPropertyDescriptor(obj, 'test');
            const expected = {
                value: "test",
                writable: false,
                enumerable: false,
                configurable: false
            };
            assert.deepEqual(descriptor, expected)
        });

        it('Property cannot be edited if writable set to false', () => {

            let user = {name: "John"};
            const expected = {name: 'John'};

            Object.defineProperty(user, "name", {
                writable: false
            });
            assert.throws(() => user.name = 'error', TypeError)
            assert.deepEqual(user, expected);
        });

        it('Functions added to objects DOES show in for..in loop', () => {

            let user = {
                name: "John",
                toString() {
                    return this.name;
                }
            };
            const resultKeys = [];
            const expected = ['name', 'toString'];
            for (let key in user) resultKeys.push(key);
            assert.deepEqual(resultKeys, expected);
        });

        it('Functions can be hidden in for..in loop with enumerate: false', () => {

            let user = {
                name: "John",
                toString() {
                    return this.name;
                }
            };
            Object.defineProperty(user, 'toString', {enumerable: false});
            const resultKeys = [];
            const expected = ['name'];
            for (let key in user) resultKeys.push(key);
            assert.deepEqual(resultKeys, expected);
        });

        it('configurable: false blocks property\'s flags to be changed', () => {

            let user = {name: "John"};
            Object.defineProperty(user, 'name', {configurable: false});
            assert.throws(
                () => Object.defineProperty(user, 'name', {configurable: true}),
                TypeError
            );
        });

        it('configurable: false blocks property from being deleted', () => {
            let user = {name: "John"};
            Object.defineProperty(user, 'name', {configurable: false});
            assert.throws(() => delete user.name, TypeError);
        });

        it('configurable: false does not disallow to modify value of a property', () => {
            let user = {
                name: "John"
            };
            const expected = {name: 'Stefan'};
            Object.defineProperty(user, 'name', {configurable: false});
            user.name = 'Stefan'
            assert.deepEqual(user, expected);
        });
    });

    context('Property getters and setters', function () {
        let user = {
            name: "John", surname: "Smith",
            get fullName() {
                return `${this.name} ${this.surname}`
            }
        }
        const expected = "John Smith";
        assert.equal(user.fullName, expected);
    });
});