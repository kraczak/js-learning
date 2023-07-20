// JS does not allow to override the primitive conversion of objects

function User(name) {
    this.name = name;
}


let user1 = new User('Jack');
let user2 = new User('Rosalie');

console.log(user1 + user2); // [object Object][object Object]
console.log(typeof (user1 + user2)); // string

// all objects are truthy in boolean context

if ({} && []) {
    console.log("objects are truthy");
} // objects are truthy

// objects can be converted to primitives with the help of Symbol.toPrimitive


// PrimitiveUser with [Symbol.toPrimitive]
function PrimitiveUser(name, money) {
    this.name = name;
    this.money = money;

    this[Symbol.toPrimitive] = function (hint) {
        console.log(`hint: ${hint}`);
        return hint === "string" ? `{name: "${name}"}` : money;
    }
}

let customUser = new PrimitiveUser("Jack", 100);
console.log(customUser + 500); // 600
console.log(customUser + '500'); // 100500

function ToStringUser(name, money) {
    this.name = name;
    this.money = money;

    this.toString = function () {
        console.log('Calling toString')
        return `{name: "${this.name}"}`;
    }

    this.valueOf = function () {
        console.log('Calling valueOf')
        return this.money;
    }
}

let user = new ToStringUser("John", 1000);

// toString -> {name: "John", money: 1000, toString: ƒ, valueOf: ƒ}
// because console log works differently to alert
console.log(user);

console.log(+user); // valueOf -> 1000
console.log(user + 500); // v
console.log(user.toString()); // equivalent to console.log(String(user)) or alert(user)

let toValueUser = {
    name: "John",
    money: 1000,

    valueOf() {
        return this.money;
    },

    toString() {
        return `{name: "${this.name}"}`;
    },
}

console.log(toValueUser); // {name: "John", money: 1000, toValue: ƒ, toString: ƒ}
console.log(+toValueUser); // 1000


// The conversion algorithm is:
//
// Call obj[Symbol.toPrimitive](hint) if the method exists,
// Otherwise if hint is "string"
//      try calling obj.toString() or obj.valueOf(), whatever exists.
// Otherwise if hint is "number" or "default"
//      try calling obj.valueOf() or obj.toString(), whatever exists.