let arr = ["John", "Smith", "not necessary", "lol"];

let [firstName, surname] = arr;

console.log(firstName, surname);



let map = new Map();

map.set("name", "John");
map.set("age", "30");
map.set("surname", "Smith");

for (let [key, value] of map){
    console.log(`key: ${key}, value: ${value}`);
}

[firstName, surname] = [surname, firstName]; // swap values - create arr and destruct it in one line

console.log(firstName, surname); // Smith John

let [, , notNecessary, lol] = arr;
let [, , ...rest] = arr;
console.log(notNecessary, lol); // not necessary lol
console.log(rest); // [ 'not necessary', 'lol' ]
let a = Math.random()
let [random = Math.random(), surname1 = Math.random()] = ["Julius"];

console.log(random, surname1); // Julius randomNumber

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

let options2 = {
    title: "Menu"
};

let {title2, width: w = 100, height: h = 200} = options2;
console.log(title2, width, height);Ż