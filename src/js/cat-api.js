
const KEY =
  'api_key=live_bh7H3ZCF5IUc8Z9PDJX1MBlg50051Zbu6wImWvMjkIaJWbTDKTr94GNQHb9Mz4oP';
const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds?';
const URL_CAT_IMG = 'https://api.thecatapi.com/v1/images/';

// функция которая делает запрос на сервер и возвращает кота 
function fetchCatByBreed(breedId){
  return fetch(`${URL_CAT_IMG}${breedId}?${KEY}`).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
    
}

// функция которая достаЁт породу котов и их ID
function fetchBreeds(){
  return  fetch(`${URL_BREEDS}${KEY}`)
    .then(response =>{
      if(!response.ok){
        throw new Error(response.status)
      }
      return response.json()
    })
   
  }

  export { fetchBreeds, fetchCatByBreed };