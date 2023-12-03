import React, { useState } from "react";
import "./weather.css";
export default function WeatherTemprature({ cel }) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="temprature-container">
        <span className="temprature">{Math.round(cel)}</span>
        <span>
          ℃ |{" "}
          <a href="/" onClick={convertToFarenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (cel * 9) / 5 + 32;
    return (
      <div className="temprature-container">
        <span className="temprature">{Math.round(farenheit)}</span>
        <span>
          <a href="/" onClick={convertToCelsius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}
