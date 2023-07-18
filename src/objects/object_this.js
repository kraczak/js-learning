let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(`Hello, my name is ${this.name}!`);
    },

    sayHiWithArrow() {
        // note that arrow takes "this" from outer scope
        let arrow = () => alert(`Hello, my name is ${this.name}!`);
        arrow();
    }
}

function makeUser() {
    return {
        name: "John",
        ref () {
            return this
        }
    };
}














