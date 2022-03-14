import React from "react";
import "./App.css";

export default function WeeklyTemp() {
  return (
    <div>
      <div className="card-group" id="weekly-weather"></div>
<div className="card text-center mb-3">
  <div className="container">
    <div className="row ">
      <div className="col-1"></div>
      <div className="col-2">
        <div className="card-body">
        <h5>Mon</h5>
        <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
        <p class="card-text">12°C</p>
				<p class="card-text">-5°C</p>
        </div>
      </div>
      <div className="col-2">
        <div className="card-body">
        <h5>Tues</h5>
        <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
        <p class="card-text">12°C</p>
				<p class="card-text">-5°C</p>
        </div>
      </div>
      <div className="col-2">
        <div className="card-body">
        <h5>Wed</h5>
        <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
        <p class="card-text">12°C</p>
				<p class="card-text">-5°C</p>
        </div>
      </div>
      <div className="col-2">
        <div className="card-body">
        <h5>Thur</h5>
        <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
        <p class="card-text">12°C</p>
				<p class="card-text">-5°C</p>
        </div>
      </div>
      <div className="col-2">
        <div className="card-body">
        <h5>Fri</h5>
        <p className="card-text weather-emoji"> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" /> </p>
        <p class="card-text">12°C</p>
				<p class="card-text">-5°C</p>
        </div>
      </div>
      
    </div>
  </div>
  </div>
      <span>
        <a
          href="https://github.com/boschmac/SheCodes-WeatherApp"
          target="_blank"
        >
          Open source code
        </a>
        <p className="credit"> by Corinne Long</p>
      </span>
    </div>
  );
}
