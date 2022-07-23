//  requiring/importing 'fs' label to access node feature[C++ feature underneath] of fs module[file storage internals]
const fs = require("fs");
//  requiring/importing 'http' label to access node feature[C++ feature underneath] of http module[networking internals].
const http = require("http");

function doSomething(req, res) {

    //reading file asynchronously:
    /*  from the given relative path of file to be read[first arg] and passed functionality[to process data], 
        the "fs.readFile()" asynchronously reads the file entire file content and when the reading is completed
        then it triggers the callback function[passed functionality(to process data)].

        with the help of "libuv", the multiple thread of execution for handling files is being done and acts
        as interface between the file storage internals[within operating system] and node/C++ feature. So there
        is dedicated file I/O which is handled by "libuv" rather than depending upon file storage internals
    */
    //error first pattern
    fs.readFile("./largeData.json", (err, data) => {
        if (err !== null) {
            res.end(err);
            return;
        }
        res.end(JSON.stringify(JSON.parse(data)));
    });
}
//by invoking "http.createServer(/*passing some functionality - "auto run" feature*/)", the node/C++ feature
//with some pre-written code and libraries[libuv], opens up a "socket" and setup the "auto run feature" with passed
//functionality as parameter to "http.createServer()" and after successful setup of node/C++ features, n/w internals 
//setup, it returns the object["server"]
const server = http.createServer();

//as soon as any inbound/err happens then a particular message/code is broadcasted within node/C++ feature
//["emit the event"] upon which the "auto-run" feature runs the passed/default functionality.
//using returned object's[server] "on(message/code, passed functionality)" method, we can say that when a 
//particular message/code is broadcasted within node/C++ feature, then run the passed functionality.
server.on("request", doSomething);

//with the help of returned object["server"], opening a socket with providing port no.[entry point for inbound
//messages]
server.listen(80);

/*  Note: Here the content of file is entirely read and then only the callback function[passed functionality] is 
    triggered. Can we do it in chunks???[as soon as some chunks("streams of data") are available then perform
    the passed functionality and so on....]
*/

