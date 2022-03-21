import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props){
  return (
    <div className="WeatherInfo">
     
    <div className="row justify-content-md-center">
      <div className="col-3"> 
        <h3 className="location">
          {props.data.city}
          </h3>
        </div>
      <div className="col-2 text-center">
        <img src={props.data.iconUrl} alt="" className="weather-icon" />
      </div>
      <WeatherTemperature celsius={props.data.temperature} />
      <div className="col-3 text-center">
        <ul>
          <li>Wind:{props.data.wind} km/h</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
    </div>
  </div>
  )
}