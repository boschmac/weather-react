import React, { useState } from "react";

export default function WeatherTemperature (props){

return(
    <div className="col-2 text-center">     
      <p className="todays-temp">
        <span className="d-flex align-items-stretch">
          {Math.round(props.celsius)}
        </span>
        <span className="d-flex weather-unit">
        °C </span>
        
    </p>
      </div>)
 

}