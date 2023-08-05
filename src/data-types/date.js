// console.log(new Date());
// console.log(new Date(0));
let s = Date.now();
let date0 = new Date();
console.log(date0);
date0.setDate(date0.getDate() + 5)
date0.setSeconds(date0.getSeconds() + 60)
console.log(date0);

console.log(`Whole process took ${Date.now() - s} ms`);
