import React, { useState } from "react";

export default function WeatherTemperature (props){
  const [unit, setUnit] = useState ("celsius");

  function showFahrenheit (event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius (event) {
    event.preventDefault();
    setUnit("celsius");
  }
  
  if (unit === "celsius") {
  return (
    <div className="col-2 text-center">     
      <p className="todays-temp">
        <span className="d-flex align-items-stretch">
          {Math.round(props.celsius)}
        </span>
        <span className="d-flex weather-unit">
        <span className="current-unit">°C </span>| <a href="/" onClick={showFahrenheit}>°F</a>
        </span>
    </p>
      </div>)
  } else {
    let fahrenheit = Math.round((props.celsius * 9/5) + 32);
return(
    <div className="col-2 text-center">     
      <p className="todays-temp">
        <span className="d-flex align-items-stretch">
          {fahrenheit}
        </span>
        <span className="d-flex weather-unit">
        <a href="/" onClick={showCelsius}> °C </a> | <span className="current-unit">°F</span>
        </span>
    </p>
      </div>)
  }

}