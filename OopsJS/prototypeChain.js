'use strict';

function createObj(name, score) {
    const user = Object.create(userFunctionStore);
    user.name = name;
    user.score = score;
    return user;
}

const userFunctionStore = {
    increment: function () {
        this.score++;
    },
    login: function () {
        console.log(`logged in`);
    }
}

const user1 = createObj("Mayur", 4);
const user2 = createObj("Mike", 5);
//before updating score
console.log(user1, user2);
user1.increment();
console.log(user1, user2);