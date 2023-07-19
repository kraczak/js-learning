let fruit = "apple";

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log( bag.apple );

console.log( "apple" in bag ); // true, property apple exists

// iterate over object keys
for (let item in bag) {
    console.log(`${item} = ${bag[item]}`);
}

let user = {};
user.name = 'Johny';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// represent a object as a string with stringify method
console.log(JSON.stringify(user));



let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false


function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let jack = new User("Jack");
console.log(jack.name); // Jack
console.log(jack.isAdmin); // false
