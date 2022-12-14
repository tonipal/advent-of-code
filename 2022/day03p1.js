const fs = require('fs');

const rearrangeRucksack = () => {
    let sumOfPriorities = 0;
    const itemPriorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const allFileContents = fs.readFileSync('itemsInsideRucksack.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        let firstHalf = line.slice(0, line.length / 2);
        let secondHalf = line.slice(line.length / 2);

        for(let i = 0; i < itemPriorities.length; i++) {
            if(firstHalf.includes(itemPriorities[i]) && secondHalf.includes(itemPriorities[i])) {
                sumOfPriorities += i + 1
            }
        }
    });
    
    return sumOfPriorities;
}

console.log(rearrangeRucksack());