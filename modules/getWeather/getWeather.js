import clearResultSection from '../clearResultSection.js';
import getCurrentWeather from './getCurrentWeather.js';

const placeQuery = document.getElementById("placeQuery");
const resultSection = document.getElementById("resultSection");
const about = document.getElementById("about");
const fiveDaysWeather = document.getElementById("fiveDaysWeather");

// Get the Current Weather + Weather forecast for the next 5 days
const getWeather = () =>{
  const enteredLocation = placeQuery.value;

  // If no location has been entered, return.
  if(!enteredLocation)
    return;

    // Remove #about & clear the resultSection. On each search, the resultSection is "hidden" but it's children are deleted and re contsructed
    about.remove();
    clearResultSection();
    resultSection.classList.add('divBorder');

  getCurrentWeather();
}

export default getWeather;