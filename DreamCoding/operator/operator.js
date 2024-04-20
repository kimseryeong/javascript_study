'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
//counter = counter + 1;
//preIncrement = counter;
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//postIncrement = counter;
//counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
// or -> 하나만 true 여도 true

console.log(`and: ${value1 && value2 && check()}`);
// and -> 하나만 false 여도 false

console.log(`not: ${!value1}`);

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('😱')
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const serong1 = {name: 'serong'};
const serong2 = {name: 'serong'};
const serong3 = serong1;
console.log(serong1 == serong2); //각각 다른 reference
console.log(serong1 === serong2);
console.log(serong1 === serong3);

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false (0 != boolean type)
console.log('' == false); //true
console.log('' === false); //false ('' != boolean type)
console.log(null == undefined); //true
console.log(null === undefined); //false (null != boolean type)

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie'){
    console.log('Welcome, Ellie');
}
else if (name === 'coder'){
    console.log('You are amazing coder');
}
else{
    console.log('unknown');
}    

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// for loop, for(begin; condition; step)
for(let i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
for (let num = 0; num <= 10; num++){
    if(num % 2 !== 0){
        continue;
    }
    console.log(`q1. ${num}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8
for (let num = 0; num <= 10; num++){
    if(num > 8){
        break;
    }
    console.log(`q2. ${num}`);
}
