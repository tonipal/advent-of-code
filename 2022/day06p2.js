const fs = require('fs');

const findMarker = () => {
    const allFileContents = fs.readFileSync('inputData/datastream.txt', 'utf-8');
    const input = allFileContents;

    for (let i = 0; i < input.length; i++) {
        let aggregator = "";
        let marker = [];
        let unique = [];
    
        for (let j = 0; j < 14; j++) {
            aggregator += input[i+j];
        }
        marker = aggregator.split("");
        unique = Array.from(new Set(marker));
        if (marker.length === unique.length) {
            return i + 14;
        }
    }
}

console.log(findMarker());