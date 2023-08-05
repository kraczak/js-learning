'use strict';


let arr = ['apple', 'samsung', 'xiaomi'];

console.log('\nFor i loop')

for (let i = 0; i < arr.length; i++) {
    console.log(`\t${arr[i]}`);
}

console.log('\nNow let for of loop')
for (let brand of arr) {
    console.log(`\t${brand}`);
}

console.log(`\nNow let for in loop. Iterates over all keys of the array 
(and array-like objects), which is usually not a good idea.
it's also 10-100 times slower than for of loop`)
for (let key in arr) {
    console.log(`\t${arr[key]}`);
}

arr.length = 2;
console.log(arr); // [ 'apple', 'samsung' ]
arr.length = 3;
console.log(arr); // [ 'apple', 'samsung', <1 empty item> ]

console.log([] == []); // false)