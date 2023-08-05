'use strict';


let billion = 1e9;
let microSecond = 1e-6;
let hex255 = 0xff;

console.log(billion);
console.log(microSecond);
console.log(hex255);

console.log(hex255.toString(2));

console.log(255..toString(16)); // two dots required to call a method on a number literal
// alternatively, use parentheses
console.log((255).toString(16));

console.log((0.1.toFixed(20)).toString(2))
console.log((0.2.toFixed(20)).toString(2))
console.log((0.3.toFixed(20)).toString(2))

console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5
console.log(parseInt('a123')); // NaN, the first symbol stops the process



