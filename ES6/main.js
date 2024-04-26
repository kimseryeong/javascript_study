/**
 * map() : 배열의 각 요소를 가공하여 새로운 배열을 반환하는 메서드
 * 
 *  array.map((value, index, array) => 로직);
 */

//'🍎', '🍉', '🍇', '🥝', '🍑'
// let fruits = ['mango', 'peach', 'grape', 'orange', 'kiwi'];
const fruits = ['🍎', '🍉', '🍇', '🥝', '🍑'];

const mapContainer = document.querySelector('.map');
mapContainer.innerHTML = fruits.map((value) => createHtml(value)).join('');

function createHtml(val){
    return `
    <div class="element">
        <span class="el">${val}</span>
    </div>
    `;
}


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


// class 배열 생성 후 접근하기
class Items{
    constructor(items){
        this.items = [
            {
                'type':'fruit'
                ,'color':'red'
                ,'emoji':'🍎'
                ,'name':'apple'
            }
            ,{
                'type':'fruit'
                ,'color':'green'
                ,'emoji':'🥝'
                ,'name':'kiwi'
            }
            ,{
                'type':'fruit'
                ,'color':'yellow'
                ,'emoji':'🥭'
                ,'name':'mango'
            }
            ,{
                'type':'bread'
                ,'color':'yellow'
                ,'emoji':'🥐'
                ,'name':'salt bread'
            }
            ,{
                'type':'bread'
                ,'color':'yellow'
                ,'emoji':'🥯'
                ,'name':'bagle'
            }
            ,{
                'type':'cook'
                ,'color':'green'
                ,'emoji':'🥗'
                ,'name':'salad'
            }
            ,{
                'type':'plant'
                ,'color':'green'
                ,'emoji':'🌳'
                ,'name':'tree'
            }
            ,{
                'type':'plant'
                ,'color':'green'
                ,'emoji':'☘️'
                ,'name':'clover'
            }
        ]

    }
}

const something = new Items().items;
console.log(something);

document.querySelector('.main').innerHTML = something.map((val) => createHtml(val.emoji)).join('')

document.querySelector('.buttons').addEventListener('click', (e) => {
    showTargetItem(e, something);
})

function showTargetItem(event, item){
    // console.log(event.target);
    // console.log(event.target.dataset.key);
    // console.log(event.target.dataset.value);

    const key = event.target.dataset.key;
    const value = event.target.dataset.value;

    console.log(key);
    console.log(value);

    domCreate(key, value, something);
}

function domCreate(key, value, items){
    document.querySelector('.main').innerHTML 
        = items
            .filter( (val) => val[key] === value )
            .map((val) => createHtml(val.emoji)).join('')
}

// type이 bread인 요소만 
// document.querySelector('.main').innerHTML = something
//     .filter((val) => val.type === 'bread')
//     .map((val) => createHtml(val.emoji)).join('');

// color가 green인 요소만
// document.querySelector('.main').innerHTML = something
//     .filter((val) => val.color === 'green')
//     .map((val) => createHtml(val.emoji)).join('');