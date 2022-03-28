import React, { useState, useEffect } from "react";
import WeatherDay from "./WeatherDay";
import axios from "axios";
import "./App.css";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState (false);
let [forecast, setForecast] = useState (null);



  function handleResponse (response) {
    setForecast (response.data.daily);
    setLoaded(true);
  }

  useEffect (() => {
    setLoaded(false);
  }, [props.coordinates]); 
      
  
  if(loaded){
    return (
      <div className="WeatherForecast">
        <div className="card text-center mb-3">
          <div className="row justify-content-md-center">
            {forecast.map(function (dailyForecast, index){
              if (index < 5){
            return (
            <div className="col-2" key = {index}>
              <WeatherDay data={dailyForecast} />
            </div>

            );}

            })}
          </div>
        </div>
      </div>
  
  );
} else {
    let apiKey = "3b500a0fcd4ea4cff00793465f95a169";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return null;
  }
}
