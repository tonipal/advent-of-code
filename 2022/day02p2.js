const fs = require('fs');

const playRockPaperScissors = () => {
    let totalScore = 0;

    const loss = 0;
    const draw = 3;
    const win = 6;

    const playerChoseRock = 1;
    const playerChosePaper = 2;
    const playerChoseScissors = 3;

    const allFileContents = fs.readFileSync('inputData/strategyGuide.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        if (line[2] === 'X' && line[0] === 'A') {
            totalScore += loss + playerChoseScissors
        }
        if(line[2] === 'X' && line[0] === 'B') {
            totalScore += loss + playerChoseRock
        }
        if(line[2] === 'X' && line[0] === 'C') {
            totalScore += loss + playerChosePaper
        }
        if(line[2] === 'Y' && line[0] === 'A') {
            totalScore += draw + playerChoseRock
        }
        if(line[2] === 'Y' && line[0] === 'B') {
            totalScore += draw + playerChosePaper
        }
        if(line[2] === 'Y' && line[0] === 'C') {
            totalScore += draw + playerChoseScissors
        }
        if(line[2] === 'Z' && line[0] === 'A') {
            totalScore += win + playerChosePaper
        }
        if(line[2] === 'Z' && line[0] === 'B') {
            totalScore += win + playerChoseScissors
        }
        if(line[2] === 'Z' && line[0] === 'C') {
            totalScore += win + playerChoseRock
        }
    });
    return totalScore;
}

console.log(playRockPaperScissors());