import clearResultSection from '../clearResultSection.js';
import getFiveDaysWeather from './getFiveDaysWeather.js';
import getCurrentWeather from './getCurrentWeather.js';

const placeQuery = document.getElementById("placeQuery");
const resultSection = document.getElementById("resultSection");
const about = document.getElementById("about");
const fiveDaysWeather = document.getElementById("fiveDaysWeather");

// Get the Current Weather + Weather forecast for the next 5 days
const getWeather = () =>{
  const location = placeQuery.value;

  // If no location has been entered, return.
  if(!location)
    return;

  // Remove #about, bring in resultSection & fiveDaysWeather and clear the resultSection.
  {
    about.remove();
    resultSection.style.display="";
    fiveDaysWeather.style.display="";
    clearResultSection();
    resultSection.classList.add('divBorder');
  }

  getCurrentWeather(location);
  getFiveDaysWeather(location);
}

export default getWeather;