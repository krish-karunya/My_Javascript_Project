const API_KEY = "ee3280b5b99e78ba115bef65d984f269";

const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//   https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=ee3280b5b99e78ba115bef65d984f269
const input = document.querySelector(".searchinput");

async function getData(city) {
  const data = await fetch(API_URL + city + `&appid=${API_KEY}`);
  if (data.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weathers").style.display = "none";
  }
  const json = await data.json();
  console.log(json);
  document.querySelector(".city").innerHTML = json.name;
  document.querySelector(".deg").innerHTML = Math.round(json.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = json.main.humidity + "%";
  document.querySelector(".windspeed").innerHTML = json.wind.speed + "km/h";

  const Weathericon = document.querySelector(".Weather-icon");
  console.log(Weathericon.src);

  if (json.weather[0].main == "Clouds") {
    Weathericon.src = "Images/clouds.png";
  } else if (json.weather[0].main == "Clear") {
    Weathericon.src = "Images/clear.png";
  } else if (json.weather[0].main == "Rain") {
    Weathericon.src = "Images/rain.png";
  } else if (json.weather[0].main == "Drizzle") {
    Weathericon.src = "Images/drizzle.png";
  }
  input.value = "";
}

document.querySelector(".btn").addEventListener("click", () => {
  getData(input.value);

  document.querySelector(".weathers").style.display = "block";
});
