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
    ]

    let currentLine = 0;

    const allFileContents = fs.readFileSync('crateOperations.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        currentLine += 1;

        if(currentLine > 10) {
            const cargoCraneCommands = line.split(' ');
            let amountOfCrates = Number(cargoCraneCommands[1]);
            let fromStack = Number(cargoCraneCommands[3]);
            let toStack = Number(cargoCraneCommands[5]);

            // for(let i = 0; i < amountOfCrates; i++) {
            //     let lastEl = stacks[fromStack[-1]]
            //     stacks[toStack].push(lastEl);
            //     stacks[fromStack].pop();
            // }
        }
    });
    // for(let i = 0; i < stacks.length; i++) {
    //     return stacks[i][-1];
    // }
}

console.log(startCrateOperations());


