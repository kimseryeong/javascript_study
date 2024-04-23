'user strict';

/**
 * JSON : 서버 데이터 통신
 * 
 * HTTP (HyperText Transfer Protocol) - 문서, 이미지, 파일 ...
 * 
 * - Ajax (Asynchronous Javascript And XML)
 * - XHR (XMLHttpRequest)
 * - fetch() API -> IE 지원 X
 * 
 * JSON (JavaScript Object Notation) => { key : value }
 *  - 데이터 주고 받는 가장 간단한 파일 포맷
 *  - 사람 눈으로 읽기 쉽고
 *  - 직렬화 (serialization)
 *  - 프로그래밍 언어와 플랫폼에 상관없이 사용 가능 !
 * 
 * 
 *          serialize
 * object -------------> string
 *        <-------------
 *          deserialize
 */


// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori'
    ,color: 'white'
    ,size: null
    ,birthDate: new Date()
    //,Symbol: Symbol('id') //자바스크립트 Symbol은 포함되지 않음
    ,jump: ()=>{
        console.log(`${name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']); //원하는 프로퍼티만 골라서 사용 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'serong' : value;
})
console.log(json);


// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
//obj.jumpt(); // JSON에 포함된 함수는 object 변환 후 사용 불가!

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); //obj는 string 형태로 만들어지기 때문에 Error 발생

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value; 
})

