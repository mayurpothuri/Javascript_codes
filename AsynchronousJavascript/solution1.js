'use strict'

//taking help of browser API
//Eg- setTimeout API

function printHello() {
    console.log("At last callback Hello");
}

//with the help of below Browser API, the "Timer" within the browser is set to "callback function -> 
//printHello and timer to 0" after below JS code is called/invoked. After the timer countdown from 1 sec to 0 sec 
//is completed, the callback function is sent to "CallBack Queue" and then the call back function is executed
//when within the global thread of code execution, there is no other line of code to execute. So call back function
//from "CallBack Queue" is brought to "Call Stack" for execution via "event loop".
setTimeout(printHello, 1000);
console.log("Me First!");
let counter = 0;
for (let i = 0; i < 10000; i++) {
    counter++;
    console.log("Me again");
}
//So as per above explanation, even if the timer countdown is completed, there is no guarantee that callback function
//is called as the global thread of code execution is still running. So the timer limit is "atleast" limit.