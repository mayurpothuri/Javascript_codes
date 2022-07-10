//'use strict';

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
    function add() {
        this.score++;//NaN; as "this" binds to "global" object because of below function call and it 
        //creates "score" property to "global" object and incrementing it will result in "Nan"
    }
    add();//since it's a normal function invocation, "this" binding will be to global object
}

const user1 = new UserCreate("Mayur", 4);
const user2 = new UserCreate("Mike", 5);

console.log(user1, user2);

user1.increment();

console.log(user1, user2);
console.log(global.score);

//to solve this problem, will use "arrow function" as it doesn't have it's own "this" and it has "this" binding
//with respect to parent "this".
