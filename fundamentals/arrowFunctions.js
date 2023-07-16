'use strict';


// Arrow functions are a new way to write functions in ES6.
// They are also called fat arrow functions
// because they use a new token =>, which looks like a fat arrow.
// Arrow functions are anonymous and change the way this binds in functions.

let sum = (a, b) => a + b;

alert(sum(1, 2)); // 3


// with one argument parentheses can be omitted

let double = n => n * 2;
alert(double(3)); // 6

// without arguments parentheses are required

let sayHi = () => alert("Hello!");
sayHi();

// multiline arrow functions

let sumV2 = (a, b) => {
    return a + b; // if we use curly braces, then we need an explicit "return"
}

alert(sumV2(1, 2));


function ask(question, yes, no) {




    if (
        confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);
