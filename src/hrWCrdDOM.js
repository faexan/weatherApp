function createHourlyCards() {
  const parentDiv = document.querySelector(".hourlyWeatherCardDiv");

  for (let i = 0; i < 24; i += 1) {
    const div = document.createElement("div");
    div.classList.add("hourlyCards");
    parentDiv.appendChild(div);
  }
}

export default createHourlyCards;