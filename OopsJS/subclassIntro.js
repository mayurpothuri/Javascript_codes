'use strict';

//inheritance concept

//parent class functionality
function userCreate(name, score) {
    const user = Object.create(userFunctions);
    user.name = name;
    user.score = score;
    return user;
}

//normal user's functionalities/methods
const userFunctions = {
    increment: function () {
        this.score++;
    },

    sayName: function () {
        console.log(`Name is : ${this.name}`);
    }
}

//sub-class functionality
function paidUserCreate(paidName, paidScore, accountBalance) {
    const paidUser = userCreate(paidName, paidScore);//since "userCreate" function is used to create the object
    //so it also has reference to "userFunctions" prototype stored functionalities, but we want to set it to 
    //"paidUserFunctions" and then "paidUserFunctions" __proto__ property should link to "userFunctions" 
    //prototype object
    paidUser.accountBalance = accountBalance;
    Object.setPrototypeOf(paidUser, paidUserFunctions);//links "paidUser" object's "__proto__"'s property to 
    //"paidUserFunctions" prototype object
    return paidUser;
}

//sub-class functionalities/methods
const paidUserFunctions = {
    incrementBalance: function () {
        this.accountBalance++;
    }
}

//link the "paidUserFunctions" object's __proto__'s property to "userFunctions" prototype object
Object.setPrototypeOf(paidUserFunctions, userFunctions);

//parent class instance/object
const user1 = userCreate("Mayur", 4);
const user2 = userCreate("Mike", 5);

console.log(user1, user2);

user1.increment();

console.log(user1, user2);

//sub-class instance/object
const paidUser = paidUserCreate("Mayur CRIS", 10, 80000);
/*  
    Object{
        prototype : {
            hasOwnProperty : function(...){...},
            ...
        }
        __proto__ : null
    }
    ...

    userFunctions{
        increment: function () {
            this.score++;
        },

        sayName: function () {
            console.log(`Name is : ${this.name}`);
        }
        __proto__ : Object.prototype
        ....
    }

    paidFunctions{
        incrementBalance: function () {
            this.accountBalance++;
        }
        __proto__ : userFunctions
        ...
    }
    
    paidUser{
        paidName : paidName,
        paidScore : paidScore,
        accountBalance : accountBalance,
        __proto__ : paidFunctions
        ...
    }
*/
console.log(paidUser);

paidUser.incrementBalance();// checks within it's object scope, then looks within the scope of thorough it's __proto__
//property -> points to "paidUserFunctions" prototype object and there it is found.

console.log(paidUser.sayName());// checks within it's object scope, then looks within the scope of thorough it's 
//__proto__ property -> points to "paidUserFunctions" prototype object and then looks for "paidUserFunctions" 
//prototype object's __proto__ property -> points to "userFunctions" prototype object and there it founds the
// sayName() function.[Prototype Lookup]
console.log(user1, user2, paidUser);