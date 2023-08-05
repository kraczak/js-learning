'use strict';

let room = {
    number: 123,

    // toJSON modifies how object is presented as an JSON
    toJSON() {
        return this.number // { "place" : { "number" : 123 } } -> { "place" : 123 }
    }

};


let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;

try {
    console.log(JSON.stringify(meetup));
} catch (e) {
    console.log('Type Error: circular structure.', meetup);
}

// replacer function can control (include/exclude/map) values
console.log(JSON.stringify(
    meetup,
    (key, val) => (key === 'occupiedBy') ? undefined : val
))

let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

console.log(JSON.stringify(user, null, 2));


// JSON Parse
let numbers = [0, 1, 2, 3];
let jsonNumbers = JSON.stringify(numbers); // "[0, 1, 2, 3]"

let parsedNumbers = JSON.parse(jsonNumbers);
console.log(parsedNumbers);
// Reviver
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
meetup = JSON.parse(str);
console.log(meetup); // { title: 'Conference', date: '2017-11-30T12:00:00.000Z' }

meetup = JSON.parse(str, (key, val) => (key === 'date') ? new Date(val) : val);
console.log(meetup); // { title: 'Conference', date: 2017-11-30T12:00:00.000Z }



