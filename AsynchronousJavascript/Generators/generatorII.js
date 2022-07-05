'use strict';

function* createFlow() {

    const num = 10;
    const newNum = yield num;//"returns" the value 10 but the execution context is saved, upon invocation of "next" 
    //method it resumes from this line and the passed value in next method[next(2)] is saved in newNum

    const tempNum = yield 5 + newNum;//again "returns" expression after "yield" keyword and pauses the execution context, upon
    //invocation of "next" method again, it will resume from above line, and since the "next" method has the value 2,
    //so "tempNum" will be set to 2 and continues the thread of code execution
    console.log(tempNum);//prints 2

    yield 6;//"returns" the value 6 and  pauses the execution context, upon invocation of "next" method,
    //it will resume from above line of code and continues the thread of code execution
}

const generate = createFlow();
console.log(generate.next());//10
console.log(generate.next(2));//7
//print 2
console.log(generate.next(2));//6
console.log(generate.next());//value: undefined, done : true

/*
    In asynchronous javascript we want to

        1. Initiate a task that takes a long time (e.g. requesting data from 
        the server)

        2. Move on to more synchronous regular code in the meantime

        3. Run some functionality once the requested data has come back

    What if we were to yield out of the function at the moment of sending off the long-time task and 
    return to the function only when the task is complete

*/