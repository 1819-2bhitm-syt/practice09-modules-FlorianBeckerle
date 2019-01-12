const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];
rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    for (line of compressedLines){
        //console.log(line);
        console.log(compress(line));
    }
});

function compress(line){
    let decompressed = "";

    let letter = line.charAt(0);
    let numberString = line.substring(1, line.length);
    let number = parseInt(numberString);


    for(let i = 0; i < number; i++){
        decompressed += letter;
    }


    return decompressed;
}

