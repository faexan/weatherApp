import return24HourArr from "./24hrsCalculations";

function createHourlyCards() {
  const parentDiv = document.querySelector(".hourlyWeatherCardDiv");

  for (let i = 0; i < 24; i += 1) {
    const div = document.createElement("div");
    div.classList.add("hourlyCards");
    parentDiv.appendChild(div);
  }
}

function removeHourlyCardContent() {
  const hourlyCards = document.querySelectorAll(".hourlyCards");
  hourlyCards.forEach((card) => {
    const c = card;
    c.innerHTML = "";
  });
}

function hourlyNowCardsContent(obj) {
  const arr = return24HourArr(obj);
  const hourlyCards = document.querySelectorAll(".hourlyCards");

  for (let i = 1; i < 24; i += 1) {
    const Card = hourlyCards[i];
    const timeDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const tempDiv = document.createElement("div");
    const conditionDiv = document.createElement("div");

    const time = document.createElement("h3");
    const img = document.createElement("img");
    const temp = document.createElement("h4");
    const cond = document.createElement("h5");

    time.innerText = arr[i - 1].time;
    img.src = arr[i - 1].img;
    temp.innerText = `${arr[i - 1].temperature}°`;
    cond.innerHTML = arr[i - 1].condition;

    timeDiv.appendChild(time);
    imgDiv.appendChild(img);
    tempDiv.appendChild(temp);
    conditionDiv.appendChild(cond);

    Card.appendChild(timeDiv);
    Card.appendChild(imgDiv);
    Card.appendChild(tempDiv);
    Card.appendChild(conditionDiv);
  }
}

function hourlyNowCard(image, temperature, condition) {
  removeHourlyCardContent();
  const parentDiv = document.querySelector(".hourlyCards");

  const timeDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const tempDiv = document.createElement("div");
  const conditionDiv = document.createElement("div");

  const time = document.createElement("h3");
  const img = document.createElement("img");
  const temp = document.createElement("h4");
  const cond = document.createElement("h5");

  time.innerText = "Now";
  img.src = image;
  temp.innerText = `${temperature}°`;
  cond.innerText = condition;

  timeDiv.appendChild(time);
  imgDiv.appendChild(img);
  tempDiv.appendChild(temp);
  conditionDiv.appendChild(cond);

  parentDiv.appendChild(timeDiv);
  parentDiv.appendChild(imgDiv);
  parentDiv.appendChild(tempDiv);
  parentDiv.appendChild(conditionDiv);
}

export { hourlyNowCard, createHourlyCards, hourlyNowCardsContent };
