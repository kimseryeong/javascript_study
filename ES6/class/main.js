/** 출처 : 모던 자바스크립트 Deep Dive - 이웅모 */

/** 
 * Class Hoisting(호이스팅) - (let, const 키워드로 선언한 변수처럼 호이스팅됨)
*  
*    함수와 같이 소스코드 런타임 이전에 먼저 평가되어 함수 객체를 생성함.
*    이때 생성된 함수 객체 === 생성자 함수 (constructor)
*    class는 클래스 정의 이전에 참조할 수 없음 !
* 
*/

//Error발생 !! (Uncaught ReferenceError: Cannot access 'Test' before initialization)
//const test2 = new Test(); 
//console.log(test2); 

class HoistingTest{}

const hostingTest = new HoistingTest(); //정상
console.log(hostingTest);


/**
 * Class Method(메서드)
* 
*    클래스 몸체는 0개 이상의 메서드 선언 가능
*    1. constructor(생성자) - 인스턴스를 생성하고 초기화하는 특수한 메서드 (이름변경 X)
*       -> constructor는 기본적으로 return 생략
*    2. 프로토타입 메서드
*    3. 정적 메서드
*/

/** 1. constructor Method */
class ConstructorMethodTest{
    //생성자
    constructor(test){
        //인스턴스 생성 및 초기화
        this.test = test;  //인수로 인스턴스 초기화
    }
}
const constructorMethodTest = new ConstructorMethodTest('TEST');
console.log(constructorMethodTest);


function FnMethodTest(test){//생성자 함수
    this.test = test; //인스턴스 생성 및 초기화
}


class ConstructorMethodTest2{
    //생성자
    constructor(){
        //인스턴스 생성 및 초기화
        this.address = 'Seoul'; //고정값으로 인스턴스 초기화
    }
}
const constructorMethodTest2 = new ConstructorMethodTest2();
console.log(constructorMethodTest2);


/** 2. 프로토타입 Method 
*      생성자 함수를 사용하여 인스턴스 생성하는 경우 
*      프로토타입 메서드 생성하기 위해서는 다음과 같이 명시적으로 프로토타입에 메서드 추가
*      Class명.prototype.method명 = function() {}

*      만약 클래스 몸체에서 메서드를 정의한다면 기본적으로 프로토타입 메서드가 됨 !
 */
//방법1 - 명시적 방법
//생성자 함수
function FnPerson(name){
    this.name = name;
}

FnPerson.prototype.sayHi = function () {
    console.log(`Hi ! My name is ${this.name} :>`);
}

const fnMe = new FnPerson('Sery');
fnMe.sayHi();


//방법2
class Person{
    constructor(name){
        this.name = name;
    }

    //프로토타입 메서드
    sayHi(){
        console.log(`Hi 😻 My name is ${this.name} 😽`);
    }
}

const me = new Person('Sery');
me.sayHi();

// me 객체의 프로토타입은 Person.prototype 이다.
Object.getPrototypeOf(me) === Person.prototype; //true
me instanceof Person; //true

// Person.prototype의 프로토타입은 Object.prototype이다.
Object.getPrototypeOf(Person.prototype) === Object.prototype; //true
me instanceof Object; //true

// me 객체의 Constructor는 Person 클래스이다
me.constructor === Person; //true


/** 3. 정적 Method 
*      인스턴스를 생성하지 않아도 호출할 수 있는 메서드
 */

//방법1 - 명시적 방법
//생성자 함수
function FnFruit(name){
    this.name = name;
}

//정적 메서드
FnFruit.sayHi = function(){
    console.log(`Hi 🍇🍈🍉🍌🍍`);
}

FnFruit.sayHi();

//방법2 - static 활용
class Fruit{
    //생성자
    constructor(name){
        this.name = name;
    }

    //정적메서드
    static sayHi(){
        console.log(`Hi ${this.name} :>`);
    }
}
Fruit.sayHi(); //정적메서드는 클래스로 호출함! 생성 과정 필요 없음


/**
*          정적 메서드          VS       프로토타입 메서드
*  -------------------------------------------------------------------------
*                각 자신이 속해있는 프로토타입 체인이 다름
*                내부 this 바인딩 다름
*  -------------------------------------------------------------------------
*  클래스 호출                 |  인스턴스 호출
*  인스턴스 프로퍼티 참조 불가  |  인스턴스 프로퍼티 참조 가능
*  this == 클래스             |  this == 프로토타입 메서드를 호출한 인스턴스
*  -------------------------------------------------------------------------


* 메서드 내부에서 인스턴스 프로퍼티를 참조할 필요가 있다면 this 사용 -> 프로토타입 정의
* 반드시 인스턴스를 생성한 후 호출해야 하므로 this를 사용하지 않는 메서드는 
* 정적 메서드로 정의하는 것이 좋음.

*/

class Square{
    //정적 메서드
    static area(width, height){
        return width * height;
    }

    constructor(color){
        this.color = color; 
    }
    //프로토타입 메서드
    showColor(){
        console.log(`${this.color} is good 😽`);
    }
}
console.log(Square.area(10, 10)); //정적 메서드의 area는 인스턴스 프로퍼티를 참조하지 않음

const square = new Square('light pink');
square.showColor();




//정적 메서드 갖고 있는 표준 빌트 객체 : Math, Number, JSON, Object, Reflect
console.log(Math.max(1, 2, 3));
console.log(Number.isNaN(NaN));
console.log(JSON.stringify({a: 1}));
console.log(Object.is({}, {}));
console.log(Reflect.has({a: 1}, 'a'));


/**
 * Class Property
 * 
 * 인스턴스 프로퍼티 : constructor 내부에서 정의 
 * 
 */

class Drink{
    constructor(name){
        this.name = name; //인스턴스 프로퍼티 (public)
    }
}

const drink = new Drink('coffee');
console.log(drink); //Drink {name: "coffee"}
console.log(drink.name); //coffee

const drink_ = {
    
    //데이터 프로퍼티
    type: 'Coffee',
    color: 'Brown',

    //getter 함수
    get info(){
        return `${this.type} is ${this.color} color :>`;
    }

    //setter 함수
    ,set info(text){
        [this.type, this.color] = text.split(' ');
    }
};

drink_.info = 'Milk Brown';
console.log(drink_);