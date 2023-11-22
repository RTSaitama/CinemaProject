const BASE_URL = 'http://www.omdbapi.com/?apikey=5bd71ded';
const key = '5bd71ded'
const options = {
    method: 'GET'
}   
 
const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${key}&`;
    fetch(url).then(response=> response.json()).then(data => console.log(data))
   
};