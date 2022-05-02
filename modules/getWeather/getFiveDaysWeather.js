import fetchDataFromAPI from '../fetchDataFromAPI.js'

const fiveDaysWeather = document.getElementById("fiveDaysWeather");

// Post fetch function
const displayFiveDaysWeather = (response) =>{
  // Bring In fiveDaysWeather div
  fiveDaysWeather.style.display="";

  const daysArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  // Get the only objects which are for 9:00 AM. The response.list has weather for each 3hrs.
  let data = response.list.filter(eachdata => eachdata.dt_txt.split(' ')[1].valueOf() === '09:00:00');

  // For each 9:00 AM data of 5 days, create p in divs
  data.forEach((each9amData, dataIndex) => {
      const dataToBefilledForEach9am = [daysArray[new Date(each9amData.dt_txt).getDay()], `${each9amData.weather[0].description}`, `${each9amData.main.temp} &#8451`, `Humidity: ${each9amData.main.humidity}`, `Pressure: ${each9amData.main.pressure}`, `Wind Speed: ${each9amData.wind.speed}`];

      let divForEach9amData = document.createElement('div');
      dataToBefilledForEach9am.forEach(element => {
        let p = document.createElement('p');
        p.innerHTML = element;
        divForEach9amData.appendChild(p);
        divForEach9amData.classList.add('sideBorders');
        // Don't add a border-right to the laste element
        if(dataIndex == data.length-1)
          divForEach9amData.style.cssText = `border-right:none`;

      });
      fiveDaysWeather.appendChild(divForEach9amData);

  });
}

// Get the weather for next 5 days by calling the open weather map API
const getFiveDaysWeather = () =>{

  // Adding the border-right
  fiveDaysWeather.classList.add('divBorder');

  fetchDataFromAPI(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${placeQuery.value}`, displayFiveDaysWeather);
}

export default getFiveDaysWeather;