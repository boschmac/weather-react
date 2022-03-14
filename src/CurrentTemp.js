import React from "react";
import "./App.css";

export default function CurrentTemp() {
  let city = "Kingston";
  let temperature = "29°C";
  let wind = 12;
  let humidity = "40%";

  return (
    <div>
      <h3 className="location">{city}</h3>

      <div className="weather-today">
        <div className="row justify-content-md-center">
          <div className="col-2 text-center">
            <img src="" alt="" id="weather-icon" />
          </div>
          <div className="col-1 text-center">
            <p className="todays-temp">
              <span className="d-flex align-items-stretch" id="weather-today">
                {temperature}
              </span>
              <span className="weather-unit" id="weather-unit">
                {" "}
              </span>
            </p>
          </div>
          <div className="col-2 text-center">
            <p>
              Wind: <span id="wind-speed"> {wind}</span>
            </p>
            <p>
              Humidity: <span id="humidity"> {humidity}</span>
            </p>
            <p id="weather-description"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
