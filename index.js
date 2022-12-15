const fs = require('fs');

const calculateNewArray = (min, max) => {
    let newArray = [min];
    let numbers = max - min;

    for (let i = 0; i < numbers; i++) {
        newArray.push(min + i)
    }

    return newArray;
}

const resolveSectionOverlaps = () => {
    let count = 0;
   
    const allFileContents = fs.readFileSync('assignedSectionPairs.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        let sectionsArr = line.split(',');
        let firstElf = sectionsArr[0].split('-');
        let secondElf = sectionsArr[1].split('-');

        let x = calculateNewArray(firstElf[0], firstElf[1]);
        let y = calculateNewArray(secondElf[0], secondElf[1]);

        if (x.includes(y) || y.includes(x)) {
            count += count + 1;
        }
    });
    return count;
}

console.log(resolveSectionOverlaps());


