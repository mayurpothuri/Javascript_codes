const fs = require("fs");

function createDirectory(filePath) {
    //check whether the directory exists or not, if not then create one
    if (fs.existsSync(filePath) === false) {
        fs.mkdirSync(filePath);
        console.log(`Directory - ${filePath} created 👍`);
    }
    //if already directory exists then nothing to do, all normal
    else if (fs.lstatSync(filePath).isDirectory() === true) {
        console.log(`Directory - ${filePath} already exists. 👌`);
    }
    //else it is invalid path
    else {
        console.log(`Directory Path - ${filePath} is invalid 👎`);
    }
}

module.exports = createDirectory;