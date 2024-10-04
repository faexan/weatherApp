import { controlCurrentWeatherDOM } from "./cRWeatherDOM";
import { daysTodayCard } from "./daysWCrdDOM";
import { hourlyNowCard, hourlyNowCardsContent } from "./hrWCrdDOM";

function handleJSON(obj) {
  let location = `${obj.location.name}, ${obj.location.region}, ${obj.location.country}`;
  if (location.length > 30) {
    location = `${obj.location.name}, ${obj.location.country}`;
  }
  const currentTemp = Math.floor(Number(obj.current.temp_c));
  const { icon } = obj.current.condition;
  const feelLike = Math.floor(Number(obj.current.feelslike_c));
  const time = obj.location.localtime;
  const { humidity } = obj.current;
  const condition = obj.current.condition.text;
  const windSpeed = Math.floor(Number(obj.current.wind_kph));
  const windDir = obj.current.wind_dir;
  const maxTemp = obj.forecast.forecastday[0].day.maxtemp_c;
  const minTemp = obj.forecast.forecastday[0].day.mintemp_c;
  const rainChances = obj.forecast.forecastday[0].day.daily_chance_of_rain;
  controlCurrentWeatherDOM(
    location,
    time,
    currentTemp,
    icon,
    feelLike,
    condition,
    humidity,
    windSpeed,
    windDir,
  );
  hourlyNowCard(icon, currentTemp, condition);
  hourlyNowCardsContent(obj);
  daysTodayCard(time, icon, maxTemp, minTemp, condition, rainChances);
}

export default handleJSON;
