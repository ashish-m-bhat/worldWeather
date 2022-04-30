import fetchDataFromAPI from './fetchDataFromAPI.js'

// Get the weather for next 5 days
const getFiveDaysWeather = () =>{

  let placeQuery = document.getElementById("placeQuery"); 
  let fiveDaysWeather = document.getElementById("fiveDaysWeather");
  
  fiveDaysWeather.classList.add('divBorder');
  const displayFiveDaysWeather = (response) =>{
    
    const daysArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    // Get the objects only which are for 9:00 AM
    let data = response.list.filter(eachdata => eachdata.dt_txt.split(' ')[1].valueOf() === '09:00:00');
    
    // For each 9:00 AM data of 5 days, create p in divs 
    data.forEach((eachData, dataIndex) => {
        const dataToBefilled = [daysArray[new Date(eachData.dt_txt).getDay()], `${eachData.weather[0].description}`, `${eachData.main.temp} &#8451`, `Humidity: ${eachData.main.humidity}`, `Pressure: ${eachData.main.pressure}`, `Wind Speed: ${eachData.wind.speed}`];
        
        let divForEachData = document.createElement('div');
        dataToBefilled.forEach(element => {
          let p = document.createElement('p');
          p.innerHTML = element;
          divForEachData.appendChild(p);
          divForEachData.classList.add('sideBorders');
          if(dataIndex == data.length-1)
            divForEachData.style.cssText = `border-right:none`;

        });
        fiveDaysWeather.appendChild(divForEachData);

    });
  }
  let location = placeQuery.value;
  fetchDataFromAPI(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${location}`, displayFiveDaysWeather);
}

export default getFiveDaysWeather;