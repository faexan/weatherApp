const temps = document.querySelectorAll(".temp");
function convertToF() {
  temps.forEach((temp) => {
    const t = Number(temp.innerText);
    const tInF = Math.floor(t * (9 / 5) + 32);
    const newT = temp;
    newT.innerText = tInF;
  });
}

function convertToC() {
  temps.forEach((temp) => {
    const t = Number(temp.innerText);
    const tInC = Math.floor((t - 32) * (5 / 9));
    const newT = temp;
    newT.innerText = tInC;
  });
}

export { convertToC, convertToF };
