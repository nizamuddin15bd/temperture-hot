const API_KEY = `3d3644783ce73409df85a9996d6d5494`;
const searchTemperature = () => {
    const city  = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API%20key}`
    console.log(url);
}