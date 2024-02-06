function checkDivisibility(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "threefive";
    } else if (number % 3 === 0) {
        return "three";
    } else if (number % 5 === 0) {
        return "five";
    } else {
        return "number is not divisible by three or five";
    }
}

// Example usage:
let testNumber = 15;
let result = checkDivisibility(testNumber);
console.log(`The result for ${testNumber} is: ${result}`);

