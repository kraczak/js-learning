let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple );

alert( "apple" in bag ); // true, property apple exists

for (let item in bag) {
    alert(`${item} = ${bag[item]}`);
}

let user = {};
user.name = 'Johny';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
alert(JSON.stringify(user));



let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
