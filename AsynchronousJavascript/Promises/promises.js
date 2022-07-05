'use strict'

const fetch = require('node-fetch');

/*  function doOperation() {
    doStep1(0, result1 => {
        doStep2(result1, result2 => {
        doStep3(result2, result3 => {
            console.log(`result: ${result3}`);
        });
        });
    });

    }

    doOperation();

    When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors 
    at each level of the "pyramid", instead of having error handling only once at the top level.[Callback hell]

    For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of 
    asynchronous programming in JavaScript is the Promise

    Promises -> readability enhancer
    
    Special objects built into JS that get returned immediately when we make a call to a web browser API/feature
    (eg- "fetch") that's set up to return promises(not all are)

    Promises acts a placeholder for the data we hope to get back from the web browser feature's background work

    We also attach functionality we want to defer running until that background work is done(using the built-in 
    ".then" method)

    Promise objects will automatically trigger that functionality to run

    The value returned from the web browser feature's work (e.g. the returned data server using "fetch" will be that
    function's input/arg)

    Promises are kind of "two pronged functions", where the outside JS tasks will be running and also within 
    the JS world, within that "returned promise", we have a property "value" which will be filled with data
    by the outside JS world tasks, and we also have a property named "onfulfillment" which is array of 
    "functionality", contains our passed "callback functionality", and within the "callback functionality's" arg
    the data within "value" property will be passed.
     
*/

//fetch - "facade" function, upon invocation returns a promise object which has "value" and "onfulfillment" property
//[it also has "status", "onrejection" properties]
//API response is set to "value" property and "callback functionalities" are within the array property name
//- "onfulfillment", API response set to "value" property is sent to "callback functionalities's arg" using ".then"
//method

//then() itself returns a promise, which will be completed with the result of the function that was passed to it. 
//This means that we can "chain promises". So instead of "callback hell", we can use "promise chaining"
const data = fetch('https://api.publicapis.org/entries');
data
    .then(function (response) {//attaches callback functionality
        if (!response.ok) {
            return new Error(`HTTP error : ${response.status}`)
        }
        return response.json();//it again returns promise
    })
    .then(function (actualJson) {//attaches callback functionality
        //actualJson = JSON.stringify(actualJson);
        console.log(typeof actualJson);
        console.log(actualJson["entries"][0]);
    })
    .catch(function (err) {
        console.log(err);
    });
//blocks for sometime
for (let i = 0; i < 1000; i++) {
    console.log("1 sec blocking");
}
console.log("Me first");
//after no global thread of code execution is to be run, we get asynchronous callback functions execution