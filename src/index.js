import "./styles.css";
import "./hourly.css";
import "./days.css";
import "./responsive.css";
import handleJSON from "./handleJSON";
import { createHourlyCards } from "./hrWCrdDOM";
import { createDaysCards } from "./daysWCrdDOM";
import data1 from "./obj.json";

const searchBtn = document.querySelector(".searchBtn");
const loadingElement = document.querySelector(".loadingDiv");

async function getWeather(location) {
  try {
    loadingElement.classList.toggle("loadingDivExpanded");
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=bd94ca642a5a480fb1a194051240210&q=${location}&days=10&aqi=no&alerts=no`,
    );
    const result = await data.json();
    handleJSON(result);
    loadingElement.classList.toggle("loadingDivExpanded");
  } catch (error) {
    alert("Error fetching weather data. Please try again.");
    loadingElement.classList.remove("loadingDivExpanded");
  }
}

// getWeather("Lahore");
const searchBox = document.querySelector("#location");
function handleSubmit() {
  if (searchBox.value !== "") {
    getWeather(searchBox.value.trim());
  }
}

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleSubmit();
  }
});

searchBtn.addEventListener("click", handleSubmit);

createHourlyCards();
createDaysCards();
handleJSON(data1);
// https://api.weatherapi.com/v1/forecast.json?key=bd94ca642a5a480fb1a194051240210&q=${location}&days=1&aqi=no&alerts=no
