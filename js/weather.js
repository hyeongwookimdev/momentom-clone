const API_KEY = "3f7a8009ac93b2282e24bb1a3ce81675";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".header__weather__row:last-child");
      const temp = document.querySelector(".header__weather__temp");
      city.innerText = data.name;
      temp.innerText = `${Math.floor(parseInt(data.main.temp))}℃`;
      const weather = document.querySelector(".header__weather__icon");
      const weatherIconCode = data.weather[0].icon;
      weather.src = `http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
