'use strict';

/**
 * data를 받아올 백엔드가 존재하지 않으므로 임시 data 생성하여 보관하기
 * data는 소스코드와 분리해서 보관하는 것이 좋음
 *  --> data/data.json 
 * 
 * 1. object 내에 "items" 배열 존재
 * {
 *  "items": []
 * }
 * 2. items 배열 내에 "item" object 존재 {key: value}
 */

//main 
loadItems() 
    .then(items => {
        //console.log(`loadItem()에서 로드한 items: ${items}`);
        displayItems(items); 
        setEventListeners(items); 
    })
.catch(console.log);


/**
 * 로컬의 JSON 데이터 받아오는 방법
 * --> fetch() API 사용
 * 
 *      *body 내에 data 존재
*/

//item 로드하는 함수
function loadItems(){
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
}

//로드한 item 보여주는 함수
function displayItems(data){
    

    //내가 만든 방법
    /*
    for(let item of data){
        let dom = document.createElement('li');
        dom.innerHTML = `<li>
            <li class="item">
            <img src="${item.image}" alt="${item.color} ${item.type}" class="itemThumbnail">
            <span class="itemDescription">${item.gender}, ${item.size}</span>
            </li>`
        document.querySelector('.items').append(dom);
    }
    */

    //ellie 방법
    //map()을 사용해서 간편하게 li 태그들을 만들어주기
    const container = document.querySelector('.items');
    container.innerHTML = data.map(item => createHTMLString(item)).join('');
    

}

//<li></li> 태그 list 생성하는 함수 (문자열 type)
function createHTMLString(item){
    return `
    <li>
        <li class="item">
        <img src="${item.image}" alt="${item.color} ${item.type}" class="itemThumbnail">
        <span class="itemDescription">${item.gender}, ${item.size}</span>
    </li>
    `;
}

//이벤트 동작하는 함수
function setEventListeners(data){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');

    //ellie 방법
    //addEventListener()를 이용하여 각 버튼을 한번에 처리할 수 있도록 진행
    //event 를 통해 어떤 event인지 알 수 있음
    logo.addEventListener('click', () => displayItems(data));
    buttons.addEventListener('click', event => onButtonClick(event, data));
    //addEventListener() 는 광범위하게 설정 XX
    //내가 event를 주고 싶은 container 단위로 설정해주는 것이 좋음
    //성능차이발생
}

//버튼 클릭 이벤트 함수
function onButtonClick(event, items){

    //html 태그 내에  
    //data-key="type" data-value="tshirt" (데이터 속성)
    //작성하여 target을 필터링할 수 있음
    //event.target.dataset.
    const dataset = event.target.dataset
    const key = dataset.key;
    const value = dataset.value;

    //값이 없는 경우 함수 종료
    if(key == null || value == null){
        return;
    }
    
    //필터링해서 새로운 배열 생성
    displayItems(items.filter(item => item[key] === value));
    // -> 이 방법은 버튼 클릭할 때마다 innerHTML을 update 하여 container가 update 되는
    //    단점이 있음!
    //    따라서 dom을 조작하지 않고 전체적으로 list 를 유지하면서 
    //    버튼에 해당하는 요소만 클래스 추가하여 display 하도록 만들면 좋음.

    //filterItems(items, key, value);
}

//필터링 된 데이터만 display visible 해주어 표현
function filterItems(items, key, value){
    console.log(items);
    items.forEach(item => {
        if(item[key] === value){
            item.classList.remove('invisible');
        }
        else{
            item.classList.add('invisible');
        }
    })

}



// 내 방법
// 각 버튼 onclick 에 넣어주려고 했는데 그렇게 하다보니 items 내에서 데이터를 추출해오자 생각이 들었고
// 그러다보니 이렇게 복잡한 코드를 생각했고,, 결국 다 생각하지 못해서 중간에 포기해버림
function fnViewTshirt(data){
    console.log(data.map((data) => data.type === 'tshirt'))
    data.map((data) => data.type === 'tshirt').forEach((val, idx) => {
        if(val){
            console.log(data.gender);
        }
    })
    const tShirt = data
                    .map((cloth) => cloth.type)
                    .filter((type) => type === 'tshirt')

    console.log(tShirt);
}