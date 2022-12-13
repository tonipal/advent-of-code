const fs = require('fs');

const getHighestCalorieScore = () => {
    let caloriesArray = [0];
    const allFileContents = fs.readFileSync('caloriesOnElf.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        if (line == "") {
            caloriesArray.push(0);
        } else {
            caloriesArray[caloriesArray.length -1] += Number(line);
        }
    });
    return Math.max(...caloriesArray);
}

console.log(getHighestCalorieScore());



