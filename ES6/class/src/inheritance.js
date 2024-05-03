/** 상속에 의한 클래스 확장 */

/**
 * 클래스 상속과 생성자 함수 상속
 * 
 * 상속에 의한 클래스 확장
 * === 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의하는 것
 */

//슈퍼클래스
class Animal{
    constructor(age, weight){
        this.age = age;
        this.weight = weight;
    }

    eat() { return 'eat'; }

    move() { return 'move'; }

    static sayHi(){
        return 'HI !';
    }
}

//상속을 통해 Animal 클래스를 확장
//서브클래스
class Rabbit extends Animal{
    jump() { return 'jump'; }
}

const rabbit = new Rabbit(1, 2);
console.log(rabbit);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Animal);

console.log(rabbit.eat());
console.log(rabbit.move());
console.log(rabbit.jump());


/**
 * static method super 호출
 */
//서브클래스
class Lion extends Animal{
    move(){ //오버라이딩
        return `lion is running since ${this.age} years old`;
    }

    static sayHi(){
        //super.sayHi는 슈퍼클래스의 정적 메서드를 가리킴
        return `${super.sayHi()} I'm Lion`;
    }
}
const lion = new Lion(1, 10);
console.log(lion);
console.log(lion.move());
console.log(Lion.sayHi());


//슈퍼클래스
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }

    toString(){
        return `width = ${this.width}, height = ${this.height}`;
    }
}

//서브클래스
class ColorRectangle extends Rectangle{
    constructor(width, height, color){
        super(width, height); //슈퍼클래스의 생성자 가져오기 (생략하면 super에서 정의된 인스턴스는 삭제됨)
        this.color = color; //서브클래스의 생성자 추가
    
        //super가 반환한 인스턴스가 this에 바인딩 됨 !
        console.log(this);
    }

    //메서드 오버라이딩
    toString(){
        return `${super.toString()}, color = ${this.color}`;
    }
}

const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle);
console.log(colorRectangle.getArea());
console.log(colorRectangle.toString());
