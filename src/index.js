function fibonacci(n){

    if (n === 1) {
        return [0, 1]
    }
    else {
        let sequence = fibonacci(n - 1)
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
        return sequence
    }
}
function isPrime(num){
    for (let i = 2; i < num; i++)
        if (num % i === 0)
            return false
    return num !== 1 && num !== 0
}
function isEven(n) {
    return n % 2 == 0
}
function isOdd(n) {
    return Math.abs(n % 2) == 1
}
function helloFunction(say){
    return 'This value is ' + say   
}
function toLowerCase(str){
    return str.toLowerCase()
}
function toUpperCase(str){
    return str.toUpperCase()
}
function contains(str, substring, fromIndex){
    return str.indexOf(substring, fromIndex) !== -1
}
function repeat(str, n){
    return (new Array(n + 1)).join(str)
}
function operations(number1, number2, operator){
    switch(operator){
        case '+':
            return number1 + number2
        case '-':
            return number1 - number2
        case '/':
            return number1 / number2
        case '*':
            return number1 * number2
        default:
            return 'Invalid operator';
    }
}

// eslint-disable-next-line no-undef
module.exports = {
    fibonacci: fibonacci,
    helloFunction: helloFunction,
    isPrime: isPrime,
    isEven: isEven,
    isOdd: isOdd,
    operations: operations,
    toLowerCase: toLowerCase,
    toUpperCase: toUpperCase,   
    contains: contains,
    repeat: repeat
}
