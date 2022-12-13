const fs = require('fs');

let caloriesArray = [0];
const allFileContents = fs.readFileSync('../caloriesOnElf.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
    if (line == "") {
        caloriesArray.push(0);
    } else {
        caloriesArray[caloriesArray.length -1] += Number(line);
    }
});


console.log(Math.max(...caloriesArray));