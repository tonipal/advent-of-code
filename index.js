const fs = require('fs');

const findVisibleTrees = () => {
    const allFileContents = fs.readFileSync('datastream.txt', 'utf-8');
    const input = allFileContents;
}

console.log(findVisibleTrees());


