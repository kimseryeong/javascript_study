/**
 * Class field : 클래스 기반 객체지향 언어에서 
 * 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어
 * 
 * 자바스크립트는 자바와 다르게 클래스 몸체에서 필드 정의 불가 !
 * => this 를 사용하여 생성자에서 정의
 */

class App{
    constructor(){
        this.$button = document.querySelector('.btn');
        this.count = 0;
        

        //increade 메서드르르 핸들러로 등록
        this.$button.onclick = this.increse;
    }
    
    //인스턴스 메서드 (arrow function)
    //화살표 함수 내부의 this는 언제나 상위 컨텍스트의 this를 가리킴.
    increse = () => this.$button.textContent = ++this.count;

}

new App();