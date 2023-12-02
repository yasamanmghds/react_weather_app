import React, { useState } from "react";
import axios from "axios";
import "./Weather";
import Weather from "./Weather";
export default function SearchBar() {
  const [city, setCity] = useState("");
  const [temprature, setTemprature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [emoji, setEmoji] = useState(null);
  const apiKey = "6643c7326a4c2a38838264a28531d97e";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function getTemprature(response) {
    console.log(response);
    setTemprature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWindSpeed(response.data.wind.speed);
    setEmoji(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function submitSearch(event) {
    event.preventDefault();
    axios.get(url).then(getTemprature);
  }
  function cityName(event) {
    event.preventDefault();
    let searchValue = event.target.value;
    setCity(searchValue);
  }

  return (
    <div>
      <form onSubmit={submitSearch}>
        <input type="search" onChange={cityName} />
        <input type="submit" />
      </form>
      <div>
        {temprature !== null ? (
          <ul>
            <li>Temprature: {Math.round(temprature)}℃</li>
            <li>Description: {description}</li>
            <li>Humidity:{humidity}%</li>
            <li>Wind speed: {windSpeed} km/h</li>
            <li>
              <img src={emoji} />
            </li>
          </ul>
        ) : (
          <Weather />
        )}
      </div>
    </div>
  );
}
