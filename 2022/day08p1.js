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

function findVisibleTrees(input) {
    const forest = [];
    let visibleTrees = 0;

    for (let i = 0; i < input.length; i++) {
        forest[i] = input[i].split('');
    }

    for (x = 0; x < forest.length; x++) {
        for(y = 0; y < forest[x].length; y++) {
            // check edges of the forest, all trees on the edge are visible
            if (
                x === 0 ||
                y === 0 ||
                y === forest[x].length -1 ||
                x === forest.length -1
            ) {
                visibleTrees += 1;
            } else {
                const isHighestLeft = forest[x].findIndex((tree) => tree >= forest[x][y]);
                const isHighestRight = forest[x].findLastIndex((tree) => tree >= forest[x][y]);
                const isHighestTop = forest
                    .map((row) => row[y])
                    .findIndex((tree) => tree >= forest[x][y]);
                const isHighestBottom = forest
                    .map((row) => row[y])
                    .findLastIndex((tree) => tree >= forest[x][y]);

                if (
                    isHighestLeft >= y ||
                    isHighestRight <= y ||
                    isHighestTop >= x ||
                    isHighestBottom <= x
                ) {
                    visibleTrees += 1;
                }
            }
        }
    }

    return visibleTrees;
}

console.log(findVisibleTrees(input));