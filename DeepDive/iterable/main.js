/**
* 이터러블 (Iterable) : 반복 가능한 객체
* 
* ES6 이후 이터러블한 객체를 통일하여 
* [for ... of문, 스프레드 문법, 배열 디스트럭처링 할당 대상]으로 사용할 수 있도록 일원화.
* => 데이터 공급자의 역할

* Symbol.Iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 
* 프로토타입 체인을 통해 상속받은 객체를 말함


*/

//이터러블인지 확인하는 함수
const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

//배열, 문자열, Map, Set 등은 이터러블
console.log(isIterable([]));
console.log(isIterable(''));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable({}));

const array = [1, 2, 3];

//배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블임
console.log(Symbol.iterator in array);

//이터러블인 배열은 for ... of 문으로 순회 가능
for (const item of array){
    console.log(item);
}

//이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있음
console.log([...array]);

//이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있음
const [a, ... rest] = array;
console.log(a, rest);


const obj = {a: 1, b:2};

//일반 객체는 Symbol.iterator 메서드를 구현하거나 상속받지 않음
// ==> 이터러블이 아니다
console.log(Symbol.iterator in obj);

//이터러블이 아닌 객체는 for...of문으로 순회 X
// for(const item of obj){
//     console.log(item); //Type Error: obj is not iterable
// }

//배열 디스트럭처링 할당의 대상으로 사용할 수 없음
//const [a, b] = obj; //Type Error: obj is not iterable


//이터레이터 : 이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터를 반환
//next() 메서드 O
let iterator = array[Symbol.iterator]();
console.log(iterator);
console.log('next' in iterator);
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
//value 프로퍼티 : 현재 순회 중인 이터러블 값
//done 프로퍼티 : 이터러블의 순회 완료 여부



/**
* 빌트인 이터러블

* Array
* String
* Map
* Set
* TypedArray (Int8Array, Uint8Array, Uint8ClampedArray
*             , Int16Array, Int32Array, Uint32Array
*             , Float32Array, Float64Array)
* arguments
* DOM 컬렉션 (NodeList, HTMLCollection)

*/

for(const item of [1, 2, 3]){
    console.log(item);

    //동작원리
    //next()를 호출하여 이터러블을 순회하며 
    //for ... of 문 내의 할당된 변수에 value를 삽입
    //done: false이면 순회 중단
}


//for ... of 문 동작원리 코드로 보기
const iterable = [1, 2, 3];
iterator = iterable[Symbol.iterator]();
for ( ;; ){
    const res = iterator.next();

    if(res.done) break;

    const item = res.value;
    console.log(item);
}

/**
 * 사용자 정의 이터러블
 */

//사용자 정의 이터러블 - 피보나치 수열
const fibonacci = {
    [Symbol.iterator](){
        let [pre, cur] = [0, 1];
        const max = 10;

        //Symbol.iterator 메서드는 next() 소유
        return{
            next(){
                [pre, cur] = [cur, pre + cur];

                //이터레이터 객체 반환
                return { value: cur, done: cur >= max };
            }
        }
    }
}

//for ... of 문
for(const num of fibonacci){
    console.log(num);
}

//스프레드 문법
const arr = [...fibonacci];
console.log(arr);

//배열 디스트럭처링
const [first, second, ...restV] = fibonacci;
console.log(first, second, restV);


//max 인수를 받는 피보나치 수열 함수
const fnFibonacci = function(max){
    
    let [pre, cur] = [0, 1];

    //Symbol.iterator 메서드는 next() 소유
    return{
        [Symbol.iterator](){
            return{
                next(){
                    [pre, cur] = [cur, pre + cur];
    
                    //이터레이터 객체 반환
                    return { value: cur, done: cur >= max };
                }
            }
        }    
    }
}

for(const num of fnFibonacci(10)){
    console.log(num);
}