'use strict';

// Function
// 하나의 함수는 하나의 일만 하도록 구현
// naming: doSomething, command, verb

function log(message){
    console.log(message);
    return 0;
}

log('Hello@');

function changeName(obj){
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};
console.log(ellie);

changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){ //변수의 초기값 설정해줄 수 있음
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');
showMessage('Hi!', 'serong');


// 4. Rest parameters (added in ES6)
function printAll(...args){ //배열
    for(let i = 0; i < args.length; i++){
        console.log(`for문 기본형 >> ${i} : ${args[i]}`);
    }
    
    for(const arg of args){
        console.log(`for문 of형 >> ${arg}`);
    }

    args.forEach((arg) => console.log(`for문 forEach형 >> ${arg}`));
}
printAll('dream', 'coding', 'ellie');


// 5. Local scope
let globalMessage = 'global';
function printMessage(){
    let message = 'hello in';
    console.log(message);
    console.log(globalMessage);

    printAnother();
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage);
}
printMessage();


// 6. Return a value
function sum(a, b){
    return a + b;
}
console.log(`sum: ${sum(1, 2)}`);
const result = sum(1, 2);
console.log(`sum: ${result}`);


// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic... -> 가독성이 떨어짐
    }
}

//good 
function upgradeUser(user){
    if(user.point <= 10){
        // 조건이 맞지 않는 경우 함수 종료
        return;
    }

    //long upgrade logic...
}

//----------------------------------------------------------------
// 1. Function
// can be assigned as a value to variable (함수 변수할당)
// can be passed as an argument to other functions (함수 파라미터)
// can be returned by another function (함수 리턴)

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

const print = function(){ //anonymous function
    console.log('print');
}
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}

const printYes = function(){ //anonymous function
    console.log('YES!!');
}
const printNo = function print(){ //named function 
    console.log('NO!!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
const simplePrint = function() {
    console.log('simplePrint');
}
const simplePrint2 = () => console.log('simplePrint2');

simplePrint();
simplePrint2();

const add = (a, b) => a + b;
const add2 = (a, b) => {
    return a + b;
}

// IIFE: Immediately Invoked Function Expression
// 함수 바로 실행하고 싶을 때 사용 (요즘은 주로 X)
(function hello(){
    console.log('IIFE');
})();


// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calc(command, a, b) {
    let result = 0;

    if(command === '+'){
        result = a + b;
    }
    else if(command === '-'){
        result = a - b;
    }
    else if(command === '/'){
        result = a / b;
    }
    else if(command === '*'){
        result = a * b;
    }
    else if(command === '%'){
        result = a % b;
    }
    else{
        result = 'error!!';
        //throw Error('error !! unknown command !');
    }
    console.log(`result: ${result}`);
    return result;
}
calc('+', 2, 5);
calc('//', 2, 6);

// 드림코딩 ellie 코드
// 정해진 데이터를 처리하는 경우는 if문 보다 switch 가 더 좋음 !
function calculate_ellie(command, a, b){
    switch (command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiple':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

let calcRes1 = calculate_ellie('add', 2, 6);
console.log(`ellie calculate 결과 : ${calcRes1}`);
console.log(calculate_ellie('ad', 5, 8));