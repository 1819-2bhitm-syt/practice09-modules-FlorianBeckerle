const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('teachers.csv'),
    crlfDelay: Infinity
});

let compressedLines = [];
rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    decoration();
    let processedLine="";
    for (let i=0; i< compressedLines.length;i++) {
        processedLine = compressedLines[i];
        let j = 0;
        j= processedLine.indexOf(';');
        let lName = processedLine.substring(0, j);
        let fName = processedLine.substring(j+1, processedLine.length);
        console.log(getMailAddresses(fName, lName));
        }
    console.log("---------------------------------");
});

function decoration(){
    //genau 33mal "-"
    console.log("---------------------------------");
    console.log("email addresses")
    console.log("---------------------------------");

}

function getMailAddresses(firstName, lastName){

    lastName = lastName.replace("ä", "ae");
    lastName = lastName.replace("ö", "oe");
    lastName = lastName.replace("ü", "ue");


    return firstName.charAt(0).toLowerCase() + "." + lastName.toLowerCase() + "@htl-leonding.ac.at";
}




