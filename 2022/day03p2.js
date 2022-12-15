const fs = require('fs');

const findBadgeAndReturnValue = (line1, line2, line3) => {
    const itemPriorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < itemPriorities.length; i++) {
        if(line1.includes(itemPriorities[i]) && line2.includes(itemPriorities[i]) && line3.includes(itemPriorities[i])) {
            return i + 1;
        }
    }
}

const solveAuthenticityBadgeIssue = () => {
    let sumOfPriorities = 0;
    let lineNumber = 0;

    let group = [];

    const allFileContents = fs.readFileSync('itemsInsideRucksack.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        group.push(line)
        lineNumber += 1;

        if(lineNumber % 3 === 0) {
            sumOfPriorities += findBadgeAndReturnValue(group[0], group[1], group[2]);
            group.pop();
            group.pop();
            group.pop();
        }
    });

    return sumOfPriorities;
}

console.log(solveAuthenticityBadgeIssue());