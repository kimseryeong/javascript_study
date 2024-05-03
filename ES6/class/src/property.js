
/**
 * Class Property
 */

/** 📌 인스턴스 프로퍼티 : constructor 내부에서 정의 */
class Drink{
    constructor(name){
        this.name = name; //인스턴스 프로퍼티 (public)
    }
}

const drink = new Drink('coffee');
console.log(drink); //Drink {name: "coffee"}
console.log(drink.name); //coffee



/** 
* 📌 접근자 프로퍼티  (getter, setter)
*   : 자체적으로 값을 갖지 않고 
*     다른 데이터의 프로퍼티 값을 읽거나 저장할 때 사용하는
*     접근자 함수로 구성된 프로퍼티

* [getter]
*  : 인스턴스 프로퍼티에 접근할 때마다 
*    프로퍼티 값을 조작하거나 별도의 행위가 필요할 때 사용
*    반드시 return값 존재 !!

* [setter]
*  : 인스턴스 프로퍼티에 값을 할당할 때마다 
*    프로퍼티 값을 조작하거나 별도의 행위가 필요할 때 사용
*    반드시 매개변수 존재 !!
*/
const drink_ = {
    
    //데이터 프로퍼티
    type: 'Coffee',
    color: 'Brown',

    //getter 함수
    get info(){ //접근자 함수로 구성된 접근자 프로퍼티
        return `${this.type} is ${this.color} color :>`;
    }

    //setter 함수
    ,set info(text){
        [this.type, this.color] = text.split(' ');
    }
};

//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${drink_.type} ${drink_.color}`);

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
//접근자 프로퍼티 info에 값을 저장하면 setter 함수가 호출됨
drink_.info = 'Milk White';
console.log(drink_);

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
//접근자 프로퍼티 info에 접근하면 getter함수가 호출됨
console.log(drink_.info);

/* 접근자 프로퍼티가 갖는 어트리뷰트 (info는 접근자 프로퍼티)
*  1) get
*  2) set
*  3) enumerable(열거 가능한지 여부, default === false)
*  4) configurable(객체에서의 삭제 가능 여부 & descriptor의 속성 변경 가능 여부, default === false)
*/
console.log(Object.getOwnPropertyDescriptor(drink_, 'info'));