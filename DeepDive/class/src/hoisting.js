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
const test2 = new Test(); 
console.log(test2); 

class HoistingTest{}

const hostingTest = new HoistingTest(); //정상
console.log(hostingTest);


