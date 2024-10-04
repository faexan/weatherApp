function createDaysCards() {
  const parentDiv = document.querySelector(".tenDaysCards");

  for (let i = 0; i < 10; i += 1) {
    const div = document.createElement("div");
    div.classList.add("daysCard");
    parentDiv.appendChild(div);
  }
}

function daysTodayCard(dt, image, maxTemp, minTemp, conditions, rain) {
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
  const condition = document.createElement("p");
  const rainChances = document.createElement("span");
  const rainChancesIcon = document.createElement("span");

  day.innerText = "Today";
  date.innerText = dt;
  img.src = image;
  tempSpan1.innerText = maxTemp;
  tempSpan2.innerText = minTemp;
  condition.innerText = conditions;
  rainChances.innerText = rain;
  rainChancesIcon.innerHTML = '<i class="fa-light fa-raindrops"></i>';

  dayDiv.appendChild(day);
  dayDiv.appendChild(date);
  imgDiv.appendChild(img);
  tempDiv.appendChild(tempSpan1);
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

export { createDaysCards, daysTodayCard };
