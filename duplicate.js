//remove duplicate values from an array
const names = ['alex', 'fiona', 'eirc', 'brad', 'john', 'ema', 'harry', 'ron', 'cedric', 'harry', 'ema', 'ron'];

function removeDuplicateElement(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) === -1) {
            unique.push(element);
        }
    }
    return unique;
}

const unique = removeDuplicateElement(names);
console.log(unique);