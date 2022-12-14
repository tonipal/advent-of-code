const fs = require('fs');

const rearrangeRucksack = () => {
    const itemPriorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const allFileContents = fs.readFileSync('itemsInsideRucksack.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        
    });
}

console.log(rearrangeRucksack());

