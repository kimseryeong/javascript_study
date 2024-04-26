// 요소 출력 함수
function createHtml(val){
    return `
    <div class="element">
        <span class="el">${val}</span>
    </div>
    `;
}


/**
 * map() : 배열의 각 요소를 가공하여 새로운 배열을 반환하는 메서드
 * 
 *  array.map((value, index, array) => 로직);
 */

//'🍎', '🍉', '🍇', '🥝', '🍑'
// let fruits = ['mango', 'peach', 'grape', 'orange', 'kiwi'];
const fruits = ['🍎', '🍉', '🍇', '🥝', '🍑'];

const mapContainer = document.querySelector('.map');
mapContainer.innerHTML = fruits.map((value) => createHtml(value + value)).join('');


/**
 * filter() : 조건의 결과값이 true인 요소를 모아 새로운 배열을 반환하는 메서드
 * 
 *  array.filter((value, index, array) => 조건);
 */

const filterContainer = document.querySelector('.filter');
const filt = fruits.filter((val) => (val !== '🍉' && val !== '🍎'));

filterContainer.innerHTML = filt.map((val) => createHtml(val)).join('');


/**
 * reduce() : 배열 각 요소에 대해 주어진 reducer 함수 실행 후, 하나의 결과값 반환하는 메서드
 * 
 *  array.reduce((previousValue, currentValue, currentIndex, array) => 로직);
 */

const reduceContainer = document.querySelector('.reduce');
reduceContainer.innerHTML = createHtml(
    fruits.reduce((prevVal, currVal, currIdx, array) => prevVal + currVal)
);