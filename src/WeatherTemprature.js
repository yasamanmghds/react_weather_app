import React, { useState } from "react";
import "./weather.css";
export default function WeatherTemprature({ cel }) {
  return (
    <div className="temprature-container">
      <span className="temprature">{Math.round(cel)}</span>
      <span>℃</span>
    </div>
  );
}
