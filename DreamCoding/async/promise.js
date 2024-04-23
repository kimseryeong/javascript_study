//출처 : Youtube 드림코딩 - 자바스크립트12.프로미스 개념부터 활용까지 Javascript Promise | 프론트엔드 개발자 입문편 (JavaScript ES6)

/**
 * <Promise>
 *  - 자바스크립트의 내장 객체
 *  - 비동기 통신 시 콜백함수 대신 유용하게 사용할 수 있음
 * 
 *  1) State 이해 : pending -> fulfilled or rejected
 *  2) Producer vs consumer
 */


// 1. Producer (데이터 제공자)
// 새로운 Promise 가 만들어질 때, *the executor는 자동적으로 실행됨
// * executor : (resolve, reject) => {}
const promise = new Promise((resolve, reject) => {
    //로직 구현 (network, read files)

    console.log('doing something ... ');
    
    //Promise 생성 후 2초 후에 실행되도록
    setTimeout(()=>{
        resolve('success'); //성공 시
        //reject(new Error('no network')); //실패 시 Uncaught Error
    }, 2000);
});


// 2. consumers : then, catch, finally (데이터 소비자)
promise
    // Promise 가 성공적으로 통신되었다면,
    .then((value)=>{ //value : resolve에서 보낸 값
        console.log(value);
    })
    // Promise 가 실패되었다면 (에러 핸들링),
    .catch(error => {
        console.log(error)
    })
    // 성공/실패와 상관 없이 마지막 로직 수행하고 싶을 때 사용
    .finally(()=>{
        console.log('finally ~.~');
    });
    
    
// 3. Promise chaining
//1초 후 숫자 전달하는 Promise
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); 
})
    
// then -> 값을 보낼 수도 있고 또 다른 Promise를 보낼 수도 있음
fetchNumber
    .then(num => num * 2) //2
    .then(num => num * 3) //6
    .then(num => {
        //다른 서버와 통신하는 Promise
        return new Promise((resolve, reject) => {
            setTimeout(()=> resolve(num - 1), 1000); //5
        });
    })
    .then(num => console.log(`최종 num : ${num}`)); //5


// 4. Error Handling
//암탉 받아오는 Promise
const getHen = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    })
};

//치킨을 받아서 그 치킨으로부터 계란 받아오는 Promise
const getEgg = hen => {
    return new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`Error : ${hen} => 🥚`)), 1000);
    })
};

//계란을 받아서 받아온 계란으로 요리하는 Promise
const cook = egg => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    })
};

//맥북에서는 Promise 함수에 return을 해주지 않아도 에러가 발생하지 않고 잘 실행되었는데
//왜 윈도우 노트북에서는 에러가 발생한걸까.. Uncaught TypeError
// ----> 자바스크립트 엔진의 버전이나 환경 설정에 따라 다를 수 있다고 함.
//       표준 규약을 준수하여 Promise를 return 하도록 하는 것이 좋음

//암탉 -> 계란 -> 요리
getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));

//콜백함수 전달 시 하나의 value만 가져올 때 생략하여 표현할 수 있음
getHen()
    .then(getEgg)
    //중간에 로직이 실패되었을 때, 핸들링 해주기 (로직 바로 다음에 catch)
    //예) 계란을 받아오는 로직에서 실패 
    //실패 시 대체 -> 에러가 발생해도 Promise 체인이 성공적으로 마무리됨
    .catch(error => {
        return '🐸'; //계란을 개구리로 대체
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);