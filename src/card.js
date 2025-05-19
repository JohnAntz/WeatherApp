export function cardConstructor(weather, dayIndex) {
  const display = document.getElementById("data-display");
  display.innerHTML = "";

  const day = weather.days[dayIndex];

  const elements = [
    { label: "Date", value: `${day.datetime}` },
    { label: "Conditions", value: `${day.conditions}` },
    { label: "Temperature", value: `${day.temp} ºC` },
    { label: "Humidity", value: `${day.humidity} %` },
    { label: "Wind Speed", value: `${day.windspeed} km/h` },
    { label: "Sunrise", value: `${day.sunrise}` },
    { label: "Sunset", value: `${day.sunset}` },
  ];

  for (const item of elements) {
    const info = document.createElement("div");
    info.classList.add("info-card");
    info.textContent = `${item.label}: ${item.value}`;
    display.appendChild(info);
  }
}
