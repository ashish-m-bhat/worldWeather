const about = document.getElementById("about");


const placeQuery = document.getElementById("placeQuery");
const resultSection = document.getElementById("resultSection");
const fiveDaysWeather = document.getElementById("fiveDaysWeather");

// Whe the search Bar is cleared, hide resultSection & bring in About
const clearSearch = () =>{
    placeQuery.value='';
    resultSection.style.display="none";
    fiveDaysWeather.style.display="none";
    document.body.appendChild(about);
    about.style.marginTop="30vh";
  }

export default clearSearch;