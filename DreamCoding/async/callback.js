/**
 * 자바스크립트 : 동기 실행 (synchronous)
 * hoisting: var, function declaration
 * 
 */

console.log('1');
setTimeout(() => console.log('2'), 1000); 
console.log('3');

// Synchrounous Callback
function printImmediately(print){
    //hoisting에 의해 함수선언은 제일 먼저 실행됨
    print();
}
printImmediately(() => console.log('hello'));

// Asynchrounous Callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//Callback Hell example (콜백지옥)
//콜백지옥 함수 -> 디버깅, 유지보수 어려움 !!
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        //백엔드 대신하여 브라우저 API 사용해서 임의로 delay 시키기
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }
            else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user === 'ellie') {
                onSuccess({name : 'ellie', role: 'admin'});
            }
            else{
                onError(new Error('no access'));
            }  
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id
    , password
    , user => {
        userStorage.getRoles(
            user
            , (userWithRole) => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            }
            , error => {
                console.log(error);
            })
    }
    , error => {console.log(error)})