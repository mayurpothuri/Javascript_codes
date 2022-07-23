//  requiring/importing 'fs' label to access node feature[C++ feature underneath] of fs module[file storage internals]
const fs = require("fs");
//45066094 - Bhuvnesh Jain's PSID
let newData = "";

function processDataBatch(data) {
    for (let i = 0; i < 1000; i++) {
        console.log();
    }
    console.log(data + "");
    newData += data + "";
}

function printData() {
    console.log(`Complete Data after getting it by chunks :
    ${JSON.stringify(JSON.parse(newData))} `);
}

//creating stream label such that when using "fs.createReadStream("file")", it returns an object with methods
//such that with the help of "on()" method and appropriate event name being emitted["data"] within node/C++ feature,
//it takes on "chunk/stream" of data[default size = 64kb] till full data is retrieved.
//Since "chunk/stream" is being processed with passed functionality[within "on()" method] and if it takes longer time
//and within that time the next "chunk/stream" of data is ready then what will happen??
//To solve this problem, concept of "callback queue" and "event loop" is used within node.
const accessDataBatches = fs.createReadStream("./largeData.json");

//registering functions to be "auto-run" when "data" event - meaning the "chunk/stream" is ready is emitted within
//node.
accessDataBatches.on("data", processDataBatch);
//registering functions to be "auto-run" when "close" event - [meaning the entire data is read] is emitted within
//node.
accessDataBatches.on("close", printData);