// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// // write your code here
// let city = prompt("Enter a city");
// city = city.toLowerCase().trim();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
//   alert(
//     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }

let now = new Date();
let heading = document.querySelector("#kkk");
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Friday", "Saturday"];
let day = days[now.getDay()];
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

heading.innerHTML = ` ${day}, ${hour}:${minute}`;

function showTemperature(response) {
  let temp = response.data.main.temp;
  let span = document.querySelector("#temperature");
  span.innerHTML = temp;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${searchInput.value}`;
  let city = `${searchInput.value}`;
  let apiKey = "931dc49fba96c8c62bbb87a9dc503a65";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

function showCurrentTemp(response) {
  let span = document.querySelector("#temperature");
  span.innerHTML = response.data.main.temp;
  let h3 = document.querySelector("h3");
  h3.innerHTML = response.data.name;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let key = "0243779b927094791ea0fa74ce15510d";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
  console.log(url);
  axios.get(url).then(showCurrentTemp);
}

function current() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", current);

// function changeCelcius(event) {
//   event.preventDefault();
//   let span = document.querySelector("#temperature");
//   span.innerHTML = 19;
// }
// let link = document.querySelector("#celcius-link");
// link.addEventListener("click", changeCelcius);

// function changeFarenheit(event) {
//   event.preventDefault();
//   let span = document.querySelector("#temperature");
//   span.innerHTML = 66;
// }
// let farenheitLink = document.querySelector("#farenheit-link");
// farenheitLink.addEventListener("click", changeFarenheit);
