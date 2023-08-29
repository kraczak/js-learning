'use strict';


describe("classes", function () {

    context('Class basic syntax', () => {

        before(function () {
            sinon.stub(window, "alert");
        });

        after(function () {
            sinon.restore();
        });

        it("User says hi!", function () {
            class User {
                constructor(name) {
                    this.name = name;
                }

                sayHi() {
                    return `Hello, my name is ${this.name}`
                }
            }

            const user = new User('Kornel');
            assert.equal(user.sayHi(), `Hello, my name is Kornel`)
        });

        // function to run methods with lost "this"
        let run_func = (func) => func()
        it('class field binds this to method', () => {
            class Button {
                constructor(value) {
                    this.value = value;
                }

                // click is class field with bound `this`
                click = () => {
                    return (this.value);
                }
            }

            let value = "hello";
            let button = new Button(value);
            const result = run_func(button.click, value);
            assert.equal(result, value);
        });

        it('class field binds this to method', () => {
            class Button {
                constructor(value) {
                    this.value = value;
                }

                // click is method with not bound `this`
                click() {
                    return (this.value);
                }
            }

            let value = "hello";
            let button = new Button(value);
            assert.throw(() => run_func(button.click, value), TypeError);
        });

        it("Clock clocks 2 times in 25 ms timeframe", async () => {


            let clock = new Clock({template: 'h:m:s'});
            clock.start();
            setTimeout(() => clock.stop(), 20);

            await new Promise(r => setTimeout(r, 20));
            assert.isTrue(2 <= clock.howMany || clock.howMany <= 3);

        });
    });

    context('Class inheritance', () => {

        it("Class field is not overrode by child class field if constructor not called", function () {

            class NewAnimal {
                name = "animal"
                constructor() {
                    // this will print always "animal" because child class fields are not yet initialized
                    console.log(this.name);

                }
            }

            class NewRabbit extends NewAnimal {
                name = "rabbit";
            }

            let rabbit = new NewRabbit();
            // but here its already initialized and name is equal to rabbit
            assert.equal(rabbit.name, "rabbit")
        });


        it("Rabbit can run and is not hidden", function () {
            let rabbit = new Rabbit('Kurwik');
            rabbit.run(10);
            assert.equal(rabbit.speed, 10)
            assert.equal(rabbit.hidden, false)
        });

        it("Rabbit is hidden by default", function () {
            let rabbit = new Rabbit('Kurwik');
            assert.equal(rabbit.hidden, true)
        });
    });

    context('Extending built-in classes', () => {
        it(`Normally both static and non-static 
        methods are inherited, but builtins are exceptions.
        They don't inherit from Objects, but let's say Array.[[Prototype]] 
        does inherit from Object.[[Prototype]]. Therefore builtins don't inherit static methods`, function () {

        });
    });

    context('Class checking: "instanceof"', () => {
        it("Any object that can eat can be Animal!", function () {
            class Animal {
                static [Symbol.hasInstance](obj) {
                    // we can treat any object as Animal if obj canEat
                    if (obj.canEat) return true;
                }
            }

            let obj = { canEat: true };
            assert.isTrue(obj instanceof Animal);
        });

        it('we can use toString as an extended typeof', () => {
            let typeOf = Object.prototype.toString;
            // we need to use `call` to set context this=arr
            assert.equal(typeOf.call([]), '[object Array]')
        });

        it('we can change the tag of an object [object Tag]', () => {
            let user = {
                [Symbol.toStringTag]: "Tag"
            }
            assert.equal({}.toString.call(user), '[object Tag]')
            assert.equal(user.toString(), '[object Tag]')
        });
    });

    context('Mixins', () => {
        it("", function () {

        });
    });


});

