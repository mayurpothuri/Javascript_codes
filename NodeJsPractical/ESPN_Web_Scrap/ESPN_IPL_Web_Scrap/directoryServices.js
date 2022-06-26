const fs = require("fs");
const path = require("path");

function directoryCreate(filePath, directoryName) {
    let directoryPath = path.join(filePath, directoryName);
    console.log(directoryPath);
    if (fs.existsSync(directoryPath) === false) {

        fs.mkdirSync(directoryPath);
        console.log(`Directory - ${directoryPath} created`);
    }
    else if (fs.lstatSync(directoryPath).isDirectory()) {
        console.log(`Directory - ${directoryPath} already exists`);
    }
    else {
        console.log(`Directory path - ${directoryPath} not valid`);
    }
}

module.exports = directoryCreate;