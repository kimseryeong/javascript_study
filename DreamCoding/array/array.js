'use strict';

// Array

// 1. Declaration (선언)
// 2가지 방법으로 생성
const arr1 = new Array();
const arr2 = [];

// 2. Index position
const fruits = ['🍎', '🍌']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]);


// 3. Looping over an array
// sol1
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
 
//sol2
for(let fruit of fruits){
    console.log(fruit);
}

//sol3
fruits.forEach((fruit, idx, array)=>{
    console.log(`value: ${fruit}, index: ${idx}`);
    console.log(`array: ${array}`); //forEach에서는 보통 array는 받아오지 않음
})

fruits.forEach((fruit) => console.log(fruit));


// 4. 추가, 삭제, 복제
// push : 배열 삽입 (뒤에서)
fruits.push('🫐') 
console.log(fruits);

// pop : 배열 제거 (뒤에서)
fruits.pop();
console.log(fruits);

//unshift : 앞에서부터 데이터 추가
fruits.unshift('🥝'); 
console.log(fruits);

//shift : 앞에서부터 데이터 삭제
fruits.shift();
console.log(fruits); 

// => unshift & shift 는 속도가 push & pop 보다 훨씬 느림 !!!!


// splice : remove an item by index position
fruits.push('🍋', '🍒', '🥝');
console.log(fruits); 

// splice(index, count) : index 부터 count 만큼 삭제
fruits.splice(1, 1); 
console.log(fruits); 

// splice(index, count, str) : index 부터 count 만큼 삭제 후 그 위치에 str 추가
fruits.splice(1, 1, '🍇', '🍊'); 
console.log(fruits); 

// combine two arrays
const fruits2 = ['🥥', '🍉']
const newFruits = fruits.concat(fruits2);
console.log(newFruits); 


// 5. Searching : find the index
console.log('----------------------------------');
console.log(fruits);

//indexOf : 해당 value의 인덱스 값 가져오기
//없는 값 : -1
console.log(fruits.indexOf('🍇'));
console.log(fruits.indexOf('🥝'));
console.log(fruits.indexOf('🥥'));

//includes : 해당 value 값 포함여부 확인하기
//true / false
console.log(fruits.includes('🍋'));
console.log(fruits.includes('🥥'));

//lastIndexOf : 중복되는 value 값 중 마지막 value의 index 가져오기
console.log(fruits);
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));
