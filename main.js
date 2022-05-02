import clearSearch from "./modules/clearSearch.js";
import getWeather from "./modules/getWeather/getWeather.js";

// Main Driver
document.querySelector("#inputForm").addEventListener('click', function(event){
    event.preventDefault();
    let actualInput = event.target;

    if(actualInput.matches("#searchCurrentWeather")){
      getWeather(event);
    }

    if(actualInput.matches("#clearSearch")){
      clearSearch();
    }

});

