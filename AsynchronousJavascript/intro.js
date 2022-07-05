'use strict'

/* JS is single threaded(one command executing at a time) and has a synchronous execution model(each line executed
    in the order the code appears)

    So what if we need to wait for some time before we can execute certain bits of code? Perhaps we need to
    wait on fresh data from an API/server request or for a timer to complete and then execute our code.

    We have a conundrum - a tension between "wanting to delay some code execution" but "not wanting to block
    the thread" from any further code running while we wait.
*/
//Eg= pseudo - synchronous code:
function display(data) {
    console.log(data);
}
const dataFromAPI = fetchAndWait('http://twitter.com/will/tweets/1');
//...user can do nothing here.
//...could be 300 ms/half a sec
//they're just clicking and getting nothing
display(dataFromAPI);
console.log("Me later!");