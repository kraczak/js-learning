'use strict';

// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined
// in js functions are objects

// Each primitive type has a corresponding object type, for example,
// String for strings, Number for numbers etc.
// String, Number, Boolean, Symbol and BigInt

console.log(typeof 0); // "number"

console.log(typeof new Number(0)); // "object"!

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
    console.log( "zero is truthy!?! Crazy!");
}

let str = "Hello";

try {
    str.test = 5;

    alert(str.test); // undefined for not strict, error for strict
} catch(error) {
    console.log(error);
}