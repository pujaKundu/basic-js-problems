//fibonacci series using recursion

//returns n th number in fibonacci series
// function fibonacci(num) {
//     //base case
//     if (num == 0) {
//         return 0;
//     }
//     if (num == 1) {
//         return 1;
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }
// const fibonacciNumber = fibonacci(9);
// console.log(fibonacciNumber);

//fibonacci series
//0 1 1  2 3 5 8 13 21
function fibonacciSeries(n) {
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];
    }
    const fibo = fibonacciSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const fib = fibonacciSeries(8);
console.log(fib);