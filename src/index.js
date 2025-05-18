import { fetchData } from "./fetch.js";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

function handleInput() {
  const city = input.value.trim();
  if (city) {
    fetchData(city);
  } else {
    console.log("Specify your city please.");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleInput();
});
