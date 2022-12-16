const fs = require('fs');

const calculateNewArray = (min, max) => {
    let newArray = [];
    let numbers = max - min;

    for (let i = 0; i <= numbers; i++) {
        newArray.push(min + i)
    }

    return newArray;
}

const resolveSectionOverlaps = () => {
    let count = 0;

    const allFileContents = fs.readFileSync('inputData/assignedSectionPairs.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        sectionsArr = line.split(',')
        
        let firstElf = sectionsArr[0].split('-');
        let secondElf = sectionsArr[1].split('-');

        let x = calculateNewArray(Number(firstElf[0]), Number(firstElf[1]));
        let y = calculateNewArray(Number(secondElf[0]), Number(secondElf[1]));

        let allFoundX = x.every( ai => y.includes(ai) );
        let allFoundY = y.every( ai => x.includes(ai) );

        if (allFoundX || allFoundY) {
            count += 1;
        }
    });
    return count;
}

console.log(resolveSectionOverlaps());
