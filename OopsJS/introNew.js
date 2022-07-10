'use strict';

//function definition -> gives us function-object combo! 
//uppercase first letter of function name, indicating to use "new" keyword[Good Practice]
//if run without using "new" keyword and invoked function then "this" refers to global object which is bad!!!
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
    this.score++;
}

UserCreate.prototype.login = function () {
    console.log("Logged in...");
}

/*  UserCreate : input -> function -> output
    {
        prototype : {
                increment : function(){
                    this.score++;
                },
                login : function () {
                    console.log("Logged in...");
                }
        }
    }

    this = {
        name: name,
        score: score,
        __proto__ : UserCreate.prototype
    }
*/

const user1 = new UserCreate("Mike", 4);
const user2 = new UserCreate("Mayur", 5);
/*  "new" keyword automates the work:
    1) creating empty object using "this" keyword, 
    2) assign "__proto__" property of "this" object to point to "UserCreate" function's object's property named 
        "prototype".
    3) return the created "this" object.
*/
console.log(user1, user2);

user1.increment();

console.log(user1, user2);