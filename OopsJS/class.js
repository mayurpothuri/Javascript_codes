'use strict';

//this does all the __proto__ linking to "User" function's object's prototype's objects for shared methods
class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    login() {
        console.log("Logged in.....");
    }
}

const user1 = new User("Mayur", 4);
const user2 = new User("Mike", 5);

console.log(user1, user2);

user1.increment();

console.log(user1, user2);