import fetchDataFromAPI from "../fetchDataFromAPI.js";

const shortDescription = document.getElementById("shortDescription");
const description = document.getElementById("description");
const longDescription = document.getElementById("longDescription");

  // Display shortDescription, description & longDescription using IIFEs
  const displayCurrentWeather = response =>{
    (function displayShortDespcription(){
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const date = new Date();
      const data = [response.name,`${months[date.getMonth()]}, ${date.getDate()}`, `${response.main.temp} &#8451`];

      data.forEach((element, dataIndex) => {
        let p = document.createElement('p');
        p.innerHTML = element;
        shortDescription.appendChild(p);
        if(dataIndex === data.length-1){
          p.style.cssText = `font:30px bold italic`;
        }

      });
    })();

    (function displayDescription(){
      const data = [response.weather[0].description];
      data.forEach(element => {
        let p = document.createElement('p');
        p.innerHTML = element;
        description.appendChild(p);
      });
    })();

    (function displayLongDescription(){
      const data = [`Humidity: ${response.main.humidity}`, `Wind Speed: ${response.wind.speed}`, `Pressure: ${response.main.pressure}`];
      data.forEach(element => {
        let p = document.createElement('p');
        p.innerHTML = element;
        longDescription.appendChild(p);
      });
    }
    )();
  }

  // Get the current weather by calling the open weather map API
  const getCurrentWeather = (location) =>{
    fetchDataFromAPI(`https://community-open-weather-map.p.rapidapi.com/weather?q=${location}&lat=0&lon=0&id=0&lang=null&units=metric`, displayCurrentWeather);
  }
  export default getCurrentWeather;