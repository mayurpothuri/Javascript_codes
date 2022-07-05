'use strict'

function printHello() {
    console.log("Printing Hello from setTimeout");
}

function newPromise() {
    return new Promise(function (resolve, reject) {
        resolve("Promise Hello");
    });
}

//Web API
setTimeout(printHello, 0);//send to callback queue/task queue
//Promise
const customPromise = newPromise();//send to "microTask queue/job queue"
//Global thread of code execution
console.log("Console Me first");
for (let i = 0; i < 1000; i++) {
    console.log(`blocking code - ${i}`);
}
console.log("Me first");
//"event loop" checks the "microTask queue", if found then executes all functions and then check for functions
//execution within "callback queue"
customPromise
    .then(function (data) {
        for (let i = 0; i < 50; i++) {
            console.log(i);
        }
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });
//event loop prioritizes: 
//1)synchronous call stack thread of code execution(highest)
//2)microtask queue/job queue
//3)callback queue/task queue