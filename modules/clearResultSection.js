// Clear the divs under the resultSection div

const shortDescription = document.getElementById("shortDescription");
const description = document.getElementById("description");
const longDescription = document.getElementById("longDescription");
const fiveDaysWeather = document.getElementById("fiveDaysWeather");

const clearResultSection = () =>{
  const resultSectionDivs = [shortDescription, description, longDescription];
        resultSectionDivs.forEach(parent => {
          while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
          }
        })
        while (fiveDaysWeather.firstChild) {
          fiveDaysWeather.removeChild(fiveDaysWeather.firstChild);
        }
  }
  export default clearResultSection;