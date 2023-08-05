// only string and Symbol can be object property keys


let id = Symbol("id")
let anotherId = Symbol("id")
console.log(`id === anotherId: ${id === anotherId}`);
let user = {
    name: "John",
    [id]: 1,
    [anotherId]: 2
}
console.log(user);
console.log(id.toString());

// symbols are skipped by for...in loop
for (let key in user) {
    console.log(key);
}

console.log(JSON.stringify(user));

// but Object.assign copies both string and symbol properties

let clone = Object.assign({}, user)
console.log(clone);

// we can use global symbol registry to share symbols and access them later on
// get symbol by name
let globalId = Symbol.for("id")
let anotherGlobalId = Symbol.for("id")
console.log(`globalId === anotherGlobalId: ${globalId === anotherGlobalId}`);

// get symbol name by symbol
console.log(`Symbol name for (globalId): ${Symbol.keyFor(globalId)}`);
console.log(Symbol.keyFor(anotherGlobalId));
console.log(`undefined because its not global symbol: ${Symbol.keyFor(id)}`);

// all symbols have description property
console.log(`Symbol description for id: ${id.description}`);

console.log(Reflect.ownKeys(user));
