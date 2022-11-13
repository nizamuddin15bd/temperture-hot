const API_KEY = `3d3644783ce73409df85a9996d6d5494`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperatures(data))
};

const displayTemperatures = temperature => {
    console.log(temperature);
}
