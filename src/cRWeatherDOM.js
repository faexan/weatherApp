import { format } from "date-fns";

function formatTime(dateString) {
  const date = new Date(dateString.replace(" ", "T"));

  const formattedTime = format(date, "h:mm a");
  return formattedTime;
}

function controlCurrentWeatherDOM(
  location,
  dateString,
  currentTemp,
  icon,
  feelsLike,
  condition,
  humidity,
  windSpeed,
  windDir,
) {
  const locationHeading = document.querySelector(".locationText");
  const currentTime = document.querySelector(".currentTime");
  const currentTempNode = document.querySelector(".currentTempValue");
  const currentWeatherIconNode = document.querySelector(".currentWeatherIcon");
  const currentFeelsNode = document.querySelector(".currentFeelsValue");
  const currentConditionNode = document.querySelector(".currentConditon");
  const currentHumidityNode = document.querySelector(".currentHumidityValue");
  const currentWindSpeedNode = document.querySelector(".currentWindSpeedValue");
  const currentWindDirctionNode = document.querySelector(
    ".currentWindDirectionValue",
  );

  const formattedTime = formatTime(dateString, "h:mm a");

  currentTime.innerText = formattedTime;

  currentTempNode.innerText = currentTemp;

  currentWeatherIconNode.src = icon;

  currentFeelsNode.innerText = feelsLike;

  currentConditionNode.innerText = condition;

  currentHumidityNode.innerText = humidity;

  currentWindSpeedNode.innerText = windSpeed;

  currentWindDirctionNode.innerText = windDir;

  locationHeading.innerText = location;
}

export default controlCurrentWeatherDOM;
