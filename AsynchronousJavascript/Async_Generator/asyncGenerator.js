'use strict';
//npm install node-fetch@v2
const fetch = require("node-fetch");

function getAPIData(jsonData) {
    //after getting the desired JSON object data, the filtered data is passed onto ".next()" which resumes the
    //assigning of returned data from network request to "data" variable within resumed execution context of generator
    //function[*createFlow]
    returnNextElement.next(jsonData["entries"][0]);
}

//returning
function doWhenDataReceived(data) {
    if (!data.ok) {
        console.log(`Error with response status code: ${data.status}`);
        process.exit();//exit from runtime
    }
    return data.json();//returns the promise, so again one more level ".then()" chaining is required 
}

//generator function
function* createFlow() {
    //since "yield" keyword is used, so the expression after "yield" evaluates to returning "promise" object
    //so "data" variable after "yield" won't be defined and the "promise" object is returned to 
    //"returnedFetchPromise" variable with the help ".next().value"
    const data = yield fetch('https://api.publicapis.org/entries');//two pronged functions - one returns "promise"
    //object, and other in outside world of JS does the network request[XHR request, parsing url - domain, path, 
    //GET request by default, get data from network then pass the handler function to microTaskQueue(if no global 
    //thread of code execution is happening) and then execute the handler function] and 
    //when returns data from network request, through ".then" chaining, the callback functions and 
    //tracking the state of promise from returned "promise" object is done.

    //So after ".next()" method invocation from "getAPIData" function is done, the assignment of requested data from
    //network to "data" variable is resumed.
    console.log("Data :\n", data);
}

//upon invoking generator function, an "object" is returned as follows:
/*  {
    next : function(){
            //this method has special connection generator function[*createFlow], so upon next() call the *createFlow
            //function's execution context is created ans then pausing and resuming goes on as per "yield"
            //keyword usage
        }
    }
*/
const returnNextElement = createFlow();
//upon invoking the "next" method from returned object of generator function[*createFlow], the execution context is
//created(or) resumed based on "yield" keyword but since it is the first invocation, it creates the local
//execution context of generator function [*createFlow]
const returnedFetchPromise = returnNextElement.next().value;/*as ".next()" returns an object 
{ value: promise//in this above scenario, done: boolean } and so the accessing the ".value" gets the promise object
*/

returnedFetchPromise
    .then(doWhenDataReceived)//chaining the callback function to get Response object and returning JSON object using 
    //.json()
    .then(getAPIData)//chaining the callback function to get the desired indexed JSON object
    .catch(function (err) {
        console.log(err)
    });

/*Note: the whole above scenario, where calling some asynchronous code but still doing the rest
        of the code execution in synchronous manner and when the asynchronous code part completed
        we resumed to following functionality[returned to same exit point/line of code] is done simply
        using "async/await".
 */
