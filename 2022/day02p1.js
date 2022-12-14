const fs = require('fs');

const playRockPaperScissors = () => {
    let totalScore = 0;

    const loss = 0;
    const draw = 3;
    const win = 6;

    const playerChoseRock = 1;
    const playerChosePaper = 2;
    const playerChoseScissors = 3;

    const allFileContents = fs.readFileSync('strategyGuide.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        if (line[0] === 'A' && line[2] === 'X') {
            totalScore += draw + playerChoseRock
        }
        if(line[0] === 'A' && line[2] === 'Y') {
            totalScore += win + playerChosePaper
        }
        if(line[0] === 'A' && line[2] === 'Z') {
            totalScore += loss + playerChoseScissors
        }
        if(line[0] === 'B' && line[2] === 'X') {
            totalScore += loss + playerChoseRock
        }
        if(line[0] === 'B' && line[2] === 'Y') {
            totalScore += draw + playerChosePaper
        }
        if(line[0] === 'B' && line[2] === 'Z') {
            totalScore += win + playerChoseScissors
        }
        if(line[0] === 'C' && line[2] === 'X') {
            totalScore += win + playerChoseRock
        }
        if(line[0] === 'C' && line[2] === 'Y') {
            totalScore += loss + playerChosePaper
        }
        if(line[0] === 'C' && line[2] === 'Z') {
            totalScore += draw + playerChoseScissors
        }
    });
    return totalScore;
}

console.log(playRockPaperScissors());