let arr = ["John", "Smith", "not necessary", "lol"];

let [firstName, surname] = arr;

console.log(firstName, surname);


let map = new Map();

map.set("name", "John");
map.set("age", "30");
map.set("surname", "Smith");

for (let [key, value] of map) {
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
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// destructuring assignment split in multiple lines for clarity
let{
    size: { // put size here
        width,
        height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
} = options;

console.log(title);  // Menu
console.log(`width: ${width}`);  // 100
console.log(`height: ${height}`); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
                      title = "Untitled",
                      width: w = 100,  // width goes to w
                      height: h = 200, // height goes to h
                      items: [item1, item2] // items first element goes to item1, second to item2
                  } = {}) {
    console.log( `${title} ${w} ${h}` ); // My Menu 100 200
    console.log( item1 ); // Item1
    console.log( item2 ); // Item2
}

showMenu(options);

