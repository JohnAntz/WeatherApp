import "./styles.css";
import { fetchData } from "./fetch.js";
import { cardConstructor } from "./card.js";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

let dayIndex = 0;

async function handleInput() {
  const city = input.value.trim();
  if (city) {
    const weather = await fetchData(city);
    cardConstructor(weather, dayIndex);
  } else {
    display.textContent = "Could not fetch weather data";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleInput();
});
