import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});
  
  function handleResponse (response){
  console.log(response.data);
  setweatherData({
    temperature:response.data.main.temp,
    wind: 12,
    city:response.data.name,

  })
  setReady(true);
  }

  if (ready){
    return (
      <div className="weather">
      <h1>Weather App</h1>
      <h2 className="current-date">Tuesday, Jan 12, 2022</h2>

      <form className="search" id="city-search">
        <div className="row justify-content-md-center">
          <div className="col-2"></div>
          <div className="col-3 search-bar">
            <input
              type="text"
              placeholder="Search for location"
              id="city-input"
              />
          </div>
          <div className="col-1 search-bar">
            <input
              type="submit"
              className="submit-button button"
              placeholder="Search"
              />
          </div>
          <div className="col-3">
            <button className="button" id="current-city">
              Current City
            </button>
          </div>
        </div>
      </form>
      <h3 className="location">Kingston</h3>

      <div className="weather-today">
        <div className="row justify-content-md-center">
          <div className="col-2 text-center">
            <img src="" alt="" className="weather-icon" />
          </div>
          <div className="col-1 text-center">
            <p className="todays-temp">
              <span className="d-flex align-items-stretch">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="weather-unit" id="weather-unit">
              °C
              </span>
            </p>
          </div>
          <div className="col-2 text-center">
            <p>
              Wind: <span id="wind-speed"> 10</span>
            </p>
            <p>
              Humidity: <span id="humidity"> 5</span>
            </p>
            <p id="weather-description"></p>
          </div>
        </div>
      </div>
    </div>);} else{
      const apiKey = "3b500a0fcd4ea4cff00793465f95a169";
      let city = "London";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      return "Loading...";
    }
  }
  