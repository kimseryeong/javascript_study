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
    .then(result => console.log(result))
    .catch(error => console.log('error', error));