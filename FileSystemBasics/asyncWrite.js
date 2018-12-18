const fs = require('fs');
const filepath = "./";
const filename = "todo2.txt";
let content = "- Java üben \n";
content += "- Node.js üben\n";
content += "- Gemüse einkaufen";


fs.writeFile(filepath + filename, content, (err) => {
    if(err!=null) {
        console.error("EN0ENT: no such file or directory")
    }
    else {
        console.log("File " + filepath + filename + " has been saved!"  )
    }
});
