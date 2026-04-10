// base url for API: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/

/* 

Endpoints
The possible endpoints of the Timeline Weather API requests are as follows:

/timeline/[location] – forecast queries.
/timeline/[location]/[date1]/[date2] – queries for a specific date range. 

*/

/* 

Main Format of the URL
All requests to the Timeline Weather API use the following the form:

https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 

*/


/* 
WRITE FUNCTIONS THAT PROCESS THE JSON RESPONSE AND RETURN AN OBJECT WITH ONLY THE FIELDS I NEED
create function called todayForcast or something
    create an object to store the following:
        extract location name from getWeather result
        extract current temperature
        extract conditions
        maybe a few forecast days
    return that object for use in the display logic

Question: should we have individual methods for getting these details before storing them in one Forecast object?
*/

/* {
    location: address,
    current: {
        temp,
        cloudcover,
        conditions,
        feelsLike,
        icon,
        sunset,
    }
}
 */



const API_KEY = "RCJLZREFM2X9ZQ5F762NLNUPP"

const form = document.querySelector('form');
const forecastContainer = document.getElementById('weather-container');

forecastContainer.classList.add('hidden')

function toggleSearchBar() {
    form.classList.add('hidden');
}

// builds forecast object
function buildForecast(data) {

    const forecast = {
        location: data.resolvedAddress,
        temperature: data.currentConditions.temp,
        cloudcover: data.currentConditions.cloudcover,
        conditions: data.currentConditions.conditions,
        feelsLike: data.currentConditions.feelslike,
        icon: data.currentConditions.icon,
        sunset: data.currentConditions.sunset
    }

    toggleSearchBar();

    return forecast // this return value is unused until you asign it
};

function displayWeather(forecast) {
    const locationDisplay = forecastContainer.querySelector('.location');
    const tempHeading = forecastContainer.querySelector('.temp');
    const sunsetDisplay = forecastContainer.querySelector('.sunset')
    
    forecastContainer.classList.remove('hidden');
    locationDisplay.textContent = forecast.location;
    tempHeading.textContent = `${forecast.temperature}℃`;
    sunsetDisplay.textContent = `sunset ${forecast.sunset}`;
};

// gets weather data for specified location
async function getWeather(location) {
    console.log("THE LOCATION WILL BE HERE", location);

    const apiWeatherData = await (fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}&unitGroup=metric`));

    const jsonData = await apiWeatherData.json();

    return jsonData
}

form.addEventListener('submit', async function (event) {
    event.preventDefault()

    const locationInput = document.querySelector('#user-location-input')
    const location = locationInput.value;

    const weatherData = await getWeather(location)
    console.log('FORECAST DATA FROM SUBMIT EVENT', weatherData);

    const forecast = buildForecast(weatherData);
    console.log('FORECAST ICON', forecast.icon);

    displayWeather(forecast);
})
