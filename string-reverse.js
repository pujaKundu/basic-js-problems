function reverseString(str) {
    let reverse = '';
    for (const char of str) {
        reverse = char + reverse;
    }
    return reverse;
}

const text = "Puja Kundu";
const reversedText = reverseString(text);
console.log(reversedText);