'use strict';

function UserCreate(name, score) {
    //using "new" keyword, 3 automated tasks related to object creation using this, proto linking and return object
    //is done.
    //this = { __proto__ : }
    /*  using "new" keyword, the __proto__ property of "this" object to point to "UserCreate" function's 
        object's[function-object combo] prototype object 
    */
    this.name = name;
    this.score = score;
    //return this;
}

//storing  shared functionality in "Factory - UserCreate" function's prototype object
UserCreate.prototype.sayName = function () {
    console.log(`Name is : ${this.name}`);
}
//storing  shared functionality in "Factory - UserCreate" function's prototype object
UserCreate.prototype.increment = function () {
    this.score++;
}

//sub-class factory method
function PaidUserCreate(paidName, paidScore, accountBalance) {

    //
    UserCreate.call(this, paidName, paidScore);
    //UserCreate.apply(this, [paidName, paidScore]);
    this.accountBalance = accountBalance;
}

//storing  shared functionality in "Factory - PaidUserCreate" function's prototype object for sub class instance/obj
PaidUserCreate.prototype.incrementBalance = function () {
    this.accountBalance++;
}

//new keyword -> just a regular function call + automated process for "this" object creation and __proto__ linking.
const user1 = new UserCreate("Mayur", 4);
const user2 = new UserCreate("Mike", 5);

console.log(user1, user2);

user1.increment();//it looks for "increment" method in user1 object's memory, not found then it looks through the
//__proto__ property chain that links to "UserCreate" function's object's prototype property holding object
//containing shared functionalities and there it founds the "increment" method

console.log(user1, user2);

const paidUser = new PaidUserCreate("Mayur MRPL", 10, 90000);
console.log(paidUser);

paidUser.incrementBalance();//it looks for "incrementBalance" method in paidUser object's memory, not found then 
//it looks through the __proto__ property chain that links to "PaidUserCreate" function's object's prototype property 
//holding object containing shared functionalities and there it founds the "incrementBalance" method

console.log(paidUser.name);//it looks for "name" method in paidUser object's memory, not found then 
//it looks through the __proto__ property chain that links to "PaidUserCreate" function's object's prototype property 
//holding object containing shared functionalities, not found then it looks from the __proto__ property of 
//"PaidUserCreate" function's object's prototype property holding object which links to "UserCreate" function's 
//object's prototype property holding object containing shared functionalities and there it founds the 
//"paidName" property

console.log(paidUser);

