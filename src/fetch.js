export async function fetchData(city) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WUDPHF377CA9R6KWMDW47Y6CE&contentType=json&unitGroup=metric`;
    const data = await fetch(url);
    const weatherData = await data.json();
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}
