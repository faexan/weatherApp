import controlCurrentWeatherDOM from "./cRWeatherDOM";

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
}

export default handleJSON;
