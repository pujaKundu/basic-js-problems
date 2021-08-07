//largest array number
function largestNumber(num) {
    let largest = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > largest) {
            largest = num[i];
        }
    }
    return largest;
}

const arr = [23, 95, 1, -55];
const largest = largestNumber(arr);
console.log(largest);