'use strict';

//parent class
class UserCreate {
    /*
        this = {
            ...
            __proto__ : 
        }
    */
    constructor(name, score) {
        /*
            this = {
                ...
                __proto__ : UserCreate.prototype
            }
        */
        this.name = name;
        this.score = score;
    }
    //all below functionalities are saved within to "constructor" method's object's __proto__ property linking to 
    //prototype object
    /* 
        UserCreate.prototype.sayName = function(){
            console.log(`Name is : ${this.name}`);
        }

        UserCreate.prototype.increment = function(){
            this.score++;
        }
    */
    sayName() {
        console.log(`Name is : ${this.name}`);
    }

    increment() {
        this.score++;
    }
    //return this
}

//sub-class
class PaidUserCreate extends UserCreate {
    constructor(name, score, accountBalance) {
        //till this line, "this" is uninitialized and using below "super" call, the object will be created
        //within "UserCreate" method instead of "PaidUserCreate" and then the object is returned and assigned to
        //our uninitialized "this"
        //super keyword under the hood:
        /*  The static Reflect.construct() method acts like the new operator, but as a function. 
            It is equivalent to calling new target(...args). It gives also the added option to specify a 
            different prototype.
        */
        //this = super("Mayur MRPL", 10)[equivalent]
        //this = Reflect.construct(UserCreate, ["Mayur MRPL", 10], PaidUserCreate)[equivalent]
        //this = new UserCreate(["Mayur MRPL", 10], PaidUserCreate)[equivalent]
        super(name, score);
        this.accountBalance = accountBalance;
    }

    //all below functionalities are saved within to "constructor" method's object's __proto__ property linking to 
    //prototype object
    /* 
        PaidUserCreate.prototype.incrementBalance = function(){
            this.accountBalance++;
        }
    */
    incrementBalance() {
        this.accountBalance++;
    }
    //return this;
}

const user1 = new UserCreate("Mayur", 5);
const user2 = new UserCreate("Mike", 5);
console.log(user1, user2);

user1.increment();

console.log(user1, user2);

const paidUser = new PaidUserCreate("Mayur MRPL", 10, 90000);
console.log(paidUser);

paidUser.incrementBalance();

console.log(paidUser);