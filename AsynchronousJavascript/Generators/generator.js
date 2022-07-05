'use strict';

//  generator function - ES7 feature, brand new way to exit from current execution context from some point 
//  within the code and do some other tasks along the line and then again "re-entry" to the exited point within
//  the code
//  *function_name === generator function
function* createFlow() {
    yield 4;
    yield 5;
    yield 6;
}
//  upon generator function invocation, it returns an object[having probably 5-6 properties] which has a "next" method
/*{
    next : function(){
        //this method has special connection generator function[*createFlow], so upon next() call the *createFlow
        //function's execution context is created ans then pausing and resuming goes on as per "yield"
        //keyword usage
    }
 }
*/
const generate = createFlow();
//upon invoking "generate" functions, returns { value: someValue, done: boolean }
for (let element = generate.next(); element.done != true; element = generate.next()) {
    console.log(element.value);
}

//  it is same as our customized iterator function but giving it a syntactic sugar
//  The "yield" keyword is used to pause and resume a generator function.
/*  The yield keyword pauses generator function execution and the value of the expression following the yield keyword 
    is returned to the generator's caller. It can be thought of as a generator-based version of the return keyword.

    yield can only be called directly from the generator function that contains it. It cannot be called from 
    nested functions or from callbacks.

    The yield keyword causes the call to the generator's next() method to return an IteratorResult object with 
    two properties: value and done. The value property is the result of evaluating the yield expression, 
    and done is false, indicating that the generator function has not fully completed.

    Once paused on a yield expression, the generator's code execution remains paused until the generator's next() method is called. Each time the generator's next() method is called, the generator resumes execution, and runs until it reaches one of the following:

    1) A yield, which causes the generator to once again pause and return the generator's new value. 
        The next time next() is called, execution resumes with the statement immediately after the yield.

    2) throw is used to throw an exception from the generator. This halts execution of the generator entirely, 
        and execution resumes in the caller (as is normally the case when an exception is thrown).

    3) The end of the generator function is reached. In this case, execution of the generator ends and an 
        IteratorResult is returned to the caller in which the value is undefined and done is true.
    4) A return statement is reached. In this case, execution of the generator ends and an IteratorResult is 
        returned to the caller in which the value is the value specified by the return statement and done is true.
*/