import { format } from "date-fns";

function createDaysCards() {
  const parentDiv = document.querySelector(".tenDaysCards");

  for (let i = 0; i < 10; i += 1) {
    const div = document.createElement("div");
    div.classList.add("daysCard");
    parentDiv.appendChild(div);
  }
}

function clearDaysCards() {
  const cards = document.querySelectorAll(".daysCard");
  cards.forEach((card) => {
    const c = card;
    c.innerHTML = "";
  });
}

function daysTodayCard(dt, image, maxTemp, minTemp, conditions, rain) {
  clearDaysCards();
  const card = document.querySelector(".daysCard");

  const dayDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const tempDiv = document.createElement("div");
  const conditionsDiv = document.createElement("div");
  const rainChancesDiv = document.createElement("div");

  const day = document.createElement("h1");
  const date = document.createElement("h4");
  const img = document.createElement("img");
  const tempSpan1 = document.createElement("span");
  const tempSpan2 = document.createElement("span");
  const tempSpan3 = document.createElement("span");
  const condition = document.createElement("p");
  const rainChances = document.createElement("span");
  const rainChancesIcon = document.createElement("span");

  day.innerText = "Today";
  date.innerText = format(new Date(dt.replace(" ", "T")), "dd/MM");
  img.src = image;
  tempSpan1.innerText = `${Math.floor(Number(maxTemp))}°`;
  tempSpan2.innerText = `${Math.floor(Number(minTemp))}°`;
  tempSpan3.innerText = " / ";
  condition.innerText = conditions;
  rainChances.innerText = rain;
  rainChancesIcon.innerHTML = '<i class="fa-light fa-raindrops"></i>';

  dayDiv.appendChild(day);
  dayDiv.appendChild(date);
  imgDiv.appendChild(img);
  tempDiv.appendChild(tempSpan1);
  tempDiv.appendChild(tempSpan3);
  tempDiv.appendChild(tempSpan2);
  conditionsDiv.appendChild(condition);
  rainChancesDiv.appendChild(rainChancesIcon);
  rainChancesDiv.appendChild(rainChances);

  card.appendChild(dayDiv);
  card.appendChild(imgDiv);
  card.appendChild(tempDiv);
  card.appendChild(conditionsDiv);
  card.appendChild(rainChancesDiv);
}

function daysCardsDOM(obj) {
  const cards = document.querySelectorAll(".daysCard");

  for (let i = 0; i < 9; i += 1) {
    const maxTemp = obj.forecast.forecastday[i].day.maxtemp_c;
    const minTemp = obj.forecast.forecastday[i].day.mintemp_c;
    const image = obj.forecast.forecastday[i].day.condition.icon;
    const rain = obj.forecast.forecastday[i].day.daily_chance_of_rain;
    const conditions = obj.forecast.forecastday[i].day.condition.text;
    const dt = obj.forecast.forecastday[i].date;

    const card = cards[i + 1];
    const dayDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const tempDiv = document.createElement("div");
    const conditionsDiv = document.createElement("div");
    const rainChancesDiv = document.createElement("div");

    const day = document.createElement("h1");
    const date = document.createElement("h4");
    const img = document.createElement("img");
    const tempSpan1 = document.createElement("span");
    const tempSpan2 = document.createElement("span");
    const tempSpan3 = document.createElement("span");
    const condition = document.createElement("p");
    const rainChances = document.createElement("span");
    const rainChancesIcon = document.createElement("span");

    day.innerText = format(new Date(dt.replace(" ", "T")), "EEEE");
    date.innerText = format(new Date(dt.replace(" ", "T")), "dd/MM");
    img.src = image;
    tempSpan1.innerText = `${Math.floor(Number(maxTemp))}°`;
    tempSpan2.innerText = `${Math.floor(Number(minTemp))}°`;
    tempSpan3.innerText = " / ";
    condition.innerText = conditions;
    rainChances.innerText = rain;
    rainChancesIcon.innerHTML = '<i class="fa-light fa-raindrops"></i>';

    dayDiv.appendChild(day);
    dayDiv.appendChild(date);
    imgDiv.appendChild(img);
    tempDiv.appendChild(tempSpan1);
    tempDiv.appendChild(tempSpan3);
    tempDiv.appendChild(tempSpan2);
    conditionsDiv.appendChild(condition);
    rainChancesDiv.appendChild(rainChancesIcon);
    rainChancesDiv.appendChild(rainChances);

    card.appendChild(dayDiv);
    card.appendChild(imgDiv);
    card.appendChild(tempDiv);
    card.appendChild(conditionsDiv);
    card.appendChild(rainChancesDiv);
  }
}

export { createDaysCards, daysTodayCard, daysCardsDOM };
