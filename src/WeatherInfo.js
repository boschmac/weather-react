import React from "react";

export default function WeatherInfo (props){
  return (
    <div className="WeatherInfo">
    <div className="row justify-content-md-center">
      <div className="col-2 text-center">
        <img src={props.data.iconUrl} alt="" className="weather-icon" />
      </div>
      <div className="col-1 text-center">
        <p className="todays-temp">
          <span className="d-flex align-items-stretch">
            {Math.round(props.data.temperature)}
          </span>
          <span className="d-flex weather-unit">
          °C
          </span>
        </p>
      </div>
      <div className="col-3 text-center">
        <ul>
          <li>Wind:{props.data.wind}</li>
          <li>Humidity: {props.data.humidity}</li>
          <li>{props.data.description}</li>
        </ul>
      </div>
    </div>
  </div>
  )
}