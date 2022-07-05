'use strict';
//npm install node-fetch@v2
const fetch = require("node-fetch");

//async - await:[ES7 feature] simplified all the generator functionality, pausing and resuming execution context of 
//generator function and it's simple to read and write enhanced code using 'async/await'
async function getData() {
    console.log("Me first");
    //await: also works as "yield" keyword but also resumes. In this context, as soon as the expression
    //after the "await" keyword is evaluated[i.e.. "promise" object], it pauses the local execution context
    //of "getData" method and returns from that local execution context and so the global thread of code
    //execution runs[in this context it is running one line - "console.log("Me second");"] and when
    //the network request is completed with desired network data, then the handler function[under the hood of await] 
    //is sent to microTask queue and when there is no global thread of code execution running, the handler function
    //[under the hood of await] is executed which simulates "next(network data)" method of generator function and 
    //so the returned network data is assigned to "data" variable which again to convert into JSON, uses
    // the whole "cycle" through "await" and eventually the desired/filtered data is "console.logged".
    const data = await fetch('https://api.publicapis.org/entries');
    const actualJson = await data.json();
    console.log(actualJson["entries"][0]);
}

getData();
console.log("Me second");