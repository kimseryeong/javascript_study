/**
 * Callback 지옥 함수 -> Promise 객체로 변환해보기
 * 
 */

//Callback Hell example (콜백지옥)
class UserStorage{
    loginUser(id, password){
    // loginUser(id, password, onSuccess, onError){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id)
                    // onSuccess(id);
                }
                else{
                    reject(new Error('not found'))
                    // onError(new Error('not found'));
                }
            }, 2000);
        })
    }

    // getRoles(user, onSuccess, onError){
    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (user === 'ellie') {
                    resolve({name : 'ellie', role: 'admin'})
                    // onSuccess({name : 'ellie', role: 'admin'});
                }
                else{
                    reject(new Error('no access'))
                    // onError(new Error('no access'));
                }  
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

/**
 * 콜백지옥 함수 -> Promise
 */
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(
        `Hello ${user.name}, you have a ${user.role} role`
    ))
    .catch(error => console.log(error))


//기존 콜백 함수
// userStorage.loginUser(
//     id
//     , password
//     , user => {
//         userStorage.getRoles(
//             user
//             , (userWithRole) => {
//                 alert(
//                     `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//                 );
//             }
//             , error => {
//                 console.log(error);
//             })
//     }
//     , error => {console.log(error)}
// )