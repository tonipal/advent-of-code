const fs = require('fs');

const startCrateOperations = () => {
    // stacks initial state
    stacks = [
        ['R','G','J','B','T','V','Z'],
        ['J','R','V','L'],
        ['S','Q','F'],
        ['Z','H','N','L','F','V','Q','G'],
        ['R','Q','T','J','C','S','M','W'],
        ['S','W','T','C','H','F'],
        ['D','Z','C','V','F','N','J'],
        ['L','G','Z','D','W','R','F','Q'],
        ['J','B','W','V','P']
    ];

    let currentLine = 0;
    let answer = [];

    const allFileContents = fs.readFileSync('inputData/crateOperations.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        currentLine += 1;

        if(currentLine > 10) {
            const cargoCraneCommands = line.split(' ');
            let amountOfCrates = Number(cargoCraneCommands[1]);
            let fromStack = Number(cargoCraneCommands[3]) -1;
            let toStack = Number(cargoCraneCommands[5]) -1;
            
            for(let i = 0; i < amountOfCrates; i++) {
                let el = stacks[fromStack][stacks[fromStack].length - amountOfCrates + i];
                stacks[toStack].push(el);
                stacks[fromStack].splice(stacks[fromStack].length - amountOfCrates + i, 1);
            }
        }
    });
    for (let i = 0; i < stacks.length; i++){
        answer.push(stacks[i][stacks[i].length -1]);
    }
    return answer;
}

console.log(startCrateOperations());