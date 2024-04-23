'use strict';

/**
 * 비동기 핵심 !! 비동기의 꽃
 * < async & await > 
 *  - clear style of using promise
 *  - promise를 간결하게, 동기적으로 실행하도록 보여주는 장점 !
 *  - promise의 chaning이 길게 늘어지며 복잡해질 때 사용
 *  - 그렇다고 무분별하게 사용하는 것 아님 ! 
 * 
 * 
 *  자바스크립트는 기본적으로 동기 통신
 */

// 1. async
// 비동기로 데이터를 받아올 때, Promise 로 처리
function fetchUser(){
    
    // do network request in 10 secs ...   (백엔드에서 로직 받아온다고 가정)
    //return 'ellie';
    
    return new Promise((resolve, reject) => {
        //do network request in 10 secs ...
        
        resolve('ellie');
    })
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// Promise 를 사용하지 않고 간편하게 비동기 통신 하기
// -> 함수 앞에 'async' 추가하면 Promise를 return 하는 것과 똑같은 효과!
async function fetchUser(){
    // do network request in 10 secs ...

    return 'ellie'
}


// 2. await
// async 가 붙은 함수 내에서만 사용 가능
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000); //delay가 끝날 때까지 기다려주다가
    return '🍎';       //return
}

async function getLemon(){

    //chaning 방법
    //return delay(3000)
    //.then(() => '🍋');

    //await 방법
    await delay(1000);
    return '🍋';
}


function pickFruits(){
    return getApple().then(apple => {
        return getLemon().then(lemon => `${apple} + ${lemon}`);
    });
}
pickFruits().then(console.log);

//async & await 방식
async function pickFruits2(){
    try{
        const apple = await getApple();
        const lemon = await getLemon();
        
        return `${apple} + ${lemon}`;
    }
    catch{
        throw Error('에러 발생 !!!');
    }
}
pickFruits2().then(console.log);

//코드 좀 더 보완하기
async function pickFruits3(){
    //선언과 동시에 Promise 생성 & 실행
    // -> 병렬적으로 사과와 레몬을 동시에 따서 한번에 출력 !!
    const applePromise = getApple();
    const lemonPromise = getLemon();
    const apple = await applePromise;
    const lemon = await lemonPromise;
    
    return `${apple} + ${lemon}`;
}
pickFruits3().then(console.log);
    
// 하지만 병렬적으로 코드를 실행하는 경우는 위와 같이 더럽게 구현 XX
// -> Promise 에서 제공하는 API 사용

// 3. useful Promise APIs
//all()
//모든 Promise 를 다 받을 때까지 배열 형태로 모아주는
function pickAllFruits(){
    return Promise.all([getApple(), getLemon()]).then(
        fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

//race()
//Promise 중 가장 먼저 값을 리턴하는것 출력
function pickOnlyOne(){
    return Promise.race([getApple(), getLemon()]);
}
pickOnlyOne().then(console.log)