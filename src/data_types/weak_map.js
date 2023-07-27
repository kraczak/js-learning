import {slug} from "mocha/lib/utils.js";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakMap();


readMessages.set(messages[0], new Date(Date.now()));

readMessages.set(messages[1], new Date(2019, 1, 1));

readMessages.set(messages[2], new Date(2023, 1, 1));

console.log("Read message 0: " + readMessages.get(messages[0])); // true
console.log("Read message 1: " + readMessages.get(messages[1])); // true
console.log("Read message 2: " + readMessages.get(messages[2])); // true
