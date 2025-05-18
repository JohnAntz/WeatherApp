import { url } from "./index.js";
export async function fetchData() {
  try {
    const weatherData = await fetch(url);
    const data = await weatherData.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
