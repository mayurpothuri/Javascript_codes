'use strict';

/*  Object Oriented Programming:
    1)Easy to add features and functionality
    2)Easy for us and other developers to reason about(a clear structure)
    3)Performant(efficient in terms of memory)

    We need to organize our code as it gets more complex so it's not just endless series of commands
    as after in any program, there are data and associated functionality which needs to be triggered
    at specific times and make the application work!
 */


/*  since for creating object, we are violating DRY[don't repeat yourself] principle, so we need to 
    wrap the functionality of creating object using function so that below steps for creating objects are not repeated
*/
const user1 = {
    name: "Mayur",
    score: 4,
    increment: function () {
        //this scope is based on function calling and not where the function is saved
        this.score++;
    }
}

const user2 = {
    name: "Mike",
    score: 5,
    increment: function () {
        //this scope is based on function calling and not where the function is saved
        this.score++;
    }
}

console.log("Before incrementing score :\n", user1);
//since, "user" object is calling "increment" method, so the "this" binds to "user" context
user1.increment();
console.log("After incrementing score :\n", user1);
//using dot notation
console.log("Dot notation User Name :", user1.name);
//using [] notation
console.log("[] notation User Name and Score :", user1["name"], user1["score"]);
//creating empty object
const obj = {};
const objCreate = Object.create(null);//by this, out empty object got access to prototype object
console.log(`Empty obj using {} : ${obj}
Empty obj creation using Object.create :`, objCreate);