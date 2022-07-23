//  requiring/importing 'http' label to access node feature[C++ feature underneath] of http module
const http = require("http");

//this function is saved under "auto-run" feature by node itself when passed as parameter to "http.createServer"
//function - node/C++ feature
function doSomethingOnGet(incomingDataRequest, outgoingDataResponse) {
    //req === incomingDataRequest[passed object by node]
    //res === outgoingDataResponse[passed object by node]
    outgoingDataResponse.end(
        `Method : ${incomingDataRequest.method}
         Url : ${incomingDataRequest.url} 
         Body : Hello World`
    );
}

//by invoking "http.createServer(/*passing some functionality - "auto run" feature*/)", the node/C++ feature
//with some pre-written code and libraries[libuv], opens up a "socket" and setup the "auto run feature" with passed
//functionality as parameter to "http.createServer()" and after successful setup of node/C++ features, n/w internals 
//setup, it returns the object["server"]
const server = http.createServer(doSomethingOnGet);
//with the help of returned object["server"], opening a socket with providing port no.[entry point for inbound
//messages]
server.listen(80);

//when try to hit - "http://localhost:80/",[inbound message to our custom server at any time],
//it triggers the "doSomethingOnGet" function and also passes two objects to that passed functionality - [req, res]
//having properties and functions respectively we get output on user agent[Browser] as "Hello World"