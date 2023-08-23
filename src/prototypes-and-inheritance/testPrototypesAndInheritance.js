'use strict';

describe("Prototypes, inheritance", function () {

    context('Prototypal inheritance', function () {
        it('rabbit is an animal which can eat and jump', () => {
            let animal = {
                eats: true,
                walk() {
                    return 'Animal walk';
                }
            };
            let rabbit = {
                jumps: true
            };

            rabbit.__proto__ = animal;

            assert.isPrototypeOf(animal);
            assert.isTrue(rabbit.eats);
            assert.isTrue(rabbit.jumps);

        });

        it('rabbit can walk - the same as animal', () => {
            let animal = {
                eats: true,
                walk() {
                    return 'Animal walk';
                }
            };
            let rabbit = {
                jumps: true,
                __proto__: animal
            };
            assert.equal(rabbit.walk(), 'Animal walk');
        });

        it('longEar can walk (double inheritance)', () => {
            let animal = {
                eats: true,
                walk() {
                    return 'Animal walk';
                }
            };
            let rabbit = {
                jumps: true,
                __proto__: animal
            };

            let longEar = {
                earLength: 10,
                __proto__: rabbit
            }
            assert.equal(longEar.walk(), 'Animal walk');
        });


        it('searching algorithm https://javascript.info/task/search-algorithm', () => {
            let head = { glasses: 1 };

            let table = { pen: 3, __proto__: head };

            let bed = { sheet: 1, pillow: 2, __proto__: table };

            let pockets = { money: 2000, __proto__: bed };
            assert.equal(pockets.pen, 3);
            assert.equal(bed.glasses, 1);
            assert.equal(table.money, undefined);
        });

        it('feeding speedy should not feed lazy', () => {
            let hamster = {
                stomach: [],

                eat(food) {
                    // this modifies stomach property, it would be changed for every object that inherits from hamster
                    // to avoid this, every child should have its own [stomach] property
                    // which is kinda unpleasant
                    this.stomach.push(food);
                }
            };

            let speedy = {
                stomach: [],
                __proto__: hamster
            };

            let lazy = {
                stomach: [],
                __proto__: hamster
            };

            speedy.eat('Apple');
            assert.deepEqual(speedy.stomach, ['Apple']);
            assert.deepEqual(lazy.stomach, []);

        });


    });
    context('F.prototype', function () {
        it('create an object with the same constructor', () => {
            function Test() {
                this.test = "test";
            }
            let test = new Test()
            let testFromConstructor = new test.constructor();
            assert.deepEqual(test, testFromConstructor);

        });

        it('create an object without constructor', () => {
            function Test() {
                this.test = "test";
            }
            Test.prototype = {};
            let test2 = new Object("lol")
            let test = new Test()
            let testFromConstructor = new test.constructor();
            assert.notDeepEqual(test, testFromConstructor);

        });
    });

    context('Native prototypes', function () {
        it('', () => {

        });
    });
    context('Prototype methods, objects without __proto__', function () {
        it('', () => {

        });
    });
});