import React, { useState } from "react";
import axios from "axios";
import "./Weather";
import Weather from "./Weather";
import "./weather.css";
export default function SearchBar({ defaultCity }) {
  const [results, setResults] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);

  function handleResponse(response) {
    setResults({
      ready: true,
      temprature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  function cityName(event) {
    let searchValue = event.target.value;
    setCity(searchValue);
  }

  function search() {
    const apiKey = "6643c7326a4c2a38838264a28531d97e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (results.ready) {
    return (
      <div className="weather-container">
        <div className="row">
          <div className="mb-3">
            <form onSubmit={handleSearch}>
              <input
                type="search"
                onChange={cityName}
                placeholder="Enter city name..."
              />
              <input type="submit" />
            </form>
          </div>
          <hr />
          <Weather data={results} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="weather-container">
        <p>Loding...</p>
      </div>
    );
  }
}
