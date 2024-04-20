// 1. Use strict
// added in ES 5
// 바닐라 자바스크립트에서 사용
'use strict';

// 2. Variable, rw(read/write) - 메모리에 읽고 쓰기 가능
// let (added in ES6) - mutable type
let globalName = 'global name';
{
    let name = 'serong';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (쓰지마!!!!!)
// var는 선언 전 출력, 값 할당 가능
// var hoisting : 가장 먼저 실행되도록 선언을 맨 위로 올려주는 것
// var는 block scope이 없음 
console.log(age); //undefined
age = 4;
console.log(age); //4
var age;
{
    age = 5;
    var age;
}
console.log(age); //5

// 3. Contants, r(read only)
// const - immutable type
// 한번 할당하면 절대 값이 바뀌지 않는 것
// - 보안상 이유
// - 다양한 쓰레드를 동시에 값을 변경하도록
const dayOfWeek = 7;
const maxNumber = 5;

// 4. Variable types
// prmitive type : 더이상 작은 단위로 나누어질 수 없는 
// object
// function 
const count = 17;
const size = 17.1;

console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

//bigInt -> 숫자 뒤 'n' 삽입
//사파리에선 지원 X

// string
const char = 'c';
const brendan = 'brendan';
const helloBob = `hi ${brendan}` //template literals (string)
const helloBob2 = `hi "${brendan}"` //template literals (string)

//boolean
// false : 0, null, undefined, NaN, ''
// true : 어떠한 다른 값들
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x = undefined;
let y;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object
const serong = {name: 'seryeong', age: 26};
serong.age = 25; // serong object 자체는 변경이 불가

//5. Dynamic typing : dynamically typed language
//프로그램이 동작할 때 데이터 타입이 변경될 수 있음
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //error
