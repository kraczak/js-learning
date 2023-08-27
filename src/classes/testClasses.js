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

        it("Clock clocks every 1 second", async () => {


            let clock = new Clock('h:m:s');
            clock.start();
            setTimeout(() => clock.stop(), 25);

            await new Promise(r => setTimeout(r, 25));
            assert.equal(clock.howMany, 2);

        });
    });

    context('Class inheritance', () => {
        it("", function () {

        });
    });

    context('Static properties and methods', () => {
        it("", function () {

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

