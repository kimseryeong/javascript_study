//출처 : Youtube 드림코딩 
//      - 자바스크립트12.프로미스 개념부터 활용까지 Javascript Promise
//        | 프론트엔드 개발자 입문편 (JavaScript ES6)


/**
 * <Promise>
 *  - 자바스크립트의 내장 객체
 *  - 비동기 통신 시 콜백함수 대신 유용하게 사용할 수 있음
 * 
 *  1) State 이해 : pending -> fulfilled or rejected
 *  2) Producer vs consumer
 */

//1. Producer
// 새로운 Promise 가 만들어질 때, the executor는 자동적으로 실행됨
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something ... ');
    
    //Promise 생성 후 2초 후에 실행되도록
    setTimeout(()=>{
        //resolve('success'); //성공 시
        reject(new Error('no network'));
    }, 2000);
});

//2. consumers : then, catch, finally
promise
    // Promise 가 성공적으로 통신되었다면,
    // then -> 값을 보낼 수도 있고 또 다른 Promise를 보낼 수도 있음
    .then((value)=>{ //value : resolve에서 보낸 값
        console.log(value);
    })
    // Promise 가 실패되었다면,
    .catch(error => {
        console.log(error)
    })
    // 성공/실패와 상관 없이 마지막 로직 수행하고 싶을 때 사용
    .finally(()=>{
        console.log('finally');
    });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
    .then(num => num * 2) //2
    .then(num => num * 3) //6
    .then(num => {
        //다른 서버와 통신하는 Promise
        return new Promise((resolve, reject) => {
            setTimeout(()=> resolve(num - 1), 1000); //5
        });
    })
    .then(num => console.log(num)); //5

//4. Error Handling
//암탉 받아오는 Promise
const getHen = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    })
}
//계란 받아오는 Promise
const getEgg = hen => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    })
}
//받아온 계란으로 요리하는 Promise
const cook = egg => {
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${egg} => 🍳`), 1000);
        setTimeout(() => reject(new Error(`Error : ${egg} => 🍳`)), 1000);
    })
}

//암탉 -> 계란 -> 요리
getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));

//하나의 value만 가져올 때 이렇게 표현할 수 있음
getHen()
    .then(getEgg) 
    .then(cook)
    .catch(error => {//cook 실패 시 대체 -> 에러가 발생해도 Promise 체인이 성공적으로 마무리됨
        return '🐸' 
    })
    .then(console.log)
    .catch(console.log)