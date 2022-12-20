const fs = require('fs');

const findMarker = () => {

    const allFileContents = fs.readFileSync('inputData/datastream.txt', 'utf-8');
    const input = allFileContents;
    const hitMarkerAt = [];

    for (let i = 0; i < input.length; i++) {
        if(i > 3 && input[i] != input[i-1] && input[i] != input[i-2] && input[i] != input[i-3]){
            if(input[i-1] != input[i-2] && input[i-1] != input[i-3]){
                if(input[i-2] != input[i-3]){
                    hitMarkerAt.push(i + 1);
                    break;
                }
            }
        }
    }   
    return hitMarkerAt;
}

console.log(findMarker());