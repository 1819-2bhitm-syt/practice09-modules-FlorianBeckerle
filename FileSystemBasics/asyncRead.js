const fs = require('fs');
const filename = "todo.txt";

console.log("Entire content of " + filename  + " will be read asynchronously");
console.log("Meanwhile Node.js app can do something else.");
console.log("...");

fs.readFile(filename, {encoding: "utf8"}, (err, data) => {

    if(err) {
        console.error(err.message);
    } else {
        console.log("Reading " + filename + "finished successfully.")
        console.log();
        console.log(`Content of ${filename}:`);
        console.log(data);
    }

});