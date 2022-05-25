import data from "../data.json" assert { type: "json" };

const $ChartContainer = document.querySelector(".main_charts");

let amounts = [];

window.addEventListener("DOMContentLoaded", () => {
  data.forEach((el) => {
    let $BarContainer = document.createElement("div");
    let $Bar = document.createElement("div");
    let $Day = document.createElement("div");

    amounts.push(el.amount);

    $BarContainer.classList.add("main_charts_barContent");

    $Bar.style.height = `${el.amount * 2.5}px`;
    $Bar.classList.add("main_charts_bar");

    $Day.textContent = `${el.day}`;
    $Day.classList.add("main_charts_day");

    $BarContainer.appendChild($Bar);
    $BarContainer.appendChild($Day);
    $ChartContainer.appendChild($BarContainer);
  });
});

const barHigher = () => {
  console.log(amounts.sort().pop());
  console.log($Bar);
  if ($Bar.style.height == amounts.sort().pop()) {
    $Bar.classList.add(".main_charts_barHigher");
  }
};

barHigher();
