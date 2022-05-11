import clearResultSection from '../clearResultSection.js';
import clearSearch from '../clearSearch.js';
import getCurrentWeather from './getCurrentWeather.js';

const placeQuery = document.getElementById("placeQuery");
const resultSection = document.getElementById("resultSection");
const about = document.getElementById("about");
const fiveDaysWeather = document.getElementById("fiveDaysWeather");

// Get the Current Weather + Weather forecast for the next 5 days
const getWeather = (event) => {
  const enteredLocation = placeQuery.value;

  if (event.target.matches("#myLocationWeather") || enteredLocation) {
    // Clear the search if present
    clearSearch();
    // Remove #about & clear the resultSection. On each search, the resultSection is "hidden" but it's children are deleted and re contsructed
    about.remove();
    clearResultSection();
    resultSection.classList.add("divBorder");
  }

  // If no location has been entered, check if user wanted weather in his current location. If not, return.
  if (!enteredLocation) {
    if (event.target.matches("#myLocationWeather")) {
        if(!navigator.geolocation)
          alert("Couldn't fetch Location");
        else
          // getCurrentPosition takes 2 callbacks, to a resolve and reject cbs
          navigator.geolocation.getCurrentPosition(position => getCurrentWeather(enteredLocation, position.coords), ()=>{alert("Couldn't fetch Location");clearSearch()});
    }
    // No input from user
    else return;
  }
  else{ // User has searched for a location
    getCurrentWeather(enteredLocation);
  }

};

export default getWeather;
