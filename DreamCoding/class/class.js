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
    //생성자
    constructor(name, age){
        //field
        this.name = name;
        this.age = age;
    }

    //method
    speak(){
        console.log(`${this.name}! hello`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); //메소드 접근


// 2. Getter & Setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // 공격적 Error
        // if(value < 0){
        //     throw Error('나이는 최소 0살 부터 !!! ')
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


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
        console.log(`drawing ${this.color} color of`);
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

// Shape 클래스 상속하여 Triangle 클래스 생성 (다형성 - 오버라이딩)
class Triangle extends Shape {
    // 부모의 draw 메소드를 오버라이딩 -> 기존의 부모 메소드는 사라짐
    draw(){
        super.draw(); //부모의 draw 메소드도 같이 사용하고 싶다면,
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