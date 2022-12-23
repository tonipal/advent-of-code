const fs = require('fs');

const allFileContents = fs.readFileSync('inputData/treegrid.txt', 'utf-8');
const input = allFileContents.split('\r\n');

const testData = [
     '30373',
     '25512',
     '65332',
     '33549',
     '35390'
    ];

function findBestScore(input) {
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

            for (let z = y - 1; z >= 0; z--) {
                if (tree > forest[x][z]) {
                    leftValue += 1;
                } else {
                    leftValue += 1;
                    break;
                }
            }

            for (let z = y + 1; z < forest.length; z++) {
                if (tree > forest[x][z]) {
                    rightValue += 1;
                } else {
                    rightValue += 1;
                    break;
                }
            }

            for (let z = x + 1; z < forest.length; z++) {
                if (tree > forest[z][y]) {
                    bottomValue += 1;
                } else {
                    bottomValue += 1;
                    break;
                }
            }

            for (let z = x - 1; z >= 0; z--) {
                if (tree > forest[z][y]) {
                    topValue += 1;
                } else {
                    topValue += 1;
                    break;
                }
            }
            
            let newScenicScore = leftValue * rightValue * bottomValue * topValue;
            if (scenicScore < newScenicScore) {
                scenicScore = newScenicScore;
            }
        }
    }

    return scenicScore;
}

console.log(findBestScore(input));