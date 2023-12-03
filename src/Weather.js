import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import GetDate from "./Getdate";
import CustomIcon from "./CustomIcon";
import WeatherTemprature from "./WeatherTemprature";

export default function Weather({ data }) {
  return (
    <div className="mt-3">
      <div className="col-sm-12">
        <h2 className="text-capitalize">{data.city}</h2>
        <h2>
          <GetDate date={data.date} />
        </h2>
        <h3 className="text-capitalize">{data.description}</h3>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="row align-items-start mt-3">
            <div className="col-sm-3 mt-3">
              <CustomIcon code={data.icon} size={52} />
            </div>
            <div className="col-sm-5">
              <WeatherTemprature cel={data.temprature} />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity: {data.humidity}%</li>
            <li>Wind speed: {data.windSpeed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
