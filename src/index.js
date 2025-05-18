import { fetchData } from "./fetch.js";
export const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/36.1303%2C-5.4560?key=WUDPHF377CA9R6KWMDW47Y6CE&contentType=json";

document.querySelector(".search-button").addEventListener("click", fetchData);
