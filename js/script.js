import data from "../data.json" assert { type: "json" };

const $ChartContainer = document.querySelector(".main_charts");

let amounts = [];

window.addEventListener("DOMContentLoaded", () => {
  createCharts();
});

const createCharts = () => {
  data.forEach((el) => {
    let $BarContainer = document.createElement("div");
    let $Amount = document.createElement("div");
    let $Bar = document.createElement("div");
    let $Day = document.createElement("div");

    amounts.push(el.amount);

    $BarContainer.classList.add("main_charts_barContent");

    $Amount.textContent = `$${el.amount}`;
    $Amount.classList.add("main_charts_amount");

    $Bar.style.height = `${el.amount * 3.1}px`;
    $Bar.classList.add("main_charts_bar");

    $Day.textContent = `${el.day}`;
    $Day.classList.add("main_charts_day");

    $BarContainer.appendChild($Amount);
    $BarContainer.appendChild($Bar);
    $BarContainer.appendChild($Day);
    $ChartContainer.appendChild($BarContainer);
  });
  barHigher();
};

const barHigher = () => {
  let allBars = document.getElementsByClassName("main_charts_bar");
  let maxHeight = amounts.sort().slice(-1) * 3.1 + "px";

  for (let i = 0; i < allBars.length; i++) {
    if (allBars[i].style.height == maxHeight) {
      allBars[i].classList.add("main_charts_barHigher");
    }
  }
};
