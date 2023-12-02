import React from "react";

export default function DateandTime({ date }) {
  let newDate = new Date(date * 1000);
  console.log(newDate);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  let currentDay = days[newDate.getDay()];
  let currentHour = newDate.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = newDate.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  return (
    <div>
      <h4>
        {currentDay} {currentHour}:{currentMinutes}
      </h4>
    </div>
  );
}
