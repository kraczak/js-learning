"use strict";

// Optional chaining
// checks if the left side of the "?." exists, and
// if it does,
//      then it continues the execution,
// otherwise
//      returns undefined
let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // not