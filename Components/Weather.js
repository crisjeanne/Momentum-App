export function weatherRender() {
  async function fetchWeather() {
    const api = "d5dfc41a8e4641aaf539e5ec13113706";
    const city = "Manila,PH";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("33", data);
        renderWeather(data);
        console.log(data);
      });
  }
  fetchWeather();

  function renderWeather(weather) {
    const weatherElement = document.querySelector(".weather-container");
    console.log(weather);
    const iconCode = weather.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const img = document.createElement("img");
    img.src = iconURL;
    weatherElement.append(img);

    const city = document.createElement("h2");
    city.textContent = weather.name;
    weatherElement.append(city);

    const description = document.createElement("p");
    description.textContent = weather.weather[0].description;
    weatherElement.append(description);

    const temperature = document.createElement("p");
    temperature.textContent = `${weather.main.temp} °C`;

    weatherElement.append(temperature);
  }
  fetchWeather();
  const oneDay = 3000;
}

const students = [
  {name: "Manny", city: "Manila"},
  {name: "Jose", city: "Intramuros"},
  {name: "Anna", city: "Mandaluyong"},
  ]
  
  for (const student of students){
  if (student[name] === "Manny"){
  console.log(`${student[name]} lives in ${student[city]}`)
  }
  } 