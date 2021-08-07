// fibnacci series using for loop



function fibonacci(num) {
    if (typeof num != 'number') {
        return "Please enter a number";
    }
    if (num < 2) {
        return "Please enter a number greater than 1";
    }
    const fibonacciSeries = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    return fibonacciSeries;

}

console.log(fibonacci(7));