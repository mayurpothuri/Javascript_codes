'use strict';

function UserCreate(name, score) {
    /*this = {
        __proto__ : 
    }*/
    this.name = name;
    this.score = score;
    /*this = {
        __proto__ : UserCreate.prototype
    }*/
    //return this;
}

UserCreate.prototype.increment = function () {
    const add = () => {
        this.score++;//5; as "this" binds to parent "this"[user] object because it is "arrow function"
    }
    add();//since it's a arrow function invocation, "this" binding will be to parent object's "this" -> "user object".
}

const user1 = new UserCreate("Mayur", 4);
const user2 = new UserCreate("Mike", 5);

console.log(user1, user2);

user1.increment();

console.log(user1, user2);