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
            setTimeout(() => clock.stop(), 22);

            await new Promise(r => setTimeout(r, 25));
            assert.equal(clock.howMany, 2);

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

    context('Private and protected properties and methods', () => {
        it("", function () {

        });
    });

    context('Extending built-in classes', () => {
        it("", function () {

        });
    });

    context('Class checking: "instanceof"', () => {
        it("", function () {

        });
    });

    context('Mixins', () => {
        it("", function () {

        });
    });


});

