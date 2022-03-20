import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";


export default function Weather(props) {
  const [city, setCity] = useState (props.defaultCity)
  const [weatherData, setweatherData] = useState({ready:false});
  
  function handleResponse (response){
    console.log(response.data);
    setweatherData({
      ready:true,
      temperature:response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity:response.data.main.humidity,
      description:response.data.weather[0].description,
      iconUrl:"http://openweathermap.org/img/wn/10d@2x.png",
      city: response.data.name
  })

  }

  function search() {
    const apiKey = "3b500a0fcd4ea4cff00793465f95a169";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

  }
  function handleSubmit(event){
    event.preventDefault();
  }

  function handleCityChange(event){
  setCity(event.target.value);
search(city);
  }

  if (weatherData.ready){
    return (
      <div className="weather">
      <h1>Weather App</h1>
      <h2 className="current-date"><FormattedDate date={weatherData.date} /></h2>

      <form onSubmit={handleSubmit} className="search">
        <div className="row justify-content-md-center">
     
          <div className="col-3 search-bar">
            <input
              type="search"
              placeholder="Search for location"
              className="form-control"
              onChange={handleCityChange}
              />
          </div>
          <div className="col-1">
            <input
              type="submit"
              className="submit-button button"
              placeholder="Search"
              
              />
          </div>
        </div>
      </form>
      <h3 className="location">{city}</h3>
      <WeatherInfo data={weatherData}/>
      
    </div>);} else{
      search();
      return "Loading...";
    }
  }
  