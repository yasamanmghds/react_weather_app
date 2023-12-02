import React, { useState } from "react";
import axios from "axios";
import DateandTime from "./dateAndTime";
export default function Weather() {
  const [report, setReport] = useState({ ready: false });
  let city = "Rome";
  function handldeResponse(response) {
    setReport({
      ready: true,
      temprature: Math.round(response.data.main.temp),
      date: response.data.dt,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (report.ready) {
    return (
      <div>
        <h2>{city}</h2>
        <h3>
          Date: <DateandTime date={report.date} />
        </h3>
        <h4>{report.description}</h4>
        <h4>
          <span>
            <img src={report.icon} />
          </span>
          <span>{report.temprature}</span>
        </h4>
        <div>
          <h4>{report.humidity}</h4>
          <h4>{report.windSpeed} km/h</h4>
        </div>
      </div>
    );
  } else {
    const apiKey = "6643c7326a4c2a38838264a28531d97e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handldeResponse);
    return "Loading...";
  }
}
