const currentWeather = document.querySelector("#weather");

const myKey = "27c196b8ad031d8a4d6450eed94b5352";
const myLat = "41.62";
const myLong = "-112.16";
const myForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apifetch() {
    try {
        const response = await fetch(myForecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
}

function displayResults(data) {

    function displayCurrent() {

        function formatSun(timestamp) {
            const date = new Date(timestamp * 1000);
            const options = {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            };
            return date.toLocaleTimeString('en-US', options);
        }

        let weatherIcon = document.createElement("img");
        let temp = document.createElement("p");
        let condition = document.createElement("p");
        let high = document.createElement("p");
        let low = document.createElement("p");
        let humidity = document.createElement("p");
        let sunrise = document.createElement("p");
        let sunset = document.createElement("p");
        const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
        const desc = `${data.list[0].weather[0].description}`;

        weatherIcon.id = "weather-icon";
        weatherIcon.setAttribute('src', `${iconsrc}`);
        weatherIcon.setAttribute('alt', `${desc} icon`);
        weatherIcon.setAttribute("width", "70");
        weatherIcon.setAttribute("height", "70");
        temp.innerHTML = `${data.list[0].main.temp}° F`;
        condition.innerHTML = `${data.list[0].weather[0].description}`;
        high.innerHTML = `High: ${data.list[0].main.temp_max}° F`;
        low.innerHTML = `Low: ${data.list[0].main.temp_min}° F`;
        humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`;
        sunrise.innerHTML = `Sunrise: ${formatSun(data.city.sunrise)}`;
        sunset.innerHTML = `Sunset: ${formatSun(data.city.sunset)}`;
        currentWeather.appendChild(weatherIcon);
        currentWeather.appendChild(temp);
        currentWeather.appendChild(condition);
        currentWeather.appendChild(high);
        currentWeather.appendChild(low);
        currentWeather.appendChild(humidity);
        currentWeather.appendChild(sunrise);
        currentWeather.appendChild(sunset);
    };

    displayCurrent();
}

apifetch();