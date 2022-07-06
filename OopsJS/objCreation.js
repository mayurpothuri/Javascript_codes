'use strict';

//using a common function we can generate n no. of objects
//but it has issues when trying to add functionality and inefficient with respect to performant memory
/*  for each object creation, there is a new function[object] created and attached to created object.
    Hint: use prototype chain[shared]
*/
function createObj(name, score) {
    const user = Object.create(null);
    user.name = name;
    user.score = score;
    user.increment = function () {
        user.score++;
    }
    return user;
}

const user1 = createObj("Mayur", 4);
const user2 = createObj("Mike", 5);

console.log(user1, user2);
user1.increment();//incrementing score for user1 only
console.log(user1, user2);