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
  rainChances.innerText = `${rain}%`;
  rainChancesIcon.innerHTML =
    '<svg class="precip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" style="width: 16px; height: 16px;"><path fill="none" fill-rule="nonzero" stroke="#000" stroke-width=".714" d="M5.532.891c1.723.952 5.315 5.477 5.775 8.756.028 1.718-.534 3.101-1.45 4.082C8.888 14.766 7.52 15.357 6 15.357a5.532 5.532 0 0 1-3.74-1.425c-.975-.89-1.587-2.124-1.616-3.49.503-4.035 4.013-8.49 4.888-9.551Zm-1.815 7.33a.336.336 0 0 0-.025.043c-.322.62-.59 1.255-.695 2.207.012.408.143.787.358 1.111.234.352.568.641.96.839.035.017.071.021.106.017a.201.201 0 0 0 .104-.044l.01-.005-.078-.1c-.328-.415-.82-1.067-.82-1.946 0-.752.076-1.613.08-2.121Z"></path></svg>';

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
    rainChances.innerText = `${rain}%`;
    rainChancesIcon.innerHTML =
      '<svg class="precip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" style="width: 16px; height: 16px;"><path fill="none" fill-rule="nonzero" stroke="#000" stroke-width=".714" d="M5.532.891c1.723.952 5.315 5.477 5.775 8.756.028 1.718-.534 3.101-1.45 4.082C8.888 14.766 7.52 15.357 6 15.357a5.532 5.532 0 0 1-3.74-1.425c-.975-.89-1.587-2.124-1.616-3.49.503-4.035 4.013-8.49 4.888-9.551Zm-1.815 7.33a.336.336 0 0 0-.025.043c-.322.62-.59 1.255-.695 2.207.012.408.143.787.358 1.111.234.352.568.641.96.839.035.017.071.021.106.017a.201.201 0 0 0 .104-.044l.01-.005-.078-.1c-.328-.415-.82-1.067-.82-1.946 0-.752.076-1.613.08-2.121Z"></path></svg>';

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
