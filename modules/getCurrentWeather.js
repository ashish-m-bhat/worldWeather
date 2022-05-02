import fetchDataFromAPI from './fetchDataFromAPI.js';
import getFiveDaysWeather from './getFiveDaysWeather.js';

let inputForm = document.getElementById("inputForm");
let placeQuery = document.getElementById("placeQuery");
let shortDescription = document.getElementById("shortDescription");
let description = document.getElementById("description");
let longDescription = document.getElementById("longDescription");
let resultSection = document.getElementById("resultSection");
let about = document.getElementById("about");
let fiveDaysWeather = document.getElementById("fiveDaysWeather");

// Clear the divs under the resultSection div
const clearResultSection = () =>{
  let resultSectionDivs = [shortDescription, description, longDescription];
      resultSectionDivs.forEach(parent => {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      })
      while (fiveDaysWeather.firstChild) {
        fiveDaysWeather.removeChild(fiveDaysWeather.firstChild);
      }
}

// Whe the search Bar is cleared, hide resultSection & bring in About
const clearSearchFunction = () =>{
  placeQuery.value='';
  resultSection.style.display="none";
  fiveDaysWeather.style.display="none";
  document.body.appendChild(about);
  about.style.marginTop="30vh";
}

// Seach current weather
const getCurrentWeatherFunction = (event) =>{
  event.preventDefault();
  let location = placeQuery.value;
  if(!location)
    return;

  // Remove About, bring in resultSection & clear the resultSection
  {
    about.remove();
    resultSection.style.display="";
    fiveDaysWeather.style.display="";
    clearResultSection()
    resultSection.classList.add('divBorder');
  }

  // Display shortDescription, description & longDescription
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

  fetchDataFromAPI(`https://community-open-weather-map.p.rapidapi.com/weather?q=${location}&lat=0&lon=0&id=0&lang=null&units=metric`, displayCurrentWeather);
  getFiveDaysWeather();
}

// Main Driver
inputForm.addEventListener('click', function(event){
  event.preventDefault();
  let actualInput = event.target;

  if(actualInput.matches("#clearSearch"))
    clearSearchFunction();

  if(actualInput.matches("#searchCurrentWeather")){
    getCurrentWeatherFunction(event);
  }

});
