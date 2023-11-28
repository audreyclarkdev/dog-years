// my age
let myAge = 30;

// early dog years. this variable will change
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

// dog age after the early years
let laterYears = myAge - 2;

// later dog years multiplied by 4
laterYears *= 4;

console.log("a dog's early years:", earlyYears);
console.log("a dog's later years:", laterYears);

// my age in dog years, both results added
let myAgeInDogYears = earlyYears + laterYears;

// my name all lower case
let myName = 'Audrey'.toLowerCase();
console.log(myName);

// string intrapolation using the above variables
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years!`);

