'use strict';



let john = { name: "John" };

// for every user, let's store their visits count
let map = new Map();

// john is the key for the map
map.set(john, 123);
map.set(123, john);

// console.log( map.get(john) );
// console.log( map.get(123) );

console.log('keys');
for (let user of map.keys()) {
    console.log(user);
}
console.log('\nvalues');
for (let user of map.values()) {
    console.log(user);
}
console.log('\nentries');
for (let user of map.entries()) {
    console.log(user);
}

console.log('\nnothing is like entries');
for (let user of map) {
    console.log(user);
}

map.forEach((value, key, map) => {
    console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
});

console.log(Object.fromEntries(map));

let set = new Set();

set.add(1);
set.add(2);
set.add(3);

set.forEach((value, ...args) => {
    console.log(value);
});
