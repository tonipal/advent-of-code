const fs = require('fs');

const calculateSum = (x, y, z) => x + y + z;

const getTopThreeTotal = () => {
    let caloriesArray = [0];
    const allFileContents = fs.readFileSync('inputData/caloriesOnElf.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        if (line == "") {
            caloriesArray.push(0);
        } else {
            caloriesArray[caloriesArray.length -1] += Number(line);
        }
    });
    caloriesArray.sort((a, b) => b - a);

    return calculateSum(caloriesArray[0], caloriesArray[1], caloriesArray[2]);
    // return Math.max(...caloriesArray);
}

console.log(getTopThreeTotal());