import { format } from "date-fns";

class Hour {
  constructor(time, temp, img, cond) {
    this.time = time;
    this.temperature = temp;
    this.img = img;
    this.condition = cond;
  }
}

function return24HourArr(obj) {
  const arr = [];
  const currentTimeData = obj.location.localtime;
  const currentDate = new Date(currentTimeData.replace(" ", "T"));
  for (let i = 0; i < 24; i += 1) {
    const itterationTimeDate = obj.forecast.forecastday[0].hour[i].time;
    const itDate = new Date(itterationTimeDate.replace(" ", "T"));

    if (itDate > currentDate) {
      const formattedTime = format(itDate, "h:mm a");
      const o = new Hour(
        formattedTime,
        obj.forecast.forecastday[0].hour[i].temp_c,
        obj.forecast.forecastday[0].hour[i].condition.icon,
        obj.forecast.forecastday[0].hour[i].condition.text,
      );
      arr.push(o);
    }
  }
  if (arr.length < 23) {
    const remaining = 23 - arr.length;

    for (let i = 0; i < remaining; i += 1) {
      const itterationTimeDate = obj.forecast.forecastday[1].hour[i].time;
      const itDate = new Date(itterationTimeDate.replace(" ", "T"));
      const formattedTime = format(itDate, "h:mm a");
      const o = new Hour(
        formattedTime,
        obj.forecast.forecastday[1].hour[i].temp_c,
        obj.forecast.forecastday[1].hour[i].condition.icon,
        obj.forecast.forecastday[1].hour[i].condition.text,
      );
      arr.push(o);
    }
  }
  return arr;
}

export default return24HourArr;
