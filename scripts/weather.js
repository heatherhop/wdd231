const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");

const myKey = "6341e1347b827adc5269bf0aa6ce1c07";
const myLat = "49.75";
const myLong = "6.63";
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apifetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
        // console.error("There has been a problem with your fetch operation:", error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} ℉`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src', `${iconsrc}`);
    weatherIcon.setAttribute('alt', `${desc} icon`);
    caption.textContent = `${desc}`;
};


apifetch();

