import React from "react";
import "./App.css";

export default function WeeklyTemp() {
  return (
    <div className="weekly-temp">
      <div className="card text-center mb-3">
        <div className="row ">
          <div className="col-2">
            <div className="card-body">
              <h5>Mon</h5>
              <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
              <p className="card-text">12°C</p>
              <p className="card-text">-5°C</p>
            </div>
          </div>
          <div className="col-2">
            <div className="card-body">
              <h5>Tues</h5>
              <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
              <p className="card-text">12°C</p>
              <p className="card-text">-5°C</p>
            </div>
          </div>
          <div className="col-2">
            <div className="card-body">
              <h5>Wed</h5>
              <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
              <p className="card-text">12°C</p>
              <p className="card-text">-5°C</p>
            </div>
          </div>
          <div className="col-2">
            <div className="card-body">
              <h5>Thur</h5>
              <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
              <p className="card-text">12°C</p>
              <p className="card-text">-5°C</p>
            </div>
          </div>
          <div className="col-2">
            <div className="card-body">
              <h5>Fri</h5>
              <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
              <p className="card-text">12°C</p>
              <p className="card-text">-5°C</p>
            </div>
          </div>
        </div>
      </div>
      <span>
        <a
          href="https://github.com/boschmac/weather-react"
          target="_blank" rel="noreferrer"
        >
          Open source code
        </a>
        <p className="credit"> by Corinne Long</p>
      </span>
    </div>
  
  );
}
