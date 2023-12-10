import React, { useState, useEffect } from "react";
import "./weather.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecatDay";
export default function WeatherForecast({ coordinates }) {
  const [loaded, setLodaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLodaded(true);
  }

  useEffect(() => {
    setLodaded(false);
  }, [coordinates]);

  if (loaded) {
    return (
      <div className="forecast-container">
        <div className="row">
          {forecast.map(function (dailyForecasts, index) {
            if (index < 5) {
              return <WeatherForecastDay data={dailyForecasts} key={index} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "6643c7326a4c2a38838264a28531d97e";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
