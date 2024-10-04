import { convertToC, convertToF } from "./unitConversions";

function changeDOMunitSymbol() {
  const unitSpans = document.querySelectorAll(".unitSpan");
  unitSpans.forEach((unit) => {
    const symbolSpan = unit;
    if (unit.innerText === "C") {
      symbolSpan.innerText = "F";
    } else {
      symbolSpan.innerText = "C";
    }
  });
}

function conversionBtn() {
  const btn = document.querySelector(".convBtn");
  const CToggle = document.querySelector(".clcToggle");
  const FToggle = document.querySelector(".frhToggle");
  btn.addEventListener("click", () => {
    const currentUnit = btn.getAttribute("data-unit");
    if (currentUnit === "C") {
      FToggle.style.fontWeight = "bolder";
      CToggle.style.fontWeight = "100";
      changeDOMunitSymbol();
      convertToF();
      btn.setAttribute("data-unit", "F");
    } else if (currentUnit === "F") {
      convertToC();
      CToggle.style.fontWeight = "bolder";
      FToggle.style.fontWeight = "100";
      btn.setAttribute("data-unit", "C");
      changeDOMunitSymbol();
    }
  });
}

export default conversionBtn;
