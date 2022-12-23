const fs = require('fs');

const allFileContents = fs.readFileSync('treegrid.txt', 'utf-8');
const input = allFileContents.split('\r\n');

const testData = [
     '30373',
     '25512',
     '65332',
     '33549',
     '35390'
    ];

function findBestSpot(input) {
    const forest = [];
    let scenicScore = 0;

    for (let i = 0; i < input.length; i++) {
        forest[i] = input[i].split('');
    }
    
    for (let x = 0; x < forest.length; x++) {
        for (let y = 0; y < forest.length; y++) {
            let tree = forest[x][y];
            let leftValue = 0;
            let rightValue = 0;
            let bottomValue = 0;
            let topValue = 0;

            let leftContinue = true;
            let rightContinue = true;
            let bottomContinue = true;
            let topContinue = true;
            
            for (let z = 0; z < forest.length; z++) {
                if (topContinue && x-z >= 0 && tree >= forest[x-z][y]) {
                    topValue += 1;
                } else if (topContinue && x-z >= 0) {
                    topValue += 1;
                    topContinue = false;
                }
                if (bottomContinue && x+z <= forest.length -1 && tree >= forest[x+z][y]) {
                    bottomValue += 1;
                } else if (bottomContinue && x+z <= forest.length -1) {
                    bottomValue +=1;
                    bottomContinue = false;
                }
                if (leftContinue && y-z >= 0 && tree >= forest[x][y-z]) {
                    leftValue += 1;
                } else if (leftContinue && y-z >= 0) {
                    leftValue += 1
                    leftContinue = false;
                }
                if (rightContinue && y+z <= forest.length -1 && tree >= forest[x][y+z]) {
                    rightValue += 1;
                } else if (rightContinue && y+z <= forest.length -1) {
                    rightValue += 1;
                    rightContinue = false;
                }
            }

            // for (let z = 0; z < forest.length; z++) {
            //     if (z === forest.length -1) {
            //         break;
            //     } else if (y - z === 0) {
            //         leftValue += 1;
            //         break;
            //     } else if (tree >= forest[x][y-z]) {
            //         leftValue += 1;
            //     } else {
            //         leftValue += 1;
            //         break;
            //     }
            // }

            // for (let z = 0; z < forest.length; z++) {
            //     if (z === forest.length -1) {
            //         break;
            //     } else if (y + z === forest.length -1) {
            //         rightValue += 1;
            //         break;
            //     } else if (tree >= forest[x][y+z]) {
            //         rightValue += 1;
            //     } else {
            //         rightValue += 1;
            //         break;
            //     }
            // }

            // for (let z = 0; z < forest.length; z++) {
            //     if (z === forest.length -1) {
            //         break;
            //     } else if (x + z === forest.length -1) {
            //         bottomValue += 1;
            //         break;
            //     } else if (tree >= forest[x+z][y]) {
            //         bottomValue += 1;
            //     } else {
            //         bottomValue += 1;
            //         break;
            //     }
            // }

            // for (let z = 0; z < forest.length; z++) {
            //     if (z === forest.length -1) {
            //         break;
            //     } else if (x - z === 0) {
            //         topValue += 1;
            //         break;
            //     } else if (tree >= forest[x-z][y]) {
            //         topValue += 1;
            //     } else {
            //         topValue += 1;
            //         break;
            //     }
            // }
            
            
            let newScenicScore = leftValue * rightValue * bottomValue * topValue;
            if (scenicScore < newScenicScore) {
                console.log(rightValue, leftValue, bottomValue, topValue);
                scenicScore = newScenicScore;
            }
        }
    }

    return scenicScore;
}

console.log(findBestSpot(input));


            // let leftContinue = true;
            // let rightContinue = true;
            // let bottomContinue = true;
            // let topContinue = true;
            
            // for (let z = 0; z < forest.length; z++) {
            //     if (topContinue && x-z >= 0 && tree >= forest[x-z][y]) {
            //         topValue += 1;
            //     } else if (topContinue && x-z >= 0) {
            //         topValue += 1;
            //         topContinue = false;
            //     }
            //     if (bottomContinue && x+z <= forest.length -1 && tree >= forest[x+z][y]) {
            //         bottomValue += 1;
            //     } else if (bottomContinue && x+z <= forest.length -1) {
            //         bottomValue +=1;
            //         bottomContinue = false;
            //     }
            //     if (leftContinue && y-z >= 0 && tree >= forest[x][y-z]) {
            //         leftValue += 1;
            //     } else if (leftContinue && y-z >= 0) {
            //         leftValue += 1
            //         leftContinue = false;
            //     }
            //     if (rightContinue && y+z <= forest.length -1 && tree >= forest[x][y+z]) {
            //         rightValue += 1;
            //     } else if (rightContinue && y+z <= forest.length -1) {
            //         rightValue += 1;
            //         rightContinue = false;
            //     }
            // }