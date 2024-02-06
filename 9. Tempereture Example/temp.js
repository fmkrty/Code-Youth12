const num1 = 10;
const num2 = 5;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num1} is not greater than ${num2}`);
}

// Question 2: Create an if statement that checks if a number is smaller than another and log that it is or isn't
if (num1 < num2) {
    console.log(`${num1} is smaller than ${num2}`);
} else {
    console.log(`${num1} is not smaller than ${num2}`);
}

// Question 3: Create an if statement that checks if a number is equal to another then console.log that it is or isn't
if (num1 === num2) {
    console.log(`${num1} is equal to ${num2}`);
} else {
    console.log(`${num1} is not equal to ${num2}`);
}

/* Question 4: Create an if statement that checks the temperature, if the temperature is:
0-10 - freezing
10 - 20 - cold
20 - 30 - warm
30 - 40 - hot
40 - 50 - very hot

console.log the result based on the temperature;
*/
const temperature = 25;

if (temperature >= 0 && temperature < 10) {
    console.log("Freezing");
} else if (temperature >= 10 && temperature < 20) {
    console.log("Cold");
} else if (temperature >= 20 && temperature < 30) {
    console.log("Warm");
} else if (temperature >= 30 && temperature < 40) {
    console.log("Hot");
} else if (temperature >= 40 && temperature <= 50) {
    console.log("Very hot");
} else {
    console.log("Temperature out of range");
}