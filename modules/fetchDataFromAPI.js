// Generic fetch API helper. Takes a query string & a cb

export default function fetchDataFromAPI(queryString, callback){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': 'd942f16b2emsh5e2a90555cf53dep14df95jsnd13d3d935ce0'
    }
  };
  fetch(queryString, options)
  .then(response => response.json())
  .then(response => { console.log(response); callback(response);})
  .catch(err => console.error(err));
}