import React from "react";
import CustomIcon from "./CustomIcon";
import "./weather.css";

export default function WeatherForecastDay({ data }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let date = new Date(data.dt * 1000);
  console.log(date);
  let currentDay = days[date.getDay()];
  return (
    <div className="col">
      <div>
        <p>{currentDay}</p>
      </div>
      <CustomIcon code={data.weather[0].icon} size={42} />
      <div>
        <span>{Math.round(data.temp.max)}°</span>
        <span>{Math.round(data.temp.min)}°</span>
      </div>
    </div>
  );
}
