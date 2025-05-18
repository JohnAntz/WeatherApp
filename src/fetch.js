export async function fetchData(city) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WUDPHF377CA9R6KWMDW47Y6CE&contentType=json`;
    const data = await fetch(url);
    const weatherData = await data.json();
    console.log(weatherData.currentConditions);
  } catch (error) {
    console.log(error);
  }
}
