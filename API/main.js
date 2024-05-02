const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_wSgrbCf2xGYM3TbX63agqnUPKOLtUUHeD6ObOiMrbfh0Uytw6IVXj4DhdMzWOhX3" //My API key
  });
  
let requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.json())
    .then(result => { 
        loadCatInfo(result[0]);
        ChangeCat();
    })
    .catch(error => console.log('error', error));

const image = document.querySelector('.image');
const intro = document.querySelector('.intro');
const desc = document.querySelector('.desc');

//API) 고양이 이미지, 이름, 설명 로드하는 함수
function loadCatInfo(result){
    console.log(result);
    console.log(result.breeds);
    const breeds = result.breeds[0];

    image.innerHTML = `<img src="${result.url}"/>`;
    intro.innerHTML = `
        <h2>[ ${breeds.name} ]</h2>
        <span class="left">from. ${breeds.origin}</span>
    `;
    desc.innerHTML = `${breeds.description.replace("\n\t", '<br/>')}`;
}

function ChangeCat(result){
    document.querySelector('.changeCatBtn').addEventListener('click', (e) => {
        location.href = location.href;
        // loadCatInfo(result);
    })
}