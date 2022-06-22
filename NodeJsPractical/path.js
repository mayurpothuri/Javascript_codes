let path = require("path");
let fs = require("fs");
const { basename } = require("path");

let directoryName = "";
for (let i = 0; i < 5; i++) {
    directoryName = `Lecture-${i}`;
    //creates directory
    fs.mkdirSync(directoryName);
    //crteate file at specified directory path[in windows and mac / or \ is used so use "path" module]
    fs.writeFileSync(path.join(directoryName, `tempFile${i}.txt`), "");
}
//gives extension of filename
console.log(path.extname(path.join(__dirname, "fs.js")));
//return the last portion of specified path
console.log(path.basename(path.join(__dirname)));