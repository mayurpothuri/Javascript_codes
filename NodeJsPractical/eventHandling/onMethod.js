//  requiring/importing 'http' label to access node feature[C++ feature underneath] of http module
const http = require("http");

//this function is saved under "auto-run" feature by node itself when passed as parameter to "http.createServer"
//function - node/C++ feature
function doSomethingOnGet(req, res) {
    //req(parameter) === req(auto inserted data)[passed object by node]
    //res(parameter) === res(auto inserted data)[passed object by node]
    console.log(
        `Method : ${req.method}
         Url : ${req.url}
         Body : Hello World`
    );
    res.end(
        `Method : ${req.method}
         Url : ${req.url}
         Body : Hello World`
    );
}

//by invoking "http.createServer(/*passing some functionality - "auto run" feature*/)", the node/C++ feature
//with some pre-written code and libraries[libuv], opens up a "socket" and setup the "auto run feature" with passed
//functionality as parameter to "http.createServer()" and after successful setup of node/C++ features, n/w internals 
//setup, it returns the object["server"]
const server = http.createServer();

//with the help of returned object["server"], opening a socket with providing port no.[entry point for inbound
//messages]
server.listen(80);

//as soon as any inbound/err happens then a particular message/code is broadcasted within node/C++ feature
//["emit the event"] upon which the "auto-run" feature runs the passed/default functionality.
//using returned object's[server] "on(message/code, passed functionality)" method, we can say that when a 
//particular message/code is broadcasted within node/C++ feature, then run the passed functionality.
server.on("request", doSomethingOnGet);

server.on("clientError", function handleError(err) {
    console.log(err);
})