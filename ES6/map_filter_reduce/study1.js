/**
 * [ Class에 items 배열 생성 후 버튼 이벤트 동작으로 DOM 조작하기 ]
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

const something = new Items().items;
console.log(something);
const container = document.querySelector('.study1');

showAllItems();

//모든 아이템 출력 함수
function showAllItems(){
    container.innerHTML = something.map((val) => createHtml(val.emoji)).join('')
}

//버튼 클릭 이벤트
document.querySelector('.buttons').addEventListener('click', (e) => {
    showTargetItem(e);
})

//버튼 클릭 시 타겟 아이템 출력 함수
function showTargetItem(event){

    const key = event.target.dataset.key;
    const value = event.target.dataset.value;

    console.log(`${key} : ${value}`);

    domCreate(key, value);
}

//Dom 조작 함수
function domCreate(key, value){
    if(value === 'all'){
        showAllItems();
        return;
    }

    container.innerHTML = something
            .filter( (val) => val[key] === value )
            .map((val) => createHtml(val.emoji)).join('')
}

// type이 bread인 요소만 
// container.innerHTML = something
//     .filter((val) => val.type === 'bread')
//     .map((val) => createHtml(val.emoji)).join('');

// color가 green인 요소만
// container.innerHTML = something
//     .filter((val) => val.color === 'green')
//     .map((val) => createHtml(val.emoji)).join('');