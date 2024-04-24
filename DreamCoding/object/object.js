'use strict';

/**
 * [Object]
 * one of the Javascript's data types.
 * a collection of related data and/or functionality.
 * 대부분의 자바스크립트 object 들은 Object 클래스의 인스턴스임.
 * 
 * object = {key : value};
 */

// 1. Literals and properties
const name = 'serong';
const age = 26;

function print(person){
    console.log(`name: ${person.name}, age: ${person.age}`);
}

const serong = { name: 'serong', age: 26 }
print(serong);


// object 생성 방법 2가지
const obj1 = {}; //'obejct literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

obj1.add1 = true; // 동적으로 속성 추가 가능 -> 추천하는 방법은 아님 !
console.log(obj1.add1);

delete serong.age; // 동적으로 값 삭제 가능 (undefined 출력)
print(serong);


// 2. Computed properties
// object 접근 방법 2가지
console.log(serong.name);
console.log(serong['name']); // 항상 key는 string type 으로 !

serong['age'] = 25; // 동적으로 추가
console.log(serong.age);


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };

function makePerson(name, age){
    return {
        // key-value 값이 동일하다면 key는 생략 가능
        name
        ,age
    }
}
const person4 = makePerson('ellie', 30);
console.log(person4);

// 4. Constructor function
//object 함수 
// - 함수명 대문자 시작
// - return 대신 this.변수 사용
// - new 사용하여 호출
function Person(name, age){
    this.name = name;
    this.age = age;
}
const person5 = new Person('serong', 25);


// 5. in operator: property existence check (key in obj)
// key가 정의되어 있는지 확인 
// true / false
console.log('name' in serong);
console.log('age' in serong);
console.log('random' in serong);
console.log(serong.random); // 정의하지 않은 key -> undefined 출력


// 6. for..in vs for..of
// for (let key in obj)
for (let key in serong){
    console.log(key);
}

// for (let value of iterable)
const array = [1, 2, 3, 4]
for (let value of array){
    console.log(value);
}


// 7. Cloning
const user = { name: 'serong', age: 25}; // 메모리 할당 (ref)
const user2 = user; //user에 할당된 ref 가 동일하게 할당됨
console.log(user);

// 따라서 user 를 참조하고 있는 user2의 값을 변경하면 user의 값도 같이 변경됨.
user2.name = 'coder';
console.log(user);

// 참조하는 user 값이 변경되지 않도록 하는 방법
//old way : 빈 object 생성 후 object[key] 에 참조하고 싶은 object[key] 삽입
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
console.log(user3);
user3.name = 'serong';
console.log(user3);

// assign({}, 참조하고 싶은 object)
const user4 = Object.assign({}, user);
console.log(user4);


// assing 에 여러 값을 할당할 때, 동일한 key가 있다면 계속 값을 갱신해줌 !
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue
console.log(mixed.size); //big
