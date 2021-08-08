/*
 *  divisble by 3 --> Fizz
 *  divisible by 5 --> Buzz
 *  divisible  by 3 and 5 --> FizzBuzz
 */

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 15 == 0)
            console.log('FizzBuzz')
        if (i % 3 == 0)
            console.log('Fizz')
        if (i % 5 == 0)
            console.log('Buzz')
        else {
            console.log(i)
        }
    }

}
fizzBuzz(50);