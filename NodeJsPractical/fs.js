//file system module
let fs = require("fs");
//reads any file in binary format[utf-8]
let binaryFormatFile = fs.readFileSync("tempNodeJSProgram.js");
console.log("Ouptut = ", binaryFormatFile); // binary format
console.log("Ouptut : \n" + binaryFormatFile); // string format
//  files -> create, read, update, delete
//creates a file in wrote mode
let file = fs.openSync("abc.txt", "w");
console.log(file);//file descriptor
//wrties the second arg content on first arg file.
//create/write
fs.writeFileSync("abc.txt", "Hello yo yo");

//create / update
// opens/creates file and append[update]/set the content
fs.appendFileSync("abc.txt", "\nNext Line content");

//folders
//creates a tempDirectory folder
fs.mkdirSync("tempDirectory");
//create a file names "file1.txt" in tempDirectory folder and writes the content yo yo yo[second arg] 
fs.writeFileSync("tempDirectory/file1.txt", "yo yo yo");
//reads the directory content
let content = fs.readdirSync("tempDirectory");
for (let i = 0; i < content.length; i++) {
    console.log(content[i] + " will be removed");
    //remove the files
    fs.unlinkSync("tempDirectory/" + content[i]);
}
//removes the directory
fs.rmdirSync("tempDirectory");
fs.closeSync(file);//closed the the file w.r.t the file descriptor.

//if a file exists at a specified path or not -> true/false
console.log(fs.existsSync("abc.txt"));
console.log(fs.existsSync("abdc.txt"));
//gives the directory path
console.log(__dirname);
//if a specified path is of file or directory
let details = fs.lstatSync(__dirname + "\\abc.txt");
console.log(details.isFile()); // ==> whether is it a file
details = fs.lstatSync(__dirname);
console.log(details.isDirectory()); // ==> whether is it a directory
