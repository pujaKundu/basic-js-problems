/*
 *  Put all the positive numbers of an array to another array,stop when finds a negative number
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, -2, 34, 5, 6];

function positiveArray(arr) {
    const positive = [];
    for (const element of arr) {
        if (element < 0) {
            break;
        }
        positive.push(element);
    }
    return positive;
}

const positiveNumbers = positiveArray(numbers);
console.log(positiveNumbers);