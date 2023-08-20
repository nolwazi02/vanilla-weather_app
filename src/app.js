
function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.gethours();
    if (hours < 10) {
    hours = `0${hours}`;
    }  
    let minutes • date.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`;
    }

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
    let temperatureElement = document.queryselector("#temperature");
    let cityElement = document.queryselector("#city");
    let descriptionElement = document.queryselector("#description");
    let humidityElement = document. queryselector("#humidity");
    let windElement = document.queryselector("#wind") ;
    let dateElement = document.queryselector("#date");

    temperatureElement.innerHTML = Math. round(response.data.main.temp);
    cityElement.innerHTML = response. data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response. data.wind speed);
    dateElement.innerHTML = formatDate(response, data. dt * 1000);
}

let apiKey = "d7a44ecca67a67e7e9ad242da1c287d4";
let city = "paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${paris}&appid=${d7a44ecca67a67e7e9ad242da1c287d4}`;

axios.get(apiUrl).then(displayTemperature);
    