const API_KEY = "API_KEY_FROM_OPENWEATHERMAP";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkWeather() {
    const inputCity = document.getElementById("inputCity").value.trim();
    const temp = document.getElementById("temprature");
    const city = document.getElementById("city");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const weatherimg = document.getElementById("weather_img");

    if(!inputCity) return errorMessage("Enter city name.");

    try {
        const response = await fetch(apiURL + `${inputCity}&appid=${API_KEY}`);
        
        if (response.status === 404) { return errorMessage("Enter a valid city");
        } else {
            const data = await response.json();

            weatherimg.src = `images/${data.weather[0].main.toLowerCase()}.png`
            temp.textContent = `${Math.round(data.main.temp)}°C`;
            city.textContent = `${data.name}`;
            humidity.textContent = `${data.main.humidity}%`
            wind.textContent = `${Math.round(data.wind.speed)} km/h`
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        errorMessage("Something went wrong while fetching weather data.");
    }
} 

function errorMessage(message) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
    document.getElementById("error").textContent = `${message}`;
    return;
}

