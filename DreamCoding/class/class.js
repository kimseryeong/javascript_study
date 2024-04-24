/**
 * 
 * [Class]
 *  - fields & methods
 * 
 *  - 클래스는 정의만! -> (메모리 할당 X)
 *  - 클래스에 데이터를 넣어 만드는 것(인스턴스 생성) === 객체(object) -> (메모리 할당 O)
 *
 * */

// https://developer.mozilla.org/ko/docs/Web/JavaScript

'use strict';

// Object-oriented Programming
// class : template
// object : instance of a class
// Javascript classes
//  - introduced in ES6
//  - syntactical sugar


// 1. Class Declaration(선언)
class Person{
    //생성자 (Only one)
    constructor(name, age){
        //field
        this.name = name;
        this.age = age;
    }

    //method
    speak(){
        console.log(`${this.name}! hello 깨굴 ~ 🐸`);
    }
}

const serong = new Person('serong', 20);
console.log(serong.name);
console.log(serong.age);
serong.speak(); //메소드 접근


// 2. Getter & Setter (Getter와 Setter는 한묶음!)
/**
 * 📌 Getter & Setter 사용하는 이유
 * 1. 데이터 은닉 및 보호 
 *      - 클래스는 외부에서 접근할 수 없도록 설계 -> getter & setter 통해 속성 접근 및 로직 적용가능
 *      - 데이터 안전하게 관리
 * 2. 유효성 검사
 *      - setter를 통해 데이터 유효성 검사 가능
 * 3. 계산된 속성 제공
 *      - getter를 통해 속성을 계산하여 반환 가능
 * 4. 캡슐화와 모듈성 강화
 *      - 클래스 내부 구현을 캡슐화하여 외부 노출 제한 가능
 *      - 클래스 간의 의존성 낮추고 모듈성 강화
 * */    
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //객체의 속성값을 반환하는 메서드
    get age(){ 
        return this._age;
    }

    //객체의 속성 값을 설정, 변경하는 메서드
    //setter를 사용하여 값의 '유효성 검사'를 할 수 있음 !!
    set age(value){
        // 공격적 Error
        // if(value < 0){
        //     throw Error('나이는 최소 0살 부터 !!! ');
        // }
        this._age = value < 0 ? 0 : value; //Error 발생시키지 않는 방법
    }
    
    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        this._firstName = value;
    }
    
    get lastName(){
        return this._lastName;
    }

    set lastName(value){
        this._lastName = value;
    }

    //생성자 변수를 통해 새롭게 메서드 만들기 가능
    get name(){     
        return this._firstName + this._lastName;
    }
    set name(value){
        this._name = value;
    }

    get userInfo(){
        return `${this._firstName + this._lastName} is ${this._age} years old.`;
    }
    set userInfo(value){
        this._userInfo = value;
    }

    introduce(){
        let fullName = this._lastName + this._firstName;
        console.log(`Hi, this is ${this._lastName + this._firstName}, ${this._age} years old! Nice to meet you ☘️`)
        
        return fullName;
    }
    
}
let user = new User('Steve', 'Job', -1);
console.log(user.age);

user = new User('Kim', 'Serong', 25);
console.log(`age : ${user.age}`);
console.log(`firstName : ${user.firstName}`);
console.log(`lastName : ${user.lastName}`);
console.log(`name : ${user.name}`);
console.log(`info : ${user.userInfo}`);
user.introduce();

let fullName = user.introduce();
console.log(`introduce() return: ${fullName}`);


// 3. Fields (public / private)
// 최근에 추가된 기능으로 사파리 지원 X
class Experiment {
    publicField = 2;
    #privateField = 0;
} 
const experiment = new Experiment();
console.log(experiment.publicField);  //2
console.log(experiment.privateField); //undefined


// 4. Static properties and methods
// 최근에 추가된 기능으로 사파리 지원 X
// object에 상관없이(들어오는 데이터에 상관없이) 공통적으로 class에서 사용하고 싶다면
// -> 메모리 사용 효율 !
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
console.log(article1.publisher); //undefined
console.log(Article.publisher);  //클래스 그 자체로 접근해야 함
Article.printPublisher(); //클래스 그 자체로 접근해야 함


// 5. Interitance (상속)
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of shape`);
    }
    
    getArea(){
        return this.width * this.height;
    }
}

// Shape 클래스 상속하여 Rectangle 클래스 생성
class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
let rectangleSize = rectangle.getArea();
console.log(`shape size : ${rectangleSize}`);

/**
 * 📌 클래스 오버라이딩 : 부모 클래스에서 정의한 메소드를 자식 클래스에서 재정의하는 것
 * -> 부모 클래스의 메소드를 자신의 필요에 맞게 수정하거나 확장할 수 있음 
 *    (기존의 부모 메소드 정보는 사라짐)
 * -> 코드 재사용성을 높이고 유연성을 제공
*/
// Shape 클래스 상속하여 Triangle 클래스 생성 (다형성 - 오버라이딩)
class Triangle extends Shape {
    // 부모의 메소드를 오버라이딩 -> 기존의 부모 메소드는 사라짐

    draw(){
        super.draw(); //부모의 draw 메소드도 같이 사용하고 싶다면
        console.log(`🔺`);
    }
    
    getArea(){
        return (this.width * this.height) / 2;
    }
}   

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
let triangleSize = triangle.getArea();
console.log(`shape size : ${triangleSize}`);


// 6. Class checking : instanceOf
// 왼쪽의 object가 오른쪽의 클래스의 instance 인지 아닌지 확인 
// true / flase 
// 자바스크립트의 모든 object 들은 'Object 클래스'를 상속받는다
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true