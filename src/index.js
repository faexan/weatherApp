import "./styles.css";
import handleJSON from "./handleJSON";

const searchBox = document.querySelector("#location");
const searchBtn = document.querySelector(".searchBtn");

async function getWeather(location) {
  const data = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=bd94ca642a5a480fb1a194051240210&q=${location}&days=1&aqi=no&alerts=no`,
  );
  const result = await data.json();
  handleJSON(result);
}

getWeather("Lahore");

searchBtn.addEventListener("click", () => {
  if (searchBox.value !== "") {
    getWeather(searchBox.value);
  }
});

// https://api.weatherapi.com/v1/forecast.json?key=bd94ca642a5a480fb1a194051240210&q=${location}&days=1&aqi=no&alerts=no
