'use strict';

/**
 * 
 */

// async & await
// clear style of using promise

// 1. async
// 비동기로 데이터를 받아올 때, Promise 로 처리
// -> 함수 앞에 'async' 추가하면 Promise를 return 하는 것과 똑같은 효과!
function fetchUser(){
    /*
    // do network request in 10 secs ...   (백엔드에서 로직 받아온다고 가정)

    return 'ellie';
    */

    return new Promise((resolve, reject) => {
        //do network request in 10 secs ...   (백엔드에서 로직 받아온다고 가정)

        resolve('ellie');
    })
}

async function fetchUser(){
    // do network request in 10 secs ...   (백엔드에서 로직 받아온다고 가정)

    return 'ellie'
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
// async 가 붙은 함수 내에서만 사용 가능

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(3000); //delay가 끝날 때까지 기다려주다가
    return '🍎'       //return
}

async function getLemon(){
    await delay(3000);
    return '🍋'
}