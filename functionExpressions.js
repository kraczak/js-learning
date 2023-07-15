'use strict'


// function is a value, below is a function expression
// are created when the execution reaches them, function declaration is created
// when the JavaScript is preparing to start the script
let sayHi = function() {
    alert('Hello');
};

sayHi();

// callback functions - yes & no are callback functions

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {alert('You agreed.')}

function showCancel() {alert('You canceled the execution.')}

ask("Do you agree?", showOk, showCancel);
// rewrite as anonymous functions
ask(
    "Do you agree?",
    function () {alert('You agreed.')},
    function () {alert('You canceled the execution.')}
)

