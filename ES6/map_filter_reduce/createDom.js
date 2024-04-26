/**
 * [ Class에 items 배열 생성 후 버튼 이벤트 동작으로 DOM 조작하기 ]
 * [ json 데이터 파일(items) 생성 후 버튼 이벤트 동작으로 DOM 조작하기 ]
 * 
 */


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
            ,{
                'type':'cook'
                ,'color':'red'
                ,'emoji':'🍣'
                ,'name':'sushi'
            }
        ]
        
    }
}

//클래스 방식으로 array 가져오기
const something = new Items().items; 
const study1 = document.querySelector('.study1');

showAllItemsByClass();

//모든 아이템 출력 함수 (class)
function showAllItemsByClass(){
    study1.innerHTML = something.map((val) => createHtml(val.emoji)).join('');
} 




//fetch() API 사용해서 json 데이터 가져오기
fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        showAllItemsByJson(json.items);
        setEventListeners(json.items);
    })
    .catch(error => console.log(error))

const study2 = document.querySelector('.study2');

//모든 아이템 출력 함수 (json)
function showAllItemsByJson(json){
    study2.innerHTML = json.map((val) => createHtml(val.emoji)).join('');
}

//버튼 클릭 이벤트
document.querySelector('.colorBtn').addEventListener('click', (event) => {
    // showTargetItem(event);
    
    const key = event.target.dataset.key;
    const value = event.target.dataset.value;
    
    console.log(`${key} : ${value}`);
    
    createDom(key, value);
})

//버튼 클릭 시 타겟 아이템 출력 함수
function showTargetItem(event){

}

//Dom 조작 함수
function createDom(key, value){

    if(value === 'all'){
        showAllItemsByClass();
        return;
    }

    study1.innerHTML = something
        .filter( (val) => val[key] === value )
        .map((val) => createHtml(val.emoji)).join('')

    // switch(key){
    //     case 'color':
    //         createStudy1(key, value);
    //     case 'type':
    //         createStudy2(key, value);
    //     default:
    //         new Error('no key !!!');
    // }
}

function setEventListeners(items){
    console.log('setEventListeners');
    document.querySelector('.typeBtn').addEventListener('click', (event) => {
        createStudy2(event, items);
    })
        
}

//study2 Dom 조작
function createStudy2(event, items){
    const key = event.target.dataset.key;
    const value = event.target.dataset.value;

    if(value === 'all'){
        showAllItemsByJson(items);
        return;
    }
    
    study2.innerHTML = items.filter((val) => val[key] === value).map((val) => createHtml(val.emoji)).join('');
}


// type이 bread인 요소만 
// container.innerHTML = something
//     .filter((val) => val.type === 'bread')
//     .map((val) => createHtml(val.emoji)).join('');

// color가 green인 요소만
// container.innerHTML = something
//     .filter((val) => val.color === 'green')
//     .map((val) => createHtml(val.emoji)).join('');



