export function cardConstructor(weather, dayIndex) {
  const display = document.getElementById("data-display");
  display.innerHTML = "";

  const day = weather.days[dayIndex];

  const fields = {
    Temperature: day.temp,
    Conditions: day.conditions,
    Date: day.datetime,
    Humidity: day.humidity,
    Icon: day.icon,
    Sunrise: day.sunrise,
    Sunset: day.sunset,
    WindSpeed: day.windspeed,
  };

  for (const [label, value] of Object.entries(fields)) {
    const info = document.createElement("div");
    info.classList.add("info-card");
    info.textContent = `${label}: ${value}`;
    display.appendChild(info);
  }
}
